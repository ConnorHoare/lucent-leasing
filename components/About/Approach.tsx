import React from "react"

type ApproachItem = {
  title: string
  description: string
}

type AboutApproachProps = {
  eyebrow?: string
  title?: string
  items?: ApproachItem[]

  /** Optional theme/background (same pattern you’re using elsewhere) */
  textVariant?: "dark" | "light"
  background?: {
    colorClassName?: string // e.g. "bg-zinc-50" or "bg-black"
    colorValue?: string // e.g. "#000000"
  }
}

const DEFAULTS: Required<Pick<AboutApproachProps, "eyebrow" | "title" | "items">> = {
  eyebrow: "What makes us different",
  title: "Our approach",
  items: [
    {
      title: "Quality first",
      description:
        "We prioritise accommodation that is safe, suitable, and maintained to agreed standards.",
    },
    {
      title: "Clear communication",
      description:
        "Straightforward processes, consistent updates, and a practical delivery mindset.",
    },
    {
      title: "Partnership-led",
      description:
        "We work alongside local authorities, housing partners, and service providers where applicable.",
    },
    {
      title: "Professional management",
      description:
        "We coordinate property oversight, maintenance workflows, and day-to-day accommodation management.",
    },
  ],
}

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
)

const ApproachCard = ({
  item,
  light,
  index,
}: {
  item: ApproachItem
  light: boolean
  index: number
}) => (
  <div
    className={[
      "group relative overflow-hidden rounded-3xl border p-6 shadow-sm transition-transform duration-200 hover:-translate-y-0.5",
      light ? "border-white/12 bg-white/5" : "border-zinc-200 bg-white",
    ].join(" ")}
  >
    {/* top sheen */}
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
        <p
          className={[
            "text-sm font-semibold tracking-tight",
            light ? "text-white" : "text-zinc-950",
          ].join(" ")}
        >
          {item.title}
        </p>

        {/* minimal index marker (Dyson-ish) */}
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
        {item.description}
      </p>
    </div>
  </div>
)

const AboutApproach = ({
  eyebrow = DEFAULTS.eyebrow,
  title = DEFAULTS.title,
  items = DEFAULTS.items,
  textVariant = "dark",
  background = {},
}: AboutApproachProps) => {
  const isLight = textVariant === "light"
  const hasColour = Boolean(background.colorClassName || background.colorValue)

  return (
    <section
      className={[
        "relative isolate overflow-hidden",
        !hasColour ? "bg-white" : "",
        background.colorClassName ? background.colorClassName : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={background.colorValue ? { backgroundColor: background.colorValue } : undefined}
    >
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
            {/* Left: header */}
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

            {/* Right: cards */}
            <div className="md:col-span-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {items.map((item, idx) => (
                  <ApproachCard key={item.title} item={item} index={idx} light={isLight} />
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

export default AboutApproach
