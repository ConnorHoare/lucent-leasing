import React from "react"
import Image from "next/image"
import type { SectionBackground, TextVariant } from "./types"

const clamp01 = (n: number) => Math.min(1, Math.max(0, n))

export function SectionShell({
  children,
  textVariant = "light",
  background = { colorValue: "#000000" },
}: {
  children: React.ReactNode
  textVariant?: TextVariant
  background?: SectionBackground
}) {
  const isLight = textVariant === "light"
  const overlay = clamp01((background.overlayStrength ?? 0) / 100)

  const hasImage = Boolean(background.src)
  const hasColour = Boolean(background.colorClassName || background.colorValue)

  return (
    <section
      className={[
        "relative isolate overflow-hidden",
        !hasImage && !hasColour ? (isLight ? "bg-black" : "bg-white") : "",
        !hasImage && background.colorClassName ? background.colorClassName : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={!hasImage && background.colorValue ? { backgroundColor: background.colorValue } : undefined}
    >
      {hasImage ? (
        <div className="absolute inset-0 -z-10">
          <Image
            src={background.src!}
            alt={background.alt || "Lucent Leasing"}
            fill
            sizes="100vw"
            className={["object-cover", background.objectClassName].filter(Boolean).join(" ")}
          />

          {isLight ? (
            <div className="absolute inset-0" style={{ backgroundColor: `rgba(0,0,0,${0.58 + overlay * 0.32})` }} />
          ) : (
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(90deg,
                  rgba(255,255,255,0.96) 0%,
                  rgba(255,255,255,0.92) 55%,
                  rgba(255,255,255,${0.85 - overlay * 0.5}) 75%,
                  rgba(255,255,255,${0.65 - overlay * 0.35}) 100%)`,
              }}
            />
          )}
        </div>
      ) : null}

      {isLight ? (
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 h-72 w-[120%] -translate-x-1/2 rounded-full bg-linear-to-r from-transparent via-white/12 to-transparent blur-3xl" />
          <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[18px_18px]" />
          <div className="absolute left-0 right-0 top-0 h-px bg-white/12" />
        </div>
      ) : (
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 h-72 w-[120%] -translate-x-1/2 rounded-full bg-linear-to-r from-transparent via-zinc-200/60 to-transparent blur-3xl" />
          <div className="absolute inset-0 opacity-[0.16] bg-[radial-gradient(#0a0a0a_1px,transparent_1px)] bg-size-[18px_18px]" />
          <div className="absolute left-0 right-0 top-0 h-px bg-zinc-200" />
        </div>
      )}

      {children}
    </section>
  )
}
