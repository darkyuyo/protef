import Link from "next/link";
import { Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/icons";
import { relatedServices, type Landing } from "@/content/landings";
import { serviceGraph } from "@/lib/jsonld";
import { site, whatsappHref } from "@/lib/site.config";

export function LandingRubro({ landing }: { landing: Landing }) {
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "/servicios" },
    { name: landing.h1, path: landing.path },
  ];
  const related = relatedServices(landing.id);

  return (
    <>
      <JsonLd
        data={serviceGraph({
          path: landing.path,
          name: landing.serviceName,
          description: landing.lead,
          crumbs,
          faqs: landing.faqs.map((faq) => ({ question: faq.question, answer: faq.answer })),
        })}
      />
      <article>
        <header className="hero-mesh surface-dark relative overflow-hidden border-b-4 border-gold text-white">
          <div className="container-protef py-10 md:py-14">
            <Breadcrumbs items={crumbs} tone="dark" />
            <div className="mt-5">
                <p className="hero-item inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wider">
                  {landing.eyebrow}
                </p>
                <h1 className="hero-item hero-d1 mt-4 max-w-4xl text-[clamp(1.8rem,4vw,3rem)] leading-tight font-extrabold">
                  {landing.h1}
                </h1>
                <p className="hero-item hero-d2 mt-4 max-w-3xl text-lg text-white/90">
                  {landing.lead}
                </p>
                <div className="hero-item hero-d3 mt-6 flex flex-wrap gap-3">
                  <a
                    href={site.phoneTel}
                    className="pulse-urgent inline-flex min-h-11 items-center gap-2 rounded-full bg-gold px-5 font-extrabold text-nav"
                    aria-label={`Llamar a PROTEF al ${site.phoneDisplay}`}
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Urgencia: llamar ahora
                  </a>
                  <a
                    href={whatsappHref(landing.waText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/40 px-5 font-bold"
                    aria-label={`Escribir por WhatsApp a PROTEF: ${landing.h1}`}
                  >
                    <WhatsAppIcon className="h-5 w-5 text-[#25d366]" />
                    WhatsApp
                  </a>
                </div>
            </div>
          </div>
        </header>

        <div className="container-protef grid gap-8 py-10">
          <Reveal>
            <section className="card p-6">
              <h2 className="text-2xl font-extrabold text-nav">{landing.failuresTitle}</h2>
              <p className="mt-2 text-muted">{landing.failuresIntro}</p>
              <ul className="mt-4 grid gap-2">
                {landing.failures.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="font-bold text-brand-dark">
                      •
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          {landing.sections.map((section) => (
            <Reveal key={section.heading}>
              <section>
                <h2 className="text-2xl font-extrabold text-nav">{section.heading}</h2>
                <div className="mt-3 grid gap-3 text-muted">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}

          <Reveal>
            <section>
              <h2 className="text-2xl font-extrabold text-nav">Cómo atendemos</h2>
              <ol className="mt-4 grid gap-3 md:grid-cols-5">
                {landing.process.map((step, index) => (
                  <li key={step.title} className="card p-4">
                    <span className="text-sm font-extrabold text-brand-dark">0{index + 1}</span>
                    <h3 className="mt-1 font-extrabold text-nav">{step.title}</h3>
                    <p className="mt-1 text-sm text-muted">{step.text}</p>
                  </li>
                ))}
              </ol>
            </section>
          </Reveal>

          <Reveal>
            <section className="grid gap-4 md:grid-cols-2">
              <div className="card p-6">
                <h2 className="text-xl font-extrabold text-nav">Zona de atención</h2>
                <p className="mt-2 text-muted">
                  La visita cubre {site.communes.join(", ")}. No hay una página distinta por comuna.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {site.communes.map((commune) => (
                    <li
                      key={commune}
                      className="rounded-full bg-[#eef4fb] px-3 py-2 text-sm font-bold text-nav"
                    >
                      {commune}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card p-6">
                <h2 className="text-xl font-extrabold text-nav">{landing.brandsTitle}</h2>
                <ul className="mt-3 grid gap-2 text-muted">
                  {landing.brands.map((brand) => (
                    <li key={brand}>{brand}</li>
                  ))}
                </ul>
              </div>
            </section>
          </Reveal>

          <FAQ items={landing.faqs} />

          <section>
            <h2 className="text-2xl font-extrabold text-nav">Otros rubros en Concepción</h2>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {related.map((service) => (
                <li key={service.id}>
                  <Link
                    className="card block p-4 font-bold text-brand-dark hover:underline"
                    href={service.path}
                  >
                    {service.anchor}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <CTA
            title={landing.strip}
            text="La atención de terreno es de lunes a viernes. Si necesita cotizar mantención además de la reparación, escríbanos el nombre del edificio."
            waText={landing.waText}
          />
        </div>
      </article>
    </>
  );
}
