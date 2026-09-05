# Juan Hoyos — personal site

Personal site of Juan Hoyos, Senior Cloud & Platform Engineer.
Live at **https://2203juan.github.io/my-site/**

## Stack

- **React 18 + TypeScript**, built with **Vite**
- **Tailwind CSS** with a token-based theme (light / dark, persisted to `localStorage`)
- **Framer Motion** for scroll-reveal animation
- **Lucide** icons
- Deployed to **GitHub Pages** by `.github/workflows/deploy.yml` on every push to `main`

## Scripts

```bash
npm install
npm run dev        # local dev server
npm run typecheck  # tsc --noEmit
npm run lint       # eslint (flat config, TS-aware)
npm run build      # tsc && vite build -> dist/
npm run preview    # serve the production build locally
```

## Where the content lives

Everything on the page is data, not markup:

| What | Where |
|---|---|
| Bio, metrics, impact, skills, experience, projects, education | `src/data/profile.ts` |
| Navigation items | `NAV_ITEMS` in `src/data/profile.ts` |
| Colors, radii, fonts | CSS variables in `src/index.css` + `tailwind.config.js` |
| Résumé PDF, photo, OG image, favicon | `public/` |
| Page title, meta, Open Graph, JSON-LD | `index.html` |

Adding a GitHub URL to `PROFILE.social.github` makes the GitHub icon appear
automatically — it is hidden while the value is empty.

## Sections

`Hero → About → Impact → Skills → Experience → AI Work → Education → Contact`

Section components live in `src/components/`; `ui/Section.tsx` and `ui/Card.tsx`
carry the shared layout and motion.

## Deploying

Push to `main`. The workflow runs `npm ci && npm run build` and publishes `dist/`
to GitHub Pages. `base` in `vite.config.ts` must stay in sync with the repository
name.
