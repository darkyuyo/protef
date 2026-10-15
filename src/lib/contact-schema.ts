import { z } from "zod";

export const serviceOptions = [
  "CCTV y cámaras de seguridad",
  "Cercos eléctricos SEC",
  "Portones automáticos",
  "Citófonos y videoporteros",
  "Control de acceso biométrico",
  "Alarmas de incendio",
  "Mantención preventiva",
  "Otro",
] as const;

export type ServiceOption = (typeof serviceOptions)[number];

const optionalText = z
  .string()
  .trim()
  .max(160)
  .optional()
  .or(z.literal(""));

export const contactSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(2, { error: "Indique su nombre o el del edificio." })
    .max(120, { error: "El nombre es demasiado largo." }),
  email: z.email({ error: "Ingrese un correo válido." }),
  telefono: z
    .string()
    .trim()
    .min(8, { error: "Ingrese un teléfono de contacto." })
    .max(20, { error: "El teléfono es demasiado largo." })
    .regex(/^[0-9+\s()-]+$/, { error: "Use solo números, espacios y el signo +." }),
  servicio: z.enum(serviceOptions, { error: "Seleccione un tipo de servicio." }),
  mensaje: z
    .string()
    .trim()
    .min(10, { error: "Cuéntenos el requerimiento en al menos una frase." })
    .max(2000, { error: "El mensaje supera el largo permitido." }),
  company_website: z.string().optional(),
  origen: optionalText,
  utm_source: optionalText,
  utm_medium: optionalText,
  utm_campaign: optionalText,
  utm_term: optionalText,
  utm_content: optionalText,
  gclid: optionalText,
});

export type ContactInput = z.infer<typeof contactSchema>;

export function fieldErrors(error: z.ZodError): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "form");
    if (!errors[key]) errors[key] = issue.message;
  }
  return errors;
}
