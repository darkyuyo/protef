import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { PageIntro } from "@/components/PageIntro";
import { buildMetadata } from "@/lib/seo";
import { pagePhotos } from "@/lib/photos";
import { pageMeta, plans } from "@/lib/site.config";

export const metadata = buildMetadata(pageMeta.planes);

export default function PlanesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Valores en UF"
        image={pagePhotos.planes}
        imagePosition="object-[22%_center]"
        titleClassName="max-w-xl"
        crumbs={[
          { name: "Inicio", path: "/" },
          { name: "Planes", path: "/planes" },
        ]}
        title="Planes de mantención preventiva en Concepción"
        lead="Valores referenciales según el tamaño de la infraestructura. Todos más IVA. La urgencia suelta no usa esta tabla: se cotiza aparte."
      />
      <div className="container-protef relative z-10 -mt-8 pb-10">
        <div className="grid gap-4 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 0.08}>
              <article
                className={`card flex h-full flex-col p-5 ${plan.featured ? "card-featured" : ""}`}
              >
                {plan.featured ? (
                  <p className="text-xs font-extrabold tracking-wide text-nav uppercase">
                    El más elegido en el sitio actual
                  </p>
                ) : null}
                <h2 className="mt-1 text-xl font-extrabold text-nav">
                  {plan.name} ({plan.cadence})
                </h2>
                <p className={`text-sm ${plan.featured ? "text-nav/80" : "text-muted"}`}>{plan.summary}</p>
                <p className="mt-4 text-3xl font-extrabold text-nav">
                  {plan.price}{" "}
                  <span
                    className={`block text-sm font-bold ${plan.featured ? "text-nav/80" : "text-muted"}`}
                  >
                    {plan.priceDetail}
                  </span>
                </p>
                <ul className="mt-4 grid flex-1 gap-2 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Link
                  href={`/contacto?plan=${plan.id}`}
                  className={`mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-nav px-4 text-sm font-extrabold text-white transition duration-200 hover:-translate-y-0.5 ${
                    plan.featured ? "hover:bg-white hover:text-nav" : "hover:bg-gold hover:text-nav"
                  }`}
                >
                  Cotizar plan {plan.name}
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
