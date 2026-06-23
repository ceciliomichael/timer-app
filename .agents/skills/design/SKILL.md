---
name: design
description: Create distinctive, production-grade flat UI interfaces that wow on first glance. Use this skill when the user asks to build web components, pages, artifacts, posters, or applications (websites, landing pages, dashboards, React components, HTML/CSS layouts, or any web UI). Outputs high-impact, emotionally resonant flat UI with bold typography, strategic color blocking, strong layout rhythm, and fluid interaction. Light mode by default. No gradients, no glassmorphism.
---

Build **flat UI that commands attention**. No gradients. No glassmorphism. No decorative shadows. The entire visual impact comes from: **bold typography, strategic color blocking, strong contrast, intentional layout rhythm, and fluid motion**. A client should see the first screen and feel the quality immediately.

Flat does not mean boring. The best flat UI is bold, structured, and alive.

> **Always deliver the best possible design — no exceptions.** Never settle for "good enough", "it works", or "it's clean". Every output is the strongest, most considered version of that UI you are capable of producing. If the first idea is safe, push further. If the layout is predictable, rethink it. The bar is: would a senior product designer at a world-class company be proud to ship this?

---

## Step 0 — Pick a Visual Register

Before any layout, identify what emotional register this product lives in. Commit fully — every spacing, weight, radius, and motion decision should reinforce it.

| Archetype | When to use | Palette Direction | Feel |
|---|---|---|---|
| **Bold Flat** | Landing pages, startups, marketing, consumer apps | Large flat color blocks, oversized display type, strong accent fills | Energetic, confident, striking |
| **Warm Minimal** | Productivity tools, dashboards, B2B SaaS | Off-white surfaces, one muted accent, generous space | Calm, trustworthy, refined |
| **Editorial Clean** | Portfolios, agencies, content-heavy products | High-contrast black/white base, editorial typography, structured grid | Sharp, credible, intentional |
| **Soft Tonal** | Health, wellness, lifestyle, onboarding flows | Muted pastels, rounded shapes, light rhythm | Approachable, warm, human |
| **Technical Precision** | Dev tools, data dashboards, analytics | Neutral mid-tone base, monospace accents, dense grid | Focused, reliable, expert |

Mixing registers produces mediocrity. Lock one in and execute with conviction.

---

## UX Thinking — Do This Before Layout

- **Primary task**: What is the user here to do? Layout, hierarchy, and CTA must serve this above everything.
- **User flow**: What does the user do first, second, third? Design the sequence, not just one screen.
- **All states**: Loading, empty, error, and success states are required — design them deliberately.
- **Next action**: Every screen has one clear "what do I do next." No dead ends.
- **Failure paths**: Form validation, failed requests, empty results — handle these with real UI.
- **Hierarchy check**: The most important thing must be the most visually dominant. If everything competes, nothing wins.

A beautiful UI with broken flow is a failed product.

---

## Visual Language

### Color — The Primary Tool for Drama in Flat UI

Without gradients, **color blocking is the main lever for visual impact**. Use it with intent.

**Color blocking rules:**
- Full-bleed flat accent sections (hero backgrounds, CTA strips, feature callouts) are the flattest, most powerful tool available — use them
- Alternate section backgrounds intentionally: off-white → white → accent-tinted → white. Never repeat the same surface without a visual break.
- A flat accent fill on a large section does more work than any gradient

**Choose an accent by product context — not habit:**
- Productivity / finance: forest green `#166534`, cobalt `#1e40af`, deep teal `#0f766e`
- Creative / expressive: warm amber `#d97706`, terracotta `#c2410c`, coral `#e11d48`
- Health / wellness: sage `#4d7c60`, dusty rose `#be7070`, warm teal `#0d9488`
- Technical / utility: electric blue `#2563eb`, slate blue `#3b4f6b`, neutral violet `#6d28d9`
- Bold brand: pick something distinctive — not the first generic option

**Usage rules:**
- Accent fills: CTA buttons, active states, full section backgrounds, key data highlights, selected states
- 4–5 uses per screen maximum — rarity gives it authority
- Never use two competing accent families on one screen

