import Image from "next/image";
import { assetPath } from "@/lib/paths";
import { profile } from "@/lib/profile";
import { SectionDivider } from "./SectionDivider";

export function AboutSection() {
  return (
    <>
      <SectionDivider label="About" />
      <section id="about" className="bg-[#f7f4ef] py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-20">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full border border-bronze-400/25" />
              <div className="relative overflow-hidden shadow-editorial">
                <Image
                  src={assetPath("/portrait.png")}
                  alt={`${profile.name} — ${profile.role}`}
                  width={680}
                  height={850}
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
            </div>
            <div className="lg:pt-6">
              <p className="text-[11px] font-medium uppercase tracking-luxury text-bronze-500">
                Philosophy
              </p>
              <h2 className="font-display mt-4 text-balance text-3xl leading-tight text-forest-950 sm:text-4xl lg:text-[2.75rem]">
                I create landscapes where nature becomes part of a thoughtfully
                designed way of living.
              </h2>
              <div className="mt-10 space-y-6 border-l border-bronze-400/40 pl-6">
                {profile.about.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-base leading-8 text-forest-800/65"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
