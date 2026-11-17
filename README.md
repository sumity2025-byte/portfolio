# Sumit Yadav — Portfolio

React 19 + TypeScript + Vite 8 + Tailwind v4 + Motion + GSAP + Three.js.
Dark editorial design, real-time WebGL hero, scroll-linked motion, zero backend.

---

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
npm run preview  # serve the production build locally
npx tsc --noEmit # typecheck
```

Node 20+ required.

---

## Where things live

```
src/
  data/site.ts            ← ALL content + the exported types for it
  lib/utils.ts            ← cn() helper (shadcn convention)
  components/
    Nav.tsx               sticky nav + mobile sheet + active-section pill
    Hero.tsx              headline, cinematic reveal, live IST clock, 3D mount
    Stats.tsx             count-up stat bar, marquee, employer logo strip
    About.tsx             4 lanes + target roles
    Experience.tsx        expandable role timeline (6 roles)
    Work.tsx              7 case-study cards + full case sheet modal
    Console.tsx           hosts the glass dashboard (section id="console")
    Frameworks.tsx        4 framework images + keyboard-navigable lightbox
    Process.tsx           scroll-linked 4-step rail + proof metrics
    Skills.tsx            4 skill groups + certification cards
    Education.tsx         3 institutions + achievements grid
    Documents.tsx         resume / SOP / credential links
    Contact.tsx           email, phone, LinkedIn, GitHub, copy-email
    Footer.tsx
    Icon.tsx              inline SVG set, exports `IconName`
    Chrome.tsx            grain, vignette, cursor spotlight, scroll progress
    ui/                   shadcn-style primitives
      SectionHead.tsx  Reveal.tsx  Counter.tsx
      adjustable-glass-dashboard.tsx   ← the glass workspace component
  three/HeroScene.tsx     raw Three.js particle sphere (no R3F — 46% smaller)
public/
  logos/  frameworks/  docs/  favicon.svg  _headers (Cloudflare)
