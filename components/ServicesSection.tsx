import { services } from "@/lib/services";
import { SectionDivider } from "./SectionDivider";

export function ServicesSection() {
  return (
    <>
      <SectionDivider label="Services" />
      <section id="services" className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-px bg-neutral-200 sm:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.id}
                className="flex flex-col bg-white p-8 sm:p-10"
              >
                <h3 className="text-lg font-bold tracking-tight text-neutral-900">
                  {service.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-neutral-500">
                  {service.description}
                </p>
                <p className="mt-8 text-base font-semibold text-neutral-900">
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
