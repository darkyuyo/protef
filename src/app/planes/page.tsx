import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { PageIntro } from "@/components/PageIntro";
import { buildMetadata } from "@/lib/seo";
import { pageMeta, plans } from "@/lib/site.config";

export const metadata = buildMetadata(pageMeta.planes);

export default function PlanesPage() {
  return (
    <>
      <PageIntro
        crumbs={[
          { name: "Inicio", path: "/" },
          { name: "Planes", path: "/planes" },
        ]}
        title="Planes de mantención preventiva en Concepción"
        lead="Valores referenciales según el tamaño de la infraestructura. Todos más IVA. La urgencia suelta no usa esta tabla: se cotiza aparte."
      />
      <div className="container-protef py-10">
        <div className="grid gap-4 lg:grid-cols-4">
          {plans.map((plan) => (
            <Reveal key={plan.id}>
              <article className={`card flex h-full flex-col p-5 ${plan.featured ? "ring-2 ring-gold" : ""}`}>
                {plan.featured ? (
                  <p className="text-xs font-extrabold tracking-wide text-brand-dark uppercase">El más elegido en el sitio actual</p>
                ) : null}
                <h2 className="mt-1 text-xl font-extrabold text-nav">
                  {plan.name} ({plan.cadence})
                </h2>
                <p className="text-sm text-muted">{plan.summary}</p>
                <p className="mt-4 text-3xl font-extrabold text-nav">
                  {plan.price}{" "}
                  <span className="block text-sm font-bold text-muted">{plan.priceDetail}</span>
                </p>
                <ul className="mt-4 grid flex-1 gap-2 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Link
                  href={`/contacto?plan=${plan.id}`}
                  className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-nav px-4 text-sm font-extrabold text-white"
                >
                  Cotizar plan {plan.name}
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">
          Light es la revisión más espaciada. No es “mejor” por ser más barata al año: pasa más tiempo
          entre visitas. Estándar es el plan que el sitio actual destaca. El alcance por rubro está en{" "}
          <Link className="font-bold text-brand-dark underline" href="/mantencion">
            mantención preventiva
          </Link>
          .
        </p>
      </div>
    </>
  );
}
