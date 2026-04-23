# Modern Portfolio — Design System

A design system for a **single-page portfolio template** built for designers, developers, and creative professionals. The visual language is bold: **deep black backgrounds**, **four vibrant accent colors** used together in animated gradients, **emoji-as-iconography**, and **bilingual copy (English navigation + Traditional Chinese body)**.

> Brand positioning: "stunning, high-performance, zero-dependencies" — vanilla HTML/CSS/JS with no build tools. Every visual motif is designed to feel premium while staying implementable by a solo designer-developer.

---

## Source

All design decisions in this system are extracted from the live codebase:

- **Repo:** `allan1114/portfolio` (GitHub, branch `main`)
- **Entry:** `_source/index.html` — full single-page application
- **Case-study template:** `_source/work1.html` … `work4.html` — deeper project pages
- **Original README:** `_source/README.md` — customization guide, feature list

Only `_source/` holds the imported files. Everything else in this project is the distilled design system.

---

## Products / Surfaces

The portfolio has **one product surface** (a marketing/portfolio website) but it expresses in **two page templates**:

| Template | File | Purpose |
|---|---|---|
| **Home** | `index.html` | Nav, Hero, About, Works grid, Contact, Footer — the full site in one scroll |
| **Case study** | `work{1-4}.html` | Hero with tag + meta (client / year / role / tools), alternating content sections, highlight boxes, stats grid, footer |

Both templates share the same tokens, cursor, nav, and footer — they're two layouts of one design system, not two products.

---

## CONTENT FUNDAMENTALS

### Voice & tone
- **Bilingual by default** — UI chrome (nav, section tags, button labels when generic) is **English**; body copy, titles, and CTAs are **Traditional Chinese (zh-HK)**. Section eyebrows use English almost always (`About Me`, `Selected Works`, `Contact`), even above a Chinese title. This is a stylistic signature, not an afterthought.
- **First-person, warm, slightly casual.** The voice is a single designer talking — confident but never corporate. English headers read like tags (`✦ Available for work`); Chinese body reads conversationally (`我把複雜的問題變成直覺、有趣的視覺體驗。`).
- **"I" and "you" both appear.** The designer uses 我 (I) in bios; "you" appears in CTAs inviting the visitor to act (`讓我們一起做點好玩的事`).
- **Outcome-focused.** Project copy leads with *what changed* — percentages, step counts, satisfaction scores. Every case study ends with a reflection paragraph framing the work as problem-solving, not decoration.

### Casing
- **Titles**: sentence-case in Chinese; `Title Case` for English eyebrows (`Selected Works`).
- **Tags & labels**: `UPPERCASE` with wide tracking (3px letter-spacing for section eyebrows, 1px for pill tags).
- **Button labels**: Chinese gets sentence case with a trailing arrow (`查看作品 →`); English is sentence case too (`View Work →`).

### Copy examples (verbatim from source)
- Hero tag: **`✦ Available for work`**
- Hero title: **`Your Name` / `Designer.`**
- Hero sub: **`我把複雜的問題變成直覺、有趣的視覺體驗。專注於 UI/UX、品牌設計與數位體驗。`**
- Nav links: **`About`, `Works`, `Contact`**
- Case-study eyebrows: **`背景`, `方法論`, `解決方案`, `結果`, `學習`**
- Stat card: **`38%` / `結帳完成率提升`**
- Footer: **`© 2026 Your Name — Designed & Built with ❤️`**

### Emoji usage — this is deliberate
Emoji are **first-class iconography**, not decoration. They appear:
- As the **only** decorative mark on hero tags (`✦ Available for work`)
- In the **work-thumb background** in place of a project image (`🛍️ 🎨 📊 🌐`)
- In **insight callouts** as a label icon (`💡 Design Insight`)
- In **contact CTAs** (`✉️`, `👋`)
- Sprinkled in section headers on case pages (`🛍️ UI/UX — Mobile`)

When the brand adds an icon, use a Unicode emoji first. Only fall back to SVG when an emoji genuinely doesn't exist for the concept.

