import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { buildMetadata } from "@/lib/seo";
import { homePhotos, pagePhotos } from "@/lib/photos";
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
        lead="Reparación y mantención en terreno para edificios, condominios y empresas en Concepción, Talcahuano y San Pedro de la Paz."
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
      <section className="container-protef grid items-center gap-6 pb-12 lg:grid-cols-[.9fr_1.1fr]">
        <figure className="relative h-72 overflow-hidden rounded-[20px] md:h-96">
          <Image
            src={homePhotos.edificio.src}
            alt={homePhotos.edificio.alt}
            fill
            sizes="(min-width: 1024px) 42vw, 94vw"
            className="object-cover"
          />
        </figure>
        <div>
          <p className="text-sm font-extrabold tracking-wide text-brand-dark uppercase">
            En el edificio
          </p>
          <h2 className="mt-2 text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold text-nav">
            El técnico llega al sistema que ya está instalado
          </h2>
          <p className="mt-3 text-muted">
            No partimos de un catálogo. En la visita se abre el gabinete, se prueba la cámara, el
            portón, el cerco o el citófono, y se deja por escrito si el equipo se repara o si hay
            que cambiar una pieza.
          </p>
          <p className="mt-3 text-muted">
            La cobertura es {site.communes.join(", ")}. La urgencia se atiende de lunes a viernes.
            Si el edificio prefiere una fecha fija, el plan de mantención evita esperar a que el
            acceso deje de funcionar.
          </p>
        </div>
      </section>
      <section className="container-protef pb-12">
        <CTA
          title="¿El sistema falló hoy?"
          text="Llame primero. WhatsApp es el segundo camino. El formulario queda para cotizaciones que pueden esperar el día hábil."
          waText={defaultWhatsappText}
        />
        <p className="mt-6 text-sm text-muted">
          También integramos señales débiles y telecomunicaciones en proyectos de edificios. El
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
