import { residentialServices } from "@/config/services";
import { siteConfig } from "@/config/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const staticRoutes = [
    "",
    "/services",
    "/about",
    "/service-area",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const serviceRoutes = residentialServices
    .filter((s) => s.href.startsWith("/services/"))
    .map((s) => s.href);

  return [...staticRoutes, ...serviceRoutes].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/services/") ? 0.8 : 0.7,
  }));
}