### Vibe
Personal but polished. Opinionated without being abrasive. Visually loud (animated gradients, floating blobs), textually understated (short sentences, numbers over adjectives).

---

## VISUAL FOUNDATIONS

### Color — "Vibrant 4" on deep black
The palette is **four saturated accent hues** plus a mint green used occasionally on data-viz pages. Everything lives on a near-black background with one raised surface shade.

| Token | Hex | Role |
|---|---|---|
| `--c1` | `#FF4D6D` | Primary — vibrant red. Section tags, primary button, hero tag, glow color |
| `--c2` | `#FFBE0B` | Accent — bold yellow. About decoration border, insight callout border, stat gradient end |
| `--c3` | `#3A86FF` | Accent — bright blue. Dashboard/data-viz tag color |
| `--c4` | `#8338EC` | Accent — deep purple. About placeholder gradient, brand tag color |
| `--c5` | `#06D6A0` | Accent — mint green. Data-viz tag only |
| `--bg` | `#0D0D0D` | Page background |
| `--bg2` | `#161616` | Raised surfaces (About, Contact, work cards, stat cards) |
| `--text` | `#F5F5F5` | Primary text — near-white, not pure white |
| `--text-muted` | `#888888` | Secondary text, labels, paragraph body |

**Tinted accents (@ 22% opacity)** power the soft gradients inside work-card thumbs and the pill-tag backgrounds. Never put an accent at full saturation as a background fill — it's always either the gradient edge of a CTA, a text color, a border, or a tinted wash.

### Typography
- **Original:** `'Segoe UI', system-ui, sans-serif` — a system stack, not a webfont. The template is designed so anyone can ship it without loading external fonts.
- **This design system substitutes** `Inter` (Latin) + `Noto Sans TC` (Traditional Chinese Hong Kong) from Google Fonts. Rationale: Segoe UI renders differently on Mac/Linux, and portfolio decks need to look identical everywhere. Inter matches Segoe's geometric/humanist midpoint closely at display sizes. **See "Font Substitutions" at the bottom of this README.**

**Type scale** (fluid clamp on display sizes):
- Hero title: `clamp(48px, 8vw, 112px)`, weight 900, letter-spacing **−2px**, line-height 1.05
- Work page hero: `clamp(40px, 6vw, 80px)`, weight 900, −1px
- Section title: `clamp(32px, 4vw, 56px)`, weight 900, −1px
- Body: 16px, weight 400, line-height 1.7 (1.8 on case pages for longer reading)
- Tags: 12px, weight 700, **UPPERCASE**, tracking 1–3px

Numbers (stat cards) always use a **gradient text fill** (`--c1 → --c2`) to draw the eye.

### Backgrounds
- **No photographs.** Hero and card thumbnails are solid-tint gradients with a single centered emoji. This is the brand's intentional "image-less" stance.
- **Three blurred blobs** float behind every hero (`filter: blur(80px)`, `opacity: 0.18`). Colors: `--c1`, `--c3`, `--c4`. Each has a different animation duration (8s / 10s / 12s) so they never sync.
- **Repeating-linear-gradient overlay** on placeholder images — 45° micro-stripes at `rgba(255,255,255,0.03)`, every 10px. Adds subtle texture without being busy.
- **No grain, no noise, no photo overlays.**

### Animation
The ambient feel is **slow, low-amplitude, always on**. The interactive feel is **snappy, short, one action per gesture**.

| Animation | Duration | Easing |
|---|---|---|
| Hero blobs (scale + translate loop) | 8 / 10 / 12s | `ease-in-out infinite alternate` |
| Hero gradient-text shift | 4s | `ease infinite` |
| Scroll-line pulse | 2s | `ease-in-out infinite` |
| Scroll-reveal fade+slide up 40px | 700ms | `ease` (triggered by IntersectionObserver at 0.15 threshold) |
| Button hover lift | 200ms | `ease` (transform) |
| Work card hover lift | 300ms | `ease` (transform + box-shadow) |
| Cursor ring ease-to-position | — | `rx += (mx - rx) * 0.12` (per-frame lerp) |

