import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { WhatsAppIcon, serviceIcons } from "@/components/icons";
import { YearCounter } from "@/components/YearCounter";
import { heroPhoto } from "@/lib/photos";
import { buildMetadata } from "@/lib/seo";
import {
  defaultWhatsappText,
  howItWorks,
  pageMeta,
  services,
  site,
  whatsappHref,
  yearsOfExperience,
} from "@/lib/site.config";

export const metadata = buildMetadata(pageMeta.home);

const years = yearsOfExperience();

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: pageMeta.home.title,
          url: `${site.url}/`,
        }}
      />
      <section className="hero-mesh surface-dark relative overflow-hidden border-b-4 border-gold text-white">
        <div className="container-protef relative py-12 md:py-16">
          <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_.85fr]">
            <div>
              <p className="hero-item text-sm font-extrabold tracking-wide text-gold uppercase">
                Soluciones inteligentes, seguridad real
              </p>
              <h1 className="hero-item hero-d1 mt-3 max-w-4xl text-[clamp(2rem,5vw,3.4rem)] leading-[1.1] font-extrabold">
                Servicio técnico de seguridad electrónica en Concepción
              </h1>
              <p className="hero-item hero-d2 mt-4 max-w-2xl text-lg text-white/90">
                Protegemos lo que más valora con tecnología y un técnico en terreno. Reparación y
                mantención para edificios, condominios y empresas en Concepción, Talcahuano y San
                Pedro de la Paz.
              </p>
              <div className="hero-item hero-d3 mt-6 flex flex-wrap gap-3">
                <a
                  href={site.phoneTel}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gold px-5 font-extrabold text-nav"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Llamar {site.phoneDisplay}
                </a>
                <a
                  href={whatsappHref(defaultWhatsappText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/40 px-5 font-bold"
                  aria-label="Escribir por WhatsApp a PROTEF sobre seguridad electrónica"
                >
                  <WhatsAppIcon className="h-5 w-5 text-[#25d366]" />
                  WhatsApp
                </a>
              </div>
            </div>
            <figure className="hero-item hero-d2">
              <Image
                src={heroPhoto.src}
                alt={heroPhoto.alt}
                width={1280}
                height={720}
                priority
                sizes="(min-width: 1024px) 42vw, 94vw"
                className="aspect-[16/10] w-full rounded-[20px] object-cover shadow-[0_18px_40px_rgba(0,0,0,.28)]"
              />
            </figure>
          </div>
          <ul className="mt-8 flex min-h-36 flex-wrap gap-2">
            {services.map((service) => (
              <li key={service.id}>
                <Link
                  href={service.path}
                  className="inline-flex min-h-11 items-center rounded-full bg-white/10 px-4 text-sm font-bold hover:bg-white/20"
                >
                  {service.cardLabel}
                </Link>
              </li>
            ))}
          </ul>
          <dl className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-[12px] bg-black/20 p-4">
              <dt className="text-xs font-bold tracking-wide text-white/70 uppercase">
                Trayectoria
              </dt>
              <dd className="text-2xl font-extrabold">
                Desde {site.foundingYear} · <YearCounter value={years} /> años
              </dd>
            </div>
            <div className="rounded-[12px] bg-black/20 p-4">
              <dt className="text-xs font-bold tracking-wide text-white/70 uppercase">Cobertura</dt>
              <dd className="font-extrabold">{site.communes.join(" · ")}</dd>
            </div>
            <div className="rounded-[12px] bg-black/20 p-4">
              <dt className="text-xs font-bold tracking-wide text-white/70 uppercase">Urgencias</dt>
              <dd className="font-extrabold">Lunes a viernes, en terreno</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="container-protef py-12" aria-labelledby="rubros-titulo">
        <h2 id="rubros-titulo" className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold text-nav">
          Seis rubros, con reparación cuando el sistema se cae
        </h2>
        <p className="mt-2 max-w-3xl text-muted">
          Instalación, reparación y mantención. Si la falla es de hoy, elija el rubro y llame. La
          visita se agenda de lunes a viernes.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Reveal key={service.id}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white py-12" aria-labelledby="sistemas-titulo">
        <div className="container-protef">
          <p className="text-sm font-extrabold tracking-wide text-brand-dark uppercase">
            Sistemas en los que trabajamos
          </p>
          <h2 id="sistemas-titulo" className="mt-2 text-3xl font-extrabold text-nav">
            Tecnología de seguridad que ya está en su edificio
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = serviceIcons[service.icon];
              return (
                <li key={service.id} className="card flex items-center gap-3 p-4">
                  <Icon className="text-brand-dark" aria-hidden="true" />
                  <span className="font-bold">{service.cardLabel}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="container-protef py-12" aria-labelledby="como-titulo">
        <h2
          id="como-titulo"
          className="text-center text-sm font-extrabold tracking-[0.2em] text-nav uppercase"
        >
          Cómo funciona
        </h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-5">
          {howItWorks.map((step) => (
            <li key={step.step} className="card h-full p-4 text-center">
              <span className="text-sm font-extrabold text-nav">{step.step}</span>
              <h3 className="mt-1 font-extrabold text-nav">{step.title}</h3>
              <p className="mt-2 text-sm text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-protef pb-12">
        <div className="grid gap-4 md:grid-cols-3">
          <article className="card p-5">
            <h2 className="font-extrabold text-nav">Solución profesional</h2>
            <p className="mt-2 text-sm text-muted">
              Diagnóstico en terreno y ejecución con el equipo que el recinto ya tiene.
            </p>
          </article>
          <article className="card p-5">
            <h2 className="font-extrabold text-nav">Control del sistema</h2>
            <p className="mt-2 text-sm text-muted">
              Revisión para que cámaras, accesos y alarmas sigan operativos después de la visita.
            </p>
          </article>
          <article className="card p-5">
            <h2 className="font-extrabold text-nav">Hecho para condominios</h2>
            <p className="mt-2 text-sm text-muted">
              Edificios, comunidades y empresas que necesitan un técnico, no un catálogo.
            </p>
          </article>
        </div>
        <div className="mt-8">
          <CTA
            title="¿El sistema falló hoy?"
            text="Llame primero. WhatsApp es el segundo camino. El formulario queda para cotizaciones que pueden esperar el día hábil."
            waText={defaultWhatsappText}
          />
        </div>
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
