import { Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { profile } from "@/lib/profile";
import { SectionDivider } from "./SectionDivider";

export function ContactSection() {
  return (
    <>
      <SectionDivider label="Contact" />
      <section id="contact" className="bg-neutral-900 py-16 text-white sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Get in touch
            </h2>
            <p className="mt-4 text-base leading-7 text-neutral-300">
              {profile.contactMessage}
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex w-full items-center justify-center gap-2 bg-white px-8 py-4 text-sm font-semibold lowercase text-neutral-900 transition-colors hover:bg-neutral-100 sm:w-auto"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 border border-white/30 px-8 py-4 text-sm font-semibold lowercase text-white transition-colors hover:bg-white/10 sm:w-auto"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
