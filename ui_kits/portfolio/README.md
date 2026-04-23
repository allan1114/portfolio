# Portfolio UI Kit

High-fidelity, interactive recreation of the single-page portfolio template. Click any work card to navigate to its case-study page; the ← in the nav brings you home. Current page and open case persist in `localStorage`.

## Files

- `index.html` — entry; mounts React app, loads Babel + JSX parts
- `styles.css` — all component styles, scoped with the `pk-` prefix
- `PartsA.jsx` — `Cursor`, `Nav`, `Blobs`, `Button`, `Hero`, `About`
- `PartsB.jsx` — `Works`, `WorkCard`, `Contact`, `Footer`, `CaseStudy`, plus the `WORKS` dataset

## Component coverage

| Component | Role |
|---|---|
| `Cursor` | Custom two-layer cursor with easing + hover-scale |
| `Nav` | Fixed top nav, two variants: home (links) / case (← back) |
| `Blobs` | Three blurred floating color washes |
| `Button` | `primary` (gradient + glow) and `ghost` (outlined) |
| `Hero` | Full-viewport splash with tag, animated gradient title, CTAs |
| `About` | Two-col grid with placeholder image + bio + skills |
| `WorkCard` | Tinted gradient thumb, tags, title, desc, insight box |
| `Works` | Grid + header |
| `Contact` | CTA, email button, social links |
| `Footer` | Copyright line |
| `CaseStudy` | Hero w/ meta, alternating sections, highlight, stats grid |

## Notes

- All 4 works open a real case-study layout, each with its own stats + copy.
- `pk-reveal` class + IntersectionObserver re-binds on every page change.
- Custom cursor hides on mobile (≤ 768px).
