import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { assetPath } from "@/lib/paths";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Сергей Буньков | Генеральный директор",
    template: "%s | Сергей Буньков",
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.name }],
  icons: {
    icon: assetPath("/icon.svg"),
    apple: assetPath("/icon.svg"),
  },
  openGraph: {
    type: "profile",
    locale: "ru_RU",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Сергей Буньков | Генеральный директор",
    description: siteConfig.description,
    images: [
      {
        url: assetPath("/avatar.png"),
        width: 800,
        height: 800,
        alt: siteConfig.name,
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className="antialiased">{children}</body>
    </html>
  );
}
