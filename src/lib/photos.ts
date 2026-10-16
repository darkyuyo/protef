export type Photo = {
  src: string;
  alt: string;
};

export const heroPhoto: Photo = {
  src: "/fotos/hero.webp",
  alt: "Acceso de un condominio con portón de metal y una cámara bajo el alero",
};

export const aboutPhoto: Photo = {
  src: "/fotos/tecnico.webp",
  alt: "Técnico revisando el gabinete de equipos de un edificio",
};

export const brandLogo: Photo = {
  src: "/protef.jpg",
  alt: "Logo PROTEF: escudo con casa y candado, y los rubros CCTV, alarmas, cercos eléctricos, portones automáticos y control de acceso",
};

export type TeamPhoto = Photo & {
  caption: string;
  focus: string;
};

export const teamPhotos: TeamPhoto[] = [
  {
    src: "/fotos/equipo/equipo-porton-acceso.png",
    alt: "Dos técnicos de PROTEF instalando un portón: uno en la escalera y otro arrodillado junto al motor",
    caption: "Instalación del portón",
    focus: "center center",
  },
  {
    src: "/fotos/equipo/escalera-furgon.jpg",
    alt: "Técnico de PROTEF subiendo materiales a la furgoneta frente al portón de un condominio",
    caption: "Materiales en el acceso",
    focus: "28% center",
  },
  {
    src: "/fotos/equipo/motor-porton.jpg",
    alt: "Técnico arrodillado instalando el motor de un portón corredero",
    caption: "Motor del portón",
    focus: "center 28%",
  },
  {
    src: "/fotos/equipo/cableado-motor.jpg",
    alt: "Técnico conectando los cables del automatismo de un portón",
    caption: "Cableado del automatismo",
    focus: "center 30%",
  },
];

export const pagePhotos = {
  servicios: {
    src: "/fotos/vista-servicios.jpg",
    alt: "Acceso peatonal de un edificio con portón, cámara y citófono",
  },
  mantencion: {
    src: "/fotos/vista-mantencion.jpg",
    alt: "Técnico revisando un gabinete eléctrico con una tablet",
  },
  contacto: {
    src: "/fotos/vista-contacto.jpg",
    alt: "Hall de un edificio con videoportero junto a la puerta de vidrio",
  },
  pasillo: {
    src: "/fotos/pasillo-edificio.jpg",
    alt: "Pasillo de un edificio con lector de acceso y detector en el cielo",
  },
  terreno: {
    src: "/fotos/tecnico-terreno.jpg",
    alt: "Dos técnicos revisando el gabinete del motor de un portón",
  },
  visita: {
    src: "/fotos/equipo/mantencion-porton.png",
    alt: "Dos técnicos de PROTEF instalando un portón automático: uno en la escalera y otro arrodillado en el acceso",
  },
} as const satisfies Record<string, Photo>;

export const homePhotos = {
  edificio: {
    src: "/fotos/fondo-edificio.jpg",
    alt: "Edificio de departamentos con portón metálico y una cámara en el acceso",
  },
  noche: {
    src: "/fotos/equipo-nocturno.jpg",
    alt: "Acceso de un condominio iluminado al anochecer, con portón y cámara",
  },
} as const satisfies Record<string, Photo>;

const servicePhotos: Record<string, Photo> = {
  cctv: {
    src: "/fotos/cctv.webp",
    alt: "Cámara domo en el estacionamiento de un edificio",
  },
  cercos: {
    src: "/fotos/cerco.webp",
    alt: "Cerco eléctrico sobre el muro perimetral de una propiedad",
  },
  portones: {
    src: "/fotos/porton.webp",
    alt: "Portón automático corredero en el acceso de un condominio",
  },
  citofonos: {
    src: "/fotos/citofono.webp",
    alt: "Videoportero de acero junto a la puerta de un edificio",
  },
  biometrico: {
    src: "/fotos/acceso.webp",
    alt: "Lector de control de acceso junto a una puerta interior",
  },
  alarmas: {
    src: "/fotos/incendio.webp",
    alt: "Detector de humo y sirena de incendio en el cielo de un pasillo",
  },
};

export function servicePhoto(id: string): Photo | undefined {
  return servicePhotos[id];
}
