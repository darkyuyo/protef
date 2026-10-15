import { Phone } from "lucide-react";
import { LeadEvent } from "@/components/Analytics";
import { PageIntro } from "@/components/PageIntro";
import { WhatsAppIcon } from "@/components/icons";
import { homePhotos } from "@/lib/photos";
import { buildMetadata } from "@/lib/seo";
import { defaultWhatsappText, pageMeta, site, whatsappHref } from "@/lib/site.config";

export const metadata = buildMetadata({ ...pageMeta.gracias, noindex: true });

export default function GraciasPage() {
  return (
    <>
      <LeadEvent />
      <PageIntro
        eyebrow="Solicitud enviada"
        image={homePhotos.noche}
        crumbs={[
          { name: "Inicio", path: "/" },
          { name: "Solicitud enviada", path: "/gracias" },
        ]}
        title="Recibimos su solicitud"
        lead="Vamos a revisar el mensaje en un día hábil. Si el portón, las cámaras o la alarma no pueden esperar, use el teléfono o WhatsApp ahora."
      />
      <div className="container-protef relative z-10 -mt-8 pb-16">
      <div className="card flex w-fit flex-wrap gap-3 p-5">
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
    </>
  );
}