**No bounces, no spring physics, no rotations beyond the hover.** The house style is linear transforms + fades.

### Hover & press states
- **Buttons, skill tags, social links:** `translateY(-3px)` on hover. No color invert — the shift is the feedback.
- **Work cards:** `translateY(-8px)` + `box-shadow: 0 20px 60px rgba(0,0,0,0.5)`. An overlay at `rgba(0,0,0,0.6)` fades in on top of the thumb showing `✦ View Details`.
- **Primary button:** shadow grows from `0 8px 30px rgba(255,77,109,0.3)` to `0 12px 40px rgba(255,77,109,0.5)` — a **colored glow**, not a drop shadow. This is the one place colored shadow appears.
- **Skill tag hover:** fill shifts from `white-07` to `rgba(255,77,109,0.15)` and border recolors to `--c1`. The accent bleeds in on hover.
- **Nav links:** text color moves from `--text-muted` to `--text`. No underline.
- **No press/active states are defined** — hover is the interaction; the cursor scale-up handles the active feel.

### Borders
- Hairline everywhere: `1px solid var(--white-06)` for card borders, `var(--white-10)` for skill-tag borders, `var(--white-20)` for ghost buttons.
- **No borders on bg surfaces** — the `bg2` shade change is the division.
- One special case: `.about-deco` is a floating **3px solid yellow square** anchored behind the about image — one of the few "decorative" non-functional borders in the system.

### Shadows
- **Drop shadows** are soft and deep black (`rgba(0,0,0,0.5)`), only on work cards at hover.
- **Colored glows** are reserved for the primary CTA (red). Never use a colored glow on anything else.
- **No inner shadows.** No pressed looks. No skeuomorphism.

### Transparency + blur
- **Nav bar:** `backdrop-filter: blur(12px)` over `rgba(13,13,13,0.85)`. Work pages bump to `0.95` opacity for readability.
- **Overlay card:** `rgba(0,0,0,0.6)` fade-in, no blur.
- **Blobs:** `blur(80px)` is the signature — large enough to become a tint wash, not a visible shape.

### Corner radii
- **Pill** (`999px`) for buttons, tags, social links, hero tag.
- **16px** for cards, images, highlight boxes, stat cards.
- **4px** for `work-tag` chips (tiny category labels).
- **8px** trailing corner on highlight boxes (left side is squared so the color bar reads as a seamless edge).

