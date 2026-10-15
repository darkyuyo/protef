# Migración DNS de protef.cl a Vercel

Zona leída el 15 de octubre de 2026 en `ns1.servidoresch.com` (un solo NS). TTL de los registros de respuesta: alrededor de 14400 segundos (4 horas). SOA: serial `2026101101`, refresh 3600, retry 1800, expire 1209600, minimum 86400. Correo del SOA: `root.perry.servidoresch.com`.

El sitio web y el correo comparten la IP `104.194.11.66`. Si el registro A del apex pasa a Vercel antes de separar el correo, `contacto@protef.cl` deja de llegar.

## Registros a recrear, sin tocarlos hasta el paso indicado

| Nombre | Tipo | Valor | TTL visto |
| --- | --- | --- | --- |
| protef.cl | NS | ns1.servidoresch.com | ~21600 |
| protef.cl | A | 104.194.11.66 | ~14400 |
| www.protef.cl | CNAME | protef.cl | ~14400 |
| protef.cl | MX | 0 protef.cl | ~14400 |
| mail.protef.cl | CNAME | protef.cl | (sigue al A del apex) |
| webmail.protef.cl | A | 104.194.11.66 | |
| ftp.protef.cl | A | 104.194.11.66 | |
| cpanel.protef.cl | A | 104.194.11.66 | |
| autodiscover.protef.cl | A | 104.194.11.66 | |
| autoconfig.protef.cl | A | 104.194.11.66 | |
| protef.cl | TXT | v=spf1 +a +mx +ip4:104.194.11.66 include:relay.mailbaby.net ~all | 14400 |
| _dmarc.protef.cl | TXT | v=DMARC1; p=none; | 14400 |
| default._domainkey.protef.cl | TXT | ver bloque DKIM | ~14400 |

No hay AAAA. No hay segundo nameserver.

DKIM, copiar el TXT completo, en un solo valor:

```
v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvtUOmk5xTTTfCaSy0jZInYNk8vsioUU7+CDfGdR/ur6abTxNaMIwm8FCckrBrobpaa0D5gBPpSSrAClAsONd3smkr/EmGPVAyS84YVzTMm84mniF/nac2+PDA77hY2vwpIQT/p6nLQaTG6maMcqJGCVAqJpeYEa1L10yiCmRJ2sFL2365CfblrWfIA7OFlQbPVDDZUF7OKB9JVJqhNK8FHRdZ5YaVp27bZUycSwWciTplArozpCeoFEvR/HCda/5izGMGHvLEGss2P2wEwwZUjCt7BeN2Lt4aehCCQ+vhjJkuPdWcAmoJOnvY5GAIP0PxfAMhS2mHMBkvqXM6EVL4wIDAQAB;
```

## Orden

1. Bajar el TTL de A, MX, CNAME `www`, CNAME `mail` y TXT SPF a 300 segundos. Esperar el TTL viejo (4 horas, o 24 horas si algún resolver respeta el minimum del SOA) antes del corte.
2. Crear `mail.protef.cl` como registro A a `104.194.11.66`. Hoy es CNAME al apex: hay que reemplazarlo, no dejar los dos.
3. Cambiar el MX de `protef.cl` a `mail.protef.cl` (prioridad 0). Probar envío y recepción de `contacto@protef.cl` antes de tocar el sitio.
4. Reescribir el SPF para que no dependa del A del apex, que va a dejar de ser el servidor de correo:

   `v=spf1 ip4:104.194.11.66 include:relay.mailbaby.net ~all`

   No borrar DKIM ni DMARC.
5. Dejar `webmail`, `ftp`, `cpanel`, `autodiscover` y `autoconfig` en `104.194.11.66`.
6. En Vercel, agregar `www.protef.cl` como dominio principal y `protef.cl` como redirect 301 a `https://www.protef.cl`. HTTPS lo emite Vercel.
7. Apuntar `www` al CNAME que indique Vercel. El apex, al A o ALIAS que indique Vercel. No usar la IP vieja para el apex.
8. Abrir `https://www.protef.cl`, una landing, `/contacto` y un 301 de la tabla. Enviar un correo de prueba otra vez.

## Rollback

Volver el A de `protef.cl` a `104.194.11.66`, el CNAME de `www` a `protef.cl`, y el MX a `protef.cl` solo si `mail.protef.cl` se eliminó. Restaurar el SPF original si se cambió. Con TTL 300, el retorno se nota en minutos. No borrar la zona de servidoresch hasta que el correo lleve días estable en `mail.protef.cl`.

## Redirects 301 que ya resuelve la app

| URL antigua | URL nueva |
| --- | --- |
| /index.html | / |
| /reparacion-camaras-seguridad-cctv-concepcion.html | /reparacion-camaras-seguridad-concepcion |
| /reparacion-portones-concepcion.html | /reparacion-portones-automaticos-concepcion |
| /camaras-seguridad-concepcion | /reparacion-camaras-seguridad-concepcion |
| /portones-automaticos-concepcion | /reparacion-portones-automaticos-concepcion |
| /cercos-electricos-concepcion | /reparacion-cercos-electricos-concepcion |
| /cualquier-pagina.html | /cualquier-pagina |
| protef.cl (apex) | https://www.protef.cl (panel de Vercel) |

`/#servicios` y el resto de hashes no viajan al servidor. El sitemap nuevo no los incluye. Google los reemplaza cuando rastree las URLs limpias.
