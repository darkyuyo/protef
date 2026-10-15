"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandMark, WhatsAppIcon } from "@/components/icons";
import { nav, services, site, whatsappHref, defaultWhatsappText } from "@/lib/site.config";

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
    <footer className="surface-dark border-t-4 border-gold bg-nav text-white">
      <div className="container-protef grid gap-10 py-12 md:grid-cols-[1.15fr_.7fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <BrandMark className="h-11 w-11" />
            <span>
              <span className="block text-lg font-extrabold tracking-wide">PROTEF</span>
              <span className="block text-[0.7rem] font-bold tracking-wider text-brand uppercase">
                Seguridad electrónica
              </span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-white/75">
            Reparación y mantención desde {site.foundingYear} en {site.communes.join(", ")}.
            Urgencias de lunes a viernes.
          </p>
          <ul className="mt-5 grid gap-2 text-sm">
            <li>
              <a className="font-bold text-gold" href={site.phoneTel}>
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a className="font-bold text-gold" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
          </ul>
        </div>
        <nav aria-label="Páginas">
          <p className="text-sm font-extrabold tracking-wide text-gold uppercase">Sitio</p>
          <ul className="mt-3 grid gap-1 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link className="inline-flex min-h-11 items-center hover:text-gold" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Rubros">
          <p className="text-sm font-extrabold tracking-wide text-gold uppercase">Servicios</p>
          <ul className="mt-3 grid gap-1 text-sm sm:grid-cols-2 md:grid-cols-1">
            {services.map((service) => (
              <li key={service.id}>
                <Link className="inline-flex min-h-11 items-center hover:text-gold" href={service.path}>
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="container-protef flex flex-wrap items-center justify-between gap-3 py-4 text-xs text-white/70">
          <p>
            © {year} {site.legalName}. Concepción, Biobío.
          </p>
          <Link className="font-bold text-white hover:text-gold" href="/privacidad">
            Privacidad y datos personales
          </Link>
        </div>
      </div>
    </footer>
  );
}

