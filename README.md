# ImpactNest Academy

Modern nonprofit training and organization platform built with Next.js 15, TypeScript, Tailwind CSS, shadcn-style UI components, Framer Motion, Supabase architecture, React Hook Form, and Zod.

## Scripts

- `npm run dev` starts the local development server.
- `npm run build` creates a production build.
- `npm run typecheck` runs TypeScript validation.

## Supabase

Copy `.env.example` to `.env.local` and add the public Supabase URL and anon key. The schema scaffold lives in `supabase/schema.sql` and includes RLS-enabled tables for users, programs, cohorts, registrations, payments, events, volunteers, partners, donations, blog posts, contact messages, and newsletter subscribers.
