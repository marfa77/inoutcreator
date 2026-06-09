import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  ExternalLink,
  Mail,
  Phone,
  Users,
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { siteConfig } from "@/lib/config";
import { profile } from "@/lib/profile";

export const metadata: Metadata = {
  title: "Генеральный директор | АЗС и нефтегазовое оборудование",
  description: profile.summary,
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafbfc] text-brand-900">
      <Navigation />

      <main>
        {/* Hero */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_340px] lg:items-center">
            <div className="animate-fade-in order-2 lg:order-1">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-brand-500">
                {profile.titles.join(" · ")}
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {profile.fullName}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-700 sm:text-xl">
                {profile.headline}
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-brand-500">
                {profile.summary}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
                >
                  <Mail className="h-4 w-4" />
                  Написать
                </a>
                <a
                  href={siteConfig.company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-200 px-6 py-3 text-sm font-semibold text-brand-700 transition-colors hover:border-brand-500 hover:text-brand-900"
                >
                  {siteConfig.company.name}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 flex flex-col gap-2 text-sm text-brand-500">
                {siteConfig.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/[\s()-]/g, "")}`}
                    className="inline-flex items-center gap-2 hover:text-brand-900"
                  >
                    <Phone className="h-4 w-4" />
                    {phone}
                  </a>
                ))}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 hover:text-brand-900"
                >
                  <Mail className="h-4 w-4" />
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <aside className="order-1 lg:order-2">
              <div className="overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-sm">
                <Image
                  src="/avatar.png"
                  alt={profile.fullName}
                  width={680}
                  height={850}
                  className="aspect-[4/5] w-full object-cover object-top"
                  priority
                />
                <div className="p-6">
                  <p className="text-sm leading-6 text-brand-500">
                    {profile.resilience}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-brand-500">
                    {profile.team}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Metrics */}
        <section className="border-y border-brand-100 bg-white">
          <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {profile.metrics.map((metric) => (
                <div key={metric.label} className="text-center sm:text-left">
                  <p className="text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm text-brand-500">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About / Focus */}
        <section id="about" className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-500">
              Компетенции
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Управление, операции и развитие бизнеса
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {profile.focusAreas.map((area) => (
                <article
                  key={area.title}
                  className="rounded-2xl border border-brand-100 bg-white p-6 transition-shadow hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold">{area.title}</h3>
                  <p className="mt-3 leading-7 text-brand-500">
                    {area.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Clients */}
        <section className="border-t border-brand-100 bg-brand-900 text-white">
          <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
              <div className="flex items-center gap-3">
                <Building2 className="h-5 w-5 text-brand-100" />
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-100">
                  Ключевые клиенты и партнёры
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {profile.clients.map((client) => (
                  <span
                    key={client}
                    className="rounded-full border border-white/20 px-4 py-2 text-sm text-brand-50"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="container mx-auto px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-500">
              Опыт работы
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Карьерный путь
            </h2>
            <div className="mt-12 space-y-10">
              {profile.experience.map((item, index) => (
                <article
                  key={`${item.role}-${item.period}`}
                  className="relative border-l-2 border-brand-200 pl-8"
                >
                  <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-brand-500 bg-white" />
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-xl font-semibold">{item.role}</h3>
                    <p className="text-sm text-brand-500">{item.period}</p>
                  </div>
                  <p className="mt-1 font-medium text-brand-700">
                    {item.company}
                  </p>
                  <p className="mt-3 leading-7 text-brand-500">
                    {item.description}
                  </p>
                  {item.responsibilities && item.responsibilities.length > 0 && (
                    <ul className="mt-4 space-y-2 text-sm leading-6 text-brand-500">
                      {item.responsibilities.map((r) => (
                        <li key={r} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.outcomes.length > 0 && (
                    <div className="mt-4 rounded-xl bg-brand-50 p-4">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-500">
                        Достижения
                      </p>
                      <ul className="space-y-2 text-sm leading-6 text-brand-700">
                        {item.outcomes.map((outcome) => (
                          <li key={outcome} className="flex gap-3">
                            <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {index === 0 && (
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700">
                      <Users className="h-3.5 w-3.5" />
                      Текущая должность
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section
          id="education"
          className="border-t border-brand-100 bg-white py-20"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-500">
                  Образование
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight">
                  Образование и развитие
                </h2>
                {profile.education.map((edu) => (
                  <article key={edu.year} className="mt-8">
                    <p className="text-sm font-medium text-brand-500">
                      {edu.year}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold">
                      {edu.institution}
                    </h3>
                    <p className="mt-1 text-brand-500">{edu.specialty}</p>
                  </article>
                ))}
                <div className="mt-8">
                  <p className="text-sm font-medium text-brand-500">Языки</p>
                  {profile.languages.map((lang) => (
                    <p key={lang.name} className="mt-2 text-brand-700">
                      {lang.name} — {lang.level}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-500">
                  Повышение квалификации
                </p>
                <ul className="mt-6 space-y-3">
                  {profile.training.map((item) => (
                    <li
                      key={item}
                      className="border-b border-brand-100 pb-3 text-sm leading-6 text-brand-600 last:border-0"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-500">
                    Хобби
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {profile.hobbies.map((hobby) => (
                      <span
                        key={hobby}
                        className="rounded-full bg-brand-50 px-3 py-1.5 text-sm text-brand-600"
                      >
                        {hobby}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl rounded-3xl bg-brand-900 p-8 text-white sm:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-100">
              Контакты
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Готов к диалогу
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-brand-100">
              Открыт для профессиональных предложений в сфере управления,
              операционной эффективности и развития бизнеса в нефтегазовом
              секторе.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-900 transition-colors hover:bg-brand-50"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </a>
              {siteConfig.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/[\s()-]/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" />
                  {phone}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-brand-100 pt-8 text-sm text-brand-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.fullName}</p>
          <a
            href={siteConfig.company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-900"
          >
            {siteConfig.company.name}
          </a>
        </div>
      </footer>
    </div>
  );
}
