"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { readAttr } from "@/components/Analytics";
import { contactSchema, serviceOptions } from "@/lib/contact-schema";

type Status = "idle" | "loading" | "error";

export function ContactForm({ preset }: { preset?: string }) {
  const router = useRouter();

  useEffect(() => {
    const plan = new URLSearchParams(window.location.search).get("plan");
    if (!plan) return;
    const mensaje = document.getElementById("mensaje");
    if (mensaje instanceof HTMLTextAreaElement && mensaje.value === "") {
      mensaje.value = `Quiero cotizar el plan ${plan}. `;
    }
  }, []);
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState("");
  const [fields, setFields] = useState<Record<string, string>>({});

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const payload = { ...data, origen: window.location.pathname, ...readAttr() };
    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "form");
        if (!next[key]) next[key] = issue.message;
      }
      setFields(next);
      setFormError("Revise los campos marcados.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setFormError("");
    setFields({});
    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = (await response.json()) as {
        ok?: boolean;
        error?: string;
        fieldErrors?: Record<string, string>;
      };
      if (!response.ok || !body.ok) {
        setFields(body.fieldErrors ?? {});
        setFormError(body.error || "No pudimos enviar el mensaje. Llame o escriba por WhatsApp.");
        setStatus("error");
        return;
      }
      sessionStorage.setItem("protef_lead", "1");
      router.push("/gracias");
    } catch {
      setFormError("No pudimos enviar el mensaje. Llame o escriba por WhatsApp.");
      setStatus("error");
    }
  };

  return (
    <form className="grid gap-4" onSubmit={onSubmit} noValidate>
      <Field id="nombre" label="Nombre o edificio" error={fields.nombre}>
        <input
          id="nombre"
          name="nombre"
          required
          autoComplete="name"
          className="input"
          placeholder="Edificio o comunidad"
          aria-invalid={Boolean(fields.nombre)}
          aria-describedby={fields.nombre ? "nombre-error" : undefined}
        />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="email" label="Correo" error={fields.email}>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="input"
            aria-invalid={Boolean(fields.email)}
            aria-describedby={fields.email ? "email-error" : undefined}
          />
        </Field>
        <Field id="telefono" label="Teléfono" error={fields.telefono}>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            required
            autoComplete="tel"
            className="input"
            placeholder="+56 9"
            aria-invalid={Boolean(fields.telefono)}
            aria-describedby={fields.telefono ? "telefono-error" : undefined}
          />
        </Field>
      </div>
      <Field id="servicio" label="Tipo de servicio" error={fields.servicio}>
        <select
          id="servicio"
          name="servicio"
          required
          className="input"
          defaultValue={preset ?? ""}
          aria-invalid={Boolean(fields.servicio)}
          aria-describedby={fields.servicio ? "servicio-error" : undefined}
        >
          <option value="" disabled>
            Seleccione
          </option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>
      <Field id="mensaje" label="Mensaje" error={fields.mensaje}>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={5}
          className="input"
          placeholder="Qué falló y en qué comuna está el recinto"
          aria-invalid={Boolean(fields.mensaje)}
          aria-describedby={fields.mensaje ? "mensaje-error" : undefined}
        />
      </Field>
      <div className="absolute -left-[9999px] h-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="company_website">Sitio web</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>
      {formError ? (
        <p role="alert" className="text-sm font-bold text-urgent">
          {formError}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex min-h-11 items-center justify-center rounded-full bg-nav px-6 font-extrabold text-white disabled:opacity-60"
      >
        {status === "loading" ? "Enviando…" : "Enviar solicitud técnica"}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-1">
      <label htmlFor={id} className="text-sm font-bold text-nav">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-sm font-semibold text-urgent">
          {error}
        </p>
      ) : null}
    </div>
  );
}
