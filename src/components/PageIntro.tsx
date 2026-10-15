import { Breadcrumbs } from "@/components/Breadcrumbs";
import type { Crumb } from "@/lib/jsonld";

export function PageIntro({
  title,
  lead,
  crumbs,
}: {
  title: string;
  lead: string;
  crumbs: Crumb[];
}) {
  return (
    <header className="border-b border-[rgba(5,28,56,.14)] bg-white">
      <div className="container-protef py-8 md:py-10">
        <Breadcrumbs items={crumbs} />
        <h1 className="mt-4 max-w-4xl text-[clamp(1.8rem,4vw,2.8rem)] leading-tight font-extrabold text-nav">
          {title}
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-muted">{lead}</p>
      </div>
    </header>
  );
}
