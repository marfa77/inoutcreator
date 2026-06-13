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
      <section id="portfolio" className="bg-white py-10 sm:py-14">
        <div className="overflow-x-auto pb-2">
          <div className="flex gap-4 px-4 sm:gap-5 sm:px-6 lg:px-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={setSelected}
              />
            ))}
          </div>
        </div>
        <p className="mt-6 px-4 text-center text-xs lowercase text-neutral-400 sm:px-6 lg:px-8">
          click a project to read more
        </p>
      </section>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
