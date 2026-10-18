import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { HeroTitle } from "@/components/HeroTitle";
import type { Crumb } from "@/lib/jsonld";
import type { Photo } from "@/lib/photos";

export function PageIntro({
  title,
  lead,
  crumbs,
  image,
  imagePosition = "object-center",
  titleClassName = "max-w-4xl",
  eyebrow,
}: {
  title: string;
  lead?: string;
  crumbs: Crumb[];
  image: Photo;
  imagePosition?: string;
  titleClassName?: string;
  eyebrow?: string;
}) {
  return (
    <>
      <header className="surface-dark relative overflow-hidden border-b-4 border-gold text-white">
        <Image
          src={image.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className={`object-cover ${imagePosition}`}
        />
        <div className="hero-veil absolute inset-0" />
        <div className="container-protef relative py-12 md:py-16">
          <Breadcrumbs items={crumbs} tone="dark" />
          {eyebrow ? (
            <p className="hero-item mt-5 inline-flex w-fit rounded-full border border-gold/50 bg-gold/15 px-3 py-1 text-xs font-extrabold tracking-wider text-gold uppercase">
              {eyebrow}
            </p>
          ) : null}
          <HeroTitle
            className={`hero-item hero-d1 mt-4 ${titleClassName} text-[clamp(1.65rem,3.2vw,2.5rem)] leading-[1.12] font-extrabold`}
          >
            {title}
          </HeroTitle>
        </div>
      </header>
      {lead ? (
        <div className="container-protef pt-8">
          <p className="max-w-2xl text-lg">{lead}</p>
        </div>
      ) : null}
    </>
  );
}
