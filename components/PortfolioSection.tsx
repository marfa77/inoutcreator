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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mb-10 max-w-xl text-sm leading-relaxed text-forest-800/55">
            A selection of gardens across Dubai — each shaped by site, light,
            and the rhythm of everyday life.
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={setSelected}
              />
            ))}
          </div>
          <p className="mt-10 text-center font-display text-base italic text-forest-800/40">
            Select a project to explore
          </p>
        </div>
      </section>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
