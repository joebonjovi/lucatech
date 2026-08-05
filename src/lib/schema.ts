import { siteConfig } from "@/config/site";
import { residentialServices } from "@/config/services";
import { serviceCities, serviceZips } from "@/config/service-area";
import { absoluteUrl } from "@/lib/seo";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.name,
    description: siteConfig.tagline,
    url: absoluteUrl("/"),
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: absoluteUrl(siteConfig.logo.src),
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: siteConfig.serviceAreaLabel,
      },
      ...serviceCities.map((city) => ({
        "@type": "City",
        name: city.name,
      })),
      ...serviceZips.map((zip) => ({
        "@type": "PostalCode",
        name: zip,
        addressCountry: "US",
      })),
    ],
    address: {
      "@type": "PostalAddress",
      addressRegion: siteConfig.address.region,
      addressLocality: siteConfig.address.locality,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    openingHours: siteConfig.hours.schema,
    priceRange: "$$",
    knowsAbout: residentialServices.map((s) => s.title),
  };
}

export function serviceSchema(service: {
  title: string;
  description: string;
  href: string;
  areaServed?: { city: string; zips: readonly string[] };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: absoluteUrl(service.href),
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: absoluteUrl("/"),
    },
    areaServed: service.areaServed
      ? [
          {
            "@type": "City",
            name: service.areaServed.city,
            address: {
              "@type": "PostalAddress",
              addressRegion: "PA",
              addressCountry: "US",
            },
          },
          ...service.areaServed.zips.map((zip) => ({
            "@type": "PostalCode",
            name: zip,
            addressCountry: "US",
          })),
        ]
      : siteConfig.serviceAreaLabel,
    serviceType: service.title,
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
