import { PageIntro } from "@/components/PageIntro";
import { buildMetadata } from "@/lib/seo";
import { pageMeta, site } from "@/lib/site.config";

export const metadata = buildMetadata(pageMeta.privacidad);

export default function PrivacidadPage() {
  return (
    <>
      <PageIntro
        crumbs={[
          { name: "Inicio", path: "/" },
          { name: "Privacidad", path: "/privacidad" },
        ]}
        title="Privacidad y datos personales"
        lead="Qué datos pide este sitio, para qué se usan y cómo pedir que se corrijan o eliminen."
      />
      <div className="container-protef grid max-w-3xl gap-5 py-10 text-muted">
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
            mensaje, además de la página de origen y, si vienen en el enlace, parámetros UTM o gclid.
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
          <h2 className="text-xl font-extrabold text-nav">Cookies y medición</h2>
          <p className="mt-2">
            Google Ads (identificador {site.adsId}) mide clics en el teléfono, en WhatsApp y el envío
            del formulario. Esas cookies quedan bloqueadas hasta que usted acepta el aviso. “Solo
            necesarias” las mantiene apagadas. Puede borrar la elección borrando los datos del sitio
            en el navegador.
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
