import Link from "next/link";
import { Phone } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { WhatsAppIcon } from "@/components/icons";
import { homePhotos } from "@/lib/photos";
import { buildMetadata } from "@/lib/seo";
import { defaultWhatsappText, pageMeta, site, whatsappHref } from "@/lib/site.config";

export const metadata = buildMetadata({ ...pageMeta.gracias, noindex: true });

export default function GraciasPage() {
  return (
    <>
      <PageIntro
        eyebrow="Solicitud enviada"
        image={homePhotos.noche}
        crumbs={[
          { name: "Inicio", path: "/" },
          { name: "Solicitud enviada", path: "/gracias" },
        ]}
        title="Recibimos su solicitud"
        lead="Vamos a revisar el mensaje en un día hábil. Si el portón, las cámaras o la alarma no pueden esperar, llámenos o escriba ahora."
      />
      <section className="bg-white/80">
        <div className="container-protef py-14 text-center">
          <h2 className="text-2xl font-extrabold text-nav">Si la falla no puede esperar</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            La cotización ya quedó registrada. Para una urgencia de lunes a viernes, el teléfono y
            WhatsApp siguen disponibles.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={site.phoneTel}
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-gold px-5 font-extrabold text-nav"
              aria-label={`Llamar a PROTEF al ${site.phoneDisplay}`}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
            <a
              href={whatsappHref(defaultWhatsappText)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#075e54] px-5 font-extrabold text-white"
              aria-label="Escribir por WhatsApp a PROTEF"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
          <Link
            className="mt-6 inline-flex min-h-12 items-center rounded-full border border-nav/20 bg-white px-6 font-extrabold text-nav"
            href="/"
          >
            Volver al inicio
          </Link>
        </div>
      </section>
    </>
  );
}
