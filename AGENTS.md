<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->


# Events

Edit `data/events.ts`, the single source for Home and Events. Ordinary event updates need no UI changes.

Given a date, public title, and ticket/info link:

- Default to season year **2026** unless specified; store dates as `YYYY-MM-DD`.
- Use a stable `YYYY-<short-title>` ID; preserve existing IDs and exact public titles.
- Extract the venue from `@ <venue>` or `at <venue>`; otherwise use `"TBA"`.
- City badges: Philadelphia area → `"Philly"`; DC/Maryland/Virginia → `"DMV"`; New York area → `"NYC"`; otherwise infer a short label.
- Type: `Festival`/`Fest` → `festival`; `Concert`/`Headline Show` → `concert`; `w/` → `collab`; informal gathering/open mic → `gathering`; otherwise `showcase`.
- Write one concise English description sentence.
- Set `ticketUrl` whenever a public ticket/info page exists. Home buttons open it directly, falling back to `/events`.

# Media storage

Store photo/poster bytes in Supabase Storage, bucket `photos`, with metadata in the corresponding table:

| Media | Storage path | Metadata |
| --- | --- | --- |
| Photos/backgrounds | `imported/<filename>` | `public.photos` |
| Event posters | `posters/<event-slug>.<ext>` | `public.event_posters`, keyed by `event_id` |

- Never commit photos, background photographs, or posters anywhere in the repository. Upload from source paths outside the repo. Static icons, logos, and QR codes may stay in Git; `public/photos/` permits only the six static assets allowed by `.gitignore`. Do not add media exceptions.
- Before deleting repository media, verify both metadata and Storage bytes against the local file using SHA-256, plus a working public URL. Upload missing media first and replace local application references with Supabase URLs. Background URLs belong in the existing band configuration.
- Preserve existing metadata and gallery visibility. Use `published: false` when archiving unused/background photos. Never bulk-import the whole bucket into the gallery: it also contains posters and unpublished backgrounds.
- Review `git diff --stat`, `git status --short`, and tracked image paths before committing. Ignore rules do not remove tracked files; delete those from the working tree. Do not rewrite Git history unless requested.

# Upload workflow

Keep the reusable `scripts/upload-photos.mjs` and `scripts/upload-event-posters.mjs` tools in Git. Always use them for uploads, without browser sign-in or inline upload code. The website does not run these tools or read their manifests at runtime.

Run from the repository root. Read credentials from ignored `.env.local`; never print or commit secrets:

```dotenv
NEXT_PUBLIC_SUPABASE_URL=https://mfqjhbucsxcewpsrykcg.supabase.co
SUPABASE_SERVICE_ROLE_KEY=<service_role_key>
NEXT_PUBLIC_SUPABASE_PHOTOS_BUCKET=photos
```

Create disposable manifests in the OS temporary directory or ignored `.media-uploads/`, using absolute image paths. Never commit actual manifests or machine-specific source paths. After verifying Storage bytes, metadata, public URLs, and required event changes, delete temporary manifests and verification downloads; keep failed manifests for retry. Preserve the user's source images unless deletion is requested.

## Photos

Copy `docs/photo-upload-manifest.example.json` to a temporary manifest and fill in file paths and metadata. Keep the generic example in Git. See [photo upload documentation](docs/photo-upload-workflow.md) for the full format.

```bash
node scripts/upload-photos.mjs .media-uploads/photos.json
```

The tool uploads with overwrite enabled, updates metadata by `image_path` or inserts a new row, and assigns `sortOrder` if omitted. Default caption: `"Human Wannabes live photo"` unless requested otherwise.

## Event posters

Get dimensions with `sips -g pixelWidth -g pixelHeight <file>` on macOS. Create a temporary manifest:

```json
{
  "bucket": "photos",
  "storageFolder": "posters",
  "items": [{
    "eventId": "2026-girls-band-night-25hr-studio",
    "file": "/absolute/path/to/poster.png",
    "path": "posters/girls-band-night.png",
    "width": 1536,
    "height": 1920
  }]
}
```

```bash
node scripts/upload-event-posters.mjs .media-uploads/posters.json
```

- `eventId` must exactly match `data/events.ts`. If the table is missing, run `supabase/event-posters-schema.sql` in Supabase SQL Editor first.
- The tool uploads with overwrite enabled, upserts metadata by `event_id`, and returns a public URL. **Always set the matching event's `posterUrl` in `data/events.ts` to that URL**; the database row alone does not update Home or Events.
- For replacements, use a new path such as `posters/<event-slug>-<revision-date>.png` in the manifest and event URL to avoid stale caches. Preserve the event ID.
