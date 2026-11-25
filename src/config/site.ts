const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const siteConfig = {
  name: "Luca Technologies",
  legalName: "Luca Technologies",
  tagline:
    "Security cameras, Wi-Fi, and technology installation for homes and businesses in Doylestown, PA and across Bucks and Montgomery counties.",
  shortDescription:
    "Security and technology installation for homes and businesses",
  phone: "445-205-4958",
  phoneHref: "tel:+14452054958",
  email: "jluca@jgltechnologies.com",
  emailHref: "mailto:jluca@jgltechnologies.com",
  url: siteUrl,
  logo: {
    src: "/images/logo.png",
    width: 750,
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
    contactHeading: "Tell Us About Your Project",
  },
  hero: {
    lead: "Local installation and support",
    headline: "Technology for homes and businesses",
    supporting:
      "Security cameras, Wi-Fi, smart locks, and displays for homes, offices, storefronts, and managed properties.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
