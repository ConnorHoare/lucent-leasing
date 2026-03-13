import Image from "next/image"

// ─── Types ────────────────────────────────────────────────────────────────────

type MediaItem = { src: string; alt: string; caption?: string }

type AboutMediaStripProps = {
  eyebrow?: string
  title?: string
  description?: string
  items?: MediaItem[]
  textVariant?: "dark" | "light"
  background?: { colorClassName?: string; colorValue?: string }
}

const DEFAULTS = {
  eyebrow: "Inside Lucent",
  title: "Quality-led delivery, with a property-first mindset.",
  description: "A quick look at the kind of accommodation and standards we aim to maintain — clean, placement-ready, and managed with care.",
  items: [
    { src: "/images/lucent-images/4.jpeg", alt: "Modern living room",      caption: "Placement-ready homes" },
    { src: "/images/lucent-images/5.jpeg", alt: "Kitchen and dining space", caption: "Maintained standards" },
    { src: "/images/lucent-images/6.jpeg", alt: "Bedroom",                 caption: "Comfort and suitability" },
    { src: "/images/lucent-images/7.jpeg", alt: "Building exterior",       caption: "Reliable local supply" },
  ],
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function AboutMediaStrip({
  eyebrow      = DEFAULTS.eyebrow,
  title        = DEFAULTS.title,
  description  = DEFAULTS.description,
  items        = DEFAULTS.items,
  background   = {},
}: AboutMediaStripProps) {
  const hasColour = Boolean(background.colorClassName || background.colorValue)

  return (
    <section
      className={[
        "relative isolate overflow-hidden",
        !hasColour ? "bg-[#080808]" : "",
        background.colorClassName ?? "",
      ].filter(Boolean).join(" ")}
      style={background.colorValue ? { backgroundColor: background.colorValue } : undefined}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-20">

        {/* Section header */}
        <div className="mb-10 grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <div className="mb-4 flex items-center gap-2.5">
              <div className="h-px w-6 bg-white/35" aria-hidden="true" />
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">{eyebrow}</span>
            </div>
            <h2 className="font-(family-name:--font-display) text-[clamp(24px,3.2vw,38px)] font-light leading-[1.1] text-white">
              {title}
            </h2>
          </div>
          <div className="md:col-span-7 md:pl-8">
            <p className="text-[14px] font-light leading-relaxed text-white/45">{description}</p>
          </div>
        </div>

        {/* Editorial grid */}
        <div className="grid gap-3 sm:grid-cols-12">

          {/* Hero image — spans full width on mobile, 7 cols on desktop */}
          {items[0] && (
            <div className="group relative overflow-hidden rounded-2xl sm:col-span-7" style={{ aspectRatio: "12/10" }}>
              <Image
                src={items[0].src}
                alt={items[0].alt}
                fill
                priority
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              {/* Graduated overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
              {/* Hover vignette */}
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
              {items[0].caption && (
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-[11px] font-light uppercase tracking-[0.14em] text-white/70">
                    {items[0].caption}
                  </span>
                </div>
              )}
              {/* Top-left number badge */}
              <div className="absolute left-4 top-4 flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-black/40 backdrop-blur-sm">
                <span className="text-[10px] font-light text-white/60">01</span>
              </div>
            </div>
          )}

          {/* Right column — two stacked images */}
          <div className="flex flex-col gap-3 sm:col-span-5">
            {items.slice(1, 3).map((it, i) => (
              <div
                key={it.alt}
                className="group relative flex-1 overflow-hidden rounded-2xl"
                style={{ aspectRatio: "16/9" }}
              >
                <Image
                  src={it.src}
                  alt={it.alt}
                  fill
                  sizes="(min-width: 768px) 42vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                {it.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-[11px] font-light uppercase tracking-[0.14em] text-white/60">
                      {it.caption}
                    </span>
                  </div>
                )}
                <div className="absolute left-3.5 top-3.5 flex h-6 w-6 items-center justify-center rounded-full border border-white/12 bg-black/40 backdrop-blur-sm">
                  <span className="text-[9px] font-light text-white/50">0{i + 2}</span>
                </div>
              </div>
            ))}
          </div>

          {/* 4th image — full width strip */}
          {items[3] && (
            <div
              className="group relative overflow-hidden rounded-2xl sm:col-span-12"
              style={{ aspectRatio: "21/6" }}
            >
              <Image
                src={items[3].src}
                alt={items[3].alt}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-black/40" />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
              {items[3].caption && (
                <div className="absolute bottom-0 left-0 p-5">
                  <span className="text-[11px] font-light uppercase tracking-[0.14em] text-white/60">
                    {items[3].caption}
                  </span>
                </div>
              )}
              <div className="absolute left-4 top-4 flex h-6 w-6 items-center justify-center rounded-full border border-white/12 bg-black/40 backdrop-blur-sm">
                <span className="text-[9px] font-light text-white/50">04</span>
              </div>
            </div>
          )}

        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-white/5" aria-hidden="true" />
    </section>
  )
}