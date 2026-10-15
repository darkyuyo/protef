import type { Metadata } from "next";
import { canonicalUrl, site } from "@/lib/site.config";

type MetaInput = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
};

export function buildMetadata({ title, description, path, noindex = false }: MetaInput): Metadata {
  const url = canonicalUrl(path);
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      languages: { "es-CL": url },
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true, "max-image-preview": "large" },
    openGraph: {
      type: "website",
      locale: site.ogLocale,
      siteName: site.shortName,
      title,
      description,
      url,
      images: [
        {
          url: site.ogImage,
          width: 1200,
          height: 630,
          alt: site.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [site.ogImage],
    },
  };
}
