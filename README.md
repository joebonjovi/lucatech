# Luca Technologies Website

Modern Next.js website for **Luca Technologies** — residential smart home security and connected home technology installation serving Doylestown, PA and surrounding communities.

## Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Framer Motion (sparing scroll/entrance animations)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Configure company details

Edit these files before launch:

| File | Purpose |
|------|---------|
| `src/config/site.ts` | Company name, phone, email, URL, hours, CTAs, social links |
| `src/config/service-area.ts` | Cities and ZIP codes (easy to extend) |
| `src/config/services.ts` | Service copy, SEO, and commercial placeholders |
| `src/config/faq.ts` | FAQ content |
| `src/config/testimonials.ts` | Customer testimonials (ships as samples — replace before launch) |
| `src/config/navigation.ts` | Main and footer navigation |

Replace placeholders such as `[Phone Number]` and `[Email Address]`. The site URL is
now driven by the `NEXT_PUBLIC_SITE_URL` environment variable (see below) for accurate
metadata, sitemap, and schema.

## Environment variables

Copy `.env.example` to `.env.local` for local development, and set the same variables in
your host's dashboard for production.

| Variable | Required | Purpose |
|----------|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Yes | Canonical production URL (e.g. `https://www.lucatechnologies.com`), no trailing slash. Used for SEO, sitemap, canonical tags, JSON-LD. |
| `RESEND_API_KEY` | Yes (for the form) | API key from [resend.com](https://resend.com) used to send contact form emails. |
| `CONTACT_TO_EMAIL` | No | Inbox that receives submissions. Defaults to `siteConfig.email`. |
| `CONTACT_FROM_EMAIL` | No | "From" address; must be on a domain verified in Resend. For testing you can use `onboarding@resend.dev`. |

## Contact form

The contact form (`src/components/shared/ContactForm.tsx`) submits to the API route at
`src/app/api/contact/route.ts`, which emails the submission via [Resend](https://resend.com).
It includes required-field validation, a honeypot anti-spam field, and clear
loading/success/error states.

To turn it on:

1. Create a free Resend account and **verify your sending domain** (Domains → Add Domain,
   then add the DNS records at your registrar). Until a domain is verified you can only
   send from `onboarding@resend.dev`.
2. Create an API key and set `RESEND_API_KEY`.
3. Set `CONTACT_TO_EMAIL` (where leads go) and `CONTACT_FROM_EMAIL` (a verified address).

If `RESEND_API_KEY` is missing, the form fails gracefully and tells visitors to call or
email directly. Photo uploads are shown in the UI but are not transmitted yet — visitors
are prompted to email photos separately.

## Deploying (Vercel)

Git is required to deploy. If it is not installed, get it from [git-scm.com](https://git-scm.com/download/win).

1. Push this project to a GitHub repository.
2. Import the repo at [vercel.com/new](https://vercel.com/new) (framework auto-detects as Next.js).
3. Add the environment variables above under **Settings → Environment Variables**.
4. Deploy. Then add your custom domain under **Settings → Domains** and point your DNS as instructed.

`NEXT_PUBLIC_SITE_URL` should match your final domain so SEO metadata and the sitemap are correct.

## Pages

- `/` — Homepage
- `/services` — All residential services
- `/services/security-cameras`
- `/services/video-doorbell`
- `/services/smart-locks`
- `/services/home-wifi`
- `/services/smart-home-integration`
- `/about`
- `/service-area`
- `/contact`
- `/privacy`
- `/terms`

## Assets

- Logo: `public/images/logo.svg` (replace with your official logo file if preferred)
- Hero: `public/images/hero-home.jpg`
- Gallery: placeholder cards until real project photos are added under `public/images/gallery/`

## Contact form

The contact form opens a `mailto:` draft with the submitted fields. Connect Formspree, Resend, or another backend when ready. Photo uploads are accepted in the UI; wire them to your backend for actual storage.

## Future commercial expansion

`src/config/services.ts` includes `commercialServicesFuture` and an `audience` field on services. Filter by `residential` for current UI. Add `/commercial/...` routes later without restructuring the site.

## SEO

- Per-page metadata via `src/lib/seo.ts`
- Local business + service + FAQ JSON-LD via `src/lib/schema.ts`
- `sitemap.ts` and `robots.ts` included

## Notes

- Do not invent certifications, review counts, or years of experience in marketing copy.
- Testimonials in `src/config/testimonials.ts` are sample copy. Replace them with real,
  permissioned quotes and set `testimonialsArePlaceholder` to `false`. A warning banner
  renders in development until you do. Publishing invented reviews can violate FTC rules.
- Privacy and Terms pages are placeholders — have them reviewed before public launch.
