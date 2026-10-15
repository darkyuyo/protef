import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import type { Crumb } from "@/lib/jsonld";
import type { Photo } from "@/lib/photos";

export function PageIntro({
  title,
  lead,
  crumbs,
  image,
  eyebrow,
}: {
  title: string;
  lead: string;
  crumbs: Crumb[];
  image: Photo;
  eyebrow?: string;
}) {
  return (
    <header className="surface-dark relative overflow-hidden border-b-4 border-gold text-white">
      <Image
        src={image.src}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(105deg, rgba(5, 28, 56, 0.88) 0%, rgba(8, 72, 122, 0.72) 46%, rgba(0, 110, 170, 0.55) 100%)",
        }}
      />
      <div className="container-protef relative py-14 md:py-20">
        <Breadcrumbs items={crumbs} tone="dark" />
        {eyebrow ? (
          <p className="hero-item mt-5 inline-flex rounded-full border border-gold/50 bg-gold/15 px-3 py-1 text-xs font-extrabold tracking-wider text-gold uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="hero-item hero-d1 mt-4 max-w-4xl text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.08] font-extrabold">
          {title}
        </h1>
        <p className="hero-item hero-d2 mt-4 max-w-2xl text-lg text-white/90">{lead}</p>
      </div>
    </header>
  );
}
