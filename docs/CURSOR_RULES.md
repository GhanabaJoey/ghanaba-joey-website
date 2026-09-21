# Cursor / Agent Development Rules

Rules for humans and AI assistants working on GhanabaJoey.com.

## Before changing code

- **Inspect before modifying** — read existing files, conventions, and `/docs`
- **Preserve working functionality** — especially `/boxgames` and `POST /api/box-games/apply`
- **Minimize scope** — smallest correct change for the task phase

## Stack and quality

- Maintain **TypeScript strict** mode
- **Prefer Server Components**; use `"use client"` only when interaction requires it
- **No unnecessary dependencies** — justify new packages (especially animation/3D)
- **Test after changes:** `npm run lint` and `npm run build` at minimum

## Data and secrets

- **No destructive database changes** without explicit approval and a migration plan
- Do not rename `box_game_applications` columns casually
- **No secrets in source** — use env vars; never commit `.env.local`
- Do not log API keys, tokens, or full Supabase keys

## Supabase

- Use **anon/publishable key** only in this app
- Never put service-role/secret keys in `NEXT_PUBLIC_*` or client bundles
- Keep URL normalization when reading Supabase URL env

## UX and accessibility

- **Mobile-first** verification for UI changes
- Semantic HTML, labels, focus states, alt text where needed
- **`prefers-reduced-motion`** support for new animation
- Consider performance before adding motion or heavy assets

## Content

- **Do not invent** statistics, testimonials, prices, or achievements
- Use `docs/GHANABA_BRAND.md` for ecosystem distinctions (Destiny Helper vs Box Games vs NextWave)

## Components and design

- **Reuse** shared components and tokens as the design system grows
- Do not duplicate the NextWave website on the personal domain
- Phase work appropriately (stabilization vs redesign vs 3D)

## Box Games apply pipeline

When touching applications:

- Keep payload `{ username, target, available_date }` for database insert
- Server must validate target/date mapping (`src/lib/box-games/application-rules.ts`)
- Email failure must not fail HTTP success after a successful insert (unless product requirements change explicitly)

## Phases

- **Phase 0:** Stabilization, validation, docs — no major visual redesign
- **Phase 1+:** Design system, IA, new pages — follow `docs/WEBSITE_SPEC.md` and `docs/DESIGN_SYSTEM.md`
