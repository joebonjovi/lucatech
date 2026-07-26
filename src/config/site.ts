// Canonical site URL. Set NEXT_PUBLIC_SITE_URL in the hosting environment
// (e.g. https://www.lucatechnologies.com). Falls back to the Vercel-provided
// deployment URL, then localhost for local development.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const siteConfig = {
  name: "Luca Technologies",
  legalName: "Luca Technologies",
  tagline:
    "Professional smart home security and technology installation for safer, more connected homes.",
  shortDescription:
    "Residential smart home security and technology installation",
  phone: "445-205-4958",
  phoneHref: "tel:+14452054958",
  email: "jluca@jgltechnologies.com",
  emailHref: "mailto:jluca@jgltechnologies.com",
  url: siteUrl,
  logo: {
    src: "/images/logo.png",
    width: 520,
    height: 200,
    alt: "Luca Technologies",
  },
  serviceAreaLabel: "Doylestown, PA and surrounding communities",
  address: {
    region: "PA",
    locality: "Doylestown",
    postalCode: "18901",
    country: "US",
  },
  hours: {
    weekdays: "By appointment",
    saturday: "By appointment",
    sunday: "Closed",
    schema: ["Mo-Sa ByAppointment"],
  },
  social: {
    facebook: "#",
    instagram: "#",
    google: "#",
  },
  cta: {
    primary: "Request a Free Consultation",
    secondary: "Explore Our Services",
    contactHeading: "Tell Us About Your Home Technology Project",
  },
  hero: {
    headline: "Make Your Home Smarter",
    supporting:
      "Luca Technologies professionally installs security cameras, video doorbells, smart locks, Wi-Fi systems, and connected home technology.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
