import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import { siteConfig } from "@/config/site";
import { buildPageMetadata, defaultKeywords } from "@/lib/seo";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: `${siteConfig.name} | Smart Home Security & Technology Installation`,
    description: siteConfig.tagline,
    path: "/",
  }),
  metadataBase: new URL(siteConfig.url),
  keywords: defaultKeywords,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  category: "Home Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${plusJakarta.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans text-ink">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
