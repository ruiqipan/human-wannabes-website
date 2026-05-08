-- Run this in Supabase SQL Editor once.
-- Creates an event_posters table linking event IDs to poster images in Storage.

create extension if not exists pgcrypto;

create table if not exists public.event_posters (
  id uuid primary key default gen_random_uuid(),
  event_id text unique not null,
  image_path text not null,
  width integer,
  height integer,
  created_at timestamptz not null default now()
);

alter table public.event_posters enable row level security;

-- Public read access.
drop policy if exists "public can read event posters" on public.event_posters;
create policy "public can read event posters"
  on public.event_posters
  for select
  to anon, authenticated
  using (true);

-- Admin-only write access.
drop policy if exists "admin can insert event posters" on public.event_posters;
create policy "admin can insert event posters"
  on public.event_posters
  for insert
  to authenticated
  with check (auth.email() = 'ruiqipan@seas.upenn.edu');

drop policy if exists "admin can update event posters" on public.event_posters;
create policy "admin can update event posters"
  on public.event_posters
  for update
  to authenticated
  using (auth.email() = 'ruiqipan@seas.upenn.edu')
  with check (auth.email() = 'ruiqipan@seas.upenn.edu');

drop policy if exists "admin can delete event posters" on public.event_posters;
create policy "admin can delete event posters"
  on public.event_posters
  for delete
  to authenticated
  using (auth.email() = 'ruiqipan@seas.upenn.edu');

-- Storage: use the existing "photos" bucket, subfolder "posters/".
-- No additional bucket configuration needed.
