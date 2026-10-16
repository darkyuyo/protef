"use client";

import { useState, type KeyboardEvent } from "react";
import { serviceIcons } from "@/components/icons";
import type { MaintenanceRubro } from "@/content/maintenance";

export function MaintenanceTabs({ items }: { items: MaintenanceRubro[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const index = items.findIndex((item) => item.id === active);
    if (index < 0) return;
    const key = event.key;
    let next = index;
    if (key === "ArrowRight" || key === "ArrowDown") next = (index + 1) % items.length;
    if (key === "ArrowLeft" || key === "ArrowUp") next = (index - 1 + items.length) % items.length;
    if (key === "Home") next = 0;
    if (key === "End") next = items.length - 1;
    if (next === index) return;
    event.preventDefault();
    const id = items[next].id;
    setActive(id);
    document.getElementById(`tab-${id}`)?.focus();
  };

  return (
    <div className="min-w-0">
      <div
        role="tablist"
        aria-label="Rubros de mantención"
        className="flex flex-wrap gap-2"
        onKeyDown={onKeyDown}
      >
        {items.map((item) => {
          const selected = item.id === active;
          const Icon = serviceIcons[item.icon];
          return (
            <button
              key={item.id}
              id={`tab-${item.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-sm font-bold transition duration-200 hover:-translate-y-0.5 ${
                selected
                  ? "border-nav bg-nav text-white hover:border-gold hover:bg-gold hover:text-nav"
                  : "border-[rgba(5,28,56,.14)] bg-white text-nav hover:border-nav hover:bg-nav hover:text-white"
              }`}
              onClick={() => setActive(item.id)}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              {item.label}
            </button>
          );
        })}
      </div>
      {items.map((item) => {
        const selected = item.id === active;
        return (
          <div
            key={item.id}
            id={`panel-${item.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${item.id}`}
            hidden={!selected}
            className={selected ? "tab-in card mt-4 p-5 md:p-6" : undefined}
          >
            <h3 className="text-xl font-extrabold text-nav">{item.title}</h3>
            <p className="mt-2 text-muted">{item.intro}</p>
            <ul className="mt-4 grid gap-2">
              {item.items.map((line) => (
                <li key={line} className="flex gap-2 text-sm">
                  <span aria-hidden="true" className="font-bold text-brand-dark">
                    •
                  </span>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
