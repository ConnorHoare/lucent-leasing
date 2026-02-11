import React from "react"
import Link from "next/link"
import type { TextVariant } from "./types"

export function PrimaryButton({
  href,
  children,
  textVariant,
}: {
  href: string
  children: React.ReactNode
  textVariant: TextVariant
}) {
  const isLight = textVariant === "light"
  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        isLight
          ? "bg-white text-zinc-950 hover:bg-white/90 focus-visible:ring-white/25 focus-visible:ring-offset-black"
          : "bg-zinc-950 text-white hover:bg-zinc-900 focus-visible:ring-zinc-900/15 focus-visible:ring-offset-white",
      ].join(" ")}
    >
      {children}
    </Link>
  )
}

export function SecondaryButton({
  href,
  children,
  textVariant,
}: {
  href: string
  children: React.ReactNode
  textVariant: TextVariant
}) {
  const isLight = textVariant === "light"
  return (
    <a
      href={href}
      className={[
        "inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        isLight
          ? "border-white/20 bg-white/5 text-white hover:border-white/30 focus-visible:ring-white/25 focus-visible:ring-offset-black"
          : "border-zinc-300 bg-white text-zinc-950 hover:border-zinc-400 focus-visible:ring-zinc-900/15 focus-visible:ring-offset-white",
      ].join(" ")}
    >
      {children}
    </a>
  )
}
