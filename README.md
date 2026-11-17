# Sumit Yadav — Portfolio

React 19 + Vite 8 + Tailwind v4 + Framer Motion + Three.js.
Dark editorial design, real-time WebGL hero, scroll-linked motion, zero backend.

---

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
npm run preview  # serve the production build locally
```

Node 20+ required.

---

## Where things live

```
src/
  data/site.js          ← ALL content. Edit here, nowhere else.
  components/
    Nav.jsx             sticky nav + mobile sheet + active-section pill
    Hero.jsx            headline, cinematic reveal, live IST clock, 3D mount
    Stats.jsx           count-up stat bar, marquee, employer logo strip
    About.jsx           4 lanes + target roles
    Experience.jsx      expandable role timeline (6 roles)
    Work.jsx            7 case-study cards + full case sheet modal
    Frameworks.jsx      4 framework images + keyboard-navigable lightbox
    Process.jsx         scroll-linked 4-step rail + proof metrics
    Skills.jsx          4 skill groups + certification cards
    Education.jsx       3 institutions + achievements grid
    Documents.jsx       resume / SOP / credential links
    Contact.jsx         email, phone, LinkedIn, GitHub, copy-email
    Footer.jsx
  three/HeroScene.jsx   raw Three.js particle sphere (no R3F — 46% smaller)
  components/ui/        Reveal, Counter, Tilt, SectionHead
public/
  logos/  frameworks/  docs/  favicon.svg  _headers
```

### Editing content

Everything is in `src/data/site.js`. To change a stat, a bullet, a job title or a
document link, edit that file only. No component holds copy.

---

## Deploy to Cloudflare Pages (recommended)

1. Push this folder to a GitHub repo.
2. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Pick the repo. Settings:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: `20`
4. Deploy. You get `<project>.pages.dev` in ~60 seconds.
5. **Custom domains** → add your domain. Free SSL, free unlimited bandwidth.

Every push to `main` redeploys automatically. Pull requests get preview URLs.

### Alternative hosts

- **Netlify** — build `npm run build`, publish `dist`. Identical process.
- **Vercel** — auto-detects Vite. Hobby tier is personal/non-commercial only (fine for this).
- **GitHub Pages** — needs `base: '/<repo-name>/'` in `vite.config.js` plus an Actions workflow.

---

## Performance budget

| Asset | Size (gzip) | Loaded |
|---|---|---|
| app JS | ~87 KB | immediately |
| framer-motion | ~55 KB | immediately |
| three.js | ~131 KB | **desktop only, idle, after first paint** |
| CSS | ~10 KB | immediately |

Guards already in place:

- WebGL is skipped entirely on viewports ≤ 768px and under `prefers-reduced-motion`.
- `requestIdleCallback` defers the Three.js download.
- Render loop pauses on `document.visibilitychange`.
- All motion components degrade to static under `prefers-reduced-motion`.
- Images are `loading="lazy"` with fixed aspect ratios (no layout shift).
- `_headers` sets immutable caching on hashed assets.

If you want to go further, the two wins are (a) swap the ember cursor
spotlight for nothing on low-end devices, (b) replace the particle sphere with a
static poster image. Both are one-line changes in `Hero.jsx`.

---

## Known open items

1. **Five PDFs are missing from the repo** and were 404 on the old site. They now
   render as "Pending" badges instead of dead links:
   `GATE.pdf`, `Certifications-Consult.pdf`, `Verification_Prod.pdf`,
   `Live_project_consult.pdf`, `Live_project_prod.pdf`.
   Drop them into `public/docs/` and flip `pending` → `href` in `src/data/site.js`.

2. **Three facts conflict** between the old site body and its print-resume block.
   Resolved below to the body values — change the constants if the print block is right:
   - IIM-C CGPA — `6.44 / 9` (print block said `3.35 / 4.0`)
   - NIT-K degree — `Mechanical Engineering` (print block said `Industrial`)
   - Shopdeck title — `Assistant Manager — Growth` (print block said `Sr. Analyst`)

3. **Contact form** — deliberately no form. A static site can't accept
   submissions without a backend. Options when you want one: Formspree
   (50/month free), Web3Forms, or a Cloudflare Worker.

---

Built as a static export. No cookies, no analytics, no tracking.
