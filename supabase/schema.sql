create extension if not exists pgcrypto;

create type public.user_role as enum ('admin', 'student', 'volunteer');
create type public.payment_status as enum ('pending', 'successful', 'failed', 'refunded');

create table public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  full_name text,
  role public.user_role not null default 'student',
  country text,
  phone text,
  created_at timestamptz not null default now()
);

create table public.programs (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  category text not null,
  description text not null,
  duration text,
  instructor text,
  image_url text,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table public.cohorts (
  id uuid primary key default gen_random_uuid(),
  program_id uuid references public.programs(id) on delete set null,
  slug text not null unique,
  title text not null,
  start_date date not null,
  end_date date,
  seat_capacity integer not null default 0,
  available_seats integer not null default 0,
  price_label text not null default 'Free',
  skill_level text,
  delivery_format text,
  created_at timestamptz not null default now()
);

create table public.registrations (
  id uuid primary key default gen_random_uuid(),
  cohort_id uuid references public.cohorts(id) on delete cascade,
  user_id uuid references public.users(id) on delete set null,
  full_name text not null,
  email text not null,
  phone text,
  gender text,
  country text,
  skill_level text,
  course_selection text,
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

create table public.payments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.users(id) on delete set null,
  provider text not null,
  provider_reference text unique,
  amount_kobo integer not null,
  currency text not null default 'NGN',
  status public.payment_status not null default 'pending',
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table public.events (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  description text not null,
  event_date timestamptz not null,
  location text,
  event_type text,
  status text not null default 'upcoming',
  created_at timestamptz not null default now()
);

create table public.volunteers (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.users(id) on delete set null,
  name text not null,
  email text not null,
  skills text,
  availability text,
  area_of_interest text,
  experience text,
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

create table public.partners (
  id uuid primary key default gen_random_uuid(),
  organization text not null,
  contact_name text,
  email text,
  partnership_type text,
  message text,
  logo_url text,
  is_public boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.donations (
  id uuid primary key default gen_random_uuid(),
  payment_id uuid references public.payments(id) on delete set null,
  donor_name text,
  donor_email text,
  amount_kobo integer not null,
  cadence text not null default 'one_time',
  purpose text not null default 'general',
  created_at timestamptz not null default now()
);

create table public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text,
  content text,
  category text,
  author_id uuid references public.users(id) on delete set null,
  published_at timestamptz,
  status text not null default 'draft',
  created_at timestamptz not null default now()
);

create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text,
  message text not null,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create table public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text,
  subscribed_at timestamptz not null default now()
);

alter table public.users enable row level security;
alter table public.programs enable row level security;
alter table public.cohorts enable row level security;
alter table public.registrations enable row level security;
alter table public.payments enable row level security;
alter table public.events enable row level security;
alter table public.volunteers enable row level security;
alter table public.partners enable row level security;
alter table public.donations enable row level security;
alter table public.blog_posts enable row level security;
alter table public.contact_messages enable row level security;
alter table public.newsletter_subscribers enable row level security;

create policy "Public can read active programs" on public.programs for select using (is_active = true);
create policy "Public can read cohorts" on public.cohorts for select using (true);
create policy "Public can read events" on public.events for select using (true);
create policy "Public can read published blog posts" on public.blog_posts for select using (status = 'published');
create policy "Authenticated users can read their profile" on public.users for select using (auth.uid() = id);
