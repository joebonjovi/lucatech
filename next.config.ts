import type { NextConfig } from "next";

// Current top-level service slugs. Per-town SEO landing pages were removed —
// old /{service}/{town} URLs permanently redirect to the main service page.
const serviceSlugs = [
  "security-camera-installation",
  "video-doorbell-installation",
  "smart-lock-installation",
  "smart-home-installation",
  "home-wifi-installation",
  "home-theater-installation",
  "smart-lighting-installation",
  "home-audio-installation",
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old /services/* detail URLs moved to top-level service pages.
      {
        source: "/services/security-cameras",
        destination: "/security-camera-installation",
        permanent: true,
      },
      {
        source: "/services/video-doorbell",
        destination: "/video-doorbell-installation",
        permanent: true,
      },
      {
        source: "/services/smart-locks",
        destination: "/smart-lock-installation",
        permanent: true,
      },
      {
        source: "/services/home-wifi",
        destination: "/home-wifi-installation",
        permanent: true,
      },
      {
        source: "/services/smart-home-integration",
        destination: "/smart-home-installation",
        permanent: true,
      },
      // Renamed/merged services (including their old town URLs).
      {
        source: "/home-network-installation",
        destination: "/home-wifi-installation",
        permanent: true,
      },
      {
        source: "/home-network-installation/:town",
        destination: "/home-wifi-installation",
        permanent: true,
      },
      {
        source: "/home-automation",
        destination: "/smart-home-installation",
        permanent: true,
      },
      {
        source: "/home-automation/:town",
        destination: "/smart-home-installation",
        permanent: true,
      },
      {
        source: "/home-speaker-installation",
        destination: "/home-audio-installation",
        permanent: true,
      },
      {
        source: "/home-speaker-installation/:town",
        destination: "/home-audio-installation",
        permanent: true,
      },
      // Retired per-town SEO landing pages → main service pages.
      ...serviceSlugs.map((slug) => ({
        source: `/${slug}/:town`,
        destination: `/${slug}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
