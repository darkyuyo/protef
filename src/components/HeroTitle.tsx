import type { ElementType } from "react";

export function splitInHalf(text: string): [string, string] {
  const words = text.trim().split(/\s+/);
  if (words.length < 2) return [text.trim(), ""];

  const total = words.join(" ").length;
  let bestIndex = 1;
  let bestGap = Number.POSITIVE_INFINITY;

  for (let index = 1; index < words.length; index += 1) {
    const left = words.slice(0, index).join(" ").length;
    const gap = Math.abs(left - total / 2);
    if (gap < bestGap) {
      bestGap = gap;
      bestIndex = index;
    }
  }

  return [words.slice(0, bestIndex).join(" "), words.slice(bestIndex).join(" ")];
}

export function HeroTitle({
  as = "h1",
  children,
  className,
}: {
  as?: "h1" | "h2";
  children: string;
  className?: string;
}) {
  const Tag = as as ElementType;
  const [first, second] = splitInHalf(children);

  return (
    <Tag className={className}>
      {first}
      {second ? (
        <>
          <br />
          {second}
        </>
      ) : null}
    </Tag>
  );
}
