import Link from "next/link";
import { Phone } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { pagePhotos } from "@/lib/photos";
import { buildMetadata } from "@/lib/seo";
import { services, site } from "@/lib/site.config";

export const metadata = buildMetadata({
  title: "Página no encontrada | PROTEF",
  description:
    "Esa dirección no existe en PROTEF. Vuelva a los servicios de seguridad electrónica en Concepción o llame al +56 9 8210 9253. Urgencia en día hábil.",
  path: "/404",
  noindex: true,
});

export default function NotFound() {
  return (
    <>
      <PageIntro
        eyebrow="Dirección inexistente"
        image={pagePhotos.servicios}
        crumbs={[{ name: "Inicio", path: "/" }]}
        title="No encontramos esa página"
        lead="El enlace puede ser de una pestaña antigua del sitio. Estos son los servicios con dirección propia."
      />
    <div className="container-protef relative z-10 -mt-8 pb-16">
      <div className="card p-6">
      <ul className="grid gap-2">
        {services.map((service) => (
          <li key={service.id}>
            <Link className="font-bold text-brand-dark hover:underline" href={service.path}>
              {service.anchor}
            </Link>
          </li>
        ))}
      </ul>
      <a
        href={site.phoneTel}
        className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-gold px-5 font-extrabold text-nav"
        aria-label={`Llamar a PROTEF al ${site.phoneDisplay}`}
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        Llamar {site.phoneDisplay}
      </a>
      </div>
    </div>
    </>
  );
}
