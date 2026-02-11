import React from "react"
import Link from "next/link"
import Image from "next/image"

type Cta = {
  label: string
  href: string
}

type HomeHeroProps = {
  eyebrow?: string
  headline?: string
  subheadline?: string
  primaryCta?: Cta
  secondaryCta?: Cta
  trustLine?: string

  /** Controls text + button styling */
  textVariant?: "dark" | "light"

  /** Background: either solid colour OR image (with overlay) */
  background?: {
    colorValue?: string // e.g. "#000000"
    colorClassName?: string // e.g. "bg-black"

    src?: string
    alt?: string
    objectClassName?: string
    overlayStrength?: number // 0–100 (applies on image backgrounds)
  }

  /** Right panel media card */
  media?: {
    imageSrc?: string
    imageAlt?: string
    panelTitle?: string
    panelSubtitle?: string
  }
}

const DEFAULTS: Required<
  Pick<HomeHeroProps, "headline" | "subheadline" | "primaryCta" | "secondaryCta" | "trustLine" | "eyebrow">
> = {
  eyebrow: "Lucent Leasing",
  headline: "Accommodation delivered with clarity, care, and reliability.",
  subheadline:
    "Lucent Leasing works with local authorities, landlords, and housing partners to provide safe, high-quality temporary, supported, and self-contained accommodation for individuals and families who need housing.",
  primaryCta: { label: "Make an enquiry", href: "/contact" },
  secondaryCta: { label: "Landlords: lease your property", href: "/landlords" },
  trustLine: "Public-sector friendly processes • Responsive communication • Property-first standards",
}

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
)

const clamp01 = (n: number) => Math.min(1, Math.max(0, n))

const Button = ({
  href,
  variant,
  children,
}: {
  href: string
  variant: "primary" | "secondary"
  children: React.ReactNode
}) => {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/15 focus-visible:ring-offset-2"
  const styles =
    variant === "primary"
      ? "bg-zinc-950 text-white hover:bg-zinc-900 focus-visible:ring-offset-white"
      : "border border-zinc-300 bg-white text-zinc-950 hover:border-zinc-400 focus-visible:ring-offset-white"

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
      <span aria-hidden="true" className="ml-2 opacity-70">
        →
      </span>
    </Link>
  )
}

const ButtonLight = ({
  href,
  variant,
  children,
}: {
  href: string
  variant: "primary" | "secondary"
  children: React.ReactNode
}) => {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
  const styles =
    variant === "primary"
      ? "bg-white text-zinc-950 hover:bg-white/90"
      : "border border-white/20 bg-white/5 text-white hover:border-white/30"

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
      <span aria-hidden="true" className="ml-2 opacity-70">
        →
      </span>
    </Link>
  )
}

const TrustLine = ({ children, light }: { children: React.ReactNode; light: boolean }) => (
  <p className={light ? "mt-7 text-xs font-medium tracking-wide text-white/60" : "mt-7 text-xs font-medium tracking-wide text-zinc-600"}>
    {children}
  </p>
)