**Light mode surfaces (default):**
- Page background: `#f5f4f1`, `#faf9f7`, `#f2f0eb` — warm off-white, never pure white
- Card / panel: `#ffffff` or `#f8f7f4` — subtly different from the page background
- Depth via tonal shift, not border. If a border is necessary: `1px solid rgba(0,0,0,0.07)`
- Never `#ffffff` on `#ffffff` — surfaces must be distinguishable

**Dark mode (only when user explicitly requests it):**
- Base: `#0f0f11`, `#111113`
- Surface: `#1a1a1f`
- Flat. No gradients. No glow. Separation via tonal contrast + `rgba(255,255,255,0.07)` borders.
- Same accent logic: one flat color, used with the same restraint

**Text:**
- Primary: `#1c1c1c` on light; `#f0f0f0` on dark — never pure `#000` or `#fff`
- Secondary / labels: `#888`, `#999`
- Metadata: `#bbb`

---

### Typography — The Fastest Path to Wow

In flat UI, **type scale and weight are the most powerful design tools**. Use them aggressively.

**Font selection:**
- Display headlines: **Bricolage Grotesque**, **Syne**, **Playfair Display**, **Cabinet Grotesk**, **Clash Display**
- Product / UI body: **Geist**, **Inter**, **DM Sans**, **Plus Jakarta Sans**, **Outfit**
- Warm / human: **Fraunces** or **Instrument Serif** paired with a clean sans for contrast

Always load fonts via Google Fonts `@import` or `<link>`. Never default to Arial, system-ui, or Roboto.

**Scale — make it dramatic:**
- Hero / display: **64–96px**, `font-weight: 800–900`, `letter-spacing: -0.03em to -0.04em`
- Section titles: **36–52px**, bold, `letter-spacing: -0.02em`
- Sub-headers: **20–24px**, semibold
- Body: **15–17px**, regular, `line-height: 1.65`
- Captions / labels: **11–13px**, medium, `letter-spacing: 0.06–0.1em`, uppercase

**The gap between hero text and body must feel intentional — not graduated.** 80px headline vs 16px body creates visual authority. 36px vs 15px is forgettable.

**Type as a design element:**
- Large display numbers (stats, metrics) should be massive flat anchors — treat them as heroes, not data
- Small-caps section labels above titles create editorial rhythm
- Control headline line breaks deliberately — they shape the visual block

---

### Depth Without Gradients

Flat UI creates perceived depth through **structure and contrast**, not blur or gradients:

- **Tonal surfaces**: different off-white or off-gray tones for page vs card — no border needed
- **Borders when needed**: `1px solid rgba(0,0,0,0.08)` — barely visible, never decorative
- **Purposeful shadows**: `box-shadow: 0 1px 4px rgba(0,0,0,0.08)` on interactive cards only — appears on hover, not at rest
- **Color sections as z-anchors**: a full-bleed flat accent background creates depth through contrast, not elevation
- **White cards on tinted backgrounds**: cleanest depth signal in flat UI
- **No decorative shadows, no multi-layer blur, no `backdrop-filter`, no glassmorphism — ever**

---

### Motion — Make the Flat UI Feel Alive

Without visual depth from shadows or gradients, **interaction and motion carry the experiential weight**. This is non-negotiable.

**Entrance animations on every major content block:**
```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}
.reveal { animation: fadeUp 0.45s cubic-bezier(0.16, 1, 0.3, 1) both; }
```
Use `IntersectionObserver` to add `.reveal` when sections enter the viewport. Stagger children with `animation-delay` at 60–80ms increments.

**Hover states — every interactive element must respond:**
- **Cards**: `transform: translateY(-3px)` + `box-shadow: 0 6px 20px rgba(0,0,0,0.1)`, `transition: all 200ms ease`
- **Primary buttons**: `filter: brightness(1.07)` or `transform: scale(1.02)`, 150ms
- **Nav links**: accent underline slides in left → right via `scaleX(0 → 1)` on `::after`, `transform-origin: left`
- **Icon buttons**: subtle rotate (8–12deg) or scale (1.1×) on hover

**Micro-interactions:**
- Stats / counters: count up from 0 when scrolled into view
- Form fields: accent `outline` or bottom border animates in on focus
- Toggles: smooth translate, not a snap
- Checkboxes / selects: always custom-styled and built from scratch — never use browser defaults

**Timing:**
- Instant feedback (button press): 100–150ms
- State transitions: 200ms
- Entrance animations: 400–550ms with fast-out easing
- Page transitions: 300ms fade or translate

