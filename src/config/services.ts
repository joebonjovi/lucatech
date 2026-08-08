export type ServiceAudience = "residential" | "commercial";

export type ServiceImage = {
  src: string;
  alt: string;
};

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
  images?: ServiceImage[];
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
  | "network"
  | "integration"
  | "automation"
  | "lighting"
  | "audio"
  | "speaker"
  | "theater";

/**
 * Residential services are shown site-wide. Each service has a generic page
 * at its top-level href plus one page per SEO town (see service-area.ts).
 * The home page grid features services that have project photos (`images`).
 */
export const services: Service[] = [
  {
    id: "security-camera-installation",
    title: "Security Camera Installation",
    shortTitle: "Security Cameras",
    slug: "security-camera-installation",
    href: "/security-camera-installation",
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
    images: [
      {
        src: "/images/projects/exterior-install.png",
        alt: "Luca Technologies installing outdoor home technology from a ladder",
      },
      {
        src: "/images/projects/exterior-install-close.png",
        alt: "Close-up of exterior smart home installation work under a balcony",
      },
    ],
    seo: {
      title: "Home Security Camera Installation | Luca Technologies",
      description:
        "Residential security camera installation in Doylestown, PA and surrounding communities. Professional placement, clean installs, and mobile viewing setup for homeowners.",
    },
  },
  {
    id: "video-doorbell-installation",
    title: "Video Doorbell Installation",
    shortTitle: "Video Doorbells",
    slug: "video-doorbell-installation",
    href: "/video-doorbell-installation",
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
    featured: true,
    icon: "doorbell",
    images: [
      {
        src: "/images/projects/video-doorbell-install.png",
        alt: "Installing a video doorbell on a front door with a power drill",
      },
    ],
    seo: {
      title: "Video Doorbell Installation | Luca Technologies",
      description:
        "Professional video doorbell installation for homeowners. Wired or wireless setup with mobile alerts and remote access.",
    },
  },
  {
    id: "smart-lock-installation",
    title: "Smart Lock Installation",
    shortTitle: "Smart Locks",
    slug: "smart-lock-installation",
    href: "/smart-lock-installation",
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
    id: "smart-home-installation",
    title: "Smart Home Installation",
    shortTitle: "Smart Home",
    slug: "smart-home-installation",
    href: "/smart-home-installation",
    description:
      "Complete smart home setup — cameras, locks, lighting, thermostats, sensors, and voice assistants working together as one simple system.",
    longDescription:
      "Bring your home technology together so it feels simple to use. We plan, install, and configure smart home devices — cameras, locks, lighting, thermostats, sensors, and voice assistants — and we are honest when brands or ecosystems do not work well together.",
    benefits: [
      "Whole-home planning and setup",
      "Compatible device selection",
      "Voice assistant pairing when supported",
      "Single-app control where possible",
      "Clear guidance on ecosystem limits",
      "Homeowner-friendly walkthrough",
    ],
    audience: "residential",
    icon: "integration",
    seo: {
      title: "Smart Home Installation | Luca Technologies",
      description:
        "Professional smart home installation for homeowners. Cameras, locks, lighting, thermostats, and voice assistants set up to work together.",
    },
  },
  {
    id: "home-automation",
    title: "Home Automation",
    shortTitle: "Home Automation",
    slug: "home-automation",
    href: "/home-automation",
    description:
      "Routines and automations that connect your devices — lights, locks, thermostats, and cameras responding automatically.",
    longDescription:
      "Make your home respond to you. We build automations and routines that tie your devices together — lights that turn on when you arrive, doors that lock at bedtime, thermostats that adjust on their own — using the platforms and devices you already trust.",
    benefits: [
      "Custom routines and schedules",
      "Arrival and departure automations",
      "Cross-device triggers",
      "Voice assistant integration",
      "Practical, reliable configurations",
    ],
    audience: "residential",
    icon: "automation",
    seo: {
      title: "Home Automation Services | Luca Technologies",
      description:
        "Home automation setup for homeowners. Routines connecting lights, locks, thermostats, and cameras — professionally configured.",
    },
  },
  {
    id: "home-wifi-installation",
    title: "Home Wi-Fi & Networking",
    shortTitle: "Wi-Fi & Networking",
    slug: "home-wifi-installation",
    href: "/home-wifi-installation",
    description:
      "Mesh Wi-Fi, ethernet runs, switches, and organized network setups that eliminate dead zones and keep every device reliably online.",
    longDescription:
      "Reliable connectivity is the foundation of a connected home. We plan and install mesh Wi-Fi, wired ethernet, switches, and access points so cameras, streaming, work-from-home setups, and smart devices stay connected — with clean cable management and thorough testing.",
    benefits: [
      "Dead zone assessment",
      "Mesh and whole-home Wi-Fi",
      "Ethernet cable runs",
      "Switch and access point setup",
      "Support for cameras and streaming",
      "Organized equipment and cable management",
      "Speed and reliability testing",
    ],
    audience: "residential",
    featured: true,
    icon: "wifi",
    images: [
      {
        src: "/images/projects/network-wiring.png",
        alt: "Organizing and terminating home network wiring at a structured media panel",
      },
      {
        src: "/images/projects/wiring-diagnostics.png",
        alt: "Testing home low-voltage wiring with a diagnostic tool",
      },
    ],
    seo: {
      title: "Home Wi-Fi & Network Installation | Luca Technologies",
      description:
        "Home Wi-Fi and networking installation — mesh coverage, ethernet runs, and organized setups that keep cameras, streaming, and smart devices online.",
    },
  },
  {
    id: "home-theater-installation",
    title: "Home Theater Installation",
    shortTitle: "Home Theater",
    slug: "home-theater-installation",
    href: "/home-theater-installation",
    description:
      "TV mounting, surround sound, projectors, and media rooms — installed cleanly with hidden wiring and simple controls.",
    longDescription:
      "Turn a living room or basement into a place people actually want to watch movies. We mount TVs, install projectors and screens, set up surround sound, hide the wiring, and configure everything so one remote or app runs the show.",
    benefits: [
      "TV mounting with concealed wiring",
      "Surround sound speaker placement",
      "Projector and screen installation",
      "Receiver and source configuration",
      "Simple remote or app control",
      "Calibration and walkthrough",
    ],
    audience: "residential",
    icon: "theater",
    seo: {
      title: "Home Theater Installation | Luca Technologies",
      description:
        "Professional home theater installation — TV mounting, surround sound, projectors, and hidden wiring for homeowners.",
    },
  },
  {
    id: "smart-lighting-installation",
    title: "Smart Lighting Installation",
    shortTitle: "Smart Lighting",
    slug: "smart-lighting-installation",
    href: "/smart-lighting-installation",
    description:
      "Smart switches, dimmers, and bulbs with schedules, scenes, and app or voice control throughout your home.",
    longDescription:
      "Control your lighting from your phone, set schedules that make the house look lived-in, and dim the lights for movie night without leaving the couch. We install smart switches, dimmers, and bulbs and configure scenes that fit how you actually live.",
    benefits: [
      "Smart switch and dimmer installation",
      "Scene and schedule setup",
      "App and voice control",
      "Away-from-home lighting for security",
      "Works with existing fixtures",
    ],
    audience: "residential",
    icon: "lighting",
    seo: {
      title: "Smart Lighting Installation | Luca Technologies",
      description:
        "Smart lighting installation for homeowners. Smart switches, dimmers, schedules, and voice control professionally set up.",
    },
  },
  {
    id: "home-audio-installation",
    title: "Home Audio Installation",
    shortTitle: "Home Audio",
    slug: "home-audio-installation",
    href: "/home-audio-installation",
    description:
      "Whole-home and multi-room audio systems with clean installation and easy streaming control.",
    longDescription:
      "Music in the kitchen, on the patio, and in the living room — all from your phone. We design and install whole-home and multi-room audio systems, wire them cleanly, and set up streaming so playing music anywhere is effortless.",
    benefits: [
      "Multi-room audio design",
      "In-ceiling and on-wall options",
      "Streaming service setup",
      "Clean, concealed wiring",
      "Zone control from your phone",
    ],
    audience: "residential",
    featured: true,
    icon: "audio",
    images: [
      {
        src: "/images/projects/attic-audio-setup.png",
        alt: "Configuring attic audio equipment for a whole-home sound system",
      },
    ],
    seo: {
      title: "Home Audio Installation | Luca Technologies",
      description:
        "Whole-home and multi-room audio installation with clean wiring and simple streaming control for homeowners.",
    },
  },
  {
    id: "home-speaker-installation",
    title: "Home Speaker Installation",
    shortTitle: "Speaker Installation",
    slug: "home-speaker-installation",
    href: "/home-speaker-installation",
    description:
      "In-ceiling, in-wall, bookshelf, and outdoor speakers — mounted, wired, and tuned properly.",
    longDescription:
      "Great speakers only sound great when they are placed and installed well. We mount and wire in-ceiling, in-wall, bookshelf, and outdoor speakers, connect them to your amplifier or streaming system, and tune everything for the room.",
    benefits: [
      "In-ceiling and in-wall installation",
      "Outdoor and patio speakers",
      "Proper placement and mounting",
      "Amplifier and receiver hookup",
      "Concealed speaker wiring",
    ],
    audience: "residential",
    featured: true,
    icon: "speaker",
    images: [
      {
        src: "/images/projects/ceiling-device-install.png",
        alt: "Installing an in-ceiling speaker or connected ceiling device",
      },
    ],
    seo: {
      title: "Home Speaker Installation | Luca Technologies",
      description:
        "Professional speaker installation — in-ceiling, in-wall, and outdoor speakers mounted, wired, and tuned for your home.",
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

/** Services shown on the home page grid — only those with project photos. */
export const featuredServices = residentialServices.filter(
  (s) => (s.images?.length ?? 0) > 0,
);

export const featuredService =
  services.find((s) => s.featured) ?? services[0];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
