# GhanabaJoey.com

Personal digital headquarters for **Ghanaba Joey** (Creator • Host • Entrepreneur). The site introduces the personal brand, links to ecosystem products, and hosts applications for **Official Monthly Box Games**.

## Stack

- Next.js 16 (App Router, `--webpack` for dev/build)
- React 19
- TypeScript (strict)
- Tailwind CSS v4
- Supabase (application storage)
- Resend (application email notifications)

## Local development

```bash
npm install
cp .env.example .env.local
# Add environment variable values in .env.local (never commit this file)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Required environment variables

Set these in `.env.local` for local development and in your hosting provider for production:

| Variable | Purpose |
| -------- | ------- |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL (base URL only, no `/rest/v1`) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase publishable (anon) key — not the secret key |
| `RESEND_API_KEY` | Resend API key (server only) |
| `RESEND_FROM_EMAIL` | Verified sender on `ghanabajoey.com` (optional; sensible default in code) |

Never commit secrets. `.env*` is gitignored except `.env.example` (names only).

## Homepage media (temporary)

Owner-supplied visuals live under `public/media/ghanaba-joey/`. Replace files in place (same filenames) when higher-resolution or final LIVE / Box Games artwork is ready. See `public/media/ghanaba-joey/README.md`.

## Routes

| Route | Description |
| ----- | ----------- |
| `/` | Personal brand homepage |
| `/boxgames` | Official Monthly Box Games application page |
| `/contact` | Media / collaboration enquiry form |
| `POST /api/box-games/apply` | Validates and stores applications |
| `POST /api/contact` | Sends enquiry email via Resend |

## Official Monthly Box Games — application flow

1. User completes the form on `/boxgames` (TikTok username + target).
2. Client sends `POST /api/box-games/apply` with JSON:

   ```json
   { "username", "target", "available_date" }
   ```

3. Server validates username, allowed targets (`30K`, `50K`), and date mapping:
   - `30K` → `2026-09-20`
   - `50K` → `2026-09-27`
4. Row inserted into Supabase table `box_game_applications`.
5. Resend sends a notification email (failure does not fail the API if the insert succeeded).

Business rules and dates are defined in `src/lib/box-games/application-rules.ts`.

## Supabase

- Table: `box_game_applications` (`username`, `target`, `available_date`)
- Server uses anon key via `src/lib/supabase/server.ts`
- URL normalization: `src/lib/supabase/env.ts`

**Production checklist (Supabase Dashboard):**

- Confirm RLS policies allow `INSERT` for `anon` on `box_game_applications` (and restrict as needed for reads).
- Confirm no service-role key is used in this app’s client or public env.

## Resend

- Used only in `src/lib/email/send-box-games-application-notification.ts`
- `RESEND_API_KEY` must exist in production for email notifications

## Deployment

Typical host: Vercel (linked to this repository).

**Production environment variables cannot be verified from the repository alone.** After deploy, confirm all four variables above are set for the Production environment in the hosting dashboard, then submit a test application on `/boxgames`.

Optional local checks:

```bash
node scripts/test-supabase-insert.mjs
node scripts/test-resend-email.mjs
```

(Diagnostic scripts only; require `.env.local`.)

## Design system (Phase 1)

Reusable tokens and components live under `src/components/design-system/` with CSS in `src/styles/`. See [docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md). Live pages still use legacy styles until page rebuild phases.

## Future direction

Phased rebuild toward a premium personal-brand platform (LIVE, Destiny Helper, Work With Me, Contact, etc.). See `/docs` for brand, spec, design, architecture, and Cursor rules.

## Scripts

| Command | Action |
| ------- | ------ |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | ESLint |
