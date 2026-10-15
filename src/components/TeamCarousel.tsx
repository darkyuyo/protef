"use client";

import Image from "next/image";
import { useState } from "react";
import type { TeamPhoto } from "@/lib/photos";

export function TeamCarousel({ photos }: { photos: TeamPhoto[] }) {
  const [index, setIndex] = useState(0);

  function go(step: number) {
    setIndex((current) => (current + step + photos.length) % photos.length);
  }

  return (
    <figure className="overflow-hidden rounded-[20px] border border-[rgba(5,28,56,.12)] bg-white shadow-[0_16px_40px_rgba(5,28,56,.16)]">
      <div className="relative w-full bg-nav" style={{ aspectRatio: "4 / 3" }}>
        {photos.map((item, itemIndex) => (
          <Image
            key={item.src}
            src={item.src}
            alt={itemIndex === index ? item.alt : ""}
            fill
            sizes="(min-width: 768px) 1100px, 94vw"
            className="object-cover transition-opacity duration-500"
            style={{
              opacity: itemIndex === index ? 1 : 0,
              objectPosition: item.focus,
            }}
          />
        ))}
        <button
          type="button"
          className="absolute top-1/2 left-3 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-gold text-nav shadow-lg"
          onClick={() => go(-1)}
          aria-label="Foto anterior"
        >
          <Chevron direction="left" />
        </button>
        <button
          type="button"
          className="absolute top-1/2 right-3 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-gold text-nav shadow-lg"
          onClick={() => go(1)}
          aria-label="Foto siguiente"
        >
          <Chevron direction="right" />
        </button>
      </div>
    </figure>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none">
      <path
        d={direction === "left" ? "M14.5 6.5 9 12l5.5 5.5" : "M9.5 6.5 15 12l-5.5 5.5"}
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
