# PingPongTech Blog

Astro-based tri-lingual cybersecurity brand site scaffold for Cloudflare Pages.

## Commands

```bash
npm install
npm run dev
npm run build
```

## Structure

- `src/pages/[lang]/...`: localized routes for EN, Traditional Chinese, and Japanese
- `src/content/...`: articles, topics, and resources collections
- `public/styles/global.css`: base visual system and responsive layout

## Deployment

Cloudflare Pages can build this project with:

- Build command: `npm run build`
- Output directory: `dist`
