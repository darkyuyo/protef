export const FOUNDING_YEAR = 1995;

export function yearsOfExperience(date = new Date()): number {
  return date.getFullYear() - FOUNDING_YEAR;
}

export const site = {
  name: "PROTEF",
  legalName: "PROTEF Comunicaciones y Seguridad Electrónica Ltda.",
  shortName: "PROTEF Seguridad Electrónica",
  url: "https://www.protef.cl",
  email: "contacto@protef.cl",
  phoneDisplay: "+56 9 8210 9253",
  phoneE164: "+56982109253",
  phoneTel: "tel:+56982109253",
  whatsappNumber: "56982109253",
  locale: "es-CL",
  ogLocale: "es_CL",
  foundingYear: FOUNDING_YEAR,
  priceRange: "$$",
  geo: { latitude: -36.827, longitude: -73.0498 },
  address: {
    locality: "Concepción",
    region: "Biobío",
    country: "CL",
  },
  communes: ["Concepción", "Talcahuano", "San Pedro de la Paz"] as const,
  coverageSectors: ["Lonco", "Villuco"] as const,
  googleVerification: "l2Yf1SjOiGkan23vjMKoTMD06HhUy-O9-Z0_wx4NFDw",
  businessId: "https://www.protef.cl/#business",
  websiteId: "https://www.protef.cl/#website",
  ogImage: "/og-image.png",
  ogImageAlt:
    "PROTEF Comunicaciones y Seguridad Electrónica, servicio técnico en Concepción",
} as const;

export function coverageLine(): string {
  return `${site.communes.join(", ")}, sector ${site.coverageSectors.join(" y ")}`;
}

export function canonicalUrl(path: string): string {
  if (path === "/") return site.url;
  return `${site.url}${path}`;
}

