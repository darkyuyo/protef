import Image from "next/image";
import Link from "next/link";
import { MaintenanceTabs } from "@/components/MaintenanceTabs";
import { PageIntro } from "@/components/PageIntro";
import { maintenanceRubros } from "@/content/maintenance";
import { buildMetadata } from "@/lib/seo";
import { pagePhotos } from "@/lib/photos";
import { pageMeta, site } from "@/lib/site.config";

export const metadata = buildMetadata(pageMeta.mantencion);

export default function MantencionPage() {
  return (
    <>
      <PageIntro
        eyebrow="Visitas con fecha"
        image={pagePhotos.mantencion}
        crumbs={[
          { name: "Inicio", path: "/" },
          { name: "Mantención", path: "/mantencion" },
        ]}
        title="Mantención preventiva de seguridad electrónica en Concepción"
        lead="Visitas programadas, diagnóstico en terreno e informes para que el edificio mantenga CCTV, cercos, portones, citofonía, accesos y alarmas sin sorpresas."
      />
      <div className="container-protef mt-8 grid min-w-0 gap-8 pb-10">
        <section className="grid min-w-0 gap-3 sm:grid-cols-3">
          <p className="card p-4 font-bold">6 rubros en la misma visita, si el recinto los tiene</p>
          <p className="card p-4 font-bold">Cercos revisados conforme a normativa SEC</p>
          <p className="card p-4 font-bold">Urgencias de lunes a viernes, fuera del calendario</p>
        </section>
        <section className="grid min-w-0 items-center gap-6 lg:grid-cols-[.85fr_1.15fr]">
          <figure className="relative h-72 w-full min-w-0 overflow-hidden rounded-[20px] md:h-96 lg:h-full lg:min-h-80">
            <Image
              src={pagePhotos.visita.src}
              alt={pagePhotos.visita.alt}
              fill
              loading="eager"
              sizes="(min-width: 1024px) 38vw, 94vw"
              className="object-cover"
              style={{ objectPosition: "center 42%" }}
            />
          </figure>
          <div>
            <h2 className="text-2xl font-extrabold text-nav">Qué se revisa en la visita</h2>
            <p className="mt-3 text-muted">
              La mantención no espera a que el portón se trabe o la cámara deje de grabar. Se agenda
              un día hábil, se recorre el equipo que el edificio ya tiene y se anota lo que hay que
              ajustar, limpiar o cambiar.
            </p>
            <p className="mt-3 text-muted">
              En {site.communes.join(", ")} la misma visita puede cubrir cámaras, cerco, portón,
              citófono, acceso y alarma de incendio, si el recinto los tiene. El cerco se revisa
              con el criterio de la normativa SEC. Lo que no alcanza a repararse en el momento queda
              cotizado, sin mezclarlo con la revisión preventiva.
            </p>
          </div>
        </section>
        <section className="min-w-0">
          <h2 className="text-2xl font-extrabold text-nav">Qué incluye cada rubro</h2>
          <p className="mt-2 mb-4 text-muted">
            Elija el sistema para ver el alcance de la visita. Los seis textos están en esta página.
          </p>
          <MaintenanceTabs items={maintenanceRubros} />
        </section>
        <p className="text-muted">
          La frecuencia y el valor referencial en UF están en{" "}
          <Link className="font-bold text-brand-dark underline" href="/planes">
            los planes de mantención para edificios y condominios
          </Link>
          .
        </p>
      </div>
    </>
  );
}
