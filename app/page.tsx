import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";
import { siteConfig } from "@/lib/config";
import { profile } from "@/lib/profile";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f4ef] text-forest-950">
      <Navigation />
      <main>
        <HeroSection />
        <PortfolioSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <footer className="border-t border-sand-200 bg-forest-950 py-12 text-sand-200/50">
        <div className="container mx-auto flex flex-col items-center gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex w-full max-w-6xl flex-col items-center justify-between gap-3 text-[11px] uppercase tracking-luxury sm:flex-row">
            <p>
              © {new Date().getFullYear()} {profile.brand} · {profile.name}
            </p>
            <p>
              {profile.role} · {profile.location}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
