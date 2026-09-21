# GhanabaJoey.com — Website Specification (Current + Planned)

## Purpose

Premium personal digital headquarters for Ghanaba Joey: brand story, ecosystem entry points, event registration, and (future) commercial lead generation.

## Current implementation (Phase 0 baseline)

### Routes

| Path | Status | Notes |
| ---- | ------ | ----- |
| `/` | Live | Homepage sections: hero, about, platforms, statement, footer |
| `/boxgames` | Live | Official Monthly Box Games application UI |
| `POST /api/box-games/apply` | Live | Server validation, Supabase insert, Resend notify |

### External destinations

| Label | URL |
| ----- | --- |
| NextWave Creator Network | `https://nextwavecreatornetwork.com` |
| UK creator apply (TikTok) | TikTok link in `src/lib/site-links.ts` |
| Contact (interim) | TikTok profile in `src/lib/site-links.ts` |

### Application API contract

**Request (JSON):**

- `username` (string)
- `target` (`30K` | `50K`)
- `available_date` (ISO date, must match target)
- `company_website` (honeypot, must be empty)

**Response:**

- Success: `{ "success": true }`
- Validation error: `{ "error": { "message": "Validation failed." } }` (400)
- Submit failure: `{ "error": { "message": "Application could not be submitted." } }` (500/503)

**Database:** `box_game_applications` — do not rename columns or delete production data without an explicit migration plan.

### Event business rules (current)

| Target | Event date |
| ------ | ---------- |
| 30K | 2026-09-20 |
| 50K | 2026-09-27 |
| 100K | Not open (UI only) |

Source of truth: `src/lib/box-games/application-rules.ts`.

## Planned information architecture (not yet built)

Approximate future structure:

- HOME
- ABOUT
- LIVE (includes Destiny Helper context)
- BOX GAMES (route may evolve from `/boxgames` with redirect)
- NEXTWAVE (hub → external product)
- WORK WITH ME — Advertise, Website Development, Partnerships, Events
- CONTENT
- CONTACT (on-site forms)

## Non-goals for early phases

- Duplicating the NextWave website on GhanabaJoey.com
- Merging Destiny Helper and Official Monthly Box Games into one experience
- Inventing marketing claims or pricing in copy
