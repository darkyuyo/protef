import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, CalendarCheck, Headphones, Handshake, Lightbulb } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { serviceIcons } from "@/components/icons";
import { YearCounter } from "@/components/YearCounter";
import { heroPhoto, homePhotos } from "@/lib/photos";
import { buildMetadata } from "@/lib/seo";
import { pageMeta, services, site, yearsOfExperience } from "@/lib/site.config";

export const metadata = buildMetadata(pageMeta.home);

const years = yearsOfExperience();

const homeLines: Record<string, string> = {
  cctv: "Cámaras, NVR y grabación que vuelven a mostrar imagen.",
  cercos: "Perímetro eléctrico revisado y conforme a normativa SEC.",
  portones: "Motor, fotoceldas y portón que vuelve a abrir.",
  citofonos: "Audio, video y apertura en edificios y condominios.",
  biometrico: "Huella, rostro, tarjetas y torniquetes en servicio.",
  alarmas: "Detectores, sirenas y centrales listos para una prueba.",
};

const defines = [
  {
    title: "Innovación",
    text: "Cámaras, acceso facial, lectura de patentes y centrales que se revisan en el equipo que el edificio ya tiene.",
    icon: Lightbulb,
  },
  {
    title: "Compromiso",
    text: "Primero vemos qué falló. La cotización sale de ese diagnóstico, no de cambiar el sistema completo.",
    icon: Handshake,
  },
  {
    title: "Dedicación",
    text: "La visita deja el acceso probado: cableado ordenado, configuración completa y un técnico que conoce ese equipo.",
    icon: Award,
  },
  {
    title: "Postventa",
    text: "Después de reparar seguimos. Ajustes, mantención y un teléfono de lunes a viernes.",
    icon: Headphones,
  },
];

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
      <section className="surface-dark relative overflow-hidden border-b-4 border-gold text-white">
        <Image
          src={heroPhoto.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center]"
        />
        <div
          className="hero-veil absolute inset-0"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(5, 16, 28, 0.72) 0%, rgba(5, 16, 28, 0.28) 36%, rgba(0, 0, 0, 0) 62%)",
          }}
        />
        <div className="container-protef relative py-12 md:py-16">
          <p className="hero-item inline-flex w-fit rounded-full border border-gold/50 bg-gold/15 px-3 py-1 text-xs font-extrabold tracking-wider text-gold uppercase">
            Concepción · desde {site.foundingYear}
          </p>
          <h1 className="hero-item hero-d1 mt-4 max-w-3xl text-[clamp(1.65rem,3.2vw,2.5rem)] leading-[1.12] font-extrabold">
            Seguridad electrónica para edificios y condominios
          </h1>
        </div>
      </section>

      <section className="container-protef pt-8">
        <p className="max-w-xl text-lg">
          Si el portón no abre, la cámara no graba o el cerco se apagó, llame. Un técnico sale a
          terreno en {site.communes.join(", ")}.
        </p>
        <Link
          href="/servicios"
          className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-nav"
        >
          Ver los sistemas
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </section>

      <section className="container-protef mt-8">
        <dl className="grid gap-3 sm:grid-cols-3">
          <div className="card p-5">
            <dt className="text-xs font-bold tracking-wide text-muted uppercase">Trayectoria</dt>
            <dd className="mt-1 text-2xl font-extrabold text-nav">
              <YearCounter value={years} /> años
            </dd>
            <dd className="text-sm text-muted">Desde {site.foundingYear}</dd>
          </div>
          <div className="card p-5">
            <dt className="text-xs font-bold tracking-wide text-muted uppercase">Cobertura</dt>
            <dd className="mt-1 font-extrabold text-nav">{site.communes.join(" · ")}</dd>
          </div>
          <div className="card p-5">
            <dt className="text-xs font-bold tracking-wide text-muted uppercase">Urgencias</dt>
            <dd className="mt-1 font-extrabold text-nav">Lunes a viernes, en terreno</dd>
          </div>
        </dl>
      </section>

      <section className="container-protef py-14" aria-labelledby="sistemas-titulo">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-extrabold tracking-wide text-brand-dark uppercase">
              Qué reparamos
            </p>
          </div>
          <Link
            href="/servicios"
            className="inline-flex min-h-11 items-center gap-2 font-bold text-nav underline"
          >
            Ver cada sistema
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon];
            return (
              <Reveal key={service.id} delay={index * 0.06}>
                <Link
                  href={service.path}
                  className="card flex h-full flex-col p-5 transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(5,28,56,.12)]"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-[12px] bg-nav text-gold">
                    <Icon aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-xl font-extrabold text-nav">{service.title}</h3>
                  <p className="mt-2 text-muted">{homeLines[service.id]}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-extrabold text-brand-dark">
                    Pedir este servicio
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <figure className="relative h-56 overflow-hidden sm:h-72 md:h-96">
        <Image
          src={homePhotos.edificio.src}
          alt={homePhotos.edificio.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </figure>

      <section className="bg-white/75 py-16" aria-labelledby="define-titulo">
        <div className="container-protef">
          <h2
            id="define-titulo"
            className="text-center text-[clamp(1.8rem,3vw,2.6rem)] font-extrabold text-nav"
          >
            Lo que nos define
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {defines.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="text-center">
                  <span className="mx-auto grid h-12 w-12 place-items-center text-brand-dark">
                    <Icon className="h-8 w-8" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className="mt-3 text-lg font-extrabold text-nav">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y-4 border-gold text-white">
        <Image
          src={homePhotos.noche.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="hero-veil absolute inset-0" />
        <div className="container-protef relative grid items-center gap-6 py-14 md:grid-cols-[1.15fr_.85fr] md:py-16">
          <div>
            <p className="text-sm font-extrabold tracking-wide text-gold uppercase">
              Servicio técnico
            </p>
            <h2 className="mt-2 text-[clamp(1.5rem,2.6vw,2.15rem)] leading-tight font-extrabold">
              ¿El sistema falló hoy?
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              href="/contacto"
              className="inline-flex min-h-14 items-center rounded-full bg-white px-6 font-extrabold text-nav"
            >
              Pedir cotización
            </Link>
          </div>
        </div>
      </section>

      <section className="container-protef py-8">
        <p className="max-w-xl text-lg">
          Si puede esperar el día hábil, escriba a{" "}
          <a className="font-bold text-nav underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>{" "}
          o pida la cotización.
        </p>
      </section>

      <section className="bg-white" aria-labelledby="mantencion-titulo">
        <div className="container-protef py-16">
          <div className="overflow-hidden rounded-[20px] border border-[rgba(5,28,56,.12)] shadow-[0_16px_40px_rgba(5,28,56,.08)] md:grid md:grid-cols-[1.2fr_.8fr]">
            <div className="border-l-8 border-gold p-8 md:p-10">
              <p className="inline-flex items-center gap-2 text-sm font-extrabold tracking-wide text-brand-dark uppercase">
                <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                Planes de mantención
              </p>
              <h2
                id="mantencion-titulo"
                className="mt-3 max-w-xl text-[clamp(1.8rem,3vw,2.6rem)] leading-tight font-extrabold text-nav"
              >
                Mantención antes de la falla
              </h2>
              <p className="mt-4 max-w-xl text-lg text-muted">
                Una visita con fecha, antes de que el portón o la cámara dejen de funcionar. El
                plan queda para el edificio, no para el día de la urgencia.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                <li className="rounded-[12px] bg-[#eef4fa] px-4 py-3 text-sm font-bold text-nav">
                  Visita con fecha
                </li>
                <li className="rounded-[12px] bg-[#eef4fa] px-4 py-3 text-sm font-bold text-nav">
                  Diagnóstico en terreno
                </li>
                <li className="rounded-[12px] bg-[#eef4fa] px-4 py-3 text-sm font-bold text-nav">
                  Seis sistemas, si el recinto los tiene
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center gap-3 bg-[#f7fafc] p-8 md:p-10">
              <Link
                href="/planes"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-gold px-6 text-lg font-extrabold text-nav"
              >
                Ver planes
              </Link>
              <Link
                href="/mantencion"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-nav/20 bg-white px-6 font-extrabold text-nav"
              >
                Qué incluye
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
