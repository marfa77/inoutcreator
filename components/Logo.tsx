import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/paths";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "mark" | "full";
  className?: string;
  href?: string;
  priority?: boolean;
};

const sizes = {
  mark: { width: 1024, height: 1018, className: "h-11 w-11 sm:h-12 sm:w-12" },
  full: { width: 1024, height: 1018, className: "h-11 w-11 sm:h-12 sm:w-12" },
};

export function Logo({
  variant = "mark",
  className,
  href = "/",
  priority = false,
}: LogoProps) {
  const src =
    variant === "full"
      ? assetPath("/logo-full.png")
      : assetPath("/logo-mark.png");
  const alt =
    variant === "full"
      ? "INOUT — Landscape architecture by Valeria Malakhova"
      : "INOUT";
  const size = sizes[variant];

  const image = (
    <Image
      src={src}
      alt={alt}
      width={size.width}
      height={size.height}
      priority={priority}
      className={cn(size.className, "object-contain object-left", className)}
    />
  );

  if (!href) return image;

  return (
    <Link href={href} className="inline-flex shrink-0 items-center">
      {image}
    </Link>
  );
}
