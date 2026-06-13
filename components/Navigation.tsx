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
    <nav className="sticky top-0 z-50 border-b border-sand-200/60 bg-[#f7f4ef]/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-[4.5rem] items-center justify-between">
          <Logo variant="full" priority className="h-9 sm:h-10" />
          <div className="flex items-center gap-6 sm:gap-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "hidden text-[11px] font-medium uppercase tracking-luxury text-forest-800/50 transition-colors hover:text-bronze-500 sm:inline"
                )}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full border border-forest-900/15 bg-forest-900 px-5 py-2.5 text-[11px] font-medium uppercase tracking-luxury text-sand-50 transition-all hover:border-bronze-500 hover:bg-forest-800"
            >
              Enquire
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
