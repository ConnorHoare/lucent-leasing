import React from "react"
import Link from "next/link"
import Image from "next/image"

type LogoItem = {
  src: string
  alt: string
  caption?: string
}

type HomeAreasWeCoverProps = {
  eyebrow?: string
  title?: string
  description?: string
  areas?: string[]
  cta?: { label: string; href: string }

  /** Optional council/partner logos strip */
  logos?: {
    title?: string
    items?: LogoItem[]
  }
}

const DEFAULTS: Required<
  Pick<HomeAreasWeCoverProps, "eyebrow" | "title" | "description" | "areas" | "cta">
> = {
  eyebrow: "Coverage",
  title: "Areas we cover",
  description: "We currently work with local authorities and partners across:",
  areas: [
    "Southampton",
    "Chichester",
    "Gosport",
    "Eastleigh",
    "Test Valley",
    "Rushmoor",
    "Worthing",
    "Eastbourne",
    "Bognor Regis",
  ],
  cta: { label: "See all areas", href: "/areas" },
}

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
)

const SectionHeader = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) => (
  <div className="max-w-2xl">
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
      {eyebrow}
    </p>
    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
      {title}
    </h2>
    {description ? (
      <p className="mt-3 text-base leading-relaxed text-zinc-700">{description}</p>
    ) : null}
  </div>
)

const PrimaryLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/15 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
  >
    {children}
    <span aria-hidden="true" className="text-white/80">
      →
    </span>
  </Link>
)

const AreaPill = ({ name }: { name: string }) => (
  <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-800 shadow-sm">
    {name}
  </span>
)

const LogosStrip = ({
  title,
  items,
}: {
  title?: string
  items: LogoItem[]
}) => (
  <div className="mt-8 rounded-3xl border border-zinc-200 bg-zinc-50 p-6 sm:p-7">
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
      {title || "Working with local authorities across…"}
    </p>

    <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {items.map((logo) => (
        <div
          key={`${logo.src}-${logo.alt}`}
          className="flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm"
        >
          <div className="relative h-10 w-full">
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              sizes="(min-width: 1024px) 150px, 33vw"
              className="object-contain"
            />
          </div>
          {logo.caption ? (
            <p className="mt-2 text-center text-xs text-zinc-600">{logo.caption}</p>
          ) : null}
        </div>
      ))}
    </div>
  </div>
)

const HomeAreasWeCover = ({
  eyebrow = DEFAULTS.eyebrow,
  title = DEFAULTS.title,
  description = DEFAULTS.description,
  areas = DEFAULTS.areas,
  cta = DEFAULTS.cta,
  logos,
}: HomeAreasWeCoverProps) => {
  return (
    <section className="bg-white">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-12 md:items-start md:py-14">
          {/* Left */}
          <div className="md:col-span-4">
            <SectionHeader eyebrow={eyebrow} title={title} description={description} />

            <div className="mt-6">
              <PrimaryLink href={cta.href}>{cta.label}</PrimaryLink>
            </div>
          </div>

          {/* Right */}
          <div className="md:col-span-8">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-7">
              <div className="flex flex-wrap gap-2">
                {areas.map((a) => (
                  <AreaPill key={a} name={a} />
                ))}
              </div>

              {/* Dyson-ish separator */}
              <div className="mt-8 h-px w-full bg-zinc-200" />

              <p className="mt-6 text-sm leading-relaxed text-zinc-700">
                Working with local authorities and housing partners across the South
                and South East.
              </p>
            </div>

            {/* Optional council logos */}
            {logos?.items && logos.items.length > 0 ? (
              <LogosStrip title={logos.title} items={logos.items} />
            ) : null}

            {/* Divider rhythm */}
            <div className="mt-10 h-px w-full bg-zinc-200" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HomeAreasWeCover
