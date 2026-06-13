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
      className="group relative w-[280px] shrink-0 overflow-hidden text-left sm:w-[320px] lg:w-[360px]"
    >
      <div
        className={cn(
          "relative aspect-[4/5] overflow-hidden bg-gradient-to-br transition-transform duration-500 group-hover:scale-[1.02]",
          !cover && project.gradient
        )}
      >
        {cover ? (
          <Image
            src={assetPath(cover)}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : null}
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

      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/70">
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
        "group relative overflow-hidden rounded-sm bg-neutral-100 transition-opacity hover:opacity-90",
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
        className="fixed inset-0 z-[100] flex items-end justify-center bg-black/50 p-4 sm:items-center"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
      >
        <div
          className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-sm bg-white shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {cover ? (
            <button
              type="button"
              onClick={() => setLightboxIndex(0)}
              className="relative block h-48 w-full overflow-hidden sm:h-64"
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
            className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-neutral-700 transition-colors hover:bg-white"
            aria-label="Close project"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="relative -mt-16 px-6 pb-2 pt-12 sm:px-8">
            <div className="flex gap-2">
              <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-neutral-800 shadow-sm">
                {project.location}
              </span>
              <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-neutral-800 shadow-sm">
                {project.year}
              </span>
            </div>
            <h2
              id="project-title"
              className="mt-3 text-2xl font-bold text-neutral-900"
            >
              {project.title}
            </h2>
          </div>

          <div className="px-6 pb-6 sm:px-8 sm:pb-8">
            <p className="text-base leading-7 text-neutral-600">
              {project.description}
            </p>
            {images.length > 1 && (
              <>
                <p className="mt-8 text-xs lowercase text-neutral-400">
                  click a photo to enlarge
                </p>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
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
