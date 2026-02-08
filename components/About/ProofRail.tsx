import React from "react"
import Image from "next/image"

type ProofItem = {
  src: string
  alt: string
  title: string
  subtitle?: string
}

type AboutProofRailProps = {
  eyebrow?: string
  title?: string
  items?: ProofItem[]
  textVariant?: "dark" | "light"
  background?: { colorClassName?: string; colorValue?: string }
}

const DEFAULTS: Required<Pick<AboutProofRailProps, "eyebrow" | "title" | "items">> = {
  eyebrow: "What you can expect",
  title: "Standards you can see.",
  items: [
    { src: "/images/hero.jpg", alt: "Property checks", title: "Property checks", subtitle: "Clear expectations" },
    { src: "/images/hero.jpg", alt: "Move-in readiness", title: "Placement-ready", subtitle: "Prepared for occupancy" },
    { src: "/images/hero.jpg", alt: "Maintenance coordination", title: "Maintenance coordination", subtitle: "Practical workflows" },
    { src: "/images/hero.jpg", alt: "Professional communication", title: "Responsive communication", subtitle: "Straightforward updates" },
  ],
}

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
)

const AboutProofRail = ({
  eyebrow = DEFAULTS.eyebrow,
  title = DEFAULTS.title,
  items = DEFAULTS.items,
  textVariant = "dark",
  background = {},
}: AboutProofRailProps) => {
  const isLight = textVariant === "light"
  const hasColour = Boolean(background.colorClassName || background.colorValue)

  const tone = isLight
    ? {
        eyebrow: "text-white/60",
        title: "text-white",
        divider: "bg-white/12",
        card: "border-white/10 bg-white/5",
        t: "text-white",
        s: "text-white/70",
        shadow: "shadow-[0_12px_50px_rgba(0,0,0,0.45)]",
      }
    : {
        eyebrow: "text-zinc-500",
        title: "text-zinc-950",
        divider: "bg-zinc-200",
        card: "border-zinc-200 bg-white",
        t: "text-zinc-950",
        s: "text-zinc-600",
        shadow: "shadow-sm",
      }

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
      {isLight ? (
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-full bg-linear-to-r from-transparent via-white/12 to-transparent blur-3xl" />
          <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[18px_18px]" />
        </div>
      ) : null}

      <Container>
        <div className="py-12 md:py-14">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${tone.eyebrow}`}>
                {eyebrow}
              </p>
              <h2 className={`mt-3 text-2xl font-semibold tracking-tight sm:text-3xl ${tone.title}`}>
                {title}
              </h2>
            </div>

            <p className={isLight ? "hidden text-sm text-white/60 md:block" : "hidden text-sm text-zinc-600 md:block"}>
              Scroll →
            </p>
          </div>

          <div className="mt-8 overflow-x-auto pb-2">
            <div className="flex min-w-max gap-4">
              {items.map((it) => (
                <div
                  key={it.title}
                  className={[
                    "group relative w-70 overflow-hidden rounded-3xl border",
                    tone.card,
                    tone.shadow,
                  ].join(" ")}
                >
                  <div className="relative aspect-16/10 w-full">
                    <Image
                      src={it.src}
                      alt={it.alt}
                      fill
                      sizes="280px"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />
                  </div>

                  <div className="p-5">
                    <p className={`text-sm font-semibold tracking-tight ${tone.t}`}>{it.title}</p>
                    {it.subtitle ? <p className={`mt-1 text-sm ${tone.s}`}>{it.subtitle}</p> : null}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`mt-10 h-px w-full ${tone.divider}`} />
        </div>
      </Container>
    </section>
  )
}

export default AboutProofRail
