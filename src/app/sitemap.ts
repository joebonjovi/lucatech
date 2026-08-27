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

  const serviceRoutes = residentialServices.map((s) => s.href);

  const priorityFor = (path: string) => {
    if (path === "") return 1;
    if (serviceRoutes.includes(path)) return 0.8;
    return 0.6;
  };

  return [...staticRoutes, ...serviceRoutes].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: priorityFor(path),
  }));
}
