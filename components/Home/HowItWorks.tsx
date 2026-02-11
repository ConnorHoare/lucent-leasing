import React from "react"
import Image from "next/image"

type HowStep = {
  title: string
  description: string
}

type HomeHowItWorksProps = {
  eyebrow?: string
  title?: string
  steps?: HowStep[]

  /** NEW */
  textVariant?: "dark" | "light"

  /** NEW: Background controls (image OR colour) */
  background?: {
    src?: string
    alt?: string
    overlayStrength?: number // 0–100
    objectClassName?: string

    colorClassName?: string
    colorValue?: string
  }
}

const DEFAULTS: Required<Pick<HomeHowItWorksProps, "eyebrow" | "title" | "steps">> = {
  eyebrow: "Process",
  title: "How it works",
  steps: [
    { title: "Enquire / refer", description: "Share requirements, location, household size, and timescales." },
    { title: "Match", description: "We identify suitable accommodation options and confirm availability." },
    { title: "Place", description: "We coordinate move-in details and practical arrangements." },
    { title: "Manage", description: "We oversee standards, communication, and ongoing property management." },
  ],
}

const clamp01 = (n: number) => Math.min(1, Math.max(0, n))

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
)

const SectionHeader = ({
  eyebrow,
  title,
  textVariant,
}: {
  eyebrow: string
  title: string
  textVariant: "dark" | "light"
}) => {
  const isLight = textVariant === "light"
  return (
    <div className="max-w-2xl">
      <p className={isLight ? "text-xs font-semibold uppercase tracking-[0.18em] text-white/60" : "text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500"}>
        {eyebrow}
      </p>
      <h2 className={isLight ? "mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl" : "mt-3 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl"}>
        {title}
      </h2>
    </div>
  )
}

const StepCard = ({
  index,
  step,
  textVariant,
}: {
  index: number
  step: HowStep
  textVariant: "dark" | "light"
}) => {
  const isLight = textVariant === "light"

  return (
    <div
      className={[
        "group relative overflow-hidden rounded-3xl border p-6 shadow-sm transition-transform duration-200 hover:-translate-y-0.5",
        isLight ? "border-white/10 bg-white/5" : "border-zinc-200 bg-white",
      ].join(" ")}
    >
      {/* Dyson-ish highlight */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <div
          className={[
            "absolute -top-20 left-1/2 h-40 w-[120%] -translate-x-1/2 rounded-full blur-2xl",
            isLight
              ? "bg-linear-to-r from-transparent via-white/10 to-transparent"
              : "bg-linear-to-r from-transparent via-zinc-100 to-transparent",
          ].join(" ")}
        />
      </div>

      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <p className={isLight ? "text-sm font-semibold tracking-tight text-white" : "text-sm font-semibold tracking-tight text-zinc-950"}>
            {step.title}
          </p>

          {/* Minimal step indicator */}
          <div className="inline-flex items-center gap-2">
            <span className={isLight ? "h-px w-8 bg-white/15" : "h-px w-8 bg-zinc-200"} aria-hidden="true" />
            <span className={isLight ? "text-xs font-semibold tracking-[0.18em] text-white/55" : "text-xs font-semibold tracking-[0.18em] text-zinc-500"}>
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>

        <p className={isLight ? "mt-3 text-sm leading-relaxed text-white/75" : "mt-3 text-sm leading-relaxed text-zinc-700"}>
          {step.description}
        </p>
      </div>
    </div>
  )
}

const HomeHowItWorks = ({
  eyebrow = DEFAULTS.eyebrow,
  title = DEFAULTS.title,
  steps = DEFAULTS.steps,
  textVariant = "dark",
  background = {},
}: HomeHowItWorksProps) => {
  const isLight = textVariant === "light"
  const overlay = clamp01((background.overlayStrength ?? 0) / 100)

  const hasImage = Boolean(background.src)
  const hasColour = Boolean(background.colorClassName || background.colorValue)

  const dividerClass = isLight ? "bg-white/12" : "bg-zinc-200"

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

          {/* Overlay style based on text variant */}
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
          <div className="flex flex-col gap-8">
            <SectionHeader eyebrow={eyebrow} title={title} textVariant={textVariant} />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, idx) => (
                <StepCard key={step.title} index={idx} step={step} textVariant={textVariant} />
              ))}
            </div>

            {/* Divider rhythm */}
            <div className={`mt-2 h-px w-full ${dividerClass}`} />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HomeHowItWorks
