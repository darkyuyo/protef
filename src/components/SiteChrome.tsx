"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandMark, WhatsAppIcon } from "@/components/icons";
import { nav, site, whatsappHref, defaultWhatsappText } from "@/lib/site.config";

export function UrgentStrip() {
  return (
    <div className="urgent-strip border-b border-gold bg-nav px-4 py-2.5 text-center text-sm font-bold text-white">
      <p>
        Urgencia de lunes a viernes en Concepción.{" "}
        <a className="text-gold underline decoration-2 underline-offset-4" href={site.phoneTel}>
          Llame al {site.phoneDisplay}
        </a>
      </p>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenPath(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="surface-dark sticky top-0 z-40 border-b border-white/10 bg-nav text-white">
      <div className="container-protef flex items-center justify-between gap-3 py-3">
        <Link href="/" className="flex min-h-11 items-center gap-3">
          <BrandMark className="h-11 w-11 shrink-0" />
          <span>
            <span className="block text-lg font-extrabold tracking-wide">PROTEF</span>
            <span className="block text-[0.7rem] font-bold uppercase tracking-wider text-brand">
              Seguridad electrónica
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {nav.map((item) => {
            const current = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={`inline-flex min-h-11 items-center rounded-full px-3 text-sm font-semibold ${
                  current ? "bg-white/15 text-gold" : "hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneTel}
            className="pulse-urgent inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold text-nav"
            aria-label={`Llamar ${site.phoneDisplay}`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={whatsappHref(defaultWhatsappText)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#075e54] text-white"
            aria-label="Escribir por WhatsApp a PROTEF"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[12px] border border-white/20 lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      {open ? (
        <nav id="menu-movil" className="border-t border-white/10 lg:hidden" aria-label="Móvil">
          <ul className="container-protef flex flex-col py-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex min-h-11 items-center font-semibold"
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="footer-sky surface-dark text-white"
      style={{
        backgroundColor: "#051c38",
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cg fill='none' stroke='rgba(255,255,255,.28)' stroke-width='1'%3E%3Cpath d='M24 20h8M28 16v8'/%3E%3Cpath d='M96 78h8M100 74v8'/%3E%3C/g%3E%3Cg fill='rgba(255,255,255,.4)'%3E%3Ccircle cx='48' cy='46' r='1.2'/%3E%3Ccircle cx='78' cy='28' r='1'/%3E%3Ccircle cx='18' cy='96' r='1'/%3E%3Ccircle cx='112' cy='40' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
        backgroundSize: "140px 140px",
      }}
    >
      <div className="container-protef grid gap-10 py-14 md:grid-cols-3 md:items-start">
        <div>
          <BrandMark className="h-14 w-14" />
          <p className="mt-4 max-w-xs text-sm text-white/80">
            Servicio técnico de seguridad electrónica en Concepción desde {site.foundingYear}.
            Urgencias de lunes a viernes.
          </p>
          <Link className="mt-4 inline-flex text-sm font-bold text-brand hover:text-gold" href="/privacidad">
            Privacidad y datos personales
          </Link>
        </div>
        <div>
          <p className="text-lg font-extrabold">Contacto</p>
          <ul className="mt-4 grid gap-3 text-sm text-white/85">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Concepción, Región del Biobío, Chile</span>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 hover:text-gold" href={site.phoneTel}>
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 hover:text-gold" href={`mailto:${site.email}`}>
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                {site.email}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-lg font-extrabold">Escríbanos</p>
          <a
            href={whatsappHref(defaultWhatsappText)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Escribir por WhatsApp a PROTEF"
            className="mt-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 hover:border-gold hover:text-gold"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        <p>
          © {year} {site.legalName}
        </p>
      </div>
    </footer>
  );
}

