import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { TeamCarousel } from "@/components/TeamCarousel";
import { aboutPhoto, brandLogo, teamPhotos } from "@/lib/photos";
import { YearCounter } from "@/components/YearCounter";
import { buildMetadata } from "@/lib/seo";
import {
  condominios,
  edificios,
  pageMeta,
  sectors,
  services,
  site,
  yearsOfExperience,
} from "@/lib/site.config";

export const metadata = buildMetadata(pageMeta.nosotros);
const years = yearsOfExperience();

const placeCard =
  "group rounded-[20px] border border-[rgba(5,28,56,.12)] border-l-8 border-l-gold bg-white p-8 text-nav shadow-[0_8px_28px_rgba(5,28,56,.08)] transition duration-200 hover:-translate-y-1 hover:bg-nav hover:text-white hover:shadow-[0_16px_36px_rgba(5,28,56,.18)]";

export default function NosotrosPage() {
  return (
    <>
      <PageIntro
        eyebrow={`Desde ${site.foundingYear}`}
        image={aboutPhoto}
        crumbs={[
          { name: "Inicio", path: "/" },
          { name: "Quiénes somos", path: "/nosotros" },
        ]}
        title="Integradores de seguridad electrónica en Concepción"
        lead={`Desde ${site.foundingYear} proyectamos, instalamos y damos soporte a videovigilancia, accesos controlados, facial, huella y con tarjetas de proximidad, citofonía, protección perimetral y señales débiles para el sector inmobiliario e industrial del Biobío.`}
      />
      <div className="container-protef relative z-10 -mt-8">
        <section className="grid gap-4 md:grid-cols-3">
          <article className="card p-5">
            <p className="text-3xl font-extrabold text-nav">
              <YearCounter value={years} />
            </p>
            <p className="text-sm font-bold text-muted">Años desde {site.foundingYear}</p>
          </article>
          <article className="card p-5">
            <p className="text-3xl font-extrabold text-nav">SEC</p>
            <p className="text-sm font-bold text-muted">
              Cercos eléctricos conforme a normativa SEC
            </p>
          </article>
          <article className="card p-5">
            <p className="text-3xl font-extrabold text-nav">6</p>
            <p className="text-sm font-bold text-muted">Rubros de seguridad electrónica</p>
          </article>
        </section>
      </div>

      <section className="mt-10 bg-white/75 py-16">
        <div className="container-protef text-center">
          <p className="text-sm font-extrabold tracking-wide text-brand-dark uppercase">
            Nuestra empresa
          </p>
          <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.6rem)] font-extrabold text-nav">
            {site.legalName}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted">
            Somos una empresa de Concepción dedicada a la seguridad electrónica y a los sistemas de
            señales débiles. El trabajo se ha desarrollado de manera sostenida desde{" "}
            {site.foundingYear}, con ejecución, integración y mantención para constructoras,
            edificios, condominios y empresas. Hoy son {years} años de calendario desde ese inicio.
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-muted">
            El material corporativo también usa la línea “automatización y seguridad electrónica”
            en los flyers. La razón social no cambia: Comunicaciones y Seguridad Electrónica Ltda.
          </p>
          <h3 className="mt-12 text-2xl font-extrabold text-nav">Dónde se usa el servicio</h3>
          <ul className="mt-6 flex flex-wrap justify-center gap-2">
            {sectors.map((sector) => (
              <li
                key={sector}
                className="rounded-full bg-[#eef4fa] px-4 py-2 text-sm font-bold text-nav"
              >
                {sector}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-10" aria-labelledby="equipo-titulo">
        <div className="hero-mesh relative overflow-hidden text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 right-[-4rem] h-56 w-56 rounded-full bg-gold/20 blur-3xl"
          />
          <div className="container-protef grid items-center gap-8 py-12 md:grid-cols-[minmax(0,280px)_1fr] md:gap-12 md:py-16">
            <div className="relative mx-auto w-[min(100%,250px)]">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[36px] bg-gold/30 blur-2xl"
              />
              <div className="relative aspect-square overflow-hidden rounded-[28px] border-4 border-gold shadow-[0_24px_50px_rgba(0,0,0,.38)]">
                <Image
                  src={brandLogo.src}
                  alt={brandLogo.alt}
                  fill
                  sizes="250px"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-sm font-extrabold tracking-wide text-gold uppercase">
                En terreno
              </p>
              <h2
                id="equipo-titulo"
                className="mt-2 max-w-xl text-[clamp(1.8rem,3vw,2.7rem)] leading-tight font-extrabold"
              >
                El equipo que instala y deja el acceso funcionando
              </h2>
              <p className="mt-4 max-w-xl text-white/88">
                Las visitas salen con furgón, materiales y el automatismo en el acceso: motor de
                portón, cableado y puesta en marcha.
              </p>
            </div>
          </div>
        </div>
        <div className="container-protef relative z-10 -mt-8">
          <TeamCarousel photos={teamPhotos} />
        </div>
      </section>

      <section className="bg-white">
        <div className="container-protef grid gap-4 py-16">
          <article className="card p-8 md:grid md:grid-cols-[0.8fr_1.2fr] md:items-start md:gap-10">
            <div>
              <p className="text-sm font-extrabold tracking-wide text-brand-dark uppercase">
                Además de seguridad
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-nav">Señales débiles</h2>
            </div>
            <div>
              <p className="text-muted">
                Además de los seis rubros de seguridad, PROTEF presta mantención preventiva y
                correctiva de señales débiles para edificios, comunidades y condominios, e instala
                redes de datos en proyectos habitacionales y comerciales.
              </p>
              <p className="mt-3 text-muted">
                El mismo material informa participación en más de 30 proyectos habitacionales y
                comerciales, por contrato directo y por subcontrato.
              </p>
            </div>
          </article>
          <div className="grid gap-4 md:grid-cols-2">
            <article className={placeCard}>
              <h2 className="text-2xl font-extrabold text-nav transition-colors group-hover:text-gold">
                Edificios
              </h2>
              <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
                {edificios.map((item) => (
                  <li
                    key={item}
                    className="rounded-[12px] bg-[#eef4fa] px-3 py-2 font-semibold transition-colors group-hover:bg-white/15"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className={placeCard}>
              <h2 className="text-2xl font-extrabold text-nav transition-colors group-hover:text-gold">
                Condominios
              </h2>
              <ul className="mt-4 grid gap-2 text-sm">
                {condominios.map((item) => (
                  <li
                    key={item}
                    className="rounded-[12px] bg-[#f7fafc] px-3 py-2 font-semibold transition-colors group-hover:bg-white/15"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted transition-colors group-hover:text-white/80">
                Norte y Valle Oriente están en Los Ángeles. La cobertura de visitas de urgencia que
                publica el sitio sigue siendo {site.communes.join(", ")}.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="container-protef pb-16">
        <h2 className="text-2xl font-extrabold text-nav">Rubros</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {services.map((service) => (
            <li key={service.id}>
              <Link className="card block p-4 font-bold text-nav" href={service.path}>
                {service.anchor}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
