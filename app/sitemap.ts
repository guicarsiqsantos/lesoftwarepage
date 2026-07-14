import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

/**
 * Inclua aqui novas rotas públicas assim que existirem
 * (ex.: páginas de serviços, cases, sobre).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.siteUrl,
    },
  ];
}
