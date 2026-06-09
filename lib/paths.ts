import { siteConfig } from "./config";

export function assetPath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.basePath}${normalized}`;
}
