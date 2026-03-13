// ─── Types ────────────────────────────────────────────────────────────────────

type AboutEditorialSectionProps = {
  id: string
  eyebrow?: string
  title: string
  paragraphs?: string[]
  /** Section index (1-based) used for the large watermark number */
  sectionIndex?: number
  textVariant?: "dark" | "light"
  background?: { colorClassName?: string; colorValue?: string }
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function AboutEditorialSection({
  id,
  eyebrow = "About Us",
  title,
  paragraphs = [],
  sectionIndex,
  background = {},
}: AboutEditorialSectionProps) {
  const hasColour = Boolean(background.colorClassName || background.colorValue)

  return (
    <section
      id={id}
      className={[
        "relative isolate overflow-hidden scroll-mt-20",
        !hasColour ? "bg-[#080808]" : "",
        background.colorClassName ?? "",
      ].filter(Boolean).join(" ")}
      style={background.colorValue ? { backgroundColor: background.colorValue } : undefined}
    >
      {/* Section separator — subtle top rule */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/8 to-transparent" aria-hidden="true" />

      {/* Large watermark section number */}
      {sectionIndex !== undefined && (
        <div
          className="pointer-events-none absolute right-6 top-6 select-none font-(family-name:--font-display) text-[180px] font-light leading-none text-white/2 sm:right-10 sm:text-[220px]"
          aria-hidden="true"
        >
          {String(sectionIndex).padStart(2, "0")}
        </div>
      )}

      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-12">

          {/* Left col — eyebrow + title + vertical rule */}
          <div className="relative md:col-span-4">
            {/* Vertical rule on desktop */}
            <div className="absolute left-0 top-0 hidden h-full w-px md:block" aria-hidden="true">
              <div className="h-full w-px bg-linear-to-b from-white/20 via-white/8 to-transparent" />
            </div>

            <div className="md:pl-6">
              {/* Eyebrow */}
              <div className="mb-4 flex items-center gap-2.5">
                <div className="h-px w-6 bg-white/35" aria-hidden="true" />
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">
                  {eyebrow}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-(family-name:--font-display) text-[clamp(26px,3.5vw,40px)] font-light leading-[1.1] tracking-[-0.01em] text-white">
                {title}
              </h2>

              {/* Small gold-style white rule */}
              <div className="mt-5 h-px w-12 bg-linear-to-r from-white/40 to-transparent" aria-hidden="true" />
            </div>
          </div>

          {/* Right col — body text */}
          <div className="md:col-span-8 md:pt-1">
            <div className="flex flex-col gap-5">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-[15px] font-light leading-[1.85] text-white/55"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom rule */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/5" aria-hidden="true" />
    </section>
  )
}