---

### Components — Details That Separate Good From Exceptional

**Custom UI Components (Language-Agnostic):**
- **Never rely on default browser elements** for complex inputs like dropdowns (`<select>`), checkboxes, radios, or date pickers. They break the visual immersion and feel cheap.
- **Build custom components from scratch** in a **language-agnostic** way. Whether you are using Vanilla HTML/CSS/JS, React, Vue, or Svelte, implement your own robust structure (e.g., a styled trigger button and a custom floating list for a dropdown).
- Custom components must include smooth entrance animations, proper hover states, and seamless integration with the overall visual design system.

**Hero section:**
- Full viewport height (`100dvh`)
- Background: flat accent color, warm off-white, or black — **never a gradient**
- Headline: biggest element on the page, 64–96px+
- One primary CTA; optional ghost secondary
- Subheadline: 2 lines max, never competes with the headline

**Cards:**
- `border-radius: 12–20px` — commit to one radius and use it throughout
- Background: `#ffffff` or `#f8f7f4` on light; `#1a1a1f` on dark
- Padding: `24–32px`
- No decorative shadow at rest. Hover lift: `translateY(-3px)` + `box-shadow: 0 6px 20px rgba(0,0,0,0.1)`
- Optional thin border: `1px solid rgba(0,0,0,0.07)`

**Buttons:**
- Primary: flat accent fill, white text, `border-radius: 999px` or `10–14px`, `font-weight: 600`, `padding: 12px 24px`+
- Secondary: transparent + `1px solid` accent or neutral border, same radius, accent text
- Hover: `brightness(1.07)` or `scale(1.02)` — **never gradient, never glow**
- Consistent sizes across the product: one small, one default, one large

**Navigation:**
- Sticky. On scroll: solid `#faf9f7` background + `border-bottom: 1px solid rgba(0,0,0,0.07)`
- Logo left, links center or right, CTA far right
- Active state: accent underline or weight shift
- Mobile: full-screen overlay or side drawer — never a broken half-built hamburger menu

**Section layouts — break monotony deliberately:**
- Alternate: text left / visual right → visual left / text right
- Use one full-bleed flat accent section per page (CTA strip or feature highlight)
- Include one standalone oversized stat, pull-quote, or bold claim between content blocks
- Never repeat the same layout structure three sections in a row

**Feature / benefit grid:**
- 2–3 columns, icon + title + 2-line description
- Icon: accent-tinted flat square or circle container — never a bare SVG inline
- Icon library: Lucide, Phosphor (regular), or Heroicons (outline) — one set throughout

**Social proof / testimonials:**
- Large typographic quotation mark (accent color, display weight)
- Name + role + company + optional avatar
- Position near or directly before the primary CTA

**Footer:**
- Complete: logo, brand tagline, nav columns, social icons, legal line
- Never just a copyright line

---

### Spatial Composition

- **Base unit: 8px.** All spacing is a multiple: 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 128
- **Section vertical padding**: `96–128px` desktop, `56–72px` mobile
- **Max content width**: `1200–1400px`, always `margin: 0 auto`
- **Column gutters**: `24–32px`
- Generous padding signals confidence. Cramped layouts signal insecurity.
- The visual tail of each section should bridge naturally into the next.

---

## Mobile Responsiveness — Not an Afterthought

Every design ships on mobile first. A desktop design that breaks on mobile is an incomplete product. Build responsive from the start — not as a retrofit.

### Breakpoints

Use these consistently throughout:
- **Mobile**: `< 640px` — single column, full-width everything
- **Tablet**: `640px – 1024px` — 2-column grids, reduced padding
- **Desktop**: `> 1024px` — full multi-column, max-width capped

Write CSS mobile-first: base styles target mobile, `@media (min-width: ...)` adds desktop enhancements.

### Typography — Scale Down Gracefully

Hero text that reads at 80px on desktop must still feel bold at a reduced size — not just shrunk proportionally:

- Hero / display: `clamp(40px, 8vw, 96px)` — scales fluidly, always readable
- Section titles: `clamp(24px, 5vw, 52px)`
- Sub-headers: `clamp(18px, 3.5vw, 24px)`
- Body: stays `15–17px` — never shrink body text on mobile
- Use `clamp()` on all display sizes — never hardcode px values that only work at one breakpoint

