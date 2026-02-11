import React from "react"
import type { TextVariant } from "./types";

export function Pill({ children, textVariant }: { children: React.ReactNode; textVariant: TextVariant }) {
  const isLight = textVariant === "light"
  return (
    <span
      className={[
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide",
        isLight ? "border-white/12 bg-white/5 text-white/70" : "border-zinc-200 bg-white text-zinc-700",
      ].join(" ")}
    >
      {children}
    </span>
  )
}