const HomeHero = ({
  eyebrow = DEFAULTS.eyebrow,
  headline = DEFAULTS.headline,
  subheadline = DEFAULTS.subheadline,
  primaryCta = DEFAULTS.primaryCta,
  secondaryCta = DEFAULTS.secondaryCta,
  trustLine = DEFAULTS.trustLine,
  textVariant = "dark",
  background = { colorClassName: "bg-white" },
  media = {
    panelTitle: "Safe, ready-to-occupy homes",
    panelSubtitle: "Temporary • Supported • Self-contained",
  },
}: HomeHeroProps) => {
  const isLight = textVariant === "light"
  const hasImage = Boolean(background.src)
  const hasSolid = Boolean(background.colorClassName || background.colorValue)

  const overlay = clamp01(((background.overlayStrength ?? 40) as number) / 100)

  const tone = isLight
    ? {
        eyebrow: "text-white/60",
        title: "text-white",
        body: "text-white/75",
        divider: "bg-white/12",
        texture: true,
      }
    : {
        eyebrow: "text-zinc-500",
        title: "text-zinc-950",
        body: "text-zinc-700",
        divider: "bg-zinc-200",
        texture: false,
      }

  // Media panel theme: matches hero tone (Dyson-ish)
  const panel = isLight
    ? {
        shell: "border-white/12 bg-white/5 shadow-[0_18px_70px_rgba(0,0,0,0.45)]",
        meta: "border-white/12 bg-black/20 text-white/70",
        dot: "bg-white/80",
        small: "text-white/55",
        heading: "text-white",
        sub: "text-white/60",
        body: "text-white/75",
      }
    : {
        shell: "border-zinc-200 bg-zinc-50 shadow-sm",
        meta: "border-zinc-200 bg-white/70 text-zinc-700",
        dot: "bg-zinc-950",
        small: "text-zinc-500",
        heading: "text-zinc-950",
        sub: "text-zinc-500",
        body: "text-zinc-700",
      }

  return (
    <section
      className={[
        "relative isolate overflow-hidden",
        !hasImage && !hasSolid ? "bg-white" : "",
        !hasImage && background.colorClassName ? background.colorClassName : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={!hasImage && background.colorValue ? { backgroundColor: background.colorValue } : undefined}
    >
      {/* Background image (optional) */}
      {hasImage ? (
        <div className="absolute inset-0 -z-10">
          <Image
            src={background.src!}
            alt={background.alt || "Lucent Leasing"}
            fill
            priority
            sizes="100vw"
            className={["object-cover", background.objectClassName].filter(Boolean).join(" ")}
          />

          {/* Dyson-ish overlay tuned for dark/light text */}
          {isLight ? (
            <div className="absolute inset-0" style={{ backgroundColor: `rgba(0,0,0,${0.55 + overlay * 0.35})` }} />
          ) : (
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(90deg,
                  rgba(255,255,255,0.94) 0%,
                  rgba(255,255,255,0.90) 45%,
                  rgba(255,255,255,0.78) 65%,
                  rgba(255,255,255,0.62) 100%)`,
              }}
            />
          )}
        </div>
      ) : null}

      {/* Optional texture for dark sections to keep “premium” */}
      {tone.texture ? (
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-full bg-linear-to-r from-transparent via-white/12 to-transparent blur-3xl" />
          <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[18px_18px]" />
          <div className="absolute left-0 right-0 top-0 h-px bg-white/12" />
        </div>
      ) : (
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-full bg-linear-to-r from-transparent via-zinc-200/60 to-transparent blur-3xl" />
          <div className="absolute inset-0 opacity-[0.16] bg-[radial-gradient(#0a0a0a_1px,transparent_1px)] bg-size-[18px_18px]" />
          <div className="absolute left-0 right-0 top-0 h-px bg-zinc-200" />
        </div>
      )}

      <Container>
        <div className="grid items-start gap-10 py-12 md:grid-cols-12 md:py-16">
          {/* Left: copy */}
          <div className="md:col-span-7 lg:col-span-6">
            <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${tone.eyebrow}`}>
              {eyebrow}
            </p>

            <h1 className={`mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl ${tone.title}`}>
              {headline}
            </h1>

            <p className={`mt-4 max-w-xl text-pretty text-base leading-relaxed ${tone.body}`}>
              {subheadline}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              {isLight ? (
                <>
                  <ButtonLight href={primaryCta.href} variant="primary">
                    {primaryCta.label}
                  </ButtonLight>
                  <ButtonLight href={secondaryCta.href} variant="secondary">
                    {secondaryCta.label}
                  </ButtonLight>
                </>
              ) : (
                <>
                  <Button href={primaryCta.href} variant="primary">
                    {primaryCta.label}
                  </Button>
                  <Button href={secondaryCta.href} variant="secondary">
                    {secondaryCta.label}
                  </Button>
                </>
              )}
            </div>

            <TrustLine light={isLight}>{trustLine}</TrustLine>
          </div>

          {/* Right: media panel */}
          <div className="md:col-span-5 lg:col-span-6">
            <div className={`relative overflow-hidden rounded-3xl border ${panel.shell}`}>
              {media.imageSrc ? (
                <div className="relative aspect-16/10 w-full overflow-hidden">
                  <Image
                    src={media.imageSrc}
                    alt={media.imageAlt || "Lucent Leasing accommodation"}
                    fill
                    priority
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />
                </div>
              ) : (
                <div className="relative aspect-16/10 w-full">
                  <div
                    className={[
                      "absolute inset-0",
                      isLight
                        ? "bg-linear-to-br from-black via-zinc-900 to-black"
                        : "bg-linear-to-br from-white via-zinc-50 to-zinc-200/60",
                    ].join(" ")}
                  />
                  <div
                    className={[
                      "absolute inset-0",
                      isLight
                        ? "opacity-[0.10] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[18px_18px]"
                        : "opacity-[0.18] bg-[radial-gradient(#0a0a0a_1px,transparent_1px)] bg-size-[18px_18px]",
                    ].join(" ")}
                  />
                  <div className="relative flex h-full flex-col justify-end p-7 sm:p-8">
                    <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${panel.sub}`}>
                      {media.panelSubtitle}
                    </p>
                    <p className={`mt-2 text-lg font-semibold tracking-tight ${panel.heading}`}>
                      {media.panelTitle}
                    </p>
                    <p className={`mt-2 max-w-md text-sm leading-relaxed ${panel.body}`}>
                      Clear communication, consistent standards, and reliable delivery—built for
                      public-sector partners and landlords.
                    </p>
                  </div>
                </div>
              )}

              {/* Bottom meta strip */}
              <div className={`flex flex-col gap-2 border-t px-6 py-5 backdrop-blur sm:flex-row sm:items-center sm:justify-between ${panel.meta}`}>
                <div className="flex items-center gap-2 text-sm">
                  <span className={`inline-flex h-2 w-2 rounded-full ${panel.dot}`} />
                  <span className="font-medium">Enquiry response</span>
                  <span className={panel.small}>typically within 1 working day</span>
                </div>
                <div className={`text-xs font-medium tracking-wide ${isLight ? "text-white/55" : "text-zinc-600"}`}>
                  {trustLine}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HomeHero
