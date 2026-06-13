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
    <div className="min-h-screen bg-[#faf9f7] text-neutral-900">
      <Navigation />
      <main>
        <HeroSection />
        <PortfolioSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <footer className="border-t border-neutral-200 bg-white py-8">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 text-sm lowercase text-neutral-400 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p>{profile.role} · {profile.location}</p>
        </div>
      </footer>
    </div>
  );
}
