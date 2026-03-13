import Image from "next/image"

// ─── Types ────────────────────────────────────────────────────────────────────

type ProofItem = { src: string; alt: string; title: string; subtitle?: string }

type AboutProofRailProps = {
  eyebrow?: string
  title?: string
  items?: ProofItem[]
  textVariant?: "dark" | "light"
  background?: { colorClassName?: string; colorValue?: string }
}

const DEFAULTS = {
  eyebrow: "What you can expect",
  title: "Standards you can see.",
  items: [
    { src: "/images/lucent-images/9.jpeg",  alt: "Property checks",           title: "Property checks",           subtitle: "Clear expectations" },
    { src: "/images/lucent-images/10.jpeg", alt: "Move-in readiness",          title: "Placement-ready",           subtitle: "Prepared for occupancy" },
    { src: "/images/lucent-images/11.jpeg", alt: "Maintenance coordination",   title: "Maintenance coordination",  subtitle: "Practical workflows" },
    { src: "/images/lucent-images/12.jpeg", alt: "Professional communication", title: "Responsive communication",  subtitle: "Straightforward updates" },
  ],
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function AboutProofRail({
  eyebrow  = DEFAULTS.eyebrow,
  title    = DEFAULTS.title,
  items    = DEFAULTS.items,
  background  = {},
}: AboutProofRailProps) {
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
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/8 to-transparent" aria-hidden="true" />

      {/* Fine grid texture */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-20">

        {/* Header */}
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="mb-3 flex items-center gap-2.5">
              <div className="h-px w-6 bg-white/35" aria-hidden="true" />
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">{eyebrow}</span>
            </div>
            <h2 className="font-(family-name:--font-display) text-[clamp(24px,3.2vw,38px)] font-light leading-[1.1] text-white">
              {title}
            </h2>
          </div>
          <p className="hidden shrink-0 text-[11px] font-light uppercase tracking-[0.12em] text-white/20 md:block">
            Scroll →
          </p>
        </div>

        {/* Scrollable rail */}
        <div className="overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-4" style={{ minWidth: "max-content" }}>
            {items.map((it, i) => (
              <div
                key={it.title}
                className="group relative w-72 shrink-0 overflow-hidden rounded-2xl border border-white/8 bg-white/2 transition-all duration-300 hover:border-white/20 hover:bg-white/4"
              >
                {/* Image */}
                <div className="relative" style={{ aspectRatio: "16/10" }}>
                  <Image
                    src={it.src}
                    alt={it.alt}
                    fill
                    sizes="288px"
                    className="object-cover opacity-70 transition-all duration-500 group-hover:opacity-90 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#080808] via-[#080808]/20 to-transparent" />

                  {/* Index badge */}
                  <div className="absolute left-3.5 top-3.5 flex h-6 w-6 items-center justify-center rounded-full border border-white/12 bg-black/50 backdrop-blur-sm">
                    <span className="text-[9px] font-light text-white/50">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                </div>

                {/* Text */}
                <div className="p-5">
                  <p className="text-[13px] font-medium tracking-tight text-white/85 transition-colors group-hover:text-white">
                    {it.title}
                  </p>
                  {it.subtitle && (
                    <p className="mt-1 text-[12px] font-light text-white/35">{it.subtitle}</p>
                  )}
                </div>

                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.12), 0 0 40px rgba(255,255,255,0.04)" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Progress dots */}
        <div className="mt-5 flex items-center gap-1.5" aria-hidden="true">
          {items.map((_, i) => (
            <div key={i} className={`h-px rounded-full bg-white/20 ${i === 0 ? "w-6" : "w-2"}`} />
          ))}
        </div>

      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-white/5" aria-hidden="true" />
    </section>
  )
}