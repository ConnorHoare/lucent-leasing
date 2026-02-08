'use client'

import React from "react"
import Image from "next/image"

type AudienceItem = {
  title: string
  description: string
}

type AboutWhoWeWorkWithProps = {
  eyebrow?: string
  title?: string
  intro?: string
  items?: AudienceItem[]

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

const DEFAULTS: Required<Pick<AboutWhoWeWorkWithProps, "eyebrow" | "title" | "intro" | "items">> = {
  eyebrow: "Partners",
  title: "Who we work with",
  intro: "Built to support placements through clear processes and reliable delivery.",
  items: [
    {
      title: "Local authorities",
      description:
        "We support teams with placement-ready options, clear communication, and consistent accommodation standards.",
    },
    {
      title: "Landlords",
      description:
        "We offer secure leasing options with day-to-day oversight, coordinated maintenance, and clear points of contact.",
    },
    {
      title: "Housing and support partners",
      description:
        "We collaborate alongside providers and services where applicable to support safe placements and stable outcomes.",
    },
    {
      title: "Service users (where applicable)",
      description:
        "Where referrals apply, we aim for a respectful, professional approach that supports safe accommodation and good practice.",
    },
  ],
}

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
)

const clamp01 = (n: number) => Math.min(1, Math.max(0, n))

const AboutWhoWeWorkWith = ({
  eyebrow = DEFAULTS.eyebrow,
  title = DEFAULTS.title,
  intro = DEFAULTS.intro,
  items = DEFAULTS.items,
  textVariant = "dark",
  background = {},
}: AboutWhoWeWorkWithProps) => {
  const isLight = textVariant === "light"
  const overlay = clamp01((background.overlayStrength ?? 0) / 100)

  const hasImage = Boolean(background.src)
  const hasColour = Boolean(background.colorClassName || background.colorValue)

  const [active, setActive] = React.useState(0)

  const tone = isLight
    ? {
        eyebrow: "text-white/60",
        title: "text-white",
        intro: "text-white/70",
        rail: "border-white/12 bg-white/5",
        row: "border-white/10 hover:bg-white/5",
        rowActive: "bg-white/10 border-white/15",
        rowText: "text-white",
        rowSub: "text-white/60",
        panel: "border-white/12 bg-white/5",
        panelTitle: "text-white",
        panelBody: "text-white/75",
        divider: "bg-white/12",
        dot: "bg-white/70",
        dotMuted: "bg-white/20",
      }
    : {
        eyebrow: "text-zinc-500",
        title: "text-zinc-950",
        intro: "text-zinc-700",
        rail: "border-zinc-200 bg-white",
        row: "border-zinc-200 hover:bg-zinc-50",
        rowActive: "bg-zinc-50 border-zinc-300",
        rowText: "text-zinc-950",
        rowSub: "text-zinc-600",
        panel: "border-zinc-200 bg-zinc-50",
        panelTitle: "text-zinc-950",
        panelBody: "text-zinc-700",
        divider: "bg-zinc-200",
        dot: "bg-zinc-900",
        dotMuted: "bg-zinc-300",
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

      {/* Subtle texture for dark */}
      {isLight ? (
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-full bg-linear-to-r from-transparent via-white/12 to-transparent blur-3xl" />
          <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[18px_18px]" />
          <div className="absolute left-0 right-0 top-0 h-px bg-white/12" />
        </div>
      ) : null}

      <Container>
        <div className="py-12 md:py-14">
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            {/* Left */}
            <div className="md:col-span-4">
              <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${tone.eyebrow}`}>
                {eyebrow}
              </p>
              <h2 className={`mt-3 text-2xl font-semibold tracking-tight sm:text-3xl ${tone.title}`}>
                {title}
              </h2>
              <p className={`mt-4 text-sm leading-relaxed ${tone.intro}`}>{intro}</p>

              {/* Tiny “progress” dots (visual interest) */}
              <div className="mt-7 flex items-center gap-2">
                {items.map((_, i) => (
                  <span
                    key={i}
                    className={[
                      "h-1.5 w-1.5 rounded-full",
                      i === active ? tone.dot : tone.dotMuted,
                    ].join(" ")}
                  />
                ))}
              </div>
            </div>

            {/* Right: interactive rail + panel */}
            <div className="md:col-span-8">
              <div className="grid gap-4 lg:grid-cols-12">
                {/* Selector rail */}
                <div className="lg:col-span-5">
                  <div className={`rounded-3xl border ${tone.rail}`}>
                    {items.map((it, idx) => {
                      const isActive = idx === active
                      return (
                        <button
                          key={it.title}
                          type="button"
                          onClick={() => setActive(idx)}
                          onMouseEnter={() => setActive(idx)}
                          className={[
                            "w-full text-left",
                            "flex items-center justify-between gap-4 px-6 py-5",
                            "border-b last:border-b-0",
                            isActive ? tone.rowActive : tone.row,
                            "transition-colors",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/20 focus-visible:ring-offset-2",
                            isLight ? "focus-visible:ring-offset-black" : "focus-visible:ring-offset-white",
                          ].join(" ")}
                          aria-pressed={isActive}
                        >
                          <div>
                            <p className={`text-sm font-semibold tracking-tight ${tone.rowText}`}>
                              {it.title}
                            </p>
                            <p className={`mt-1 text-xs ${tone.rowSub}`}>View details</p>
                          </div>

                          <span className={isLight ? "text-white/60" : "text-zinc-500"} aria-hidden="true">
                            →
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Detail panel */}
                <div className="lg:col-span-7">
                  <div className={`relative overflow-hidden rounded-3xl border p-7 shadow-sm ${tone.panel}`}>
                    {/* subtle sheen */}
                    <div className="pointer-events-none absolute inset-0 opacity-60">
                      <div
                        className={[
                          "absolute -top-28 left-1/2 h-56 w-[120%] -translate-x-1/2 rounded-full blur-3xl",
                          isLight
                            ? "bg-linear-to-r from-transparent via-white/10 to-transparent"
                            : "bg-linear-to-r from-transparent via-white to-transparent",
                        ].join(" ")}
                      />
                    </div>

                    <div className="relative">
                      <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${tone.eyebrow}`}>
                        Selected
                      </p>
                      <h3 className={`mt-3 text-xl font-semibold tracking-tight ${tone.panelTitle}`}>
                        {items[active]?.title}
                      </h3>
                      <p className={`mt-3 text-sm leading-relaxed ${tone.panelBody}`}>
                        {items[active]?.description}
                      </p>

                      <div className={`mt-8 h-px w-full ${tone.divider}`} />

                      <p className={isLight ? "mt-5 text-xs text-white/55" : "mt-5 text-xs text-zinc-600"}>
                        Practical, public-sector friendly delivery • Clear points of contact • Property-first standards
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`mt-10 h-px w-full ${tone.divider}`} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutWhoWeWorkWith
