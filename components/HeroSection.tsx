import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { assetPath } from "@/lib/paths";
import { profile } from "@/lib/profile";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(196,165,116,0.18),_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(36,48,41,0.06),_transparent_50%)]" />

      <div className="container relative mx-auto px-4 pb-20 pt-10 sm:px-6 sm:pb-28 sm:pt-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-end gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="max-w-2xl">
            <p className="text-[11px] font-medium uppercase tracking-luxury text-bronze-500">
              {profile.brand} · {profile.role} · {profile.location}
            </p>
            <h1 className="font-display mt-5 text-balance text-[2.75rem] font-medium leading-[1.05] tracking-tight text-forest-950 sm:text-5xl lg:text-[4.25rem]">
              {profile.headline}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-forest-800/60">
              Bespoke outdoor environments shaped through structure, proportion,
              and an understanding of how people live.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 bg-forest-900 px-8 py-4 text-[11px] font-medium uppercase tracking-luxury text-sand-50 transition-all hover:bg-bronze-600"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-2 py-4 text-[11px] font-medium uppercase tracking-luxury text-forest-800/50 transition-colors hover:text-bronze-500"
              >
                View portfolio
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <div className="absolute -right-6 -top-6 hidden h-full w-full border border-bronze-400/30 lg:block" />
            <div className="relative overflow-hidden bg-sand-100 shadow-editorial">
              <Image
                src={assetPath("/portrait.png")}
                alt={`${profile.name} — ${profile.role}`}
                width={720}
                height={900}
                className="aspect-[4/5] w-full object-cover object-top"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-950/80 via-forest-950/20 to-transparent px-6 pb-6 pt-24">
                <p className="font-display text-2xl text-sand-50">
                  {profile.name}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-luxury text-sand-200/70">
                  Founder, {profile.brand}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
