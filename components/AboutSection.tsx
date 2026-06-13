import Image from "next/image";
import { assetPath } from "@/lib/paths";
import { profile } from "@/lib/profile";
import { SectionDivider } from "./SectionDivider";

export function AboutSection() {
  return (
    <>
      <SectionDivider label="About" />
      <section id="about" className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[340px_1fr] lg:items-start lg:gap-16">
            <div className="hidden overflow-hidden rounded-sm shadow-[0_8px_30px_rgba(0,0,0,0.06)] lg:block">
              <Image
                src={assetPath("/portrait.png")}
                alt={`${profile.name} — ${profile.role}`}
                width={680}
                height={850}
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
                I create landscapes where nature becomes part of a thoughtfully
                designed way of living.
              </h2>
              <div className="mt-8 space-y-5">
                {profile.about.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-base leading-7 text-neutral-600"
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
