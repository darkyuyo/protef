"use client";

import Link from "next/link";

const KEY = "protef_consent";

function applyConsent(value: "granted" | "denied") {
  window.gtag?.("consent", "update", {
    ad_storage: value,
    analytics_storage: value,
    ad_user_data: value,
    ad_personalization: value,
  });
}

export function CookieNotice() {
  const choose = (value: "granted" | "denied") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* almacenamiento bloqueado */
    }
    applyConsent(value);
    document.documentElement.dataset.consent = "1";
  };

  return (
    <div className="cookie-banner fixed inset-x-0 bottom-20 z-50 px-3 md:bottom-4">
      <div className="container-protef card flex flex-col gap-3 p-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted">
          Usamos cookies de Google Ads para medir llamadas, WhatsApp y el formulario. Puede aceptarlas
          o seguir solo con las necesarias.{" "}
          <Link className="font-bold text-brand-dark underline" href="/privacidad">
            Ver privacidad
          </Link>
          .
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            className="inline-flex min-h-11 items-center rounded-full border border-[rgba(5,28,56,.14)] px-4 text-sm font-bold"
            onClick={() => choose("denied")}
          >
            Solo necesarias
          </button>
          <button
            type="button"
            className="inline-flex min-h-11 items-center rounded-full bg-nav px-4 text-sm font-bold text-white"
            onClick={() => choose("granted")}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
