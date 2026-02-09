import React from "react"
import Image from "next/image"
import Link from "next/link"

export type ServiceCardItem = {
  title: string
  copy: string
  href?: string
  imageSrc?: string
  imageAlt?: string
}

export type ServicesGridProps = {
  eyebrow?: string
  title?: string
  intro?: string
  items?: ServiceCardItem[]
  textVariant?: "dark" | "light"
  background?: { colorClassName?: string; colorValue?: string }
}

const DEFAULT_SERVICES: ServiceCardItem[] = [
  {
    title: "Temporary accommodation",
    copy:
      "For urgent placements and short-term housing needs, we provide temporary accommodation options across our operating areas, subject to availability. We focus on suitability, safety, and clear placement coordination.",
    href: "/services/temporary-accommodation",
    imageSrc: "/images/hero.jpg",
    imageAlt: "Temporary accommodation",
  },
  {
    title: "Self-contained accommodation",
    copy:
      "We provide self-contained accommodation for individuals and families who need stability and privacy. Where suitable and available, we match accommodation to household needs and location requirements.",
    href: "/services/self-contained-accommodation",
    imageSrc: "/images/hero.jpg",
    imageAlt: "Self-contained accommodation",
  },
  {
    title: "Supported accommodation (where applicable)",
    copy:
      "Where supported accommodation is required, we work alongside housing and support partners to help deliver an environment that supports positive outcomes. Support provision may be delivered by partner organisations depending on pathway and local requirements.",
    href: "/services/supported-accommodation",
    imageSrc: "/images/hero.jpg",
    imageAlt: "Supported accommodation",
  },
  {
    title: "Leasing & property sourcing",
    copy:
      "We source suitable properties through landlord partnerships and leasing arrangements. We focus on creating placement-ready accommodation that meets agreed standards and location needs.",
    href: "/services/leasing-and-property-sourcing",
    imageSrc: "/images/hero.jpg",
    imageAlt: "Property sourcing and leasing",
  },
  {
    title: "Property management & oversight",
    copy:
      "We coordinate day-to-day oversight including property standards, maintenance workflows, and partner communications. Our goal is simple: accommodation that remains safe, suitable, and well managed throughout occupancy.",
    href: "/services/property-management",
    imageSrc: "/images/hero.jpg",
    imageAlt: "Property management and oversight",
  },
]

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
)

export default function ServicesGrid({
  eyebrow = "Services",
  title = "Explore our services",
  intro = "Designed to support placements quickly, maintain standards, and reduce pressure for partners.",
  items = DEFAULT_SERVICES,
  textVariant = "light",
  background = { colorValue: "#000000" },
}: ServicesGridProps) {
  const isLight = textVariant === "light"

  const hasColour = Boolean(background.colorClassName || background.colorValue)

  const tone = isLight
    ? {
        eyebrow: "text-white/60",
        title: "text-white",
        intro: "text-white/70",
        divider: "bg-white/12",
        card: "border-white/10 bg-white/5",
        cardTitle: "text-white",
        cardBody: "text-white/75",
        meta: "text-white/70",
      }
    : {
        eyebrow: "text-zinc-500",
        title: "text-zinc-950",
        intro: "text-zinc-700",
        divider: "bg-zinc-200",
        card: "border-zinc-200 bg-white",
        cardTitle: "text-zinc-950",
        cardBody: "text-zinc-700",
        meta: "text-zinc-600",
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
      {/* Texture on dark */}
      {isLight ? (
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-full bg-linear-to-r from-transparent via-white/12 to-transparent blur-3xl" />
          <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[18px_18px]" />
        </div>
      ) : null}

      <Container>
        <div className="py-12 md:py-14">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${tone.eyebrow}`}>
                {eyebrow}
              </p>
              <h2 className={`mt-3 text-2xl font-semibold tracking-tight sm:text-3xl ${tone.title}`}>
                {title}
              </h2>
              <p className={`mt-3 text-sm leading-relaxed ${tone.intro}`}>{intro}</p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((s) => (
              <Link key={s.title} href={s.href || "#"} className="block">
                <div
                  className={`group relative overflow-hidden rounded-3xl border shadow-sm transition-transform duration-200 hover:-translate-y-0.5 ${tone.card}`}
                >
                  {s.imageSrc ? (
                    <div className="relative aspect-16/10 w-full overflow-hidden">
                      <Image
                        src={s.imageSrc}
                        alt={s.imageAlt || s.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />
                    </div>
                  ) : null}

                  <div className="p-6">
                    <p className={`text-sm font-semibold tracking-tight ${tone.cardTitle}`}>{s.title}</p>
                    <p className={`mt-2 text-sm leading-relaxed ${tone.cardBody}`}>{s.copy}</p>

                    {s.href ? (
                      <p className={`mt-4 inline-flex items-center gap-2 text-xs font-medium tracking-wide ${tone.meta}`}>
                        Learn more <span aria-hidden="true">→</span>
                      </p>
                    ) : null}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className={`mt-10 h-px w-full ${tone.divider}`} />
        </div>
      </Container>
    </section>
  )
}
