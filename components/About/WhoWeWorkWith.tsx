"use client"

import React from "react"

// ─── Types ────────────────────────────────────────────────────────────────────

type AudienceItem = { title: string; description: string }

type AboutWhoWeWorkWithProps = {
  eyebrow?: string
  title?: string
  intro?: string
  items?: AudienceItem[]
  textVariant?: "dark" | "light"
  background?: { colorClassName?: string; colorValue?: string; src?: string; alt?: string; overlayStrength?: number }
}

const DEFAULTS = {
  eyebrow: "Partners",
  title: "Who we work with",
  intro: "Built to support placements through clear processes and reliable delivery.",
  items: [
    {
      title: "Local authorities",
      description: "We support teams with placement-ready options, clear communication, and consistent accommodation standards.",
    },
    {
      title: "Landlords",
      description: "We offer secure leasing options with day-to-day oversight, coordinated maintenance, and clear points of contact.",
    },
    {
      title: "Housing and support partners",
      description: "We collaborate alongside providers and services where applicable to support safe placements and stable outcomes.",
    },
    {
      title: "Service users",
      description: "Where referrals apply, we aim for a respectful, professional approach that supports safe accommodation and good practice.",
    },
  ],
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function AboutWhoWeWorkWith({
  eyebrow = DEFAULTS.eyebrow,
  title   = DEFAULTS.title,
  intro   = DEFAULTS.intro,
  items   = DEFAULTS.items,
  background  = {},
}: AboutWhoWeWorkWithProps) {
  const [active, setActive] = React.useState(0)
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

      {/* Large watermark text */}
      <div
        className="pointer-events-none absolute -left-4 top-1/2 -translate-y-1/2 select-none font-(family-name:--font-display) text-[200px] font-light leading-none text-white/2"
        aria-hidden="true"
      >
        05
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:items-start">

          {/* Left */}
          <div className="md:col-span-4">
            <div className="mb-4 flex items-center gap-2.5">
              <div className="h-px w-6 bg-white/35" aria-hidden="true" />
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">{eyebrow}</span>
            </div>
            <h2 className="font-(family-name:--font-display) text-[clamp(24px,3.2vw,38px)] font-light leading-[1.1] text-white">
              {title}
            </h2>
            <p className="mt-4 text-[14px] font-light leading-relaxed text-white/45">{intro}</p>

            {/* Progress indicator */}
            <div className="mt-8 flex gap-1.5" aria-hidden="true">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`h-px rounded-full transition-all duration-300 ${
                    i === active ? "w-8 bg-white/60" : "w-3 bg-white/15"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right — selector + detail */}
          <div className="md:col-span-8">
            <div className="grid gap-4 lg:grid-cols-12">

              {/* Item list */}
              <div className="overflow-hidden rounded-2xl border border-white/8 lg:col-span-5">
                {items.map((it, idx) => {
                  const isActive = idx === active
                  return (
                    <button
                      key={it.title}
                      type="button"
                      onClick={() => setActive(idx)}
                      onMouseEnter={() => setActive(idx)}
                      aria-pressed={isActive}
                      className={[
                        "group relative w-full overflow-hidden border-b border-white/8 px-5 py-5 text-left last:border-b-0",
                        "transition-colors duration-200",
                        isActive ? "bg-white/6" : "hover:bg-white/3",
                        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20",
                      ].join(" ")}
                    >
                      {/* Active left bar */}
                      <div
                        className={`absolute left-0 top-0 h-full w-px bg-white/50 transition-transform duration-300 origin-top ${
                          isActive ? "scale-y-100" : "scale-y-0"
                        }`}
                        aria-hidden="true"
                      />

                      <div className="flex items-center justify-between gap-3">
                        <p className={`text-[13px] font-medium tracking-tight transition-colors ${
                          isActive ? "text-white" : "text-white/55 group-hover:text-white/75"
                        }`}>
                          {it.title}
                        </p>
                        <span className={`text-[11px] transition-all duration-200 ${
                          isActive ? "translate-x-0 text-white/50" : "-translate-x-1 text-white/0"
                        }`} aria-hidden="true">
                          →
                        </span>
                      </div>
                      <p className={`mt-0.5 text-[11px] font-light transition-colors ${
                        isActive ? "text-white/35" : "text-white/20"
                      }`}>
                        View details
                      </p>
                    </button>
                  )
                })}
              </div>

              {/* Detail panel */}
              <div className="lg:col-span-7">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/3 p-7">
                  {/* Subtle top glow */}
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-24 opacity-50"
                    style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.06) 0%, transparent 70%)" }}
                    aria-hidden="true"
                  />

                  <div className="relative">
                    <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/30">
                      Selected
                    </p>
                    <h3 className="font-(family-name:--font-display) text-[22px] font-light text-white">
                      {items[active]?.title}
                    </h3>
                    <div className="my-4 h-px bg-white/8" aria-hidden="true" />
                    <p className="text-[14px] font-light leading-relaxed text-white/55">
                      {items[active]?.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {["Placement-ready", "Clear communication", "Property-first"].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-light uppercase tracking-widest text-white/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-white/5" aria-hidden="true" />
    </section>
  )
}