vercel.json               Vercel build + cache/security headers
components.json           shadcn config for `npx shadcn@latest add …`
tsconfig.json             `@/*` → `./src/*`
```

### Editing content

Everything is in `src/data/site.ts`. To change a stat, a bullet, a job title or a
document link, edit that file only. No component holds copy.

---

## The glass dashboard (`src/components/ui/adjustable-glass-dashboard.tsx`)

A self-contained "glass workspace" — overview / activity / savings / reports
views, a cash-flow chart, CSV export, a live glass-material editor, and a
notification popover.

### Why `src/components/ui/`

That folder is what `components.json` tells the shadcn CLI to write to
(`aliases.ui = "@/components/ui"`). Keeping that path means any future
`npx shadcn@latest add button` lands next to this component, imports keep
resolving through `@/components/ui/...`, and the CLI never has to be
reconfigured. `@/lib/utils` (the `cn()` helper) is the other half of the same
contract.

### Props / data it takes

All props are optional — with none, it renders an honest empty state.

| Prop | Type | Notes |
|---|---|---|
| `brand`, `userName` | `string` | top bar label and greeting/avatar initial |
| `balance`, `balanceChange` | `number`, `{percent,label}` | headline figure + delta chip |
| `account` | `{name,lastFour}` | account row inside the balance panel |
| `currency` | ISO code | defaults to `USD`; this site passes `INR` |
| `transactions` | `WorkspaceTransaction[]` | `{id,name,category,date,amount,status}`; negative = spend |
| `goals` | `WorkspaceGoal[]` | `{id,name,saved,target,color?}`, progress is derived |
| `cashFlowPeriods` | `WorkspaceCashFlowPeriod[]` | `{id,label,points,description?}` per selectable range |
| `initialPeriodId` | `string` | which period selector starts selected |
| `footerNote`, `savingsNote` | `string` | caption + savings-view note |
| `glass` | `Partial<GlassSettings>` | `{blur,opacity,saturation,tint,edge}`, all clamped |
| `onGlassChange` | `(s: GlassSettings) => void` | fire-and-forget; lets a host persist the material |
| `theme` / `useHostTheme` | `"system"\|"light"\|"dark"` / `boolean` | host-theme mode reads Tailwind `--color-*` tokens |
| `backgroundImage`, `className`, `style` | | room photo + escape hatches |

### State it owns

No context provider, no store. Local `useState` only: current view, glass
material, settings/notification popovers, period, search filter, toast text.
`useGSAP` (scoped to the root ref) replays the staggered panel reveal whenever
the view changes, and reverts itself on cleanup. Nothing is persisted — pass
`onGlassChange` if the host wants to.

### Assets

- **Icons** — `lucide-react` only, no SVG files.
- **Room photograph** — optional `backgroundImage`. `Console.tsx` points it at an
  Unsplash photo (`images.unsplash.com`), and the component silently drops the
  image on load failure and falls back to the tinted flat background.
- **Fonts** — inherits the host page; the component sets no webfont.

### Responsive behaviour

320 → 1550+ px, no horizontal scroll at 390 px (verified). The left icon rail
collapses at ≤1050 px, the bottom dock becomes an inline tab bar at ≤700 px,
two-column panel grids become single column, and the settings panel becomes a
near-full-width sheet. Text truncates rather than overflows. Honors
`prefers-reduced-motion` and `prefers-color-scheme`.

### Where it sits in the app

`App.tsx` renders it in its own section between **Work** and **Frameworks**, and
the nav has a `Console` entry. Because the component pulls in GSAP, the section
is `React.lazy`-loaded behind an `IntersectionObserver` gate in `App.tsx` — the
chunk (16 KB + 27 KB gsap) is only fetched when the reader is ~700 px away, so
first paint is untouched.

> Every figure in `Console.tsx` is **invented sample data** for layout only and
> is labelled as such in the UI. It is not Sumit's balance, pay or savings.

---

## Deploy to Vercel (recommended)

```bash
npm i -g vercel     # or use npx
vercel login        # interactive — you must authenticate yourself
vercel              # first deploy: creates the project, gives a preview URL
vercel --prod       # promote to production
```

Or connect the GitHub repo in the Vercel dashboard: framework preset **Vite**,
build `npm run build`, output `dist`. `vercel.json` already pins those, plus
immutable caching for `/assets/*` and basic security headers.

Every push to `main` redeploys. Pull requests get preview URLs.

### Alternative hosts

- **Cloudflare Pages** — `public/_headers` is already there for it.
- **Netlify** — build `npm run build`, publish `dist`. Identical process.
- **GitHub Pages** — needs `base: '/<repo-name>/'` in `vite.config.ts` plus an
  Actions workflow.

---

## Performance budget

| Asset | Size (gzip) | Loaded |
|---|---|---|
| app JS | ~88 KB | immediately |
| motion | ~55 KB | immediately |
| CSS | ~11 KB | immediately |
| console + gsap | ~16 KB + ~27 KB | **lazy chunk, ~700 px before the section** |
| three.js | ~131 KB | **desktop only, idle, after first paint** |

Guards already in place:

- WebGL is skipped entirely on viewports ≤ 768px and under `prefers-reduced-motion`.
- `requestIdleCallback` defers the Three.js download.
- Render loop pauses on `document.visibilitychange`.
- The glass console mounts only when it is nearly on screen.
- All motion components degrade to static under `prefers-reduced-motion`.
- Images are `loading="lazy"` with fixed aspect ratios (no layout shift).
- `vercel.json` / `_headers` set immutable caching on hashed assets.

If you want to go further: replace the particle sphere with a static poster image
(one-line change in `Hero.tsx`), or drop `gsap` and re-implement the console's
stagger with Motion.

---

## Known open items

1. **Five PDFs are missing from the repo** and were 404 on the old site. They now
   render as "Pending" badges instead of dead links:
   `GATE.pdf`, `Certifications-Consult.pdf`, `Verification_Prod.pdf`,
   `Live_project_consult.pdf`, `Live_project_prod.pdf`.
   Drop them into `public/docs/` and flip `pending` → `href` in `src/data/site.ts`.

2. **Three facts conflict** between the old site body and its print-resume block.
   Resolved below to the body values — change the constants if the print block is right:
   - IIM-C CGPA — `6.44 / 9` (print block said `3.35 / 4.0`)
   - NIT-K degree — `Mechanical Engineering` (print block said `Industrial`)
   - Shopdeck title — `Assistant Manager — Growth` (print block said `Sr. Analyst`)

3. **Contact form** — deliberately no form. A static site can't accept
   submissions without a backend. Options when you want one: Formspree
   (50/month free), Web3Forms, or a Vercel/Cloudflare function.

---

Built as a static export. No cookies, no analytics, no tracking.
