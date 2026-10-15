import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { YearCounter } from "@/components/YearCounter";
import { buildMetadata } from "@/lib/seo";
import {
  condominios,
  edificios,
  mandantes,
  pageMeta,
  sectors,
  services,
  site,
  yearsOfExperience,
} from "@/lib/site.config";

export const metadata = buildMetadata(pageMeta.nosotros);
const years = yearsOfExperience();

export default function NosotrosPage() {
  return (
    <>
      <PageIntro
        crumbs={[
          { name: "Inicio", path: "/" },
          { name: "Quiénes somos", path: "/nosotros" },
        ]}
        title="Integradores de seguridad electrónica en Concepción"
        lead={`Desde ${site.foundingYear} proyectamos, instalamos y damos soporte a videovigilancia, acceso, citofonía, protección perimetral y señales débiles para el sector inmobiliario e industrial del Biobío.`}
      />
      <div className="container-protef grid gap-8 py-10">
        <section className="grid gap-4 md:grid-cols-3">
          <article className="card p-5">
            <p className="text-3xl font-extrabold text-nav">
              <YearCounter value={years} />
            </p>
            <p className="text-sm font-bold text-muted">Años desde {site.foundingYear}</p>
          </article>
          <article className="card p-5">
            <p className="text-3xl font-extrabold text-nav">SEC</p>
            <p className="text-sm font-bold text-muted">Cercos eléctricos conforme a normativa SEC</p>
          </article>
          <article className="card p-5">
            <p className="text-3xl font-extrabold text-nav">6</p>
            <p className="text-sm font-bold text-muted">Rubros de seguridad electrónica</p>
          </article>
        </section>

        <section className="card p-6">
          <p className="text-sm font-extrabold tracking-wide text-brand-dark uppercase">Nuestra empresa</p>
          <h2 className="mt-2 text-2xl font-extrabold text-nav">{site.legalName}</h2>
          <p className="mt-3 text-muted">
            Somos una empresa de Concepción dedicada a la seguridad electrónica y a los sistemas de
            señales débiles. El trabajo se ha desarrollado de manera sostenida desde {site.foundingYear},
            con ejecución, integración y mantención para constructoras, edificios, condominios y
            empresas. Hoy son {years} años de calendario desde ese inicio.
          </p>
          <p className="mt-3 text-muted">
            El material corporativo también usa la línea “automatización y seguridad electrónica” en
            los flyers. La razón social no cambia: Comunicaciones y Seguridad Electrónica Ltda.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold text-nav">Dónde se usa el servicio</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {sectors.map((sector) => (
              <li key={sector} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-nav">
                {sector}
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <article className="card p-6">
            <h2 className="text-xl font-extrabold text-nav">Constructoras mandantes</h2>
            <p className="mt-2 text-sm text-muted">
              El gráfico de trayectoria publica estos mandantes. A excepción de Constructora Guindo
              Santo, esos proyectos figuran como subcontrato de Serfoelec Montajes Ltda.
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm font-semibold">
              {mandantes.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </article>
          <article className="card p-6">
            <h2 className="text-xl font-extrabold text-nav">Señales débiles y telecomunicaciones</h2>
            <p className="mt-2 text-sm text-muted">
              Además de los seis rubros de seguridad, PROTEF presta mantención preventiva y correctiva
              de señales débiles para edificios, comunidades y condominios, e instala redes de datos en
              proyectos habitacionales y comerciales.
            </p>
            <p className="mt-3 text-sm text-muted">
              El mismo material informa participación en más de 30 proyectos habitacionales y
              comerciales, por contrato directo y por subcontrato.
            </p>
          </article>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-extrabold text-nav">Edificios</h2>
            <ul className="mt-3 grid gap-1 text-sm">
              {edificios.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-nav">Condominios</h2>
            <ul className="mt-3 grid gap-1 text-sm">
              {condominios.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-muted">
              Norte y Valle Oriente están en Los Ángeles. La cobertura de visitas de urgencia que
              publica el sitio sigue siendo {site.communes.join(", ")}.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold text-nav">Rubros</h2>
          <ul className="mt-4 grid gap-2">
            {services.map((service) => (
              <li key={service.id}>
                <Link className="font-bold text-brand-dark hover:underline" href={service.path}>
                  {service.anchor}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
