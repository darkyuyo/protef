"use client";

import { useEffect } from "react";
import { site } from "@/lib/site.config";

type TrackEvent = "phone_click" | "whatsapp_click" | "generate_lead";

const labels: Record<TrackEvent, string | undefined> = {
  phone_click: process.env.NEXT_PUBLIC_ADS_PHONE_LABEL,
  whatsapp_click: process.env.NEXT_PUBLIC_ADS_WHATSAPP_LABEL,
  generate_lead: process.env.NEXT_PUBLIC_ADS_FORM_LABEL,
};

export function track(event: TrackEvent) {
  const gtag = window.gtag;
  if (!gtag) return;
  const page_path = window.location.pathname;
  gtag("event", event, { page_path });
  const label = labels[event];
  if (label) {
    gtag("event", "conversion", { send_to: `${site.adsId}/${label}`, page_path });
  }
}

export function TrackClicks() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) track("phone_click");
      if (href.includes("wa.me")) track("whatsapp_click");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"];
    const stored = readAttr();
    let changed = false;
    for (const key of keys) {
      const value = params.get(key);
      if (value) {
        stored[key] = value.slice(0, 160);
        changed = true;
      }
    }
    if (changed) sessionStorage.setItem("protef_attr", JSON.stringify(stored));
  }, []);

  return null;
}

export function readAttr(): Record<string, string> {
  try {
    return JSON.parse(sessionStorage.getItem("protef_attr") || "{}") as Record<string, string>;
  } catch {
    return {};
  }
}

export function LeadEvent() {
  useEffect(() => {
    if (sessionStorage.getItem("protef_lead") !== "1") return;
    sessionStorage.removeItem("protef_lead");
    track("generate_lead");
  }, []);
  return null;
}
