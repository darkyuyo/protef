import { PageIntro } from "@/components/PageIntro";
import { pagePhotos } from "@/lib/photos";
import { buildMetadata } from "@/lib/seo";
import { pageMeta, site } from "@/lib/site.config";

export const metadata = buildMetadata(pageMeta.privacidad);

export default function PrivacidadPage() {
  return (
    <>
      <PageIntro
        eyebrow="Datos del sitio"
        image={pagePhotos.contacto}
        crumbs={[
          { name: "Inicio", path: "/" },
          { name: "Privacidad", path: "/privacidad" },
        ]}
        title="Privacidad y datos personales"
        lead="Qué datos pide este sitio, para qué se usan y cómo pedir que se corrijan o eliminen."
      />
      <div className="container-protef relative z-10 -mt-8 mb-12 grid max-w-3xl gap-5 rounded-[20px] bg-white p-6 text-muted shadow-[0_16px_40px_rgba(5,28,56,.08)] md:p-8">
        <section>
          <h2 className="text-xl font-extrabold text-nav">Responsable</h2>
          <p className="mt-2">
            {site.legalName}, Concepción, Región del Biobío. Correo: {site.email}. Teléfono:{" "}
            {site.phoneDisplay}.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-extrabold text-nav">Datos del formulario</h2>
          <p className="mt-2">
            Si envía el formulario guardamos nombre o edificio, correo, teléfono, tipo de servicio y
            mensaje, además de la página de origen y, si vienen en el enlace, los parámetros de la campaña.
            Sirven solo para responder la cotización o la visita. El envío sale por Gmail hacia{" "}
            {site.email}. No se usa esa base para otra campaña.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-extrabold text-nav">Normativa</h2>
          <p className="mt-2">
            El tratamiento se informa bajo la Ley 19.628 sobre protección de la vida privada. La Ley
            21.719 de protección de datos personales entra en vigor el 1 de diciembre de 2026. Este
            texto no reemplaza una asesoría legal: describe lo que el sitio hace hoy.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-extrabold text-nav">Cookies</h2>
          <p className="mt-2">
            Este sitio no instala cookies de publicidad ni de medición. No hay aviso de cookies porque
            no se usan para seguir visitas, clics ni envíos del formulario.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-extrabold text-nav">Sus derechos</h2>
          <p className="mt-2">
            Puede pedir acceso, rectificación o eliminación de lo que envió escribiendo a {site.email}.
            No publicamos calificaciones ni reseñas de clientes en este sitio.
          </p>
        </section>
      </div>
    </>
  );
}
