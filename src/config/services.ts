export type ServiceAudience = "residential" | "commercial";

export type Service = {
  id: string;
  title: string;
  shortTitle: string;
  slug: string;
  href: string;
  description: string;
  longDescription: string;
  benefits: string[];
  audience: ServiceAudience;
  featured?: boolean;
  icon: ServiceIconName;
  seo: {
    title: string;
    description: string;
  };
};

export type ServiceIconName =
  | "camera"
  | "doorbell"
  | "lock"
  | "wifi"
  | "garage"
  | "integration"
  | "upgrade"
  | "troubleshoot";

/**
 * Residential services are shown site-wide.
 * Commercial entries are reserved for future pages — filter by audience.
 */
export const services: Service[] = [
  {
    id: "security-cameras",
    title: "Security Camera Installation",
    shortTitle: "Security Cameras",
    slug: "security-cameras",
    href: "/services/security-cameras",
    description:
      "Professional placement and setup of indoor and outdoor cameras for entrances, garages, driveways, backyards, and other important areas.",
    longDescription:
      "Luca Technologies helps homeowners plan camera placement, select appropriate equipment, install devices cleanly, configure mobile access, and understand how to use their system. Whether you need coverage at the front door, garage, driveway, or backyard, we focus on practical layouts that fit your property.",
    benefits: [
      "Strategic camera placement",
      "Indoor and outdoor options",
      "Wired and wireless systems",
      "Mobile viewing",
      "Motion alerts",
      "Local recording options",
      "Clean installation",
      "System walkthrough after installation",
    ],
    audience: "residential",
    featured: true,
    icon: "camera",
    seo: {
      title: "Home Security Camera Installation | Luca Technologies",
      description:
        "Residential security camera installation in Doylestown, PA and surrounding communities. Professional placement, clean installs, and mobile viewing setup for homeowners.",
    },
  },
  {
    id: "video-doorbell",
    title: "Video Doorbell Installation",
    shortTitle: "Video Doorbells",
    slug: "video-doorbell",
    href: "/services/video-doorbell",
    description:
      "Installation and configuration of wired or wireless video doorbells with mobile alerts and remote access.",
    longDescription:
      "See who is at the door from your phone. We install and configure wired or wireless video doorbells, help with chime compatibility, and set up alerts so you can monitor entrances with confidence.",
    benefits: [
      "Wired and wireless options",
      "Mobile alerts and live view",
      "Chime and power assessment",
      "Clean mounting and weather considerations",
      "App setup and walkthrough",
    ],
    audience: "residential",
    icon: "doorbell",
    seo: {
      title: "Video Doorbell Installation | Luca Technologies",
      description:
        "Professional video doorbell installation for homeowners. Wired or wireless setup with mobile alerts and remote access.",
    },
  },
  {
    id: "smart-locks",
    title: "Smart Lock Installation",
    shortTitle: "Smart Locks",
    slug: "smart-locks",
    href: "/services/smart-locks",
    description:
      "Installation and setup of keypad, app-controlled, and connected smart locks.",
    longDescription:
      "Upgrade your entry with keypad, app-controlled, or connected smart locks. We assess door compatibility, install carefully, and configure access for your household.",
    benefits: [
      "Keypad and app-controlled locks",
      "Door and hardware compatibility check",
      "Secure installation",
      "User code and app setup",
      "Guidance on everyday use",
    ],
    audience: "residential",
    icon: "lock",
    seo: {
      title: "Smart Lock Installation | Luca Technologies",
      description:
        "Smart lock installation for residential homes. Keypad and app-controlled locks installed and configured professionally.",
    },
  },
  {
    id: "home-wifi",
    title: "Home Wi-Fi and Mesh Networking",
    shortTitle: "Home Wi-Fi",
    slug: "home-wifi",
    href: "/services/home-wifi",
    description:
      "Improve coverage, eliminate dead zones, and support cameras, streaming devices, home offices, and connected technology.",
    longDescription:
      "Reliable Wi-Fi is the foundation of a connected home. We plan and install mesh and whole-home networking so cameras, streaming, work-from-home setups, and smart devices stay connected.",
    benefits: [
      "Dead zone assessment",
      "Mesh and whole-home coverage",
      "Support for cameras and streaming",
      "Clean equipment placement",
      "Network setup and testing",
    ],
    audience: "residential",
    icon: "wifi",
    seo: {
      title: "Home Wi-Fi & Mesh Network Installation | Luca Technologies",
      description:
        "Home Wi-Fi and mesh network installation to eliminate dead zones and support cameras, streaming, and smart devices.",
    },
  },
  {
    id: "smart-garage",
    title: "Smart Garage and Entry Technology",
    shortTitle: "Smart Garage & Entry",
    slug: "smart-garage",
    href: "/services#smart-garage",
    description:
      "Install and configure connected garage controllers, entry sensors, and related security technology.",
    longDescription:
      "Protect and monitor garages and entry points with connected controllers, sensors, and related security technology tailored to your home.",
    benefits: [
      "Connected garage controllers",
      "Entry sensors",
      "Integration with existing apps when compatible",
      "Practical placement and setup",
    ],
    audience: "residential",
    icon: "garage",
    seo: {
      title: "Smart Garage & Entry Technology | Luca Technologies",
      description:
        "Smart garage door technology and entry sensor installation for residential homes.",
    },
  },
  {
    id: "smart-home-integration",
    title: "Smart Home Device Integration",
    shortTitle: "Smart Home Integration",
    slug: "smart-home-integration",
    href: "/services/smart-home-integration",
    description:
      "Connect compatible cameras, locks, lighting, thermostats, sensors, and voice assistants into a simpler system.",
    longDescription:
      "Bring compatible devices together so your home technology feels simpler to use. We help with setup and integration across cameras, locks, lighting, thermostats, sensors, and voice assistants — and we are honest when brands or ecosystems do not work well together.",
    benefits: [
      "Compatible device setup",
      "Simpler everyday control",
      "Voice assistant pairing when supported",
      "Clear guidance on ecosystem limits",
      "Homeowner-friendly walkthrough",
    ],
    audience: "residential",
    icon: "integration",
    seo: {
      title: "Smart Home Installation & Integration | Luca Technologies",
      description:
        "Smart home device setup and integration for homeowners. Connect compatible cameras, locks, lighting, and more.",
    },
  },
  {
    id: "security-upgrades",
    title: "Security System Upgrades",
    shortTitle: "System Upgrades",
    slug: "security-upgrades",
    href: "/services#security-upgrades",
    description:
      "Upgrade outdated cameras, networking equipment, wiring, recorders, and smart devices.",
    longDescription:
      "Refresh older cameras, networking gear, wiring, recorders, and smart devices with practical upgrades that improve reliability and usability.",
    benefits: [
      "Camera and recorder upgrades",
      "Networking equipment updates",
      "Wiring improvements",
      "Phased upgrade options",
    ],
    audience: "residential",
    icon: "upgrade",
    seo: {
      title: "Security System Upgrades | Luca Technologies",
      description:
        "Upgrade outdated home security cameras, networking, and smart devices with professional residential installation.",
    },
  },
  {
    id: "troubleshooting",
    title: "Smart Home Troubleshooting",
    shortTitle: "Troubleshooting",
    slug: "troubleshooting",
    href: "/services#troubleshooting",
    description:
      "Diagnose connection problems, device failures, poor Wi-Fi, app issues, and unreliable existing installations.",
    longDescription:
      "Already have devices that will not stay online, apps that fail, or a DIY install that never quite worked? We diagnose and help get your system back on track.",
    benefits: [
      "Connection and app diagnostics",
      "Wi-Fi and coverage issues",
      "Device failure assessment",
      "Unreliable install remediation",
    ],
    audience: "residential",
    icon: "troubleshoot",
    seo: {
      title: "Smart Home Troubleshooting | Luca Technologies",
      description:
        "Troubleshoot smart home systems, Wi-Fi issues, app problems, and unreliable DIY installations.",
    },
  },
];

/** Reserved for future commercial pages — not shown in primary navigation. */
export const commercialServicesFuture = [
  {
    id: "commercial-cameras",
    title: "Commercial Security Cameras",
    audience: "commercial" as const,
  },
  {
    id: "access-control",
    title: "Access Control",
    audience: "commercial" as const,
  },
  {
    id: "business-networking",
    title: "Business Networking",
    audience: "commercial" as const,
  },
  {
    id: "building-automation",
    title: "Building Automation",
    audience: "commercial" as const,
  },
  {
    id: "commercial-integration",
    title: "Commercial Technology Integration",
    audience: "commercial" as const,
  },
];

export const residentialServices = services.filter(
  (s) => s.audience === "residential",
);

export const featuredService =
  services.find((s) => s.featured) ?? services[0];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
