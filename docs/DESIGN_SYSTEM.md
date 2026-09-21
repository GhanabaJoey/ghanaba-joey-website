# Ghanaba Joey — Design System (Phase 1)

Phase 1 establishes tokens, utilities, and React primitives. **Live pages still use legacy `brand-*` / `boxgames-*` classes** until Phase 2+ page builds.

## Brand foundation

- **Primary:** Ghanaba Joey — Creator • Host • Entrepreneur  
- **Statement:** Creating experiences. Educating creators. Building opportunities.  
- **Pillars:** CREATE · TEACH · CONNECT · BUILD  
- **Supporting language:** CREATE · CONNECT · BUILD · GROW  

Personal brand first; NextWave, Destiny Helper, Official Monthly Box Games, and commercial services are ecosystem experiences.

## Typography

| Role | Implementation |
| ---- | -------------- |
| Body / UI | **Geist Sans** (`--font-geist-sans`) |
| Display / editorial headlines | **Cormorant Garamond** (`--font-cormorant`) |

Utility classes: `.gj-display-xl` … `.gj-caption` (see `src/styles/design-utilities.css`)  
Component: `<Typography role="display-lg" />`

## Colour tokens

| Token | Value / usage |
| ----- | ------------- |
| Obsidian | `#050505` — primary background |
| Graphite | `#101114` — elevated surfaces |
| Gold | `#D4AF37` — accent, CTAs, highlights |
| Light Gold | `#F1D98A` — secondary gold |
| White | `#F5F3EE` — primary text |

Semantic CSS variables: `--gj-background`, `--gj-foreground-muted`, `--gj-border`, `--gj-gold-soft`, `--gj-error`, etc.  
Tailwind: `bg-gj-background`, `text-gj-gold`, …

Gold is an **accent**, not a default for every heading.

## Spacing & layout

- Scale: `--gj-space-*`, section padding `--gj-section-y` (responsive clamps)  
- Containers: `.gj-container`, `.gj-container-narrow`, `.gj-container-wide`  
- Components: `<ContentContainer />`, `<Section spacing="default|sm|lg" />`, `<FullBleedSection />`, `<EditorialSplit />`

## Buttons

`<Button variant="primary|secondary|ghost|text|gold|outline" size="md|sm" />`

- Primary / gold: gold fill, obsidian text  
- Secondary: elevated dark + border  
- Ghost / text: minimal; text variant includes arrow  

## Glass

`.gj-glass`, `.gj-glass-subtle`, `<GlassPanel variant="default|subtle" />`  
Use sparingly — navigation overlays, featured panels, not entire pages.

## Forms (foundation)

`<Field>`, `<Label>`, `<Input>`, `<FieldError>`, `<HelperText>`  
Box Games page still uses legacy `.boxgames-*` form styles.

## Navigation (foundation)

`<SiteNavFoundation />` — future IA from `src/lib/navigation-config.ts`  
**Not mounted on `/` or `/boxgames` in Phase 1.**  
Features: mobile overlay, Escape to close, body scroll lock, focus rings.

## Cards & details

- `<Card variant="flat|bordered|glass|image-led" />`  
- `<Divider variant="gold|gradient" />`, `<ArrowLink />`, `.gj-section-index`, `.gj-accent-dot`

## Media

`<EditorialImage variant="portrait|cinematic|framed|mask-fade|plain" />`  
Portrait asset: `/images/ghanaba-joey-portrait.jpg` (unchanged).

## Depth / 3D placeholder

`<DepthStage />` + `.gj-depth-*` utilities — CSS-only scaffold for future emblem/3D.  
Not final logo artwork.

## Backgrounds

`<AmbientBackground variant="obsidian|graphite|cinematic|radial|gold" noise />`  
Utilities: `.gj-bg-cinematic`, `.gj-bg-noise`, etc.

## Ecosystem tones (section modifiers)

`<Section tone="destiny-helper|box-games|nextwave|commercial" />`  
Subtle radial accents — not separate gaming/neon themes.

| Area | Direction |
| ---- | --------- |
| Destiny Helper | Energetic, social, community — still premium GJ |
| Official Monthly Box Games | Cinematic, competitive, event energy — connected to core |
| NextWave | Introduce only; outbound to NextWave site |
| Advertise / Web dev | Professional, trustworthy commercial surfaces |

## Motion

- Durations: `--gj-duration-fast|standard|slow`  
- Easing: `--gj-ease-standard`, `--gj-ease-cinematic`  
- Utilities: `.gj-transition`, `.gj-transition-slow`  
- `prefers-reduced-motion`: transitions disabled in utilities  

No Framer Motion / Three.js in Phase 1.

## Accessibility

- `.gj-focus-ring` on interactive design-system controls  
- Semantic headings via `Typography` defaults  
- Form labels, `aria-*` patterns in nav foundation  
- WCAG-conscious contrast on gold/obsidian pairings

## Code location

```
src/styles/design-tokens.css
src/styles/design-utilities.css
src/components/design-system/
src/lib/navigation-config.ts
src/lib/cn.ts
```

Import barrel: `@/components/design-system`

## Legacy CSS

`src/app/globals.css` still contains:

- `.brand-*` — current homepage  
- `.boxgames-*` — current application page (including purple/pink legacy accents)  
- Shared animations (fade-in, glow-pulse, shimmer)  

Do not remove until new pages replace them.
