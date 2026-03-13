import Image from "next/image"

// ─── Types ────────────────────────────────────────────────────────────────────

type LogoItem = { src: string; alt: string; caption?: string; href?: string }

type LogosCarouselProps = {
  textVariant?: "dark" | "light"
  background?: { src?: string; alt?: string; overlayStrength?: number; colorClassName?: string; colorValue?: string }
  logos?: { title?: string; items?: LogoItem[]; intervalMs?: number }
}

// ─── Marquee strip ────────────────────────────────────────────────────────────

function MarqueeStrip({ items }: { items: LogoItem[]; textVariant: "dark" | "light" }) {
  // Duplicate items so the loop appears seamless
  const doubled = [...items, ...items]

  return (
    <div className="relative overflow-hidden">
      {/* Left fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-[#080808] to-transparent" aria-hidden="true" />
      {/* Right fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-[#080808] to-transparent" aria-hidden="true" />

      {/* Scrolling track */}
      <div
        className="flex gap-5 py-2"
        style={{
          animation: "marqueeScroll 28s linear infinite",
          width: "max-content",
        }}
      >
        {doubled.map((logo, i) => {
          const card = (
            <div
              key={i}
              className="flex h-20 w-44 shrink-0 items-center justify-center rounded-xl border border-white/8 bg-white/3 px-5 transition-colors hover:border-white/18 hover:bg-white/6"
            >
              <div className="relative h-10 w-full">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="176px"
                  className="object-contain opacity-50 transition-opacity hover:opacity-75"
                />
              </div>
            </div>
          )

          return logo.href ? (
            <a key={i} href={logo.href} target="_blank" rel="noreferrer" className="block">
              {card}
            </a>
          ) : (
            <div key={i}>{card}</div>
          )
        })}
      </div>

    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function LogosCarousel({
  textVariant = "light",
  background  = {},
  logos       = {},
}: LogosCarouselProps) {
  const hasColour = Boolean(background.colorClassName || background.colorValue)
  const items = logos.items ?? []

  return (
    <section
      className={[
        "relative isolate overflow-hidden",
        !hasColour ? "bg-[#080808]" : "",
        background.colorClassName ?? "",
      ].filter(Boolean).join(" ")}
      style={background.colorValue ? { backgroundColor: background.colorValue } : undefined}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/8 to-transparent" aria-hidden="true" />

      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-20">

        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-3 flex items-center justify-center gap-2.5">
            <div className="h-px w-6 bg-white/30" aria-hidden="true" />
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/30">
              {logos.title ?? "Working with local authorities across"}
            </span>
            <div className="h-px w-6 bg-white/30" aria-hidden="true" />
          </div>
          <p className="font-(family-name:--font-display) text-2xl font-light text-white/70">
            Trusted by councils across the South Coast
          </p>
        </div>

        {items.length > 0 ? (
          <MarqueeStrip items={items} textVariant={textVariant} />
        ) : (
          <div className="rounded-2xl border border-white/8 bg-white/2 p-6">
            <p className="text-[13px] font-light text-white/35">Add logo items to display the carousel.</p>
          </div>
        )}

      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-white/5" aria-hidden="true" />
    </section>
  )
}