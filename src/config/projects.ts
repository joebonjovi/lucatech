export type ProjectPhoto = {
  src: string;
  alt: string;
  title: string;
  caption: string;
  href: string;
};

export const projectPhotos: ProjectPhoto[] = [
  {
    src: "/images/projects/video-doorbell-install.png",
    alt: "Installing a video doorbell on a front door",
    title: "Video doorbell install",
    caption: "Clean mounting and setup at the front entrance",
    href: "/video-doorbell-installation",
  },
  {
    src: "/images/projects/exterior-install.png",
    alt: "Outdoor smart home installation from a ladder",
    title: "Exterior installation",
    caption: "Outdoor cameras and connected devices placed thoughtfully",
    href: "/security-camera-installation",
  },
  {
    src: "/images/projects/network-wiring.png",
    alt: "Home network wiring being organized",
    title: "Home networking",
    caption: "Structured wiring for reliable Wi-Fi and smart devices",
    href: "/home-wifi-installation",
  },
  {
    src: "/images/projects/ceiling-device-install.png",
    alt: "Installing a ceiling smart home device",
    title: "Speaker & ceiling installs",
    caption: "In-ceiling devices installed cleanly in finished rooms",
    href: "/home-audio-installation",
  },
  {
    src: "/images/projects/attic-audio-setup.png",
    alt: "Configuring attic audio equipment",
    title: "Home audio setup",
    caption: "Hidden equipment configured for everyday listening",
    href: "/home-audio-installation",
  },
  {
    src: "/images/projects/wiring-diagnostics.png",
    alt: "Testing low-voltage wiring on site",
    title: "Diagnostics on site",
    caption: "Testing and fixing the systems that keep devices online",
    href: "/home-wifi-installation",
  },
];