export function whatsappHref(text: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const defaultWhatsappText =
  "Hola, necesito servicio técnico de seguridad electrónica en Concepción.";

export type ServiceIcon =
  | "camera"
  | "zap"
  | "door"
  | "intercom"
  | "fingerprint"
  | "flame";

export type Service = {
  id: string;
  icon: ServiceIcon;
  title: string;
  description: string;
  benefits: string[];
  path: string;
  anchor: string;
  cardLabel: string;
};

export const services: Service[] = [
  {
    id: "cctv",
    icon: "camera",
    title: "CCTV y videovigilancia",
    cardLabel: "CCTV y cámaras",
    description:
      "Instalación, reparación y mantención de circuitos cerrados IP, cámaras, grabación en NVR, monitoreo remoto y lectoras de patentes.",
    benefits: [
      "Imagen y grabación de nuevo en servicio",
      "Revisión de DVR, NVR y discos",
      "Cámaras, cableado y fuentes",
      "Mantención para cuidar la inversión",
    ],
    path: "/reparacion-camaras-seguridad-concepcion",
    anchor: "Reparación de cámaras de seguridad y CCTV en Concepción",
  },
  {
    id: "cercos",
    icon: "zap",
    title: "Cercos eléctricos SEC",
    cardLabel: "Cerco eléctrico SEC",
    description:
      "Instalación, reparación, mantención y certificación de cercos perimetrales eléctricos conforme a normativa SEC en Concepción.",
    benefits: [
      "Perímetro energizado de nuevo",
      "Energizador, batería y sirena",
      "Corte por vegetación o vandalismo",
      "Trabajo conforme a normativa SEC",
    ],
    path: "/reparacion-cercos-electricos-concepcion",
    anchor: "Reparación de cercos eléctricos SEC en Concepción",
  },
  {
    id: "portones",
    icon: "door",
    title: "Portones automáticos y barreras",
    cardLabel: "Portón automático",
    description:
      "Reparación de portones correderos, batientes y barreras, y venta de controles remotos nuevos con programación en la central o el motor.",
    benefits: [
      "Portón trabado o a medias",
      "Venta de controles remotos nuevos",
      "Programación en terreno",
      "Fotoceldas y mantención",
    ],
    path: "/reparacion-portones-automaticos-concepcion",
    anchor: "Reparación de portones automáticos en Concepción",
  },
  {
    id: "citofonos",
    icon: "intercom",
    title: "Citófonos y videoporteros",
    cardLabel: "Citófonos y videoporteros",
    description:
      "Instalación, reparación y mantención de porteros eléctricos, videoporteros y sistemas de comunicación con control de visitas.",
    benefits: [
      "Audio, video y apertura remota",
      "Porteros y videoporteros",
      "Comunicación con departamentos",
      "Ideal para edificios y condominios",
    ],
    path: "/reparacion-citofonos-concepcion",
    anchor: "Reparación de citófonos y videoporteros en Concepción",
  },
  {
    id: "biometrico",
    icon: "fingerprint",
    title: "Control de acceso biométrico",
    cardLabel: "Acceso biométrico facial",
    description:
      "Instalación, reparación y mantención de biometría, tarjetas y reconocimiento facial, con registro de ingresos y visitas.",
    benefits: [
      "Lectores faciales y de huella",
      "Tarjetas y códigos",
      "Respaldo de usuarios y permisos",
      "Registro de ingresos y visitas",
    ],
    path: "/control-acceso-biometrico-concepcion",
    anchor: "Control de acceso biométrico y facial en Concepción",
  },
  {
    id: "alarmas",
    icon: "flame",
    title: "Alarmas de incendio",
    cardLabel: "Alarmas de incendio",
    description:
      "Instalación, reparación y mantención de sistemas de detección y alarma contra incendio: sensores, centrales, sirenas y señalización.",
    benefits: [
      "Detectores, sirenas y centrales",
      "Pruebas y limpieza de sensores",
      "Baterías y comunicación",
      "Informes para la administración",
    ],
    path: "/alarmas-incendio-concepcion",
    anchor: "Alarmas de incendio para edificios en Concepción",
  },
];

export const nav = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Quiénes somos" },
  { href: "/servicios", label: "Servicios" },
  { href: "/mantencion", label: "Mantención" },
  { href: "/planes", label: "Planes" },
  { href: "/contacto", label: "Contacto" },
] as const;

export type Plan = {
  id: string;
  name: string;
  cadence: string;
  summary: string;
  price: string;
  priceDetail: string;
  featured?: boolean;
  features: string[];
};

