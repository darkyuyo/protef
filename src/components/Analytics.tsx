"use client";

import { useEffect } from "react";

const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

export function TrackClicks() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
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
