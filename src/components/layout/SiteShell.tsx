import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { ReactNode } from "react";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
