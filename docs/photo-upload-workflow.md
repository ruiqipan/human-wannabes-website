## Photo Upload Workflow

Use this workflow for all future photo uploads. It avoids browser sign-in and lets any agent upload directly with the local ignored credentials file.

### Storage and repository policy

Photos, background photographs, and event posters must stay out of Git. Upload image bytes to the Supabase `photos` bucket and keep metadata in `public.photos` (photos) or `public.event_posters` (posters). Only static icons, logos, and QR codes belong in the repository; `public/photos/` permits only the existing static assets listed in `.gitignore`.

Upload directly from an absolute source path outside the repository. Before removing existing local media, verify its database row and compare its downloaded Storage bytes with the local file (SHA-256). Upload missing files using the appropriate upload script, verify the public URL, and replace any local application references before deletion. Preserve metadata and publication status; use `published: false` when archiving unused photos or backgrounds without adding them to the gallery.

For posters, use `scripts/upload-event-posters.mjs` and always set the returned public URL in `data/events.ts`. Give replacement posters a new revision path to avoid stale cached images. See `AGENTS.md` for the complete poster workflow. Never bulk-import the whole bucket into the gallery: it also contains posters and unpublished backgrounds.

### What to keep and what to discard

- Keep `scripts/upload-photos.mjs` and `scripts/upload-event-posters.mjs` in Git: these reusable maintenance tools handle future uploads. The website does not run them or read manifests at runtime.
- Keep `docs/photo-upload-manifest.example.json` as a generic template.
- Treat actual upload manifests as temporary inputs. Create them in the OS temporary directory or ignored `.media-uploads/` directory, with absolute image paths. Never commit real manifests, source images, or machine-specific upload artifacts.
- After verifying the uploaded bytes, database metadata, public URL, and any required event URL change, delete temporary manifests and verification downloads. Keep a failed manifest for retry. Removing a manifest does not affect uploaded media; keep the user's original source images unless deletion was requested.

### One-time local setup

Create `.env.local` in the repo root with:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://mfqjhbucsxcewpsrykcg.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
NEXT_PUBLIC_SUPABASE_PHOTOS_BUCKET=photos
```

`.env.local` is already gitignored, so agents can read it locally but should never commit it.

### Upload command

From the repository root, create a temporary manifest from the example and edit it with the intended files and metadata:

```bash
mkdir -p .media-uploads
cp docs/photo-upload-manifest.example.json .media-uploads/photos.json
```

Then run from the repository root so `.env.local` can be loaded:

```bash
node scripts/upload-photos.mjs .media-uploads/photos.json
```

After verification succeeds, remove `.media-uploads/photos.json`. For posters, create a separate temporary manifest using the format in `AGENTS.md` and run `node scripts/upload-event-posters.mjs .media-uploads/posters.json`; update `posterUrl` before discarding that manifest.

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
