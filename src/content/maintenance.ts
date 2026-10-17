import type { ServiceIcon } from "@/lib/site.config";

export type MaintenanceRubro = {
  id: string;
  icon: ServiceIcon;
  label: string;
  title: string;
  intro: string;
  items: string[];
};

export const maintenanceRubros: MaintenanceRubro[] = [
  {
    id: "alarmas",
    icon: "flame",
    label: "Alarmas",
    title: "Alarmas de incendio e intrusión",
    intro:
      "Revisión de centrales, detectores y aviso sonoro. En el material actual de PROTEF la mantención también considera la comunicación con monitoreo cuando el edificio cuenta con ese enlace.",
    items: [
      "Prueba funcional de detectores y sirenas",
      "Limpieza y verificación de sensores",
      "Revisión de baterías y centrales",
      "Comunicación con central de monitoreo, si el sistema la tiene",
    ],
  },
  {
    id: "citofonia",
    icon: "intercom",
    label: "Citofonía",
    title: "Citofonía y videoporteros",
    intro:
      "Mantención de porteros eléctricos, videoporteros y equipos de comunicación entre el acceso y las unidades.",
    items: [
      "Verificación de audio y video",
      "Prueba de apertura remota",
      "Revisión de cableado y fuentes",
      "Limpieza de pantallas y teclados",
    ],
  },
  {
    id: "accesos",
    icon: "fingerprint",
    label: "Accesos",
    title: "Control de accesos",
    intro:
      "Revisión de lectores biométricos, tarjetas y del registro de usuarios y permisos.",
    items: [
      "Calibración de lectores biométricos",
      "Respaldo de usuarios y permisos",
      "Prueba de tarjetas",
      "Actualización de firmware cuando el equipo lo permite",
    ],
  },
  {
    id: "cctv",
    icon: "camera",
    label: "CCTV",
    title: "CCTV IP y lectoras de patentes",
    intro:
      "Limpieza, ajuste y revisión de grabadores, discos y conectividad, incluidas las cámaras lectoras de patentes cuando el recinto las tiene.",
    items: [
      "Limpieza de lentes y carcasas",
      "Ajuste de ángulos y enfoque",
      "Verificación de disco duro y NVR",
      "Revisión de cámaras lectoras de patentes",
    ],
  },
  {
    id: "cercos",
    icon: "zap",
    label: "Cercos SEC",
    title: "Cercos eléctricos SEC",
    intro:
      "Medición perimetral, puesta a tierra y verificación del energizador. El trabajo de cerco se ejecuta conforme a normativa SEC.",
    items: [
      "Medición de voltaje en el perímetro",
      "Pruebas de puesta a tierra",
      "Verificación de batería y sirena",
      "Despeje de vegetación que baja la aislación",
    ],
  },
  {
    id: "portones",
    icon: "door",
    label: "Portones",
    title: "Portones y barreras vehiculares",
    intro:
      "Calibración mecánica y electrónica para que el acceso vehicular abra, cierre y se detenga ante un obstáculo.",
    items: [
      "Calibración mecánica y electrónica",
      "Prueba de fotoceldas y sensores",
      "Nivel de líquido hidráulico, cuando el equipo lo usa",
      "Lubricación y revisión de la tarjeta de mandos",
    ],
  },
];
