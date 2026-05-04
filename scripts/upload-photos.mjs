#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { createClient } from "@supabase/supabase-js";

const DEFAULT_BUCKET = "photos";
const DEFAULT_CAPTION = "Human Wannabes live photo";

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;

  const contents = fs.readFileSync(filePath, "utf8");

  for (const rawLine of contents.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;

    const separatorIndex = line.indexOf("=");
    if (separatorIndex === -1) continue;

    const key = line.slice(0, separatorIndex).trim();
    let value = line.slice(separatorIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (!(key in process.env)) {
      process.env[key] = value;
    }
  }
}

function resolveManifestPath(inputPath) {
  const absolutePath = path.resolve(process.cwd(), inputPath);

  if (!fs.existsSync(absolutePath)) {
    throw new Error(`Manifest not found: ${absolutePath}`);
  }

  return absolutePath;
}

function normalizeManifest(manifest) {
  if (!manifest || typeof manifest !== "object" || !Array.isArray(manifest.items)) {
    throw new Error("Manifest must be an object with an `items` array.");
  }

  return {
    bucket: manifest.bucket ?? DEFAULT_BUCKET,
    defaultCaption: manifest.defaultCaption ?? DEFAULT_CAPTION,
    defaultEvent: manifest.defaultEvent ?? null,
    items: manifest.items,
  };
}

function requireString(value, fieldName, index) {
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`Item ${index}: missing required string field \`${fieldName}\`.`);
  }

  return value;
}

function requireNumber(value, fieldName, index) {
  if (typeof value !== "number" || Number.isNaN(value)) {
    throw new Error(`Item ${index}: missing required numeric field \`${fieldName}\`.`);
  }

  return value;
}

function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();

  if (ext === ".jpg" || ext === ".jpeg") return "image/jpeg";
  if (ext === ".webp") return "image/webp";
  if (ext === ".gif") return "image/gif";
  if (ext === ".png") return "image/png";

  return "application/octet-stream";
}

async function main() {
  const manifestArg = process.argv[2];

  if (!manifestArg) {
    console.error("Usage: node scripts/upload-photos.mjs <manifest.json>");
    process.exit(1);
  }

  loadEnvFile(path.resolve(process.cwd(), ".env.local"));
  loadEnvFile(path.resolve(process.cwd(), ".env"));

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local/.env.");
    process.exit(1);
  }

  const manifestPath = resolveManifestPath(manifestArg);
  const manifest = normalizeManifest(JSON.parse(fs.readFileSync(manifestPath, "utf8")));

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const items = manifest.items.map((item, index) => ({
    index,
    file: path.resolve(path.dirname(manifestPath), requireString(item.file, "file", index)),
    path: requireString(item.path, "path", index),
    event: item.event ?? manifest.defaultEvent,
    caption: item.caption ?? manifest.defaultCaption,
    credits: item.credits ?? null,
    width: requireNumber(item.width, "width", index),
    height: requireNumber(item.height, "height", index),
    sortOrder: typeof item.sortOrder === "number" ? item.sortOrder : null,
    published: item.published ?? true,
  }));

  const missingSortCount = items.filter((item) => item.sortOrder === null).length;

  if (missingSortCount > 0) {
    const { data, error } = await supabase
      .from("photos")
      .select("sort_order")
      .order("sort_order", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (error) {
      throw error;
    }

    let nextSortOrder = (data?.sort_order ?? 499) + 1;

    for (const item of items) {
      if (item.sortOrder === null) {
        item.sortOrder = nextSortOrder;
        nextSortOrder += 1;
      }
    }
  }

  const results = [];

  for (const item of items) {
    if (!fs.existsSync(item.file)) {
      throw new Error(`Item ${item.index}: file not found: ${item.file}`);
    }

    const buffer = fs.readFileSync(item.file);
    const { error: uploadError } = await supabase.storage
      .from(manifest.bucket)
      .upload(item.path, buffer, {
        contentType: getContentType(item.file),
        upsert: true,
      });

    if (uploadError) {
      throw uploadError;
    }

    const payload = {
      image_path: item.path,
      caption: item.caption,
      event_name: item.event,
      credits: item.credits,
      width: item.width,
      height: item.height,
      is_published: item.published,
      sort_order: item.sortOrder,
    };

    const { data: existingRows, error: existingError } = await supabase
      .from("photos")
      .select("id")
      .eq("image_path", item.path);

    if (existingError) {
      throw existingError;
    }

    if (existingRows.length > 0) {
      const { error: updateError } = await supabase
        .from("photos")
        .update(payload)
        .eq("image_path", item.path);

      if (updateError) {
        throw updateError;
      }
    } else {
      const { error: insertError } = await supabase.from("photos").insert(payload);

      if (insertError) {
        throw insertError;
      }
    }

    const { data: publicUrlData } = supabase.storage.from(manifest.bucket).getPublicUrl(item.path);

    results.push({
      path: item.path,
      credits: item.credits,
      event: item.event,
      sortOrder: item.sortOrder,
      publicUrl: publicUrlData.publicUrl,
    });
  }

  console.log(JSON.stringify({ bucket: manifest.bucket, uploaded: results }, null, 2));
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
