import React from "react"
import Image from "next/image"

type HomeMissionProps = {
  eyebrow?: string
  title?: string
  statement?: string

  textVariant?: "dark" | "light"
  background?: {
    /** Colour background (Tailwind class OR hex/rgb value) */
    colorClassName?: string // e.g. "bg-black"
    colorValue?: string // e.g. "#000000"

    /** Optional image background */
    src?: string
    alt?: string
    objectClassName?: string
    /** 0–100. Higher = stronger overlay for legibility */
    overlayStrength?: number
  }
}

const DEFAULTS: Required<Pick<HomeMissionProps, "eyebrow" | "title" | "statement">> = {
  eyebrow: "Mission",
  title: "Our mission",
  statement:
    "To provide reliable, well-managed accommodation that supports people in need of housing, and helps local authorities and partners deliver safe placements with confidence.",
}

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
)

const clamp01 = (n: number) => Math.min(1, Math.max(0, n))

const MissionQuote = ({ statement, light }: { statement: string; light: boolean }) => (
  <div
    className={[
      "relative overflow-hidden rounded-3xl border p-7 shadow-sm backdrop-blur-sm sm:p-10",
      light ? "border-white/12 bg-white/5" : "border-zinc-200 bg-white",
    ].join(" ")}
  >
    {/* subtle sheen */}
    <div className="pointer-events-none absolute inset-0 opacity-60">
      <div
        className={[
          "absolute -top-28 left-1/2 h-56 w-[120%] -translate-x-1/2 rounded-full blur-3xl",
          light
            ? "bg-linear-to-r from-transparent via-white/10 to-transparent"
            : "bg-linear-to-r from-transparent via-zinc-100 to-transparent",
        ].join(" ")}
      />
    </div>

    <div className="relative">
      {/* Dyson-ish accent line */}
      <div className={light ? "h-px w-12 bg-white/30" : "h-px w-12 bg-zinc-900"} />

      <p
        className={[
          "mt-6 text-balance text-2xl font-semibold tracking-tight sm:text-3xl",
          light ? "text-white" : "text-zinc-950",
        ].join(" ")}
      >
        “{statement}”
      </p>

      <p className={light ? "mt-6 text-sm text-white/65" : "mt-6 text-sm text-zinc-600"}>
        Reliable supply • Consistent standards • Practical delivery
      </p>
    </div>
  </div>
)

const AboutMission = ({
  eyebrow = DEFAULTS.eyebrow,
  title = DEFAULTS.title,
  statement = DEFAULTS.statement,
  textVariant = "dark",
  background = {},
}: HomeMissionProps) => {
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
            </div>

            {/* Right */}
            <div className="md:col-span-8">
              <MissionQuote statement={statement} light={isLight} />
              <div className={isLight ? "mt-10 h-px w-full bg-white/12" : "mt-10 h-px w-full bg-zinc-200"} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutMission
