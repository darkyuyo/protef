import Link from "next/link";
import { serviceIcons } from "@/components/icons";
import type { Service } from "@/lib/site.config";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = serviceIcons[service.icon];
  return (
    <article className="card flex h-full flex-col p-5 transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(5,28,56,.12)]">
      <div className="grid h-12 w-12 place-items-center rounded-[12px] bg-nav text-gold">
        <Icon aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-xl font-extrabold text-nav">{service.title}</h3>
      <p className="mt-2 text-sm text-muted">{service.description}</p>
      <ul className="mt-4 grid gap-2 text-sm text-ink">
        {service.benefits.map((benefit) => (
          <li key={benefit} className="flex gap-2">
            <span aria-hidden="true" className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-dark" />
            {benefit}
          </li>
        ))}
      </ul>
      <Link
        href={service.path}
        className="mt-5 inline-flex min-h-11 items-center font-extrabold text-brand-dark hover:underline"
      >
        {service.anchor}
      </Link>
    </article>
  );
}
