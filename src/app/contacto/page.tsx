import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageIntro } from "@/components/PageIntro";
import { WhatsAppIcon } from "@/components/icons";
import { buildMetadata } from "@/lib/seo";
import { pagePhotos } from "@/lib/photos";
import { defaultWhatsappText, pageMeta, site, whatsappHref } from "@/lib/site.config";

export const metadata = buildMetadata(pageMeta.contacto);

export default function ContactoPage() {
  return (
    <>
      <PageIntro
        eyebrow="Día hábil"
        image={pagePhotos.contacto}
        crumbs={[
          { name: "Inicio", path: "/" },
          { name: "Contacto", path: "/contacto" },
        ]}
        title="Hablemos de la reparación o de la cotización"
        lead="La llamada es el camino más rápido. WhatsApp es el segundo. El formulario queda para dejar el nombre del edificio y el rubro."
      />
      <div className="container-protef mt-8 grid gap-6 pb-10 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="card h-fit p-6">
          <h2 className="text-xl font-extrabold text-nav">Datos de contacto</h2>
          <ul className="mt-4 grid gap-3 text-sm">
            <li>
              <a className="inline-flex min-h-11 items-center gap-2 font-bold" href={site.phoneTel} aria-label={`Llamar al ${site.phoneDisplay}`}>
                <Phone className="h-4 w-4 text-brand-dark" aria-hidden="true" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                className="inline-flex min-h-11 items-center gap-2 font-bold"
                href={whatsappHref(defaultWhatsappText)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Escribir por WhatsApp a PROTEF"
              >
                <WhatsAppIcon className="h-5 w-5 text-[#128c7e]" />
                WhatsApp
              </a>
            </li>
            <li>
              <a className="inline-flex min-h-11 items-center gap-2 font-bold" href={`mailto:${site.email}`}>
                <Mail className="h-4 w-4 text-brand-dark" aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li className="inline-flex min-h-11 items-center gap-2 font-bold">
              <MapPin className="h-4 w-4 text-brand-dark" aria-hidden="true" />
              Concepción, Biobío, Chile
            </li>
          </ul>
          <p className="mt-4 text-sm text-muted">
            Atención de terreno de lunes a viernes en {site.communes.join(", ")}. No hay horario de
            reloj publicado: se confirma al llamar.
          </p>
          <p className="mt-3 text-sm text-muted">
            En el mensaje conviene el nombre del edificio, la comuna y qué dejó de funcionar: sin
            imagen, portón trabado, cerco en sirena, citófono mudo o lector que no abre. Con eso la
            visita sale con la herramienta del rubro, no a mirar el sistema por primera vez.
          </p>
        </aside>
        <section className="card relative p-6">
          <h2 className="mb-4 text-xl font-extrabold text-nav">Enviar un mensaje</h2>
          <ContactForm />
        </section>
      </div>
    </>
  );
}
