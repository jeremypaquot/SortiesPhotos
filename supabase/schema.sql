-- À exécuter une fois dans Supabase > SQL Editor.
create extension if not exists pgcrypto;
create table if not exists public.outings (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  date date not null,
  data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists outings_date_idx on public.outings(date);
alter table public.outings enable row level security;
drop policy if exists "Accès public aux sorties" on public.outings;
create policy "Accès public aux sorties" on public.outings for all to anon, authenticated using (true) with check (true);
grant select, insert, update, delete on public.outings to anon, authenticated;

-- Deux exemples, supprimables depuis le tableau de bord.
insert into public.outings(id,title,date,data) values
('d5f0bb72-3e92-4f23-b46c-c6d77e85f001','Chevreuils à l’aube','2026-09-12','{"id":"d5f0bb72-3e92-4f23-b46c-c6d77e85f001","title":"Chevreuils à l’aube","date":"2026-09-12","place":"Forêt de Fontainebleau","notes":"Arriver sans bruit par le chemin nord.","animals":"Chevreuil, pic noir","habitat":"Forêt","weather":"Éclaircies","temperature":"12","wind":"Nord-Est","sunrise":"07:18","sunset":"20:08","hideType":"Affût mobile","status":"Prête","zone":{"lat":48.4047,"lng":2.7016,"radius":700},"points":[],"timeline":[],"gear":[]}'::jsonb),
('d5f0bb72-3e92-4f23-b46c-c6d77e85f002','Oiseaux des marais','2026-10-04','{"id":"d5f0bb72-3e92-4f23-b46c-c6d77e85f002","title":"Oiseaux des marais","date":"2026-10-04","place":"Baie de Somme","notes":"","animals":"Avocette, spatule blanche","habitat":"Marais","weather":"","temperature":"","wind":"","sunrise":"","sunset":"","hideType":"Affût fixe","status":"À préparer","zone":{"lat":50.214,"lng":1.55,"radius":900},"points":[],"timeline":[],"gear":[]}'::jsonb)
on conflict (id) do nothing;

