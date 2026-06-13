import Image from "next/image";
import { assetPath } from "@/lib/paths";
import { profile } from "@/lib/profile";

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_auto_auto] lg:items-end lg:gap-8">
        <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
          {profile.headline}
        </h1>

        <div className="w-full max-w-[280px] overflow-hidden rounded-sm bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] lg:max-w-[300px]">
          <Image
            src={assetPath("/portrait.png")}
            alt={`${profile.name} — ${profile.role}`}
            width={600}
            height={750}
            className="aspect-[4/5] w-full object-cover object-top"
            priority
          />
          <div className="border-t border-neutral-100 px-5 py-4">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-neutral-900">
              {profile.name}
            </p>
            <p className="mt-1 text-sm lowercase text-neutral-400">
              {profile.role.toLowerCase()}, {profile.location.toLowerCase()}
            </p>
          </div>
        </div>

        <a
          href="#contact"
          className="inline-flex h-14 w-full items-center justify-center bg-neutral-900 px-8 text-sm lowercase text-white transition-colors hover:bg-neutral-700 sm:w-auto lg:mb-1"
        >
          start a project +
        </a>
      </div>
    </section>
  );
}
