import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Old /services/* detail URLs moved to top-level service pages.
    return [
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
      {
        source: "/home-network-installation",
        destination: "/home-wifi-installation",
        permanent: true,
      },
      {
        source: "/home-network-installation/:town",
        destination: "/home-wifi-installation/:town",
        permanent: true,
      },
      {
        source: "/home-automation",
        destination: "/smart-home-installation",
        permanent: true,
      },
      {
        source: "/home-automation/:town",
        destination: "/smart-home-installation/:town",
        permanent: true,
      },
      {
        source: "/home-speaker-installation",
        destination: "/home-audio-installation",
        permanent: true,
      },
      {
        source: "/home-speaker-installation/:town",
        destination: "/home-audio-installation/:town",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
