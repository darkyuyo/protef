import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";

const inter = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource/inter/files/inter-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/inter/files/inter-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/inter/files/inter-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/inter/files/inter-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/inter/files/inter-latin-800-normal.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
  adjustFontFallback: "Arial",
});
import { JsonLd } from "@/components/JsonLd";
import { Footer, Header, UrgentStrip } from "@/components/SiteChrome";
import { TrackClicks } from "@/components/Analytics";
import { businessGraph } from "@/lib/jsonld";
import { pageMeta, site } from "@/lib/site.config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: pageMeta.home.title,
    template: "%s",
  },
  description: pageMeta.home.description,
  applicationName: site.shortName,
  authors: [{ name: site.legalName }],
  verification: { google: site.googleVerification },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  other: {
    "geo.region": "CL-BI",
    "geo.placename": "Concepción",
  },
};

export const viewport: Viewport = {
  themeColor: "#051c38",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es-CL" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <JsonLd data={businessGraph()} />
        <UrgentStrip />
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <TrackClicks />
      </body>
    </html>
  );
}
