create table if not exists public.plushymen_waitlist (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null,
  would_buy text not null,
  preferred_size text not null,
  price_comfort text not null,
  favorite_character text,
  guardian_email text,
  constraint plushymen_waitlist_email_has_at check (position('@' in email) > 1),
  constraint plushymen_waitlist_guardian_email_has_at check (
    guardian_email is null
    or position('@' in guardian_email) > 1
  ),
  constraint plushymen_waitlist_would_buy_check check (would_buy in ('Yes', 'Maybe')),
  constraint plushymen_waitlist_size_check check (preferred_size in ('12 inch', '15 inch', '20 inch')),
  constraint plushymen_waitlist_price_check check (price_comfort in ('$39', '$49', '$59', '$69'))
);

alter table public.plushymen_waitlist enable row level security;

grant usage on schema public to anon;
grant insert on table public.plushymen_waitlist to anon;

drop policy if exists "allow public waitlist inserts" on public.plushymen_waitlist;

create policy "allow public waitlist inserts"
on public.plushymen_waitlist
for insert
to anon
with check (true);
