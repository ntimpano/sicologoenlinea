# Project Map: sicologoenlinea

## Tech Stack
- **Framework:** Astro 6.3.7 (static output)
- **Styling:** Tailwind CSS 4.3
- **Hosting:** Cloudflare Pages (static, no adapter)
- **Content:** Astro Content Collections (services, ebooks, blog)

## Core Files
- `astro.config.mjs` — Astro config (static output, sitemap, tailwind plugin)
- `package.json` — Dependencies, scripts
- `public/_headers` — Cloudflare Pages security headers
- `public/_redirects` — Cloudflare Pages redirect rules
- `public/robots.txt` — SEO
- `src/content.config.ts` — Content collection schemas
- `src/layouts/BaseLayout.astro` — Main HTML layout + SEO
- `src/pages/index.astro` — Homepage
- `src/pages/servicios.astro` — Services + Ebooks listing
- `src/pages/sobre-nosotros.astro` — About page
- `src/pages/blog/index.astro` — Blog listing
- `src/pages/blog/[slug].astro` — Blog post template

## Components
- `Header.astro` / `Footer.astro` — Navigation
- `ServiceCard.astro` — Service card (no price display)
- `EbookCard.astro` — Ebook card (no price display)
- `BlogCard.astro` / `BlogSidebar.astro` — Blog UI
- `WhatsAppButton.astro` — WhatsApp CTA (floating + inline)
- `PlaceholderImage.astro` — Placeholder images while real ones are added
- `SEO.astro` — Meta tags + JSON-LD schemas
- `ui/Button.astro`, `ui/Card.astro`, `ui/Container.astro`, `ui/Section.astro` — Design system

## Content Collections
- `src/content/services/` — 3 services (individual, parejas, orientación vocacional)
- `src/content/ebooks/` — 5 ebooks (ansiedad, depresión, autoestima, estrés, relaciones)
- `src/content/blog/` — 3 blog posts

## Utilities
- `src/utils/format.ts` — Price formatting (currently unused after price removal)
- `src/utils/whatsapp.ts` — WhatsApp message templates
- `src/utils/placeholder.ts` — Placeholder image helpers

## Dependency Chain
```
astro.config.mjs → defines static output, sitemap, tailwind
pages/*.astro → BaseLayout → Header, Footer, SEO
pages/servicios.astro → ServiceCard, EbookCard, WhatsAppButton
content collections ← content.config.ts (schemas)
```

## Key Patterns
- All CTAs route through WhatsApp (no payment/checkout)
- Content is markdown-driven via Astro Content Collections
- Prices removed from public-facing pages (May 2025)
- Design system: primary (#16c5b4), secondary (#3bf5cd), accent (#eefffb)

## Deployment
- **Build:** `npm run build` → `dist/`
- **Host:** Cloudflare Pages (static)
- **Domain:** sicologoenlinea.co
- **No SSR, no adapter, no Workers**

## Last Updated
2026-05-23