# Spec: Migrate from Vercel to Cloudflare Pages (Static)

**Plan ID:** 20260523-migrate-cloudflare-pages
**Status:** Draft
**Date:** 2026-05-23

---

## Outcome

When this change is complete, `sicologoenlinea.co` deploys as a **pure static site** on Cloudflare Pages with zero Vercel dependencies, all security headers preserved, and all redirects working.

The site MUST build with `npm run build` and deploy the `dist/` folder directly via the Cloudflare Pages dashboard. No adapter, no Workers, no SSR runtime.

## Non-Goals

- **No SSR or edge runtime.** The site is `output: 'static'` and stays that way.
- **No `@astrojs/cloudflare` adapter.** That adapter is for SSR on Workers. Static sites don't need it.
- **No `wrangler`.** Cloudflare Pages dashboard handles deployment directly from `dist/`.
- **No CI/CD pipeline changes.** The deploy config lives in the Cloudflare dashboard, not in code.
- **No content or SEO changes.** Only hosting infrastructure changes.

## Constraints

| Constraint | Detail |
|---|---|
| Output mode | `static` (Astro generates HTML files, no server) |
| Build command | `npm run build` → `astro build` → `dist/` |
| Deploy method | Cloudflare Pages dashboard: connect repo, set build command & output dir |
| Headers format | Cloudflare `public/_headers` file (plain text) |
| Redirects format | Cloudflare `public/_redirects` file (plain text) |
| Node version | Must match current (check `.nvmrc` or dashboard if exists) |
| Zero new runtime deps | Only remove `@astrojs/vercel`, add nothing |

## Current State (Baseline)

### Files to modify/remove

| File | Current state | Action |
|---|---|---|
| `astro.config.mjs` | Imports `vercel` from `@astrojs/vercel`, uses `adapter: vercel()` | Remove import, remove `adapter` line |
| `package.json` | Has `@astrojs/vercel` in `dependencies` | Remove the dependency |
| `vercel.json` | Security headers + `/home` → `/` redirect | Delete file entirely |
| `.gitignore` | Missing `.vercel/` and `.wrangler/` entries | Add both entries |
| `.vercel/` directory | Exists in project root | Delete |

### Files to create

| File | Purpose |
|---|---|
| `public/_headers` | Security headers in Cloudflare format |
| `public/_redirects` | Redirect rules in Cloudflare format |

## Acceptance Criteria

### AC-1: `astro build` succeeds without adapter
- `astro.config.mjs` MUST NOT import or reference any adapter.
- `npm run build` MUST complete without errors.
- `dist/` MUST contain static HTML files.

### AC-2: `vercel.json` is deleted
- The file `vercel.json` MUST NOT exist in the project root.

### AC-3: `@astrojs/vercel` removed from `package.json`
- `package.json` MUST NOT contain `@astrojs/vercel` in `dependencies` or `devDependencies`.
- `npm install` MUST succeed after the change.

### AC-4: `astro.config.mjs` has no adapter
- The config MUST NOT import any adapter package.
- The config MUST NOT have an `adapter` property.
- All other config (site, integrations, vite plugins) MUST be preserved unchanged.

### AC-5: `public/_headers` has all security headers
The file MUST exist and contain these headers applied to `/*`:

```
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### AC-6: `public/_headers` has fonts cache rule
The file MUST include a separate block for `/fonts/*`:

```
/fonts/*
  Cache-Control: public, max-age=31536000, immutable
```

### AC-7: `public/_redirects` has the `/home` redirect
The file MUST exist and contain:

```
/home / 301
```

The status code MUST be `301` (permanent), matching the current `vercel.json` `"permanent": true`.

### AC-8: `.gitignore` updated
The `.gitignore` MUST include:
```
.vercel/
.wrangler/
```

### AC-9: `.vercel/` directory removed
The `.vercel/` directory MUST NOT exist in the project after the change.

### AC-10: Clean install and build
- `npm install` MUST succeed with no errors or missing peer dependencies.
- `npm run build` MUST produce a clean `dist/` with static HTML.
- No adapter-related warnings in build output.

## Edge Cases

### EC-1: Fonts cache header precedence
Cloudflare `_headers` applies the **most specific** matching rule last. The `/fonts/*` block MUST appear after `/*` so it overrides the generic headers with the font-specific `Cache-Control`. If the order is reversed, fonts won't get the immutable cache policy.

### EC-2: Redirect format correctness
- Cloudflare `_redirects` uses space-separated format: `from to status`.
- No commas, no JSON, no quotes.
- A single `/home / 301` line handles the one redirect from `vercel.json`.

### EC-3: Existing `_headers` or `_redirects`
Neither `public/_headers` nor `public/_redirects` currently exist. If they did, we'd need to merge. Since they don't, we create them from scratch.

### EC-4: `.vercel/` is already partially gitignored
The current `.gitignore` has `.vercel/output/` but NOT `.vercel/` itself. The root `.vercel/` directory contains config beyond just `output/`. We MUST add the full `.vercel/` entry to catch everything.

### EC-5: Build still references Vercel
After removing the adapter, if `astro build` warns about missing adapter, it means something else references it. The config MUST be clean — no stale imports, no commented-out adapter lines.

## Backward Compatibility

### Preserved
- All pages, routes, and content (static HTML, unchanged)
- Security headers (migrated to `_headers` format)
- Redirects (migrated to `_redirects` format)
- SEO: `sitemap`, `robots.txt`, canonical URLs
- All other Astro integrations (`@astrojs/sitemap`, `@tailwindcss/vite`)
- Fonts caching strategy

### Broken (intentional)
- **Vercel deployment:** The site will no longer deploy on Vercel. This is the point.
- **Vercel-specific features:** If any Vercel-specific features were used (analytics, edge middleware), they're gone. None were found in this project.

## Verification Plan

After implementation, run these checks in order:

1. `npm install` — clean install, no errors
2. `npm run build` — succeeds, no adapter warnings
3. Verify `dist/` contains static HTML files
4. Verify `public/_headers` exists with correct content
5. Verify `public/_redirects` exists with correct content
6. Verify `vercel.json` is deleted
7. Verify `.vercel/` directory is gone
8. Verify `astro.config.mjs` has no adapter import or usage
9. Verify `package.json` has no `@astrojs/vercel`
10. Verify `.gitignore` has `.vercel/` and `.wrangler/`

## Cloudflare Pages Dashboard Config

After merging, the Cloudflare Pages project should be configured as:

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` (or leave blank) |
| Framework preset | Astro (or None) |
| Node version | 18+ (match project requirements) |
