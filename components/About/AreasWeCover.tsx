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

  /** Theme */
  textVariant?: "dark" | "light"

  /** Background (colour OR optional image) */
  background?: {
    colorClassName?: string // e.g. "bg-black"
    colorValue?: string // e.g. "#000000"

    /** Optional image bg if you ever want it */
    src?: string
    alt?: string
    objectClassName?: string
    overlayStrength?: number // 0–100
  }

  /** Optional council/partner logos strip */
  logos?: {
    title?: string
    items?: LogoItem[]
  }
}

const DEFAULTS: Required<
  Pick<HomeAreasWeCoverProps, "eyebrow" | "title" | "description" | "areas" | "cta" | "textVariant">
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
  textVariant: "dark",
}

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
)

const clamp01 = (n: number) => Math.min(1, Math.max(0, n))

const PrimaryLink = ({
  href,
  children,
  variant = "dark",
}: {
  href: string
  children: React.ReactNode
  variant?: "dark" | "light"
}) => {
  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/15 focus-visible:ring-offset-2"
  const styles =
    variant === "light"
      ? "bg-white text-zinc-950 hover:bg-white/90 focus-visible:ring-offset-black"
      : "bg-zinc-950 text-white hover:bg-zinc-900 focus-visible:ring-offset-white"

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
      <span aria-hidden="true" className={variant === "light" ? "text-zinc-600" : "text-white/80"}>
        →
      </span>
    </Link>
  )
}

const AreaPill = ({ name, light }: { name: string; light: boolean }) => (
  <span
    className={[
      "inline-flex items-center rounded-full border px-4 py-2 text-sm shadow-sm",
      light ? "border-white/12 bg-white/5 text-white/80" : "border-zinc-200 bg-white text-zinc-800",
    ].join(" ")}
  >
    {name}
  </span>
)

const LogosStrip = ({
  title,
  items,
  light,
}: {
  title?: string
  items: LogoItem[]
  light: boolean
}) => (
  <div
    className={[
      "mt-8 rounded-3xl border p-6 sm:p-7",
      light ? "border-white/12 bg-white/5" : "border-zinc-200 bg-zinc-50",
    ].join(" ")}
  >
    <p
      className={[
        "text-xs font-semibold uppercase tracking-[0.18em]",
        light ? "text-white/60" : "text-zinc-500",
      ].join(" ")}
    >
      {title || "Working with local authorities across…"}
    </p>

    <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {items.map((logo) => (
        <div
          key={`${logo.src}-${logo.alt}`}
          className={[
            "flex flex-col items-center justify-center rounded-2xl border p-4 shadow-sm",
            light ? "border-white/10 bg-white/5" : "border-zinc-200 bg-white",
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
            <p className={light ? "mt-2 text-center text-xs text-white/60" : "mt-2 text-center text-xs text-zinc-600"}>
              {logo.caption}
            </p>
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
  textVariant = DEFAULTS.textVariant,
  background = {},
}: HomeAreasWeCoverProps) => {
  const isLight = textVariant === "light"
  const overlay = clamp01((background.overlayStrength ?? 0) / 100)

  const hasImage = Boolean(background.src)
  const hasColour = Boolean(background.colorClassName || background.colorValue)

  const tone = isLight
    ? {
        eyebrow: "text-white/60",
        title: "text-white",
        body: "text-white/75",
        divider: "bg-white/12",
        panel: "border-white/12 bg-white/5",
      }
    : {
        eyebrow: "text-zinc-500",
        title: "text-zinc-950",
        body: "text-zinc-700",
        divider: "bg-zinc-200",
        panel: "border-zinc-200 bg-white",
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
      {/* Optional background image */}
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

      {/* Dyson-ish texture for dark sections */}
      {isLight ? (
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-full bg-linear-to-r from-transparent via-white/12 to-transparent blur-3xl" />
          <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[18px_18px]" />
          <div className="absolute left-0 right-0 top-0 h-px bg-white/12" />
        </div>
      ) : null}

      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-12 md:items-start md:py-14">
          {/* Left */}
          <div className="md:col-span-4">
            <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${tone.eyebrow}`}>
              {eyebrow}
            </p>
            <h2 className={`mt-3 text-2xl font-semibold tracking-tight sm:text-3xl ${tone.title}`}>
              {title}
            </h2>
            {description ? (
              <p className={`mt-3 text-base leading-relaxed ${tone.body}`}>{description}</p>
            ) : null}

            <div className="mt-6">
              <PrimaryLink href={cta.href} variant={isLight ? "light" : "dark"}>
                {cta.label}
              </PrimaryLink>
            </div>
          </div>

          {/* Right */}
          <div className="md:col-span-8">
            <div className={`rounded-3xl border p-6 shadow-sm sm:p-7 ${tone.panel}`}>
              <div className="flex flex-wrap gap-2">
                {areas.map((a) => (
                  <AreaPill key={a} name={a} light={isLight} />
                ))}
              </div>

              <div className={`mt-8 h-px w-full ${tone.divider}`} />

              <p className={`mt-6 text-sm leading-relaxed ${tone.body}`}>
                Working with local authorities and housing partners across the South and South East.
              </p>
            </div>

            {logos?.items && logos.items.length > 0 ? (
              <LogosStrip title={logos.title} items={logos.items} light={isLight} />
            ) : null}

            <div className={`mt-10 h-px w-full ${tone.divider}`} />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HomeAreasWeCover
