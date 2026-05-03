## Photo Upload Workflow

Use this workflow for all future photo uploads. It avoids browser sign-in and lets any agent upload directly with the local ignored credentials file.

### One-time local setup

Create `.env.local` in the repo root with:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://mfqjhbucsxcewpsrykcg.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
NEXT_PUBLIC_SUPABASE_PHOTOS_BUCKET=photos
```

`.env.local` is already gitignored, so agents can read it locally but should never commit it.

### Upload command

Create a manifest JSON file, then run:

```bash
node scripts/upload-photos.mjs path/to/manifest.json
```

The script will:
- upload each file to Supabase Storage with `upsert: true`
- update an existing `public.photos` row when `image_path` already exists
- insert a new row when it does not exist
- auto-assign `sortOrder` values if omitted

### Manifest format

```json
{
  "bucket": "photos",
  "defaultEvent": "PhilaMOCA",
  "defaultCaption": "Human Wannabes live photo",
  "items": [
    {
      "file": "/absolute/path/to/example.png",
      "path": "imported/example.png",
      "credits": "Jimmy Yang",
      "width": 1024,
      "height": 682,
      "sortOrder": 505
    }
  ]
}
```

### Notes for agents

- Prefer this script before asking the user for keys or browser login.
- Read `.env.local` only if needed for this workflow; never print the secret back to the user.
- The current photo metadata table is `public.photos`.
- The current storage convention is bucket `photos`, folder `imported/`.
- Default caption should stay `Human Wannabes live photo` unless the user says otherwise.
- Prefer absolute local file paths in manifests so the command works from any directory.
