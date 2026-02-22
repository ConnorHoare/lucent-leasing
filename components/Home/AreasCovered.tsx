"use client"
import React, { useEffect, useMemo, useState } from "react"
import Image from "next/image"

type LogoItem = {
  src: string
  alt: string
  caption?: string
  href?: string
}

type LogosCarouselProps = {
  textVariant?: "dark" | "light"
  background?: {
    src?: string
    alt?: string
    overlayStrength?: number // 0–100
    objectClassName?: string
    colorClassName?: string
    colorValue?: string
  }
  logos?: {
    title?: string
    items?: LogoItem[]
    intervalMs?: number
  }
}

const clamp01 = (n: number) => Math.min(1, Math.max(0, n))

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
)

const LogoCard = ({ logo, textVariant }: { logo: LogoItem; textVariant: "dark" | "light" }) => {
  const isLight = textVariant === "light"

  const card = (
    <div
      className={[
        "flex flex-col items-center justify-center rounded-2xl border p-6 shadow-sm",
        isLight ? "border-white/10 bg-black/20" : "border-zinc-200 bg-white",
      ].join(" ")}
    >
      {/* Bigger logo area */}
      <div className="relative h-20 w-full sm:h-24 md:h-28">
        <Image
          src={logo.src}
          alt={logo.alt}
          fill
          sizes="(min-width: 1024px) 520px, 90vw"
          className="object-contain"
          priority={false}
        />
      </div>

      {logo.caption ? (
        <p className={isLight ? "mt-3 text-center text-sm text-white/65" : "mt-3 text-center text-sm text-zinc-600"}>
          {logo.caption}
        </p>
      ) : null}
    </div>
  )

  return logo.href ? (
    <a href={logo.href} target="_blank" rel="noreferrer" className="block">
      {card}
    </a>
  ) : (
    card
  )
}

const LogosStripCarousel = ({
  title,
  items,
  textVariant,
  intervalMs = 2600,
}: {
  title?: string
  items: LogoItem[]
  textVariant: "dark" | "light"
  intervalMs?: number
}) => {
  const isLight = textVariant === "light"
  const safeItems = useMemo(() => items ?? [], [items])

  const len = safeItems.length
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const safeIndex = len > 0 ? ((index % len) + len) % len : 0
  const canScroll = len > 1

  useEffect(() => {
    if (!canScroll) return
    if (paused) return

    const t = setInterval(() => {
      setIndex((i) => {
        const next = i + 1
        return len > 0 ? next % len : 0
      })
    }, intervalMs)

    return () => clearInterval(t)
  }, [paused, canScroll, intervalMs, len])

  const current = len ? safeItems[safeIndex] : null

  return (
    <div
      className={[
        "mt-8 rounded-3xl border p-6 sm:p-7",
        isLight ? "border-white/10 bg-white/5" : "border-zinc-200 bg-zinc-50",
      ].join(" ")}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="flex items-center justify-between gap-4">
        <p
          className={
            isLight
              ? "text-xs font-semibold uppercase tracking-[0.18em] text-white/60"
              : "text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500"
          }
        >
          {title || "Working with local authorities across…"}
        </p>

        {/* Dots (one per logo, capped for neatness) */}
        {canScroll ? (
          <div className="flex items-center gap-1.5" aria-hidden="true">
            {Array.from({ length: Math.min(10, len) }).map((_, i) => (
              <span
                key={i}
                className={[
                  "h-1.5 w-1.5 rounded-full",
                  i === safeIndex
                    ? isLight
                      ? "bg-white/80"
                      : "bg-zinc-900"
                    : isLight
                      ? "bg-white/25"
                      : "bg-zinc-300",
                ].join(" ")}
              />
            ))}
          </div>
        ) : null}
      </div>

      {/* Show only ONE logo at a time */}
      <div className="mt-5">
        {current ? (
          <div key={`${current.src}-${safeIndex}`} className="animate-[fadeIn_450ms_ease-out]">
            <LogoCard logo={current} textVariant={textVariant} />
          </div>
        ) : null}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(2px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

const LogosCarousel = ({ textVariant = "dark", background = {}, logos = {} }: LogosCarouselProps) => {
  const isLight = textVariant === "light"
  const overlay = clamp01((background.overlayStrength ?? 0) / 100)

  const hasImage = Boolean(background.src)
  const hasColour = Boolean(background.colorClassName || background.colorValue)

  const dividerClass = isLight ? "bg-white/12" : "bg-zinc-200"
  const items = logos.items ?? []

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
      {/* Optional background image */}
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
            <div className="absolute inset-0" style={{ backgroundColor: `rgba(0,0,0,${0.55 + overlay * 0.35})` }} />
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

      {/* Premium texture on dark */}
      {isLight ? (
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-full bg-linear-to-r from-transparent via-white/12 to-transparent blur-3xl" />
          <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[18px_18px]" />
        </div>
      ) : null}

      <Container>
        <div className="py-12 md:py-14">
          {items.length ? (
            <LogosStripCarousel
              title={logos.title}
              items={items}
              textVariant={textVariant}
              intervalMs={logos.intervalMs ?? 2600}
            />
          ) : (
            <div
              className={[
                "rounded-3xl border p-6 sm:p-7",
                isLight ? "border-white/10 bg-white/5" : "border-zinc-200 bg-zinc-50",
              ].join(" ")}
            >
              <p className={isLight ? "text-sm text-white/70" : "text-sm text-zinc-700"}>Add logo items to display the carousel.</p>
              <div className={`mt-6 h-px w-full ${dividerClass}`} />
            </div>
          )}

          <div className={`mt-10 h-px w-full ${dividerClass}`} />
        </div>
      </Container>
    </section>
  )
}

export default LogosCarousel
