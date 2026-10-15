import type { ContactInput } from "@/lib/contact-schema";
import { site } from "@/lib/site.config";

type ContactMail = Omit<ContactInput, "company_website">;

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function receivedLabel(date: Date): string {
  const formatted = new Intl.DateTimeFormat("es-CL", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Santiago",
    hour12: false,
  }).format(date);
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

function whatsappNumber(phone: string): string | null {
  const digits = phone.replace(/\D/g, "");
  if (/^569\d{8}$/.test(digits)) return digits;
  if (/^9\d{8}$/.test(digits)) return `56${digits}`;
  return null;
}

function pageHref(origen: string): string | null {
  if (!/^\/[A-Za-z0-9/_-]*$/.test(origen)) return null;
  return origen === "/" ? site.url : `${site.url}${origen}`;
}

function button(href: string, label: string, background: string, color: string): string {
  return `<tr>
    <td style="padding:0 0 10px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td bgcolor="${background}" style="border-radius:999px;background:${background};">
            <a href="${esc(href)}" style="display:inline-block;padding:12px 20px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:18px;font-weight:700;color:${color};text-decoration:none;">${esc(label)}</a>
          </td>
        </tr>
      </table>
    </td>
  </tr>`;
}

function labelValue(label: string, valueHtml: string): string {
  return `<tr>
    <td style="padding:0 32px 20px;">
      <p style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:14px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#0077b6;">${esc(label)}</p>
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:24px;color:#0f1c2e;">${valueHtml}</div>
    </td>
  </tr>`;
}

export function buildContactEmail(data: ContactMail, receivedAt = new Date()) {
  const when = receivedLabel(receivedAt);
  const phoneDigits = data.telefono.replace(/[^\d+]/g, "");
  const telHref = `tel:${phoneDigits}`;
  const wa = whatsappNumber(data.telefono);
  const origin = data.origen?.trim() ?? "";
  const originUrl = origin ? pageHref(origin) : null;

  const tracking: Array<[string, string]> = [
    ["Página", originUrl ?? (origin || "")],
    ["Fuente", data.utm_source || ""],
    ["Medio", data.utm_medium || ""],
    ["Campaña", data.utm_campaign || ""],
    ["Término", data.utm_term || ""],
    ["Anuncio", data.utm_content || ""],
    ["gclid", data.gclid || ""],
  ].filter((entry): entry is [string, string] => entry[1].trim().length > 0);

  const actions = [
    button(telHref, `Llamar al ${data.telefono}`, "#ffc72c", "#051c38"),
    wa ? button(`https://wa.me/${wa}`, "Escribir por WhatsApp", "#128C7E", "#ffffff") : "",
    button(`mailto:${data.email}`, "Responder por correo", "#051c38", "#ffffff"),
  ].join("");

  const trackingRows = tracking
    .map(([label, value]) => {
      const isLink = label === "Página" && originUrl;
      const valueHtml = isLink
        ? `<a href="${esc(originUrl)}" style="color:#0077b6;text-decoration:underline;">${esc(value)}</a>`
        : esc(value);
      return `<tr>
        <td style="padding:7px 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:18px;color:#5c6b7c;width:110px;vertical-align:top;">${esc(label)}</td>
        <td style="padding:7px 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:18px;color:#0f1c2e;font-weight:700;">${valueHtml}</td>
      </tr>`;
    })
    .join("");

  const textLines = [
    "Nueva cotización desde protef.cl",
    when,
    "",
    `Nombre o edificio: ${data.nombre}`,
    `Teléfono: ${data.telefono}`,
    `Correo: ${data.email}`,
    `Servicio: ${data.servicio}`,
    "",
    "Mensaje:",
    data.mensaje,
    "",
    ...tracking.map(([label, value]) => `${label}: ${value}`),
  ];

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="color-scheme" content="light">
  <title>Cotización web</title>
</head>
<body style="margin:0;padding:0;background:#d7e3f0;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;mso-hide:all;">
    ${esc(data.nombre)} pidió cotización de ${esc(data.servicio)}. Teléfono ${esc(data.telefono)}.
  </div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#d7e3f0" style="background:#d7e3f0;margin:0;padding:0;">
    <tr>
      <td align="center" style="padding:28px 12px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;">
          <tr>
            <td bgcolor="#051c38" style="background:#051c38;border-radius:20px 20px 0 0;padding:28px 32px 22px;">
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:16px;font-weight:700;letter-spacing:0.16em;color:#ffc72c;">PROTEF</p>
              <p style="margin:8px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:24px;line-height:30px;font-weight:700;color:#ffffff;">Nueva cotización</p>
              <p style="margin:8px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:20px;color:#9fd8ea;">${esc(when)} · hora de Chile</p>
            </td>
          </tr>
          <tr>
            <td bgcolor="#ffc72c" height="4" style="background:#ffc72c;font-size:0;line-height:0;">&nbsp;</td>
          </tr>
          <tr>
            <td bgcolor="#ffffff" style="background:#ffffff;padding-top:28px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                ${labelValue("Nombre o edificio", `<strong style="font-size:22px;line-height:28px;">${esc(data.nombre)}</strong>`)}
                <tr>
                  <td style="padding:0 32px 8px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">${actions}</table>
                  </td>
                </tr>
                ${labelValue(
                  "Correo",
                  `<a href="mailto:${esc(data.email)}" style="color:#051c38;font-weight:700;text-decoration:underline;">${esc(data.email)}</a>`,
                )}
                ${labelValue(
                  "Servicio",
                  `<span style="display:inline-block;padding:6px 12px;border-radius:999px;background:#e7f6fb;color:#0077b6;font-weight:700;">${esc(data.servicio)}</span>`,
                )}
                <tr>
                  <td style="padding:0 32px 24px;">
                    <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:14px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#0077b6;">Mensaje</p>
                    <div style="padding:16px 18px;border-radius:14px;background:#f4f8fb;border-left:4px solid #00b4d8;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:26px;color:#0f1c2e;white-space:pre-wrap;">${esc(data.mensaje)}</div>
                  </td>
                </tr>
                ${
                  trackingRows
                    ? `<tr>
                  <td style="padding:0 32px 28px;">
                    <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:14px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#0077b6;">Origen del aviso</p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${trackingRows}</table>
                  </td>
                </tr>`
                    : ""
                }
              </table>
            </td>
          </tr>
          <tr>
            <td bgcolor="#051c38" style="background:#051c38;border-radius:0 0 20px 20px;padding:18px 32px 22px;">
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:20px;color:#d5e4f2;">Responder este correo llega a quien escribió el formulario.</p>
              <p style="margin:6px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;color:#8eabc4;">PROTEF · Concepción, Talcahuano y San Pedro de la Paz</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { html, text: textLines.filter((line, index, all) => line !== "" || all[index - 1] !== "").join("\n") };
}
