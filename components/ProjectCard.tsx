"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Project } from "@/lib/projects";
import { getProjectCover } from "@/lib/projects";
import { assetPath } from "@/lib/paths";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  onSelect: (project: Project) => void;
};

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const cover = getProjectCover(project);

  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      className="group relative w-[300px] shrink-0 overflow-hidden text-left sm:w-[340px] lg:w-[380px]"
    >
      <div
        className={cn(
          "relative aspect-[3/4] overflow-hidden bg-gradient-to-br shadow-card transition-all duration-700 group-hover:-translate-y-1 group-hover:shadow-editorial",
          !cover && project.gradient
        )}
      >
        {cover ? (
          <Image
            src={assetPath(cover)}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 300px, (max-width: 1024px) 340px, 380px"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : null}
        <div className="absolute inset-0 bg-forest-950/0 transition-colors duration-500 group-hover:bg-forest-950/20" />
        <div className="absolute left-5 top-5 flex gap-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <span className="border border-white/20 bg-forest-950/40 px-3 py-1 text-[10px] font-medium uppercase tracking-luxury text-sand-50 backdrop-blur-md">
            {project.location}
          </span>
          <span className="border border-white/20 bg-forest-950/40 px-3 py-1 text-[10px] font-medium uppercase tracking-luxury text-sand-50 backdrop-blur-md">
            {project.year}
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-forest-950/90 via-forest-950/50 to-transparent px-6 pb-6 pt-20 transition-transform duration-500 group-hover:translate-y-0">
          <p className="text-[10px] font-medium uppercase tracking-luxury text-bronze-400">
            {project.year}
          </p>
          <h3 className="font-display mt-1 text-2xl text-sand-50">
            {project.title}
          </h3>
        </div>
      </div>
    </button>
  );
}

type ImageLightboxProps = {
  images: string[];
  index: number;
  title: string;
  onClose: () => void;
  onChange: (index: number) => void;
};

function ImageLightbox({
  images,
  index,
  title,
  onClose,
  onChange,
}: ImageLightboxProps) {
  const hasPrev = index > 0;
  const hasNext = index < images.length - 1;

  const goPrev = useCallback(() => {
    if (hasPrev) onChange(index - 1);
  }, [hasPrev, index, onChange]);

  const goNext = useCallback(() => {
    if (hasNext) onChange(index + 1);
  }, [hasNext, index, onChange]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, goPrev, goNext]);

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center bg-black/95 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} photo ${index + 1} of ${images.length}`}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
        aria-label="Close"
      >
        <X className="h-5 w-5" />
      </button>

      {hasPrev && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:left-4"
          aria-label="Previous photo"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      )}

      {hasNext && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:right-4"
          aria-label="Next photo"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      )}

      <div
        className="relative flex max-h-[90vh] max-w-[90vw] items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={assetPath(images[index])}
          alt={`${title} — photo ${index + 1}`}
          width={1600}
          height={1200}
          className="max-h-[90vh] max-w-[90vw] object-contain"
          priority
        />
      </div>

      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-display text-lg text-white/60">
        {index + 1} / {images.length}
      </p>
    </div>
  );
}

type GalleryImageProps = {
  src: string;
  alt: string;
  onClick: () => void;
  className?: string;
};

function GalleryImage({ src, alt, onClick, className }: GalleryImageProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden bg-sand-200 transition-all duration-300 hover:ring-2 hover:ring-bronze-400/50",
        className
      )}
    >
      <Image
        src={assetPath(src)}
        alt={alt}
        fill
        sizes="(max-width: 640px) 50vw, 240px"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </button>
  );
}

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    setLightboxIndex(null);
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && lightboxIndex === null) onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      if (lightboxIndex === null) document.body.style.overflow = "";
    };
  }, [project, onClose, lightboxIndex]);

  if (!project) return null;

  const cover = getProjectCover(project);
  const images = project.images ?? [];

  return (
    <>
      <div
        className="fixed inset-0 z-[100] flex items-end justify-center bg-forest-950/70 p-4 backdrop-blur-sm sm:items-center"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
      >
        <div
          className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto bg-sand-50 shadow-editorial"
          onClick={(e) => e.stopPropagation()}
        >
          {cover ? (
            <button
              type="button"
              onClick={() => setLightboxIndex(0)}
              className="relative block h-56 w-full overflow-hidden sm:h-72"
            >
              <Image
                src={assetPath(cover)}
                alt={project.title}
                fill
                sizes="768px"
                className="object-cover transition-transform duration-300 hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors hover:bg-black/10" />
            </button>
          ) : (
            <div
              className={cn(
                "relative h-48 sm:h-64",
                cn("bg-gradient-to-br", project.gradient)
              )}
            />
          )}

          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full border border-white/20 bg-forest-950/50 p-2.5 text-sand-50 backdrop-blur-md transition-colors hover:bg-forest-950/70"
            aria-label="Close project"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="relative px-6 pb-2 pt-8 sm:px-10 sm:pt-10">
            <div className="flex gap-3">
              <span className="text-[10px] font-medium uppercase tracking-luxury text-bronze-500">
                {project.location}
              </span>
              <span className="text-[10px] font-medium uppercase tracking-luxury text-forest-800/40">
                {project.year}
              </span>
            </div>
            <h2
              id="project-title"
              className="font-display mt-3 text-3xl text-forest-950 sm:text-4xl"
            >
              {project.title}
            </h2>
          </div>

          <div className="px-6 pb-8 sm:px-10 sm:pb-10">
            <p className="text-base leading-8 text-forest-800/70">
              {project.description}
            </p>
            {images.length > 1 && (
              <>
                <p className="mt-10 font-display text-base italic text-forest-800/40">
                  Click any image to view full size
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {images.slice(1).map((image, i) => (
                    <GalleryImage
                      key={image}
                      src={image}
                      alt={`${project.title} — project photo`}
                      onClick={() => setLightboxIndex(i + 1)}
                      className="aspect-[4/3]"
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {lightboxIndex !== null && images.length > 0 && (
        <ImageLightbox
          images={images}
          index={lightboxIndex}
          title={project.title}
          onClose={() => setLightboxIndex(null)}
          onChange={setLightboxIndex}
        />
      )}
    </>
  );
}
