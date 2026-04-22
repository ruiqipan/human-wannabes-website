-- Run this in Supabase SQL Editor once.
-- Creates a public photos metadata table with optional credits.

create extension if not exists pgcrypto;

create table if not exists public.photos (
  id uuid primary key default gen_random_uuid(),
  image_path text not null,
  caption text,
  event_name text,
  credits text,
  width integer,
  height integer,
  is_published boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

alter table public.photos enable row level security;

-- Public read for published photos.
drop policy if exists "public can read published photos" on public.photos;
create policy "public can read published photos"
  on public.photos
  for select
  to anon, authenticated
  using (is_published = true);

-- Admin-only write access (insert/update/delete).
-- Only the verified admin email can modify photo metadata.
drop policy if exists "admin can insert photos metadata" on public.photos;
create policy "admin can insert photos metadata"
  on public.photos
  for insert
  to authenticated
  with check (auth.email() = 'ruiqipan@seas.upenn.edu');

drop policy if exists "admin can update photos metadata" on public.photos;
create policy "admin can update photos metadata"
  on public.photos
  for update
  to authenticated
  using (auth.email() = 'ruiqipan@seas.upenn.edu')
  with check (auth.email() = 'ruiqipan@seas.upenn.edu');

drop policy if exists "admin can delete photos metadata" on public.photos;
create policy "admin can delete photos metadata"
  on public.photos
  for delete
  to authenticated
  using (auth.email() = 'ruiqipan@seas.upenn.edu');

-- Drop old overly-permissive authenticated policies if they still exist.
drop policy if exists "authenticated can insert photos metadata" on public.photos;
drop policy if exists "authenticated can update photos metadata" on public.photos;
drop policy if exists "authenticated can delete photos metadata" on public.photos;

-- Suggested index for ordering and feed rendering.
create index if not exists photos_published_sort_idx
  on public.photos (is_published, sort_order, created_at desc);

-- Storage bucket: create in Dashboard (name: photos), set Public bucket = true.
-- Then add Storage policies in Dashboard > Storage > Policies:
--   SELECT: allow anon and authenticated (public reads)
--   INSERT/UPDATE/DELETE: restrict to authenticated where auth.email() = 'ruiqipan@seas.upenn.edu'
