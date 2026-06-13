"use client";

import { useState } from "react";
import { X } from "lucide-react";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  onSelect: (project: Project) => void;
};

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      className="group relative w-[280px] shrink-0 overflow-hidden text-left sm:w-[320px] lg:w-[360px]"
    >
      <div
        className={cn(
          "relative aspect-[4/5] bg-gradient-to-br transition-transform duration-500 group-hover:scale-[1.02]",
          project.gradient
        )}
      >
        <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/5" />
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-neutral-800 backdrop-blur-sm">
            {project.location}
          </span>
          <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-neutral-800 backdrop-blur-sm">
            {project.year}
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 pt-16">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        </div>
      </div>
    </button>
  );
}

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/50 p-4 sm:items-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
    >
      <div
        className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-sm bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={cn(
            "relative h-48 bg-gradient-to-br sm:h-56",
            project.gradient
          )}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-neutral-700 transition-colors hover:bg-white"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-6">
            <div className="flex gap-2">
              <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-neutral-800">
                {project.location}
              </span>
              <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-neutral-800">
                {project.year}
              </span>
            </div>
            <h2
              id="project-title"
              className="mt-3 text-2xl font-bold text-white"
            >
              {project.title}
            </h2>
          </div>
        </div>
        <div className="p-6 sm:p-8">
          <p className="text-base leading-7 text-neutral-600">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}
