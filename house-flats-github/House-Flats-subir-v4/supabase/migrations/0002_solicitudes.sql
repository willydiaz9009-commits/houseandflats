-- ============================================================================
-- House & Flats — Solicitudes (client form submissions)
-- Migration 0002
--
-- Run this in the Supabase SQL Editor (paste & Run) OR via the Supabase CLI:
--   supabase db push
--
-- Safe to re-run (idempotent): tables use "create if not exists", policies are
-- dropped before being recreated. Only adds a NEW table in `public`.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- solicitudes: each row is one form submission ("solicitud") tied to a user.
-- The discrete columns mirror the lead form fields; `payload` keeps the full
-- raw submission for future reference.
-- ----------------------------------------------------------------------------
create table if not exists public.solicitudes (
  id           bigint generated always as identity primary key,
  user_id      uuid not null references auth.users (id) on delete cascade,
  destino      text,
  ciudad       text,
  fechas       text,
  presupuesto  text,
  perfil       text,
  tipo         text,
  moneda       text,
  mensaje      text,
  payload      jsonb,
  created_at   timestamptz not null default now()
);

create index if not exists solicitudes_user_id_idx
  on public.solicitudes (user_id);

alter table public.solicitudes enable row level security;

-- Policies: a user can only read / add / remove their OWN solicitudes.
drop policy if exists "Solicitudes are viewable by owner" on public.solicitudes;
create policy "Solicitudes are viewable by owner"
  on public.solicitudes
  for select
  using (auth.uid() = user_id);

drop policy if exists "Solicitudes are insertable by owner" on public.solicitudes;
create policy "Solicitudes are insertable by owner"
  on public.solicitudes
  for insert
  with check (auth.uid() = user_id);

drop policy if exists "Solicitudes are deletable by owner" on public.solicitudes;
create policy "Solicitudes are deletable by owner"
  on public.solicitudes
  for delete
  using (auth.uid() = user_id);

-- ============================================================================
-- End of migration 0002
-- ============================================================================
