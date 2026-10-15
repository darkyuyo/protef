import { canonicalUrl, services, site, yearsOfExperience } from "@/lib/site.config";

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const;

export function businessGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": site.websiteId,
        url: canonicalUrl("/"),
        name: site.shortName,
        description: "Empresa de seguridad electrónica en Concepción, Chile",
        inLanguage: site.locale,
        publisher: { "@id": site.businessId },
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": site.businessId,
        name: site.legalName,
        alternateName: site.name,
        url: canonicalUrl("/"),
        logo: `${site.url}/icon-512.png`,
        image: `${site.url}/og-image.png`,
        description: `Servicio técnico, reparación, instalación y mantención de CCTV, cercos eléctricos SEC, citófonos, portones, alarmas y control de accesos en Concepción y la Región del Biobío desde ${site.foundingYear}.`,
        telephone: site.phoneE164,
        email: site.email,
        foundingDate: String(site.foundingYear),
        priceRange: site.priceRange,
        address: {
          "@type": "PostalAddress",
          addressLocality: site.address.locality,
          addressRegion: site.address.region,
          addressCountry: site.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.geo.latitude,
          longitude: site.geo.longitude,
        },
        areaServed: site.communes.map((name) => ({ "@type": "City", name })),
        openingHoursSpecification: weekdays.map((day) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: day,
        })),
        knowsAbout: [
          "Servicio técnico de seguridad electrónica",
          "Reparación de cámaras CCTV",
          "Reparación de cercos eléctricos SEC",
          "Reparación de portones automáticos",
          "Reparación de citófonos y videoporteros",
          "Control de accesos biométrico",
          "Alarmas de incendio",
          "Mantención preventiva de seguridad electrónica",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios de seguridad electrónica",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.anchor,
              areaServed: "Concepción",
            },
          })),
        },
      },
    ],
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbGraph(crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: canonicalUrl(crumb.path),
    })),
  };
}

export function serviceGraph(input: {
  path: string;
  name: string;
  description: string;
  crumbs: Crumb[];
}) {
  const url = canonicalUrl(input.path);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: input.name,
        url,
        provider: { "@id": site.businessId },
        areaServed: site.communes.map((name) => ({ "@type": "City", name })),
        description: input.description,
      },
      breadcrumbGraph(input.crumbs),
    ],
  };
}

export function experienceLabel(date = new Date()): string {
  return `${yearsOfExperience(date)} años`;
}
