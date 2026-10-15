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
