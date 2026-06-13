import { profile } from "@/lib/profile";
import { SectionDivider } from "./SectionDivider";

export function AboutSection() {
  return (
    <>
      <SectionDivider label="About" />
      <section id="about" className="bg-[#f7f4ef] py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
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
      </section>
    </>
  );
}
