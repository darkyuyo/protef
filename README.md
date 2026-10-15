# PROTEF — sitio nuevo

Sitio estático de PROTEF Comunicaciones y Seguridad Electrónica Ltda. (Concepción), con un route handler para el formulario. El sitio anterior en `pagina-protef/` no se modifica.

## Requisitos

Node.js 22 y npm.

```bash
cd protef-web
npm install
cp .env.example .env.local
npm run dev
```

Abrir http://localhost:3000.

| Script | Uso |
| --- | --- |
| `npm run dev` | Desarrollo |
| `npm run build` | Build de producción. Las páginas quedan estáticas; `/api/contacto` sigue siendo función |
| `npm run start` | Sirve el build |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |
| `npm run assets` | Regenera favicon, íconos y `public/og-image.png` |

Sin `GMAIL_USER` y `GMAIL_APP_PASSWORD`, en desarrollo el formulario acepta el envío y lo imprime en la consola, para poder ver `/gracias`. En producción responde 503 y la pantalla ofrece teléfono y WhatsApp.

## Estructura

- `src/lib/site.config.ts` — teléfono, correo, comunas, servicios, planes, año 1995.
- `src/content/landings.ts` — las seis landings.
- `src/content/maintenance.ts` — pestañas de mantención.
- `src/app/` — rutas. Cada landing es una carpeta con `page.tsx`.
- `src/app/api/contacto/route.ts` — validación, honeypot, rate limit y envío por Gmail SMTP.
- `docs/` — inventario, checklist SEO y migración DNS.
- `SUPUESTOS.md` — decisiones y datos [CONFIRMAR].

## Agregar una landing

1. Sumar el servicio en `services` (`site.config.ts`): path, anchor, icono y beneficios. Entra solo al menú de servicios, al footer, al sitemap y al catálogo JSON-LD.
2. Sumar el objeto en `landings` (`src/content/landings.ts`): title ≤ 60, description de 140–155, H1, fallas, dos bloques de texto, proceso, marcas y 5 o 6 preguntas. El texto útil debe quedar entre 400 y 600 palabras.
3. Crear `src/app/<path>/page.tsx` copiando una landing existente y cambiando el id de `getLanding`.
4. No uses `.html` ni una página por comuna. Enlaza desde el home: el `ServiceCard` ya usa el anchor largo.

## Despliegue en Vercel

1. Importar el repositorio. El directorio raíz del proyecto es `protef-web` si el repo contiene también `pagina-protef/`.
2. Framework: Next.js. Build `npm run build`. No hace falta `output: 'export'`.
3. Variables de `.env.example` en el proyecto de Vercel, no en el repo. El formulario necesita `GMAIL_USER`, `GMAIL_APP_PASSWORD` y `CONTACT_TO`.
4. Dominio principal: `www.protef.cl`. Apex `protef.cl` con redirect 301 a www.
5. Seguir `docs/migracion-dns.md` antes de cambiar el registro A. El correo está en la misma IP que el sitio viejo.

Preview: cada rama que Vercel construya publica una URL de preview. El canonical de producción sigue siendo `https://www.protef.cl`.

## SEO y redirects

Canonical, Open Graph y JSON-LD salen de `src/lib/seo.ts` y `src/lib/jsonld.ts`. Sitemap y robots se generan en el build. Los 301 están en `next.config.ts`. Lista de control: `docs/checklist-seo.md`.
