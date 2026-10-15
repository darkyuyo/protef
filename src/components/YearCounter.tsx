"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

export function YearCounter({ value }: { value: number }) {
  const reduce = useReducedMotion();
  const [current, setCurrent] = useState(value);

  useEffect(() => {
    if (reduce !== false) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / 600);
      const eased = 1 - (1 - progress) ** 3;
      setCurrent(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reduce, value]);

  return <span className="tabular-nums">{current}</span>;
}
