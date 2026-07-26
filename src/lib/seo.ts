import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

const defaultOgImage = "/images/hero-home.jpg";

export function absoluteUrl(path = "/") {
  const base = siteConfig.url.replace(/\/$/, "");
  if (path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [{ url: absoluteUrl(defaultOgImage), width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(defaultOgImage)],
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}

export const defaultKeywords = [
  "home security camera installation",
  "security camera installer",
  "residential security camera installation",
  "video doorbell installation",
  "smart lock installation",
  "smart home installer",
  "home Wi-Fi installation",
  "mesh Wi-Fi installation",
  "smart home security",
  "home technology installation",
  "security camera installation near me",
  "smart home installation near me",
  "Montgomery County PA",
  "Bucks County PA",
  "Doylestown PA",
];
