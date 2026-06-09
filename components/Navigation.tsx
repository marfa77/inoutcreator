"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#about", label: "Обо мне" },
  { href: "#experience", label: "Опыт" },
  { href: "#education", label: "Образование" },
  { href: "#contact", label: "Контакты" },
];

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-brand-100 bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <Link
            href="/"
            className="text-lg font-semibold text-brand-900 hover:text-brand-700"
          >
            Сергей Буньков
          </Link>
          <div className="hidden items-center gap-6 sm:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium text-brand-500 transition-colors hover:text-brand-900"
                )}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
