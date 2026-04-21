# Event Authoring Rule

Use this rule when adding events from minimal input (date, title, link).

## Input format
- `date`: month/day (or full date)
- `title`: public event title
- `link`: ticket/info URL used by event buttons on the Home page

## Conversion rules
- **Year:** default to the active event season year (currently `2026`) unless user specifies another year.
- **ISO date:** store as `YYYY-MM-DD`.
- **ID:** create stable kebab-case id: `YYYY-<short-title>`.
- **Title:** keep exact event title as provided.
- **Venue:**
  - If title includes `@ <venue>` or `at <venue>`, extract that venue.
  - If no clear venue, set `venue: "TBA"`.
- **City (badge label):**
  - `(Philly)` -> `Philly`
  - `(DMV)` -> `DMV`
  - `(NYC)` or `NY` title hints -> `NYC`
  - Otherwise infer best short label from title/context.
- **Type mapping:**
  - contains `Festival`/`Fest` -> `festival`
  - contains `Concert`/`Headline Show` -> `concert`
  - contains `w/` -> `collab`
  - otherwise -> `showcase`
- **Description:** add one concise English sentence.
- **Link handling:** set `ticketUrl` whenever an event has a public ticket/info page. Home event buttons open this URL directly; if missing, the button falls back to `/events`.

## Output target
- Always update `data/events.ts`.
- Home and Events pages automatically consume this data.

