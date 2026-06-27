-- ============================================================================
-- House & Flats — Auth schema: profiles + saved_listings
-- Migration 0001
--
-- Run this in the Supabase SQL Editor (paste & Run) OR via the Supabase CLI:
--   supabase db push
--
-- Safe to re-run (idempotent where reasonable).
-- This migration only creates NEW tables/policies in the `public` schema and a
-- trigger on auth.users; it does not alter existing data.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- profiles: one row per auth user, created automatically on sign-up.
-- ----------------------------------------------------------------------------
create table if not exists public.profiles (
  id          uuid primary key references auth.users (id) on delete cascade,
  full_name   text,
  created_at  timestamptz not null default now()
);

alter table public.profiles enable row level security;

-- Policies: a user can only see / edit their own profile row.
drop policy if exists "Profiles are viewable by owner" on public.profiles;
create policy "Profiles are viewable by owner"
  on public.profiles
  for select
  using (auth.uid() = id);

drop policy if exists "Profiles are insertable by owner" on public.profiles;
create policy "Profiles are insertable by owner"
  on public.profiles
  for insert
  with check (auth.uid() = id);

drop policy if exists "Profiles are updatable by owner" on public.profiles;
create policy "Profiles are updatable by owner"
  on public.profiles
  for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- ----------------------------------------------------------------------------
-- handle_new_user(): insert a profile row whenever an auth.users row is created.
-- SECURITY DEFINER so it can write to public.profiles regardless of caller.
-- ----------------------------------------------------------------------------
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, coalesce(new.raw_user_meta_data ->> 'full_name', ''))
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ----------------------------------------------------------------------------
-- saved_listings: listings a user has saved/bookmarked.
-- listing_id is text so it works with any listing identifier from the site.
-- ----------------------------------------------------------------------------
create table if not exists public.saved_listings (
  id          bigint generated always as identity primary key,
  user_id     uuid not null references auth.users (id) on delete cascade,
  listing_id  text not null,
  created_at  timestamptz not null default now(),
  unique (user_id, listing_id)
);

create index if not exists saved_listings_user_id_idx
  on public.saved_listings (user_id);

alter table public.saved_listings enable row level security;

-- Policies: a user can only read / add / remove their OWN saved listings.
drop policy if exists "Saved listings are viewable by owner" on public.saved_listings;
create policy "Saved listings are viewable by owner"
  on public.saved_listings
  for select
  using (auth.uid() = user_id);

drop policy if exists "Saved listings are insertable by owner" on public.saved_listings;
create policy "Saved listings are insertable by owner"
  on public.saved_listings
  for insert
  with check (auth.uid() = user_id);

drop policy if exists "Saved listings are deletable by owner" on public.saved_listings;
create policy "Saved listings are deletable by owner"
  on public.saved_listings
  for delete
  using (auth.uid() = user_id);

-- ============================================================================
-- End of migration 0001
-- ============================================================================
