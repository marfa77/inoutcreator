"use client";

import { useState } from "react";
import { portfolioYears, projects } from "@/lib/projects";
import { SectionDivider } from "./SectionDivider";
import { ProjectCard, ProjectModal } from "./ProjectCard";
import type { Project } from "@/lib/projects";

export function PortfolioSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <SectionDivider label="Portfolio" rightLabel={portfolioYears} />
      <section id="portfolio" className="bg-sand-50 py-14 sm:py-20">
        <div className="container mx-auto mb-10 px-4 sm:px-6 lg:px-8">
          <p className="max-w-xl text-sm leading-relaxed text-forest-800/55">
            A selection of gardens across Dubai — each shaped by site, light,
            and the rhythm of everyday life.
          </p>
        </div>
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-5 px-4 sm:gap-6 sm:px-6 lg:px-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={setSelected}
              />
            ))}
          </div>
        </div>
        <p className="mt-8 text-center font-display text-base italic text-forest-800/40">
          Select a project to explore
        </p>
      </section>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
