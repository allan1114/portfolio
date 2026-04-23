---
name: modern-portfolio-design
description: Use this skill to generate well-branded interfaces and assets for the Modern Portfolio brand (dark-theme designer/developer single-page portfolio), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill first — it contains the CONTENT FUNDAMENTALS, VISUAL FOUNDATIONS, and ICONOGRAPHY rules that define the brand. Then explore:

- `colors_and_type.css` — drop-in CSS tokens (colors, gradients, type scale, radii, shadows, motion)
- `assets/` — the text logo, star mark (✦), and arrow SVG. There are no other image files; this brand uses emoji for iconography.
- `preview/` — design-system reference cards showing swatches, type specimens, components
- `ui_kits/portfolio/` — React + JSX recreation of the full product (nav, hero, about, works, contact, case-study) — reuse these components or lift their styles

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy the assets and link `colors_and_type.css`, then build static HTML. If working on production code, lift tokens from `colors_and_type.css` and mirror the component patterns in `ui_kits/portfolio/`.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions (bilingual? one or many pages? case-study layout or a new surface?), and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

**Brand rules, in brief:**
- Dark background `#0D0D0D` with raised surface `#161616`. Never light themes.
- Four vibrant accents (`#FF4D6D`, `#FFBE0B`, `#3A86FF`, `#8338EC`) used as text, border, or tinted @ 22% opacity for bgs — never as fully-saturated fills.
- 135° gradients everywhere: logo, primary button, hero title, about placeholder.
- Bilingual: English eyebrows + Traditional Chinese body copy is the default voice.
- Emoji is the icon system. Don't reach for SVG libraries.
- Hover = `translateY(-3px)` lift; cards = `-8px` + deep black shadow. No bounces, no rotations.
- Three blurred color blobs behind every hero; custom two-layer cursor on desktop.
