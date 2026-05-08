#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { createClient } from "@supabase/supabase-js";

const DEFAULT_BUCKET = "photos";
const DEFAULT_FOLDER = "posters";

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
    console.error("Usage: node scripts/upload-event-posters.mjs <manifest.json>");
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

  const manifestPath = path.resolve(process.cwd(), manifestArg);
  if (!fs.existsSync(manifestPath)) {
    console.error(`Manifest not found: ${manifestPath}`);
    process.exit(1);
  }

  const raw = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

  if (!Array.isArray(raw.items)) {
    console.error("Manifest must have an `items` array.");
    process.exit(1);
  }

  const bucket = raw.bucket ?? DEFAULT_BUCKET;
  const folder = raw.storageFolder ?? DEFAULT_FOLDER;

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const results = [];

  for (const [index, item] of raw.items.entries()) {
    if (!item.eventId) throw new Error(`Item ${index}: missing required field \`eventId\`.`);
    if (!item.file) throw new Error(`Item ${index}: missing required field \`file\`.`);
    if (!item.path) throw new Error(`Item ${index}: missing required field \`path\`.`);

    const absoluteFile = path.resolve(path.dirname(manifestPath), item.file);

    if (!fs.existsSync(absoluteFile)) {
      throw new Error(`Item ${index}: file not found: ${absoluteFile}`);
    }

    const storagePath = item.path.startsWith(folder + "/") ? item.path : `${folder}/${item.path}`;

    const buffer = fs.readFileSync(absoluteFile);
    const { error: uploadError } = await supabase.storage
      .from(bucket)
      .upload(storagePath, buffer, {
        contentType: getContentType(absoluteFile),
        upsert: true,
      });

    if (uploadError) throw uploadError;

    const payload = {
      event_id: item.eventId,
      image_path: storagePath,
      width: item.width ?? null,
      height: item.height ?? null,
    };

    const { data: existing, error: selectError } = await supabase
      .from("event_posters")
      .select("id")
      .eq("event_id", item.eventId)
      .maybeSingle();

    if (selectError) throw selectError;

    if (existing) {
      const { error: updateError } = await supabase
        .from("event_posters")
        .update(payload)
        .eq("event_id", item.eventId);
      if (updateError) throw updateError;
    } else {
      const { error: insertError } = await supabase.from("event_posters").insert(payload);
      if (insertError) throw insertError;
    }

    const { data: publicUrlData } = supabase.storage.from(bucket).getPublicUrl(storagePath);

    results.push({
      eventId: item.eventId,
      path: storagePath,
      publicUrl: publicUrlData.publicUrl,
    });

    console.error(`✓ ${item.eventId}`);
  }

  console.log(JSON.stringify({ bucket, uploaded: results }, null, 2));
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
