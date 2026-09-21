# Technical Architecture

## Current stack

| Layer | Choice |
| ----- | ------ |
| Framework | Next.js 16.3.x App Router |
| UI | React 19 |
| Language | TypeScript strict |
| Styling | Tailwind CSS v4 + `globals.css` |
| Data | Supabase (`@supabase/supabase-js`) |
| Email | Resend |
| Icons | lucide-react |
| Deploy | Vercel (typical; no `vercel.json` in repo) |

Build/dev scripts use `--webpack` due to Turbopack constraints on some Windows environments.

## Repository layout

```
src/app/              Pages and API routes
src/components/       UI by area (home, boxgames, layout, ui)
src/lib/              Shared logic (supabase, email, box-games rules, logging)
public/images/        Static images
docs/                 Project source-of-truth documents
scripts/              Local diagnostics (not runtime)
```

## Request flow — Box Games apply

```
ApplicationForm (client)
  → POST /api/box-games/apply
    → validate (username, target, date, honeypot, size)
    → createServerSupabaseClient()
    → insert box_game_applications
    → sendBoxGamesApplicationNotification() (non-blocking for HTTP success)
```

## Supabase integration

- **Client module:** `src/lib/supabase/server.ts` — server-side anon client only for API route
- **Browser module:** `src/lib/supabase/client.ts` — present but unused in routes; guards against secret keys
- **Env normalization:** `src/lib/supabase/env.ts`

### Environment variables

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Both are named `NEXT_PUBLIC_*` for Next.js bundling; the anon key is the **publishable** key. Never use the service-role/secret key in this application.

### Schema (inferred from code)

**Table:** `box_game_applications`

| Column | Type (logical) |
| ------ | -------------- |
| username | text |
| target | text |
| available_date | text (ISO date) |

No migrations live in this repository.

### Supabase checks (manual — Dashboard)

Cannot be verified from git alone. Confirm:

1. Table `box_game_applications` exists with columns above.
2. **RLS** enabled with a policy allowing `INSERT` for role `anon` (or equivalent for public apply).
3. **SELECT/UPDATE/DELETE** not exposed to anon unless intentionally required.
4. Project URL matches normalized base URL (no `/rest/v1` suffix in env).
5. Production hosting env vars match Supabase **Project Settings → API**.

## Email integration

- Module: `src/lib/email/send-box-games-application-notification.ts`
- Env: `RESEND_API_KEY`, `RESEND_FROM_EMAIL`
- Server-only; never import Resend in client components

## Security practices (Phase 0)

- Honeypot field on apply requests
- JSON body size limit (2048 bytes)
- Server-side validation independent of client
- Generic public API error messages; details logged server-side
- `.env*` gitignored (except `.env.example` template)
- No middleware/auth layer yet

## Future architecture (high level)

- Marketing layout group with shared nav/footer and metadata
- Additional API routes for contact/commercial leads
- Optional CMS or typed content modules for CONTENT pages
- Lazy-loaded 3D/visual assets
- Rate limiting at edge/hosting (Phase 7)

Preserve `/api/box-games/apply` contract and existing table data when evolving routes (e.g. `/box-games` redirect later).
