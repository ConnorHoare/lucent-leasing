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

const clamp01 = (n: number) => Math.min(1, Math.max(0, n))

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
)

const SectionHeader = ({
  eyebrow,
  title,
  description,
  textVariant,
}: {
  eyebrow: string
  title: string
  description?: string
  textVariant: "dark" | "light"
}) => {
  const isLight = textVariant === "light"
  return (
    <div className="max-w-2xl">
      <p
        className={
          isLight
            ? "text-xs font-semibold uppercase tracking-[0.18em] text-white/60"
            : "text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500"
        }
      >
        {eyebrow}
      </p>
      <h2
        className={
          isLight
            ? "mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            : "mt-3 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl"
        }
      >
        {title}
      </h2>
      {description ? (
        <p className={isLight ? "mt-3 text-base leading-relaxed text-white/75" : "mt-3 text-base leading-relaxed text-zinc-700"}>
          {description}
        </p>
      ) : null}
    </div>
  )
}

const PrimaryLink = ({
  href,
  children,
  textVariant,
}: {
  href: string
  children: React.ReactNode
  textVariant: "dark" | "light"
}) => {
  const isLight = textVariant === "light"
  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        isLight
          ? "bg-white text-zinc-950 hover:bg-white/90 focus-visible:ring-white/25 focus-visible:ring-offset-black"
          : "bg-zinc-950 text-white hover:bg-zinc-900 focus-visible:ring-zinc-900/15 focus-visible:ring-offset-white",
      ].join(" ")}
    >
      {children}
      <span aria-hidden="true" className={isLight ? "text-zinc-950/70" : "text-white/80"}>
        →
      </span>
    </Link>
  )
}

const AreaPill = ({ name, textVariant }: { name: string; textVariant: "dark" | "light" }) => {
  const isLight = textVariant === "light"
  return (
    <span
      className={[
        "inline-flex items-center rounded-full border px-4 py-2 text-sm shadow-sm",
        isLight ? "border-white/12 bg-white/5 text-white/80" : "border-zinc-200 bg-white text-zinc-800",
      ].join(" ")}
    >
      {name}
    </span>
  )
}

const LogosStrip = ({
  title,
  items,
  textVariant,
}: {
  title?: string
  items: LogoItem[]
  textVariant: "dark" | "light"
}) => {
  const isLight = textVariant === "light"

  return (
    <div
      className={[
        "mt-8 rounded-3xl border p-6 sm:p-7",
        isLight ? "border-white/10 bg-white/5" : "border-zinc-200 bg-zinc-50",
      ].join(" ")}
    >
      <p
        className={
          isLight
            ? "text-xs font-semibold uppercase tracking-[0.18em] text-white/60"
            : "text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500"
        }
      >
        {title || "Working with local authorities across…"}
      </p>

      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {items.map((logo) => (
          <div
            key={`${logo.src}-${logo.alt}`}
            className={[
              "flex flex-col items-center justify-center rounded-2xl border p-4 shadow-sm",
              isLight ? "border-white/10 bg-black/20" : "border-zinc-200 bg-white",
            ].join(" ")}
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
              <p className={isLight ? "mt-2 text-center text-xs text-white/60" : "mt-2 text-center text-xs text-zinc-600"}>
                {logo.caption}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}

const HomeAreasWeCover = ({
  eyebrow = DEFAULTS.eyebrow,
  title = DEFAULTS.title,
  description = DEFAULTS.description,
  areas = DEFAULTS.areas,
  cta = DEFAULTS.cta,
  logos,
  textVariant = "dark",
  background = {},
}: HomeAreasWeCoverProps) => {
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
        <div className="grid gap-10 py-12 md:grid-cols-12 md:items-start md:py-14">
          {/* Left */}
          <div className="md:col-span-4">
            <SectionHeader eyebrow={eyebrow} title={title} description={description} textVariant={textVariant} />

            <div className="mt-6">
              <PrimaryLink href={cta.href} textVariant={textVariant}>
                {cta.label}
              </PrimaryLink>
            </div>
          </div>

          {/* Right */}
          <div className="md:col-span-8">
            <div
              className={[
                "rounded-3xl border p-6 shadow-sm sm:p-7",
                isLight ? "border-white/10 bg-white/5" : "border-zinc-200 bg-white",
              ].join(" ")}
            >
              <div className="flex flex-wrap gap-2">
                {areas.map((a) => (
                  <AreaPill key={a} name={a} textVariant={textVariant} />
                ))}
              </div>

              {/* separator */}
              <div className={`mt-8 h-px w-full ${dividerClass}`} />

              <p className={isLight ? "mt-6 text-sm leading-relaxed text-white/75" : "mt-6 text-sm leading-relaxed text-zinc-700"}>
                Working with local authorities and housing partners across the South and South East.
              </p>
            </div>

            {/* Optional council logos */}
            {logos?.items && logos.items.length > 0 ? (
              <LogosStrip title={logos.title} items={logos.items} textVariant={textVariant} />
            ) : null}

            {/* Divider rhythm */}
            <div className={`mt-10 h-px w-full ${dividerClass}`} />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HomeAreasWeCover