export const plans: Plan[] = [
  {
    id: "light",
    name: "Light",
    cadence: "Anual",
    summary: "Una revisión al año",
    price: "12 UF",
    priceDetail: "Anual + IVA",
    features: [
      "Mantención preventiva una vez al año",
      "Atención técnica con agendamiento previo",
      "Soporte técnico básico",
      "Menor frecuencia de revisión que el resto de los planes",
    ],
  },
  {
    id: "basico",
    name: "Básico",
    cadence: "Semestral",
    summary: "Control y prevención",
    price: "8 UF",
    priceDetail: "Semestral + IVA",
    features: [
      "Mantención preventiva cada 6 meses",
      "Atención técnica programada",
      "Soporte técnico básico",
      "No incluye informes técnicos",
      "No incluye visitas técnicas de urgencia",
    ],
  },
  {
    id: "estandar",
    name: "Estándar",
    cadence: "Trimestral",
    summary: "Continuidad del sistema",
    price: "5,5 UF",
    priceDetail: "Por trimestre + IVA",
    featured: true,
    features: [
      "Mantención preventiva integral cada 3 meses",
      "Informe técnico de estado en cada visita",
      "Atención de emergencias preferencial",
      "Orientado a extender la vida útil de los equipos",
      "Descuentos en repuestos",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    cadence: "Mensual",
    summary: "Acompañamiento continuo",
    price: "3 UF",
    priceDetail: "Mensual + IVA",
    features: [
      "Mantención preventiva integral y exhaustiva",
      "2 visitas de urgencia a terreno gratuitas al mes",
      "Informes detallados y planes de mejora, incluido CCTV",
      "Descuentos especiales en reparaciones",
      "Asesoría de urgencia por teléfono",
    ],
  },
];

export const sectors = [
  "Edificios habitacionales",
  "Condominios",
  "Proyectos inmobiliarios",
  "Comunidades administradas",
  "Empresas e industrias",
] as const;

export const mandantes = [
  "Aitue",
  "Novatec",
  "Ebco",
  "Iterra",
  "Aconcagua",
  "Guindo Santo",
] as const;

export const edificios = [
  "Geocentro",
  "Chacabuco",
  "Obispo Salas",
  "Mackenna",
  "Campus",
  "Rengo Prieto",
  "Terrazas Las Rosas",
  "Espacio Huertos",
  "Vivo Huertos",
  "Doña Josefina",
] as const;

export const condominios = [
  "San Pedro del Valle (etapas 1 a 20)",
  "San Andrés del Valle (etapas 1 a 20)",
  "Valle Las Monjas",
  "Doña Emilia",
  "Doña Antonia",
  "Doña Josefina",
  "Norte (Los Ángeles)",
  "Valle Oriente (Los Ángeles)",
] as const;

export const pageMeta = {
  home: {
    path: "/",
    title: "Seguridad electrónica en Concepción | PROTEF",
    description:
      "Seguridad electrónica en Concepción: CCTV, cercos SEC, portones y venta de controles remotos nuevos. Programación en terreno. Urgencias de lunes a viernes. +56 9 8210 9253.",
  },
  servicios: {
    path: "/servicios",
    title: "Servicios de seguridad electrónica en Concepción | PROTEF",
    description:
      "CCTV, cercos SEC, portones, venta de controles remotos, citófonos, acceso biométrico y alarmas en Concepción. Programación en terreno. +56 9 8210 9253.",
  },
  nosotros: {
    path: "/nosotros",
    title: "Quiénes somos | PROTEF desde 1995",
    description:
      "PROTEF integra seguridad electrónica en Concepción desde 1995. Edificios, condominios y empresas del Biobío. Agende una visita técnica ahora.",
  },
  mantencion: {
    path: "/mantencion",
    title: "Mantención preventiva en Concepción | PROTEF",
    description:
      "Mantención preventiva de seguridad electrónica para edificios y condominios en Concepción. Seis rubros, visita en terreno. Agende con PROTEF.",
  },
  planes: {
    path: "/planes",
    title: "Planes de mantención en Concepción | PROTEF",
    description:
      "Planes de mantención preventiva en UF para edificios y condominios de Concepción. Anual, semestral, trimestral o mensual. Cotice con PROTEF.",
  },
  contacto: {
    path: "/contacto",
    title: "Contacto y cotización en Concepción | PROTEF",
    description:
      "Pida cotización o visita técnica en Concepción. Llame al +56 9 8210 9253, escriba por WhatsApp o envíe el formulario. Es día hábil. Por favor.",
  },
  privacidad: {
    path: "/privacidad",
    title: "Privacidad y datos personales | PROTEF",
    description:
      "Cómo PROTEF trata los datos del formulario de contacto en protef.cl, según la normativa chilena de datos vigente hoy.",
  },
  gracias: {
    path: "/gracias",
    title: "Solicitud enviada | PROTEF",
    description:
      "Recibimos su solicitud de servicio técnico en Concepción. Si urge, llame al +56 9 8210 9253 o escriba por WhatsApp a PROTEF hoy mismo, gracias.",
  },
} as const;

export const indexablePaths = [
  pageMeta.home.path,
  pageMeta.servicios.path,
  pageMeta.nosotros.path,
  pageMeta.mantencion.path,
  pageMeta.planes.path,
  pageMeta.contacto.path,
  pageMeta.privacidad.path,
  ...services.map((service) => service.path),
] as const;
