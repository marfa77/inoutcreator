import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { profile } from "@/lib/profile";
import { assetPath } from "@/lib/paths";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: profile.name }],
  icons: {
    icon: assetPath("/logo-mark.png"),
    apple: assetPath("/logo-mark.png"),
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: assetPath("/portrait.png"),
        width: 800,
        height: 1000,
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
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
