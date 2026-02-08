import React from "react"
import Image from "next/image"

type ValueItem = {
  title: string
  description: string
}

type AboutValuesProps = {
  eyebrow?: string
  title?: string
  values?: ValueItem[]

  /** Optional theme/background */
  textVariant?: "dark" | "light"
  background?: {
    colorClassName?: string // e.g. "bg-zinc-50" or "bg-black"
    colorValue?: string // e.g. "#000000"

    /** Optional image background */
    src?: string
    alt?: string
    objectClassName?: string
    overlayStrength?: number // 0–100
  }
}

const DEFAULTS: Required<Pick<AboutValuesProps, "eyebrow" | "title" | "values">> = {
  eyebrow: "Values",
  title: "Our values",
  values: [
    { title: "Respect", description: "We treat people and partners with professionalism and dignity." },
    { title: "Reliability", description: "We do what we say we’ll do, and we communicate clearly." },
    { title: "Responsibility", description: "We take standards seriously—property care, safety, and good practice matter." },
    { title: "Collaboration", description: "Better outcomes come from working together." },
  ],
}

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
)

const clamp01 = (n: number) => Math.min(1, Math.max(0, n))

const ValueCard = ({
  value,
  index,
  light,
}: {
  value: ValueItem
  index: number
  light: boolean
}) => (
  <div
    className={[
      "group relative overflow-hidden rounded-3xl border p-6 shadow-sm transition-transform duration-200 hover:-translate-y-0.5",
      light ? "border-white/12 bg-white/5" : "border-zinc-200 bg-white",
    ].join(" ")}
  >
    {/* sheen */}
    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
      <div
        className={[
          "absolute -top-24 left-1/2 h-48 w-[120%] -translate-x-1/2 rounded-full blur-2xl",
          light
            ? "bg-linear-to-r from-transparent via-white/10 to-transparent"
            : "bg-linear-to-r from-transparent via-zinc-100 to-transparent",
        ].join(" ")}
      />
    </div>

    <div className="relative">
      <div className="flex items-center justify-between gap-4">
        <p className={light ? "text-sm font-semibold tracking-tight text-white" : "text-sm font-semibold tracking-tight text-zinc-950"}>
          {value.title}
        </p>

        {/* minimal marker */}
        <div className="inline-flex items-center gap-2">
          <span className={light ? "h-px w-8 bg-white/15" : "h-px w-8 bg-zinc-200"} />
          <span
            className={[
              "text-xs font-semibold tracking-[0.18em]",
              light ? "text-white/55" : "text-zinc-500",
            ].join(" ")}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      <p className={light ? "mt-3 text-sm leading-relaxed text-white/75" : "mt-3 text-sm leading-relaxed text-zinc-700"}>
        {value.description}
      </p>
    </div>
  </div>
)

const AboutValues = ({
  eyebrow = DEFAULTS.eyebrow,
  title = DEFAULTS.title,
  values = DEFAULTS.values,
  textVariant = "dark",
  background = {},
}: AboutValuesProps) => {
  const isLight = textVariant === "light"
  const overlay = clamp01((background.overlayStrength ?? 0) / 100)

  const hasImage = Boolean(background.src)
  const hasColour = Boolean(background.colorClassName || background.colorValue)

  return (
    <section
      className={[
        "relative isolate overflow-hidden",
        !hasImage && !hasColour ? "bg-white" : "",
        !hasImage && background.colorClassName ? background.colorClassName : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={!hasImage && background.colorValue ? { backgroundColor: background.colorValue } : undefined}
    >
      {/* Optional image background */}
      {hasImage ? (
        <div className="absolute inset-0 -z-10">
          <Image
            src={background.src!}
            alt={background.alt || title}
            fill
            sizes="100vw"
            className={["object-cover", background.objectClassName].filter(Boolean).join(" ")}
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: isLight
                ? `rgba(0,0,0,${0.55 + overlay * 0.35})`
                : `rgba(255,255,255,0.78)`,
            }}
          />
        </div>
      ) : null}

      {/* Dyson-like texture for dark sections */}
      {isLight ? (
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-full bg-linear-to-r from-transparent via-white/12 to-transparent blur-3xl" />
          <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[18px_18px]" />
          <div className="absolute left-0 right-0 top-0 h-px bg-white/12" />
        </div>
      ) : null}

      <Container>
        <div className="py-12 md:py-14">
          <div className="grid gap-8 md:grid-cols-12 md:items-start">
            {/* Left */}
            <div className="md:col-span-4">
              <p
                className={[
                  "text-xs font-semibold uppercase tracking-[0.18em]",
                  isLight ? "text-white/60" : "text-zinc-500",
                ].join(" ")}
              >
                {eyebrow}
              </p>
              <h2
                className={[
                  "mt-3 text-2xl font-semibold tracking-tight sm:text-3xl",
                  isLight ? "text-white" : "text-zinc-950",
                ].join(" ")}
              >
                {title}
              </h2>

              <p className={isLight ? "mt-4 text-sm leading-relaxed text-white/65" : "mt-4 text-sm leading-relaxed text-zinc-600"}>
                The principles behind how we work with partners and support placements.
              </p>
            </div>

            {/* Right */}
            <div className="md:col-span-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {values.map((v, idx) => (
                  <ValueCard key={v.title} value={v} index={idx} light={isLight} />
                ))}
              </div>

              <div className={isLight ? "mt-10 h-px w-full bg-white/12" : "mt-10 h-px w-full bg-zinc-200"} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutValues
