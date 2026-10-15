import type { MetadataRoute } from "next";
import { canonicalUrl, indexablePaths } from "@/lib/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return indexablePaths.map((path) => ({
    url: canonicalUrl(path),
    lastModified,
  }));
}
