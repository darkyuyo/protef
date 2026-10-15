import { Phone } from "lucide-react";
import { LeadEvent } from "@/components/Analytics";
import { WhatsAppIcon } from "@/components/icons";
import { buildMetadata } from "@/lib/seo";
import { defaultWhatsappText, pageMeta, site, whatsappHref } from "@/lib/site.config";

export const metadata = buildMetadata({ ...pageMeta.gracias, noindex: true });

export default function GraciasPage() {
  return (
    <div className="container-protef py-16">
      <LeadEvent />
      <h1 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold text-nav">Recibimos su solicitud</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        Vamos a revisar el mensaje en un día hábil. Si el portón, las cámaras o la alarma no pueden
        esperar, use el teléfono o WhatsApp ahora.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={site.phoneTel}
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gold px-5 font-extrabold text-nav"
          aria-label={`Llamar a PROTEF al ${site.phoneDisplay}`}
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          {site.phoneDisplay}
        </a>
        <a
          href={whatsappHref(defaultWhatsappText)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#075e54] px-5 font-extrabold text-white"
          aria-label="Escribir por WhatsApp a PROTEF"
        >
          <WhatsAppIcon className="h-5 w-5" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
