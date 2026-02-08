import React from "react"
import Image from "next/image"

type PageHeaderProps = {
  eyebrow?: string
  title: string
  intro?: string

  /** Optional “chips” under the intro */
  chips?: string[]

  /** Background controls: image OR colour */
  background?: {
    src?: string
    alt?: string
    objectClassName?: string
    /** 0–100. Higher = stronger overlay. Default 35 */
    overlayStrength?: number

    colorClassName?: string // e.g. "bg-black"
    colorValue?: string // e.g. "#000000"
  }

  /** Light or dark text theme */
  textVariant?: "dark" | "light"
}

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
)

const clamp01 = (n: number) => Math.min(1, Math.max(0, n))

const Chip = ({ label, light }: { label: string; light: boolean }) => (
  <span
    className={[
      "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide",
      light
        ? "border-white/15 bg-white/5 text-white/80"
        : "border-zinc-200 bg-white text-zinc-700",
    ].join(" ")}
  >
    {label}
  </span>
)

const PageHeader = ({
  eyebrow = "About",
  title,
  intro,
  chips = [],
  background = { overlayStrength: 35 },
  textVariant = "dark",
}: PageHeaderProps) => {
  const isLight = textVariant === "light"
  const overlay = clamp01((background.overlayStrength ?? 35) / 100)

  const hasImage = Boolean(background.src)
  const hasColour = Boolean(background.colorClassName || background.colorValue)

  const tone = isLight
    ? {
        eyebrow: "text-white/60",
        title: "text-white",
        intro: "text-white/75",
        card: "border-white/12 bg-white/5",
        hairline: "bg-white/12",
      }
    : {
        eyebrow: "text-zinc-500",
        title: "text-zinc-950",
        intro: "text-zinc-700",
        card: "border-zinc-200 bg-white",
        hairline: "bg-zinc-200",
      }

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
      {/* Background image */}
      {hasImage ? (
        <div className="absolute inset-0 -z-10">
          <Image
            src={background.src!}
            alt={background.alt || title}
            fill
            priority
            sizes="100vw"
            className={["object-cover", background.objectClassName].filter(Boolean).join(" ")}
          />

          {/* Dyson-ish wash: light page gets white wash, dark page gets dark overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: isLight
                ? `rgba(0,0,0,${0.55 + overlay * 0.35})`
                : `linear-gradient(90deg,
                    rgba(255,255,255,0.96) 0%,
                    rgba(255,255,255,0.90) 55%,
                    rgba(255,255,255,0.82) 75%,
                    rgba(255,255,255,0.60) 100%)`,
            }}
          />
        </div>
      ) : null}

      {/* Extra “premium” texture for dark headers */}
      {isLight ? (
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-full bg-linear-to-r from-transparent via-white/12 to-transparent blur-3xl" />
          <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[18px_18px]" />
          <div className="absolute left-0 right-0 top-0 h-px bg-white/12" />
        </div>
      ) : null}

      <Container>
        <div className="py-14 md:py-18">
          <div className="grid gap-8 md:grid-cols-12 md:items-start">
            {/* Left: heading */}
            <div className="md:col-span-5">
              <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${tone.eyebrow}`}>
                {eyebrow}
              </p>
              <h1 className={`mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl ${tone.title}`}>
                {title}
              </h1>
            </div>

            {/* Right: intro card */}
            <div className="md:col-span-7">
              <div className={`rounded-3xl border p-6 shadow-sm backdrop-blur-sm sm:p-7 ${tone.card}`}>
                {intro ? (
                  <p className={`text-pretty text-base leading-relaxed ${tone.intro}`}>
                    {intro}
                  </p>
                ) : null}

                {chips.length > 0 ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {chips.map((c) => (
                      <Chip key={c} label={c} light={isLight} />
                    ))}
                  </div>
                ) : null}

                <div className={`mt-8 h-px w-full ${tone.hairline}`} />
                <p className={isLight ? "mt-5 text-sm text-white/60" : "mt-5 text-sm text-zinc-600"}>
                  Public-sector friendly processes • Property-first standards • Responsive communication
                </p>
              </div>
            </div>
          </div>

          {/* Divider rhythm */}
          <div className={isLight ? "mt-10 h-px w-full bg-white/12" : "mt-10 h-px w-full bg-zinc-200"} />
        </div>
      </Container>
    </section>
  )
}

export default PageHeader
