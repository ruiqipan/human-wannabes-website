<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Event Authoring

Use these rules whenever adding or editing events. The single source of truth is `data/events.ts`. The Home and Events pages consume it automatically.

## Input
- `date`: month/day (or full date)
- `title`: public event title
- `link`: ticket/info URL used by the Home page event button

## Rules
- **Year:** default to the active season year (`2026`) unless the user specifies otherwise.
- **ISO date:** store as `YYYY-MM-DD`.
- **ID:** stable kebab-case — `YYYY-<short-title>`.
- **Title:** keep the exact public event name as provided.
- **Venue:**
  - Extract from `@ <venue>` or `at <venue>` in the title.
  - If no clear venue, set `"TBA"`.
- **City badge:**
  - Philadelphia area → `"Philly"`
  - DC/Maryland/Virginia → `"DMV"`
  - New York area → `"NYC"`
  - Otherwise infer the best short label.
- **Type mapping:**
  - Contains `Festival` / `Fest` → `festival`
  - Contains `Concert` / `Headline Show` → `concert`
  - Contains `w/` (collaboration) → `collab`
  - Informal gathering / open mic → `gathering`
  - Otherwise → `showcase`
- **Description:** one concise English sentence.
- **ticketUrl:** set whenever a public ticket or event info page exists. Home buttons open this URL directly; if absent, they fall back to `/events`.

## Output target
Always edit `data/events.ts`. No other files need changing for event updates.

---

# Photo Upload

Use this workflow for all photo uploads. It bypasses browser sign-in and lets any agent upload directly using local credentials.

## One-time local setup

Add to `.env.local` in the repo root (already gitignored — never commit these):

```
NEXT_PUBLIC_SUPABASE_URL=https://mfqjhbucsxcewpsrykcg.supabase.co
SUPABASE_SERVICE_ROLE_KEY=<service_role_key>
NEXT_PUBLIC_SUPABASE_PHOTOS_BUCKET=photos
```

## Upload command

```bash
node scripts/upload-photos.mjs path/to/manifest.json
```

The script will:
- Upload each file to Supabase Storage with `upsert: true`
- Update the existing `public.photos` row when `image_path` already exists
- Insert a new row when it does not exist
- Auto-assign `sort_order` values if omitted

## Manifest format

```json
{
  "bucket": "photos",
  "defaultEvent": "PhilaMOCA",
  "defaultCaption": "Human Wannabes live photo",
  "items": [
    {
      "file": "/absolute/path/to/photo.png",
      "path": "imported/photo.png",
      "credits": "Jimmy Yang",
      "width": 1024,
      "height": 682,
      "sortOrder": 505
    }
  ]
}
```

## Rules for agents
- Always use this script — do not write browser-based upload code.
- Read `.env.local` for credentials; never print secrets back to the user.
- Storage bucket: `photos`, folder convention: `imported/`.
- Default caption: `"Human Wannabes live photo"` unless the user says otherwise.
- Use absolute local file paths in manifests so the command works from any directory.
- The photos metadata table is `public.photos` in Supabase.
