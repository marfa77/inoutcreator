import { ArrowUpRight, Instagram, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { profile } from "@/lib/profile";
import { SectionDivider } from "./SectionDivider";

export function ContactSection() {
  return (
    <>
      <SectionDivider label="Contact" />
      <section id="contact" className="relative overflow-hidden bg-[#f7f4ef] py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(196,165,116,0.12),_transparent_65%)]" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-luxury text-bronze-500">
              Let&apos;s talk
            </p>
            <h2 className="font-display mt-4 text-4xl text-forest-950 sm:text-5xl">
              Begin your garden
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-forest-800/60">
              {profile.contactMessage}
            </p>
            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
              <a
                href={`mailto:${siteConfig.email}`}
                className="group inline-flex w-full items-center justify-center gap-2 bg-forest-900 px-8 py-4 text-[11px] font-medium uppercase tracking-luxury text-sand-50 transition-all hover:bg-bronze-600 sm:w-auto"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.email}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 border border-forest-900/15 px-8 py-4 text-[11px] font-medium uppercase tracking-luxury text-forest-900 transition-all hover:border-bronze-500 hover:text-bronze-600 sm:w-auto"
              >
                <Phone className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 border border-forest-900/15 px-8 py-4 text-[11px] font-medium uppercase tracking-luxury text-forest-900 transition-all hover:border-bronze-500 hover:text-bronze-600 sm:w-auto"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
