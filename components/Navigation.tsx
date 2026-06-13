"use client";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";
import { Logo } from "@/components/Logo";

const navItems = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-neutral-200/80 bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo variant="mark" priority />
          <div className="flex items-center gap-5 sm:gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "hidden text-sm lowercase text-neutral-500 transition-colors hover:text-neutral-900 sm:inline"
                )}
              >
                {item.label}
              </a>
            ))}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm lowercase text-neutral-500 transition-colors hover:text-neutral-900"
            >
              e-mail
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
