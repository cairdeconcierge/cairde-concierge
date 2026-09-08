# Conceige

Marketing site and blog for Cairde Concierge, built with Next.js (App Router) and Supabase.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, React 19)
- [Supabase](https://supabase.com) — Postgres, Auth, and Storage (blog cover images)
- Tailwind CSS 4

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Create a `.env.local` with:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_SITE_URL=
```

`NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` come from your Supabase project's API settings. `NEXT_PUBLIC_SITE_URL` is the site's public base URL (used for the sitemap and metadata).

## Project structure

- `app/` — routes (marketing pages, `Blog`, `admin`)
- `components/` — shared and page-specific UI components
- `utils/supabase/` — Supabase clients (`browser.ts`, `server.ts`), the `proxy.ts`-invoked session/auth-gate logic (`middleware.ts`), admin authorization (`authz.ts`), and typed queries
- `utils/contents/` — static page copy

## Blog admin

Blog posts are managed at `/admin`, backed by the `blog_posts` table in Supabase and a `blog-images` Storage bucket for cover images.

Admin access is gated by an `admin` role on the Supabase user's `app_metadata` (not `user_metadata`, which is user-editable). To grant a user admin access, run in the Supabase SQL editor:

```sql
update auth.users
set raw_app_meta_data = raw_app_meta_data || '{"role":"admin"}'::jsonb
where email = 'admin@example.com';
```

The user must sign out and back in at `/admin/login` for the new role to take effect.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — lint the project

## Note on this Next.js version

This repo uses a pre-release Next.js version with breaking changes from the version most tooling/training data assumes (e.g. `proxy.ts` replaces `middleware.ts`). See `AGENTS.md` and `node_modules/next/dist/docs/` for the current API surface before making framework-level changes.
