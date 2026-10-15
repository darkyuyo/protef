# Supuestos

Decisiones tomadas porque el encargo no las cerraba o porque el material actual se contradice. Lo marcado [CONFIRMAR] no se inventó: está en el sitio o en el DNS y conviene validarlo antes de salir a producción.

## Stack

- Next.js (App Router) en Vercel, sin `output: 'export'`. Las páginas salen estáticas en el build. `/api/contacto` es la única ruta de servidor, porque el formulario no puede existir en un export estático.
- Se descartó Astro y Cloudflare Pages. La entrega pide `not-found.tsx`, Route Handler y preview por rama en Vercel.
- Se apagó `cacheComponents`. El proyecto nuevo no usa el modelo de caché parcial: las páginas se prerenderizan enteras.
- Fuentes con `@fontsource/inter` (subset latin). Estilos con Tailwind v4 y los tokens de color en `src/app/globals.css`.
- Animación de entrada con `motion` (`whileInView`, una vez). El H1 no parte en opacidad 0: la entrada del hero es solo `transform`. `prefers-reduced-motion` y `scripting: none` fuerzan el contenido visible.
- CSP con `'unsafe-inline'` en scripts. Las páginas estáticas no pueden firmar un nonce por request. Hace falta para el bootstrap de Next. En desarrollo se suma `'unsafe-eval'` para Turbopack. El sitio no carga Google Ads ni otra etiqueta de medición.

## Negocio

- Año base 1995. Los años visibles son `año actual − 1995`, calculados al construir el sitio. No se publica “más de 15”, “más de 25” ni “más de 30”.
- El sello “Instaladores Certificados SEC” está en los seis flyers. El HTML solo sostiene normativa SEC en cercos. En el sitio nuevo, SEC se afirma en cercos. No se estampa el sello en CCTV, citófonos, portones, biométricos ni alarmas. [CONFIRMAR] si existe un número de instalador para publicarlo.
- Correo público: `contacto@protef.cl`. `contacto@gmail.com` y `protefcomunicaciones@gmail.com` aparecen solo en `imagen3.jpeg`. No se publican. [CONFIRMAR]
- No hay calle ni horario de reloj. El JSON-LD lista lunes a viernes sin `opens`/`closes`. El pin `-36.827, -73.0498` es el que ya publicaba el sitio (centro de Concepción). [CONFIRMAR] dirección y coordenadas exactas.
- `sameAs` queda vacío. [CONFIRMAR] Google Business Profile y redes.
- `priceRange: $$` se conserva del schema anterior.
- Hualpén, Chiguayante, Coronel y Penco no se nombran como cobertura. [CONFIRMAR]
- Los proyectos, mandantes y la frase de subcontrato con Serfoelec Montajes Ltda. salen de `nuestra-trayectoria.png` y están en `/nosotros`. [CONFIRMAR] si esa relación comercial debe seguir publicada.
- “Más de 30 proyectos” es una cifra del mismo gráfico, no un conteo nuevo. [CONFIRMAR]
- “El más elegido” del plan Estándar es la etiqueta del sitio actual, no una estadística medida.
- Los precios en UF se mantienen. La frase “prevención muy débil / envejecimiento prematuro” se reescribió como menor frecuencia, sin cambiar precio ni alcance.
- Señales débiles y telecomunicaciones se mencionan en Nosotros y Servicios. No tienen URL nueva.
- El formulario se envía por SMTP de Gmail (`GMAIL_USER` / `GMAIL_APP_PASSWORD`) hacia `CONTACT_TO`. Etiquetas de conversión de Ads [CONFIRMAR].
- Ley 21.719: se informa que entra en vigor el 1 de diciembre de 2026. No es un dictamen legal.

## URLs

- Sin barra final. La raíz canónica queda `https://www.protef.cl` (sin barra): con `trailingSlash: false`, Next.js normaliza el canonical de `/` y el sitemap usa la misma forma para que coincidan.
- El apex `protef.cl` → `www` se configura en el panel de dominios de Vercel, no en `next.config.ts`.
- Los hash (`/#servicios`) no llegan al servidor y no tienen 301.
- HSTS sin `includeSubDomains`: el correo y cPanel siguen en el hosting antiguo y un HSTS de subdominios podría exigir HTTPS donde hoy no está garantizado.

## Formulario

- Sin `GMAIL_USER` y `GMAIL_APP_PASSWORD`, producción responde 503 y la pantalla ofrece teléfono y WhatsApp.
- En `next dev`, si faltan esas variables, el envío se acepta y se imprime en la consola para poder probar `/gracias`.
- El rate limit es por instancia (5 envíos / 10 minutos / IP). No es global entre isolates de Vercel.