### Card anatomy
```
┌─────────────────────────────┐
│  16:10 thumb                │  ← tinted gradient + centered emoji
│  (tint gradient + emoji)    │     hover: black-60 overlay fades in
├─────────────────────────────┤
│  [tag] [tag]                │  ← small pill chips, tinted bg + accent text
│  Project title              │  ← 1.15rem, weight 800
│  One-line description       │  ← 0.85rem muted
│  ┌───────────────────────┐  │
│  │ 💡 Design Insight     │  │  ← highlight sub-box, yellow left border
│  │ Methodology …         │  │
│  └───────────────────────┘  │
└─────────────────────────────┘
```
- Card: `bg2` fill, 16px radius, `1px solid white-06` border.
- Hover: lift 8px, drop shadow appears.
- **No card-level gradient border.** No colored left-border on the card itself (the highlight sub-box is the only place that pattern appears, and it's intentional — it separates "my take" from the project summary).

### Layout rules
- **Padding:** desktop `6rem 3rem` on sections, `8rem 3rem 4rem` on heroes (top generous for the fixed nav).
- **Mobile:** sections collapse to `4rem 1.5rem`.
- **Max width:** 1200px is the implicit cap on text blocks (`max-width: 500px` on section subs, `720px` on case-study body).
- **Grid:** works grid is `repeat(auto-fill, minmax(320px, 1fr))`. About is 2-col 1:1 on desktop, stacks on mobile.
- **Nav is fixed**, height ~60px; hero top padding accounts for it.

### Custom cursor
The site replaces the OS cursor with **two stacked circles**: a 12px solid red dot and a 36px red ring that eases toward the mouse position at 12% per frame. On hover of any interactive element, the dot scales 2× and the ring grows to 60px with a brighter border. **Disabled on mobile** (`cursor: auto`). Interactive elements have `cursor: none` so only the custom cursor shows.

### Iconography — see ICONOGRAPHY section below
---

## ICONOGRAPHY

**The brand's primary icon system is emoji.** This is intentional and consistent with the "zero dependencies" ethos — emoji ship with every OS, need no font loading, and the visual loudness matches the palette.

**Usage patterns:**
- **Project thumbnails:** one large centered emoji per work card (`🛍️` shopping, `🎨` brand, `📊` dashboard, `🌐` web, `📸` photo, `🧑‍🎨` artist).
- **Navigation icons:** none — the nav is text-only.
- **Section decorations:** `✦` (U+2726 four-pointed star) is used as a decorative glyph on eyebrow tags and hover overlays. It's the closest thing to a "brand mark."
- **Callout labels:** `💡` on design-insight boxes, `✉️` on email CTAs, `👋` on contact headers.
- **Social links:** `🎨` Behance, `📸` Instagram, `💼` LinkedIn, `🐙` GitHub.

**No icon font. No SVG icon library. No Lucide / Heroicons / Font Awesome.** The one non-emoji glyph used systemically is the **→ arrow** appended to CTA labels (`查看作品 →`, `View Work →`).

**If you need an icon the emoji set doesn't cover**, match these rules:
1. Check for a Unicode character first (e.g. `✦ ✉ ← → ✓ ×`).
2. Use a single inline `<svg>` with `stroke: currentColor; fill: none; stroke-width: 2px` — Lucide weight. Flag the substitution.
3. Never use an icon font.

**Assets in `assets/`:**
- `assets/logo.txt` — the logo is text (`YN.`), gradient-filled via CSS. No image file exists. See `preview/card-brand-logo.html`.
- `assets/star.svg` — a `✦` four-pointed star, usable as a brand mark when emoji isn't desired.
- `assets/arrow-right.svg` — the standalone `→` as an SVG for when you need it outside a text node.

---

## Font Substitutions (⚠ flag to user)

The source uses `'Segoe UI', system-ui, sans-serif` — a system stack, so there are **no font files in the repo to copy**. This design system substitutes:

| Source | Substitute | Why |
|---|---|---|
| Segoe UI (Latin) | **Inter** (Google Fonts) | Closest geometric-humanist match; renders identically on all OS |
| Segoe UI (CJK) | **Noto Sans TC** (Google Fonts) | Purpose-built for Traditional Chinese; covers zh-HK |

**If you want the original Segoe UI feel**, either (a) keep the substitute for cross-platform consistency, or (b) drop the `--font` token back to `'Segoe UI', system-ui, sans-serif` in `colors_and_type.css` and accept per-OS rendering drift. **Please confirm which you prefer.**

---

## Index — what else is in this folder

```
.
├── README.md                    ← you are here
├── SKILL.md                     ← agent-skill descriptor
├── colors_and_type.css          ← all design tokens
├── fonts/                       ← (empty — source uses system fonts; webfonts loaded from Google)
├── assets/                      ← logos, standalone glyphs
│   ├── logo.txt
│   ├── star.svg
│   └── arrow-right.svg
├── preview/                     ← design-system tab cards (one concept each)
│   ├── card-colors-*.html
│   ├── card-type-*.html
│   ├── card-spacing-*.html
│   ├── card-components-*.html
│   └── card-brand-*.html
├── ui_kits/
│   └── portfolio/               ← the single product surface
│       ├── README.md
│       ├── index.html           ← interactive click-thru of the full site
│       ├── Nav.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Works.jsx
│       ├── Contact.jsx
│       ├── Footer.jsx
│       ├── Button.jsx
│       ├── WorkCard.jsx
│       └── CaseStudy.jsx
└── _source/                     ← original imported codebase (read-only reference)
    ├── README.md
    ├── index.html
    └── work{1-4}.html
```
