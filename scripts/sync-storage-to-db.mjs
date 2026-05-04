#!/usr/bin/env node
// Finds photos in Supabase Storage that have no row in public.photos, then inserts them.

import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { createClient } from "@supabase/supabase-js";

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  for (const rawLine of fs.readFileSync(filePath, "utf8").split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const sep = line.indexOf("=");
    if (sep === -1) continue;
    const key = line.slice(0, sep).trim();
    let value = line.slice(sep + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}

async function listAllStorageFiles(supabase, bucket, folder = "") {
  const { data, error } = await supabase.storage.from(bucket).list(folder, { limit: 1000 });
  if (error) throw error;

  const files = [];
  for (const item of data ?? []) {
    const fullPath = folder ? `${folder}/${item.name}` : item.name;
    if (item.metadata == null) {
      // It's a folder — recurse
      const nested = await listAllStorageFiles(supabase, bucket, fullPath);
      files.push(...nested);
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

async function main() {
  loadEnvFile(path.resolve(process.cwd(), ".env.local"));
  loadEnvFile(path.resolve(process.cwd(), ".env"));

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceRoleKey) {
    console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
    process.exit(1);
  }

  const bucket = process.env.NEXT_PUBLIC_SUPABASE_PHOTOS_BUCKET ?? "photos";
  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  // 1. List all storage files
  const storageFiles = await listAllStorageFiles(supabase, bucket);
  console.log(`Storage files found: ${storageFiles.length}`);

  // 2. Fetch all image_paths already in DB
  const { data: dbRows, error: dbError } = await supabase.from("photos").select("image_path");
  if (dbError) throw dbError;
  const dbPaths = new Set((dbRows ?? []).map((r) => r.image_path));
  console.log(`DB rows found: ${dbPaths.size}`);

  // 3. Find storage files not in DB
  const missing = storageFiles.filter((p) => !dbPaths.has(p));
  console.log(`Storage files missing from DB: ${missing.length}`);

  if (missing.length === 0) {
    console.log("Nothing to insert.");
    return;
  }

  // 4. Determine next sort_order
  const { data: maxRow } = await supabase
    .from("photos")
    .select("sort_order")
    .order("sort_order", { ascending: false })
    .limit(1)
    .maybeSingle();
  let nextSort = (maxRow?.sort_order ?? 499) + 1;

  // 5. Insert a row for each missing file
  for (const filePath of missing) {
    const payload = {
      image_path: filePath,
      caption: "Human Wannabes live photo",
      event_name: null,
      credits: null,
      width: 1200,
      height: 1200,
      is_published: true,
      sort_order: nextSort++,
    };

    const { error: insertError } = await supabase.from("photos").insert(payload);
    if (insertError) throw insertError;

    const { data: urlData } = supabase.storage.from(bucket).getPublicUrl(filePath);
    console.log(`Inserted: ${filePath}  →  ${urlData.publicUrl}`);
  }

  console.log(`\nDone. Inserted ${missing.length} row(s).`);
}

main().catch((e) => {
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
});
