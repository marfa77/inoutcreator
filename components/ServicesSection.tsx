import { services } from "@/lib/services";
import { SectionDivider } from "./SectionDivider";

export function ServicesSection() {
  return (
    <>
      <SectionDivider label="Services" dark />
      <section id="services" className="bg-forest-950 py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mx-auto mb-14 max-w-2xl text-center text-sm leading-relaxed text-sand-200/55">
            From a focused consultation to a full design package and on-site
            supervision — tailored to the scale and ambition of your garden.
          </p>
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.id}
                className="group flex flex-col border border-white/10 bg-forest-900/50 p-8 transition-all duration-500 hover:border-bronze-400/40 hover:bg-forest-900 sm:p-10"
              >
                <div className="mb-6 h-px w-10 bg-bronze-400 transition-all group-hover:w-16" />
                <h3 className="font-display text-2xl text-sand-50">
                  {service.title}
                </h3>
                <p className="mt-5 flex-1 text-sm leading-7 text-sand-200/55">
                  {service.description}
                </p>
                <p className="mt-10 font-display text-2xl text-bronze-400">
                  {service.price}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
