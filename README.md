# HKRISE organization hub

Open landing page for the [hkrise](https://github.com/hkrise) GitHub organization.

**Live URL:** [https://hkrise.github.io/](https://hkrise.github.io/)

This single-page Astro site introduces the HKRISE family and links out to dedicated topic sites (currently hosted on Vicellken GitHub Pages).

## Stack

- Astro (static site generation)
- Plain CSS design tokens (coastal palette shared with the family sites)
- GitHub Pages via Actions (`.github/workflows/deploy.yml`)

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Org Pages use `site: https://hkrise.github.io` and `base: /` (see `astro.config.mjs`).

## Add a project later

1. Add an image under `public/projects/`.
2. Append one object to the `projects` array in [`src/data/projects.ts`](src/data/projects.ts).

No layout changes required — the Projects section maps the array and cycles accent colours.

## GitHub Pages setup

1. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**
2. Push to `main` (or run the workflow manually)
