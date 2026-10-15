import Link from "next/link";
import { MaintenanceTabs } from "@/components/MaintenanceTabs";
import { PageIntro } from "@/components/PageIntro";
import { maintenanceRubros } from "@/content/maintenance";
import { buildMetadata } from "@/lib/seo";
import { pageMeta } from "@/lib/site.config";

export const metadata = buildMetadata(pageMeta.mantencion);

export default function MantencionPage() {
  return (
    <>
      <PageIntro
        crumbs={[
          { name: "Inicio", path: "/" },
          { name: "Mantención", path: "/mantencion" },
        ]}
        title="Mantención preventiva de seguridad electrónica en Concepción"
        lead="Visitas programadas, diagnóstico en terreno e informes para que el edificio mantenga CCTV, cercos, portones, citofonía, accesos y alarmas sin sorpresas."
      />
      <div className="container-protef grid gap-8 py-10">
        <section className="grid gap-3 sm:grid-cols-3">
          <p className="card p-4 font-bold">6 rubros en la misma visita, si el recinto los tiene</p>
          <p className="card p-4 font-bold">Cercos revisados conforme a normativa SEC</p>
          <p className="card p-4 font-bold">Urgencias de lunes a viernes, fuera del calendario</p>
        </section>
        <section>
          <h2 className="text-2xl font-extrabold text-nav">Qué incluye cada rubro</h2>
          <p className="mt-2 mb-4 text-muted">
            Los seis alcances están en esta página. Cambiar de pestaña no oculta el texto al buscador:
            cada panel viaja en el HTML.
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
