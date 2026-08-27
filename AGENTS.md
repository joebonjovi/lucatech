<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Local SEO strategy (critical)

There are **no per-town landing pages**. Each residential service has exactly one page at its top-level slug (`/[service]`), SEO-targeted to **Doylestown, PA** (home base) while page copy and metadata note the surrounding Bucks and Montgomery County communities we also serve.

- Source of truth: `src/config/services.ts` (per-service `seo` titles/descriptions mention Doylestown) + `src/config/service-area.ts` (`primaryCity`, `nearbyCommunitiesLabel`, `serviceCities`, `serviceZips`)
- Route: `src/app/[service]/page.tsx` (`dynamicParams = false`, `generateStaticParams`)
- Template: `src/components/shared/ServiceDetailPage.tsx` (H1 is "{Service} in Doylestown, PA"; the aside links to `/service-area` and lists nearby communities)
- Sitemap covers static routes + the 8 service pages only (`src/app/sitemap.ts`)
- Old `/{service}/{town}` URLs (from the retired town-page matrix) permanently redirect to `/{service}` in `next.config.ts` — keep those redirects

When adding, renaming, merging, or removing a service:
1. Update `services.ts` (and form options / projects / nav as needed), keeping the `seo` title/description Doylestown-focused
2. Add permanent redirects in `next.config.ts` for both `/{old-slug}` and `/{old-slug}/:town` (town URLs may still be indexed), and add the new slug to the `serviceSlugs` redirect list there
