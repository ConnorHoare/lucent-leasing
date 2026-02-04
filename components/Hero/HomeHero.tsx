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

  /** Optional full-section background image (Dyson-ish) */
  background?: {
    src?: string
    alt?: string
    /** 0–100. Higher = darker overlay (improves text contrast). Default 35 */
    overlayStrength?: number
    /** Tailwind classes e.g. "object-[center_30%]" */
    objectClassName?: string
  }

  /** Right panel media card */
  media?: {
    /** If provided, shows an image in the right panel (use /public paths e.g. "/hero.jpg") */
    imageSrc?: string
    imageAlt?: string
    /** Optional: fallback gradient panel when no image provided */
    panelTitle?: string
    panelSubtitle?: string
  }
}

const DEFAULTS: Required<
  Pick<
    HomeHeroProps,
    "headline" | "subheadline" | "primaryCta" | "secondaryCta" | "trustLine" | "eyebrow"
  >
> = {
  eyebrow: "Lucent Leasing",
  headline: "Accommodation delivered with clarity, care, and reliability.",
  subheadline:
    "Lucent Leasing works with local authorities, landlords, and housing partners to provide safe, high-quality temporary, supported, and self-contained accommodation for individuals and families who need housing.",
  primaryCta: { label: "Make an enquiry", href: "/contact" },
  secondaryCta: { label: "Landlords: lease your property", href: "/landlords" },
  trustLine:
    "Public-sector friendly processes • Responsive communication • Property-first standards",
}

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
)

const Button = ({
  href,
  variant = "primary",
  children,
}: {
  href: string
  variant?: "primary" | "secondary"
  children: React.ReactNode
}) => {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/15 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
  const styles =
    variant === "primary"
      ? "bg-zinc-950 text-white hover:bg-zinc-900"
      : "border border-zinc-300 bg-white text-zinc-950 hover:border-zinc-400"
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  )
}

const TrustLine = ({ children }: { children: React.ReactNode }) => (
  <p className="mt-6 text-xs font-medium tracking-wide text-zinc-600">{children}</p>
)

/**
 * HomeHero (Dyson-ish layout):
 * - Optional full-bleed background image + subtle overlay
 * - Large type, clean grid
 * - Product-card-like media panel on the right
 */
const HomeHero = ({
  eyebrow = DEFAULTS.eyebrow,
  headline = DEFAULTS.headline,
  subheadline = DEFAULTS.subheadline,
  primaryCta = DEFAULTS.primaryCta,
  secondaryCta = DEFAULTS.secondaryCta,
  trustLine = DEFAULTS.trustLine,
  background = {
    overlayStrength: 35,
  },
  media = {
    panelTitle: "Safe, ready-to-occupy homes",
    panelSubtitle: "Temporary • Supported • Self-contained",
  },
}: HomeHeroProps) => {
  const overlay = Math.min(100, Math.max(0, background.overlayStrength ?? 35)) / 100

  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Optional background image */}
      {background.src ? (
        <div className="absolute inset-0 -z-10">
          <Image
            src={background.src}
            alt={background.alt || "Lucent Leasing"}
            fill
            priority
            sizes="100vw"
            className={["object-cover", background.objectClassName].filter(Boolean).join(" ")}
          />
          {/* Contrast overlay + slight gradient to mimic premium hero */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(90deg,
                rgba(255,255,255,${0.92}) 0%,
                rgba(255,255,255,${0.86}) 45%,
                rgba(255,255,255,${0.72}) 60%,
                rgba(255,255,255,${overlay}) 100%)`,
            }}
          />
        </div>
      ) : (
        <div className="absolute inset-0 -z-10 bg-white" />
      )}

      <Container>
        <div className="grid items-start gap-10 py-12 md:grid-cols-12 md:py-16">
          {/* Copy */}
          <div className="md:col-span-7 lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
              {eyebrow}
            </p>

            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
              {headline}
            </h1>

            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-zinc-700">
              {subheadline}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={primaryCta.href} variant="primary">
                {primaryCta.label}
              </Button>
              <Button href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </Button>
            </div>

            <TrustLine>{trustLine}</TrustLine>
          </div>

          {/* Media panel (Dyson-style product card) */}
          <div className="md:col-span-5 lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 shadow-sm">
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
                </div>
              ) : (
                <div className="relative aspect-16/10 w-full">
                  <div className="absolute inset-0 bg-linear-to-br from-white via-zinc-50 to-zinc-200/60" />
                  <div className="absolute inset-0 opacity-[0.22] bg-[radial-gradient(#0a0a0a_1px,transparent_1px)] bg-size-[18px_18px]" />
                  <div className="relative flex h-full flex-col justify-end p-7 sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                      {media.panelSubtitle}
                    </p>
                    <p className="mt-2 text-lg font-semibold tracking-tight text-zinc-950">
                      {media.panelTitle}
                    </p>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-700">
                      Clear communication, consistent standards, and reliable delivery—built
                      for public-sector partners and landlords.
                    </p>
                  </div>
                </div>
              )}

              {/* Bottom meta strip */}
              <div className="flex flex-col gap-2 border-t border-zinc-200 bg-white/70 px-6 py-5 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2 text-sm text-zinc-700">
                  <span className="inline-flex h-2 w-2 rounded-full bg-zinc-950" />
                  <span className="font-medium">Enquiry response</span>
                  <span className="text-zinc-500">typically within 1 working day</span>
                </div>
                <div className="text-xs font-medium tracking-wide text-zinc-600">
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
