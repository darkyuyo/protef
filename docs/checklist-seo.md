# Checklist SEO

Revisar en el HTML servido, no solo en el código.

## Por URL indexable

- [ ] Un `<title>` de hasta 60 caracteres, con la keyword y la marca.
- [ ] Meta description de 140 a 155 caracteres, con llamada a la acción.
- [ ] Un solo H1 visible.
- [ ] Canonical absoluto `https://www.protef.cl/...` sin `.html` y sin barra final. La raíz es `https://www.protef.cl`, igual que el sitemap.
- [ ] `robots`: index, follow, max-image-preview:large. `/gracias` y el 404: noindex.
- [ ] `lang="es-CL"` y hreflang `es-CL`.
- [ ] Open Graph: type, locale `es_CL`, site_name, title, description, url, image 1200×630 y alt.
- [ ] Twitter card `summary_large_image`.
- [ ] La URL está en `sitemap.xml` y coincide con el canonical. `/gracias`, `/api/` y el 404 no están.
- [ ] Breadcrumb visible en internas y `BreadcrumbList` en landings.
- [ ] Landings: `Service` con `provider` `@id` `https://www.protef.cl/#business`, más `FAQPage`.
- [ ] Home y layout: Organization / LocalBusiness / WebSite. Sin `sameAs` propio. Sin `aggregateRating`.
- [ ] Enlaces `tel:` y `wa.me` con texto o `aria-label`, y WhatsApp con `rel="noopener noreferrer"`.
- [ ] El home y `/servicios` enlazan a las 6 landings con el anchor largo, no con “ver más”.
- [ ] Search Console: meta `ffgH_MUb5fwuxGUBfuTXWVh-tNNIDS25RTGoMbjNw-g`.

## Redirects 301

- [ ] `/index.html` → `/`
- [ ] `/:slug.html` → `/:slug`, después de las excepciones de slug distinto
- [ ] `/reparacion-camaras-seguridad-cctv-concepcion.html` → `/reparacion-camaras-seguridad-concepcion`
- [ ] `/reparacion-portones-concepcion.html` → `/reparacion-portones-automaticos-concepcion`
- [ ] `/camaras-seguridad-concepcion` → `/reparacion-camaras-seguridad-concepcion`
- [ ] `/portones-automaticos-concepcion` → `/reparacion-portones-automaticos-concepcion`
- [ ] `/cercos-electricos-concepcion` → `/reparacion-cercos-electricos-concepcion`
- [ ] Apex `protef.cl` → `https://www.protef.cl` en el panel de Vercel

Los hash antiguos no se pueden redirigir en el servidor.

## Contenido

- [ ] Ningún PNG/JPG de contenido. Solo favicon, íconos PWA y `og-image.png`.
- [ ] Años calculados desde 1995, no un número fijo.
- [ ] SEC solo afirmado en cercos, salvo confirmación de credencial general.
- [ ] Comunas dentro del texto, sin páginas duplicadas por comuna.
