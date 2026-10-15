import { PageIntro } from "@/components/PageIntro";
import { ServiceCard } from "@/components/ServiceCard";
import { buildMetadata } from "@/lib/seo";
import { pageMeta, services, site } from "@/lib/site.config";

export const metadata = buildMetadata(pageMeta.servicios);

export default function ServiciosPage() {
  return (
    <>
      <PageIntro
        crumbs={[
          { name: "Inicio", path: "/" },
          { name: "Servicios", path: "/servicios" },
        ]}
        title="Servicio técnico y reparación en Concepción"
        lead="Instalación, reparación y mantención de CCTV, cercos eléctricos SEC, portones, citófonos, alarmas de incendio y control de acceso biométrico."
      />
      <div className="container-protef grid gap-8 py-10">
        <p className="text-muted">
          Atendemos en {site.communes.join(", ")}. La urgencia de terreno es de lunes a viernes.
          Elija el rubro para ver fallas, proceso y preguntas de esa especialidad.
        </p>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <section className="card p-6">
          <h2 className="text-xl font-extrabold text-nav">Señales débiles</h2>
          <p className="mt-2 text-muted">
            En proyectos de edificios también hacemos mantención preventiva y correctiva de sistemas de
            señales débiles, y redes de telecomunicaciones. No tiene una landing propia: se cotiza
            junto con la seguridad electrónica del mismo recinto.
          </p>
        </section>
      </div>
    </>
  );
}
