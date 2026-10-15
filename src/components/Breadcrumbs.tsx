import Link from "next/link";
import type { Crumb } from "@/lib/jsonld";

export function Breadcrumbs({
  items,
  tone = "light",
}: {
  items: Crumb[];
  tone?: "light" | "dark";
}) {
  const quiet = tone === "dark" ? "text-white/80" : "text-muted";
  const link = tone === "dark" ? "text-gold" : "text-brand-dark";
  const current = tone === "dark" ? "text-white" : "text-nav";
  return (
    <nav aria-label="Miga de pan" className={`text-sm ${quiet}`}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {last ? (
                <span aria-current="page" className={`font-semibold ${current}`}>
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className={`font-semibold underline-offset-2 hover:underline ${link}`}>
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
