import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

const scriptSrc = ["'self'", "'unsafe-inline'", isDev ? "'unsafe-eval'" : ""].filter(Boolean).join(" ");

const csp = [
  "default-src 'self'",
  `script-src ${scriptSrc}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Content-Security-Policy", value: csp },
];

const nextConfig: NextConfig = {
  trailingSlash: false,
  poweredByHeader: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    const permanent = { statusCode: 301 as const };
    return [
      { source: "/index.html", destination: "/", ...permanent },
      {
        source: "/reparacion-camaras-seguridad-cctv-concepcion.html",
        destination: "/reparacion-camaras-seguridad-concepcion",
        ...permanent,
      },
      {
        source: "/reparacion-portones-concepcion.html",
        destination: "/reparacion-portones-automaticos-concepcion",
        ...permanent,
      },
      {
        source: "/camaras-seguridad-concepcion",
        destination: "/reparacion-camaras-seguridad-concepcion",
        ...permanent,
      },
      {
        source: "/portones-automaticos-concepcion",
        destination: "/reparacion-portones-automaticos-concepcion",
        ...permanent,
      },
      {
        source: "/cercos-electricos-concepcion",
        destination: "/reparacion-cercos-electricos-concepcion",
        ...permanent,
      },
      { source: "/:slug.html", destination: "/:slug", ...permanent },
    ];
  },
  async headers() {
    const routes: { source: string; headers: { key: string; value: string }[] }[] = [
      { source: "/:path*", headers: securityHeaders },
    ];
    if (!isDev) {
      routes.push({
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      });
    }
    return routes;
  },
};

export default nextConfig;
