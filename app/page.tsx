import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/lib/config";
import { profile } from "@/lib/profile";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf9f7] text-neutral-900">
      <Navigation />
      <main>
        <HeroSection />
        <PortfolioSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <footer className="border-t border-neutral-200 bg-white py-10">
        <div className="container mx-auto flex flex-col items-center gap-6 px-4 sm:px-6 lg:px-8">
          <Logo variant="full" href="" className="h-12 opacity-80" />
          <div className="flex w-full max-w-6xl flex-col items-center justify-between gap-2 text-sm lowercase text-neutral-400 sm:flex-row">
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
