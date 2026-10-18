import Link from "next/link";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";
import { site, whatsappHref } from "@/lib/site.config";

export function CTA({
  title,
  text,
  waText,
}: {
  title: string;
  text: string;
  waText: string;
}) {
  return (
    <aside className="card border-2 border-brand-dark/25 bg-gradient-to-br from-brand-dark/10 to-gold/15 p-6 text-center">
      <h2 className="text-2xl font-extrabold text-nav">{title}</h2>
      <p className="mx-auto mt-2 max-w-2xl text-muted">{text}</p>
      <div className="mt-5 flex flex-wrap justify-center gap-3">
        <a
          href={site.phoneTel}
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gold px-5 font-extrabold text-nav"
          aria-label={`Llamar a PROTEF al ${site.phoneDisplay}`}
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          {site.phoneDisplay}
        </a>
        <a
          href={whatsappHref(waText)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-nav/20 bg-white px-5 font-extrabold text-nav"
          aria-label="Escribir por WhatsApp a PROTEF sobre este servicio"
        >
          <WhatsAppIcon className="h-5 w-5 text-[#128c7e]" />
          WhatsApp
        </a>
        <Link
          href="/contacto"
          className="inline-flex min-h-11 items-center rounded-full bg-nav px-5 font-extrabold text-white"
        >
          Pedir cotización
        </Link>
      </div>
      <p className="mt-4 text-sm text-muted">
        Si el formulario no está disponible, llámenos o escriba por WhatsApp. El correo es{" "}
        <a className="font-bold text-brand-dark" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        .
      </p>
    </aside>
  );
}
