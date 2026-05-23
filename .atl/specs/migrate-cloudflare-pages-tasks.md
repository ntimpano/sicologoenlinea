# Tasks: Migrate from Vercel to Cloudflare Pages (Static)

**Plan ID:** 20260523-migrate-cloudflare-pages
**Date:** 2026-05-23

---

## Wave 1: Core Config Changes

### Task 1.1: Clean astro.config.mjs
- **Files:** `astro.config.mjs`
- **Done when:** No import of `@astrojs/vercel`, no `adapter` property, rest unchanged
- **Verify:** `grep -r vercel astro.config.mjs` returns nothing

### Task 1.2: Remove @astrojs/vercel from package.json
- **Files:** `package.json`
- **Done when:** `@astrojs/vercel` not in dependencies, `npm install` succeeds
- **Verify:** `grep vercel package.json` returns nothing

### Task 1.3: Update .gitignore
- **Files:** `.gitignore`
- **Done when:** Has `.vercel/` and `.wrangler/` entries
- **Verify:** `grep -E 'vercel|wrangler' .gitignore` shows both

### Task 1.4: Delete vercel.json and .vercel/ directory
- **Files:** `vercel.json`, `.vercel/`
- **Done when:** Files don't exist
- **Verify:** `ls vercel.json .vercel/` returns error

## Wave 2: Cloudflare Config + Verification

### Task 2.1: Create public/_headers
- **Files:** `public/_headers`
- **Done when:** File exists with all security headers + fonts cache rule in Cloudflare format
- **Verify:** `cat public/_headers` matches spec AC-5 and AC-6

### Task 2.2: Create public/_redirects
- **Files:** `public/_redirects`
- **Done when:** File exists with `/home / 301` line
- **Verify:** `cat public/_redirects` matches spec AC-7

### Task 2.3: Full verification
- **Done when:** All ACs from spec pass
- **Verify:**
  1. `npm install` succeeds
  2. `npm run build` succeeds, no adapter warnings
  3. `dist/` contains static HTML
  4. No Vercel artifacts remain

---

## Review Workload Forecast

Estimated changed lines: ~50 (excluding package-lock.json regeneration)
400-line budget risk: Low
Chained PRs recommended: No
Delivery strategy: single-pr