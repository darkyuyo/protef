import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { buildContactEmail } from "@/lib/contact-email";
import { contactSchema, fieldErrors } from "@/lib/contact-schema";
import { site } from "@/lib/site.config";

const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") || "unknown";
}

function limited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_HITS) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function oneLine(value: string): string {
  return value.replace(/[\r\n]+/g, " ").slice(0, 160);
}

export async function POST(request: Request) {
  if (limited(clientIp(request))) {
    return NextResponse.json(
      { ok: false, error: "Demasiados envíos. Espere unos minutos o llame al teléfono." },
      { status: 429 },
    );
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "No se pudo leer el formulario." }, { status: 400 });
  }

  const honeypot =
    json && typeof json === "object" && "company_website" in json
      ? String((json as { company_website?: string }).company_website ?? "")
      : "";
  if (honeypot.trim()) {
    return NextResponse.json({ ok: true });
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, fieldErrors: fieldErrors(parsed.error) }, { status: 400 });
  }

  const data = parsed.data;
  const to = process.env.CONTACT_TO || site.email;
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "");

  if (!user || !pass) {
    if (process.env.NODE_ENV === "development") {
      console.info("Contacto recibido sin Gmail", data);
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json(
      { ok: false, error: "El correo automático no está configurado. Llame o escriba por WhatsApp." },
      { status: 503 },
    );
  }

  const mail = buildContactEmail(data);

  try {
    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user, pass },
    });
    await transport.sendMail({
      from: `"PROTEF web" <${user}>`,
      to,
      replyTo: data.email,
      subject: `Cotización web: ${oneLine(data.servicio)} — ${oneLine(data.nombre)}`,
      text: mail.text,
      html: mail.html,
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "No pudimos enviar el correo. Llame o escriba por WhatsApp." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
