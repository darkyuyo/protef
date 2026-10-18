import Link from "next/link";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { buildMetadata } from "@/lib/seo";
import { pagePhotos } from "@/lib/photos";
import { defaultWhatsappText, pageMeta, services, site } from "@/lib/site.config";

export const metadata = buildMetadata(pageMeta.servicios);

export default function ServiciosPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: pageMeta.servicios.title,
          url: `${site.url}${pageMeta.servicios.path}`,
        }}
      />
      <PageIntro
        eyebrow="Seis sistemas"
        image={pagePhotos.servicios}
        title="Sistemas en los que trabajamos"
        crumbs={[
          { name: "Inicio", path: "/" },
          { name: "Servicios", path: "/servicios" },
        ]}
      />
      <section className="container-protef mt-8 pb-12" aria-labelledby="rubros-titulo">
        <h2 id="rubros-titulo" className="sr-only">
          Sistemas en los que trabajamos
        </h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.06}>
              <ServiceCard service={service} detailed />
            </Reveal>
          ))}
        </div>
      </section>
      <section className="container-protef pb-12">
        <CTA
          title="¿El sistema falló hoy?"
          text="Llámenos primero. WhatsApp es el segundo camino. El formulario queda para cotizaciones que pueden esperar el día hábil."
          waText={defaultWhatsappText}
        />
        <p className="mt-6 text-sm text-muted">
          También integramos señales débiles en proyectos de edificios. El
          detalle está en{" "}
          <Link className="font-bold text-nav underline" href="/nosotros">
            quiénes somos
          </Link>
          .
        </p>
      </section>
    </>
  );
}
