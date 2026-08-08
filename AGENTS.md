<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# SEO service × town pages (critical)

Besides top-level service pages (`/[service]`), every residential service also gets a dedicated SEO landing page per town in `seoTowns` (`/[service]/[town]`).

- Source of truth: `src/config/services.ts` + `src/config/service-area.ts` (`seoTowns`)
- Route: `src/app/[service]/[town]/page.tsx` (`dynamicParams = false`, `generateStaticParams`)
- Template: `src/components/shared/ServiceTownPage.tsx`
- Sitemap includes all combinations (`src/app/sitemap.ts`)
- These pages are **not** in site navigation; they exist for local SEO only

Current matrix: **10 services × 9 towns = 90 town pages** (plus 10 top-level service pages).

Towns: Montgomeryville, North Wales, Lansdale, Doylestown, Blue Bell, Ambler, Chalfont, Warrington, Horsham.

When adding, renaming, merging, or removing a service:
1. Update `services.ts` (and form options / projects / nav as needed)
2. Add permanent redirects in `next.config.ts` for both `/{old-slug}` and `/{old-slug}/:town`
3. Town pages regenerate automatically from config — no hand-editing each URL
