import { mkdir, writeFile } from "node:fs/promises";
import sharp from "sharp";

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#051c38"/>
      <stop offset="0.55" stop-color="#0a4d7a"/>
      <stop offset="1" stop-color="#0077b6"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect y="614" width="1200" height="16" fill="#ffc72c"/>
  <path d="M150 150 230 184v92c0 68-44 114-106 136-62-22-106-68-106-136v-92l82-34z" fill="#00b4d8"/>
  <text x="280" y="250" fill="#ffffff" font-family="Arial, sans-serif" font-size="92" font-weight="700">PROTEF</text>
  <text x="280" y="320" fill="#ffc72c" font-family="Arial, sans-serif" font-size="32">Comunicaciones y Seguridad Electrónica</text>
  <text x="280" y="400" fill="#ffffff" font-family="Arial, sans-serif" font-size="36">Servicio técnico en Concepción · Desde 1995</text>
  <text x="280" y="470" fill="#ffffff" font-family="Arial, sans-serif" font-size="32">+56 9 8210 9253</text>
</svg>`;

const mark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#05203c"/>
  <path fill="#eceff1" d="M32.7 12.4c-7.4.6-14.2 3.2-15.6 5.4-.6.8-.8 1.6-.8 2.4v7.6c0 4.6 1.4 8.2 4 11.4 2.8 3.4 6.6 6 12.4 8.6 5.8-2.6 9.6-5.2 12.4-8.6 2.6-3.2 4-6.8 4-11.4v-7.6c0-.8-.2-1.6-.8-2.4-1.4-2.2-8.2-4.8-15.6-5.4z"/>
  <path fill="#05203c" fill-rule="evenodd" d="M26.8 27.4v-3.1a5.9 5.9 0 0 1 11.8 0v3.1h1.3c1 0 1.8.8 1.8 1.8v8.4c0 1-.8 1.8-1.8 1.8h-14c-1 0-1.8-.8-1.8-1.8v-8.4c0-1 .8-1.8 1.8-1.8h1.3zm2.4 0h7v-3.1a3.5 3.5 0 0 0-7 0v3.1z"/>
  <circle cx="32.7" cy="32.2" r="1.45" fill="#eceff1"/>
  <path fill="#eceff1" d="M32.05 33.2h1.3l.28 2.35h-1.86z"/>
</svg>`;

await mkdir("public", { recursive: true });
await writeFile("public/favicon.svg", mark);

const sizes = [
  ["public/favicon-32.png", 32],
  ["public/apple-touch-icon.png", 180],
  ["public/icon-192.png", 192],
  ["public/icon-512.png", 512],
];

for (const [file, size] of sizes) {
  await sharp(Buffer.from(mark)).resize(size, size).png().toFile(file);
}

await sharp(Buffer.from(og)).png().toFile("public/og-image.png");

const manifest = {
  name: "PROTEF Seguridad Electrónica",
  short_name: "PROTEF",
  lang: "es-CL",
  start_url: "/",
  display: "standalone",
  background_color: "#051c38",
  theme_color: "#051c38",
  icons: [
    { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
    { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
  ],
};

await writeFile("public/manifest.webmanifest", JSON.stringify(manifest, null, 2));
console.log("assets ok");