### Layout — Collapse With Intention

- All multi-column grids collapse to **single column** on mobile — no horizontal scroll, ever
- Two-column feature rows (text + visual) stack: visual first, then text below (or text first if it's a hero message)
- Cards in a 3-column grid → 1-column stack on mobile, 2-column on tablet
- Maintain section padding but reduce: `96px` desktop → `56px` tablet → `40px` mobile
- Max content width becomes `100%` with `16–24px` horizontal padding on mobile

### Navigation — Mobile Is a First-Class Citizen

- Desktop nav collapses to a **hamburger** on mobile — implement it properly
- Hamburger menu: animates to an X on open, full-screen overlay or slide-in drawer
- Overlay: full viewport, large tap targets (`48px` min height per item), clear close button
- Never hide nav and leave the user stranded — mobile nav must be as functional as desktop

### Touch Targets

- **Minimum 44×44px tap target** for all interactive elements — buttons, links, icons, toggles
- Increase button padding on mobile: `14px 28px` minimum
- Spacing between tappable items: at least `8px` gap to prevent mis-taps
- Form inputs: `height: 48px` minimum, `font-size: 16px` minimum to prevent iOS zoom on focus

### Images & Media

- All images: `max-width: 100%`, `height: auto` — no overflow
- Hero images / illustrations: scale down or swap for a mobile-optimized crop
- Avoid `position: absolute` elements that overflow their container at small widths
- Video backgrounds: disable or replace with a static image on mobile (performance + battery)

### Spacing & Rhythm on Mobile

- Reduce section gutters: `32px` desktop → `16px` mobile
- Cards: reduce internal padding from `24–32px` to `16–20px`
- Icon sizes: stay consistent — don't scale down below `20px`
- Footer: collapse to single column, links stack vertically with `12px` gap

### What Mobile Must Never Have

- Horizontal scroll (except intentional carousels with visible scroll indicators)
- Text too small to read without zooming (`< 13px`)
- Tap targets under `44px`
- Broken hamburger menus (half-implemented, no overlay)
- Desktop-only hover states with no touch equivalent
- Fixed elements that eat into the content area on small screens

---

## Hard Rules

- **No gradients** — not on backgrounds, not on buttons, not on text. Flat fills only. A single-color tinted background is fine; a gradient is not.
- **No glassmorphism** — no `backdrop-filter: blur`, no frosted panels, no translucent layering
- **No decorative shadows** — `box-shadow` on hover for interactive cards only; never static decoration
- **Light mode by default** — dark mode only when the user explicitly requests it
- **No pure `#000000` or `#ffffff`** — near-black and warm off-white always
- **No generic fonts** — no Arial, no system-ui, no unbranded Roboto. Load a real typeface.
- **No static UI** — every interactive element must respond to hover; every major section must animate in on scroll
- **No default browser inputs** — always build custom, language-agnostic components (e.g., custom dropdowns) instead of using native `<select>` or default checkboxes.

---

## Quality Bar — Non-Negotiable

Before finishing any design, answer all of these:

1. **Does the first screen stop someone mid-scroll?** The hero text should be large enough to feel like a statement, not a label.
2. **Is there one visually bold moment per section?** A color block, a huge number, a typographic anchor — not every section is quiet.
3. **Does the accent feel like a deliberate brand decision**, not the default blue that appeared first?
4. **Does every card, button, and link respond on hover?** Static flat UI is dead UI.
5. **Is the type scale dramatic?** 80px headline vs 16px body is intentional. 36px vs 15px is forgettable.
6. **Are sections visually distinct?** Background shifts, layout alternation, one full-bleed flat section — variety creates rhythm.
7. **Does it hold up in 5 seconds?** Show only the first screen: a stranger should immediately understand what this is and want to engage.
8. **Does it work on mobile?** Resize to 375px — no overflow, no broken nav, no unreadable text, all tap targets reachable.

The result must feel like a senior designer with strong convictions built it — not a template, not a developer's first pass. Flat, bold, purposeful, and memorable.

**Always give the best possible design.** Not the first idea. Not the safe idea. The best idea you are capable of — executed with full craft, full intention, and zero shortcuts. A forgettable design is a failure, regardless of whether it's technically correct.


