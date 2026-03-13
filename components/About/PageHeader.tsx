import Image from "next/image"

// ─── Types ────────────────────────────────────────────────────────────────────

type PageHeaderProps = {
  eyebrow?: string
  title: string
  intro?: string
  chips?: string[]
  background?: {
    src?: string
    alt?: string
    overlayStrength?: number
    colorClassName?: string
    colorValue?: string
  }
  textVariant?: "dark" | "light"
}

// ─── Chip ─────────────────────────────────────────────────────────────────────

function Chip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3.5 py-1.5 text-[11px] font-light uppercase tracking-[0.12em] text-white/50 transition-colors hover:border-white/30 hover:text-white/70">
      {label}
    </span>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function PageHeader({
  eyebrow = "About",
  title,
  intro,
  chips = [],
  background = {},
}: PageHeaderProps) {
  const overlayOpacity = Math.min(1, Math.max(0, (background.overlayStrength ?? 60) / 100))

  return (
    <section className="relative isolate overflow-hidden bg-[#080808]">
      {/* Optional background image */}
      {background.src && (
        <div className="absolute inset-0 -z-20">
          <Image src={background.src} alt={background.alt ?? title} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: `rgba(8,8,8,${overlayOpacity})` }} />
        </div>
      )}

      {/* Watermark number — massive serif "01" */}
      <div
        className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 select-none font-(family-name:--font-display) text-[240px] font-light leading-none text-white/2.5 sm:text-[320px]"
        aria-hidden="true"
      >
        01
      </div>

      {/* Fine grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      {/* Top edge rule */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" aria-hidden="true" />

      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-12 md:items-end">

          {/* Left — eyebrow + display title */}
          <div className="md:col-span-5">
            {/* Eyebrow with line */}
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-8 bg-white/40" aria-hidden="true" />
              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/40">
                {eyebrow}
              </span>
            </div>

            <h1 className="font-(family-name:--font-display) text-[clamp(36px,5.5vw,64px)] font-light leading-[1.06] tracking-[-0.01em] text-white">
              {title}
            </h1>

            {/* White gradient rule under title */}
            <div className="mt-6 h-px w-20 bg-linear-to-r from-white/50 to-transparent" aria-hidden="true" />
          </div>

          {/* Right — intro + chips */}
          <div className="md:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-white/3 p-7 backdrop-blur-sm">
              {intro && (
                <p className="text-[15px] font-light leading-[1.8] text-white/60">
                  {intro}
                </p>
              )}

              {chips.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {chips.map((c) => <Chip key={c} label={c} />)}
                </div>
              )}

              <div className="my-6 h-px bg-white/8" />

              {/* Trust line */}
              <div className="flex flex-wrap gap-2">
                {["Public-sector friendly", "Property-first standards", "Responsive communication"].map((t) => (
                  <span key={t} className="inline-flex items-center gap-1.5 text-[11px] font-light text-white/30">
                    <span className="h-1 w-1 rounded-full bg-white/25" aria-hidden="true" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom edge rule */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />
    </section>
  )
}