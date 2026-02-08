import React from "react"
import Link from "next/link"
import Image from "next/image"

type FinalCtaBandProps = {
  eyebrow?: string
  title?: string
  description?: string
  primaryCta?: { label: string; href: string }
  email?: string

  /** Theme */
  textVariant?: "dark" | "light"

  /** Background (colour OR optional image) */
  background?: {
    colorClassName?: string // e.g. "bg-black"
    colorValue?: string // e.g. "#000000"

    /** Optional image bg */
    src?: string
    alt?: string
    objectClassName?: string
    overlayStrength?: number // 0–100
  }
}

const DEFAULTS: Required<
  Pick<
    FinalCtaBandProps,
    "eyebrow" | "title" | "description" | "primaryCta" | "email" | "textVariant"
  >
> = {
  eyebrow: "Next steps",
  title: "Ready to discuss a placement or partnership?",
  description:
    "Whether you’re a local authority, landlord, or housing partner—Lucent Leasing is here to help.",
  primaryCta: { label: "Contact us", href: "/contact" },
  email: "hello@lucentleases.co.uk",
  textVariant: "dark",
}

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
)

const clamp01 = (n: number) => Math.min(1, Math.max(0, n))

const PrimaryButton = ({
  href,
  children,
  variant = "dark",
}: {
  href: string
  children: React.ReactNode
  variant?: "dark" | "light"
}) => {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/15 focus-visible:ring-offset-2"
  const styles =
    variant === "light"
      ? "bg-white text-zinc-950 hover:bg-white/90 focus-visible:ring-offset-black"
      : "bg-zinc-950 text-white hover:bg-zinc-900 focus-visible:ring-offset-white"
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  )
}

const SecondaryLink = ({
  href,
  children,
  variant = "dark",
}: {
  href: string
  children: React.ReactNode
  variant?: "dark" | "light"
}) => {
  const base =
    "inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/15 focus-visible:ring-offset-2"
  const styles =
    variant === "light"
      ? "border-white/20 bg-white/5 text-white hover:border-white/30 focus-visible:ring-offset-black"
      : "border-zinc-300 bg-white text-zinc-950 hover:border-zinc-400 focus-visible:ring-offset-white"
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  )
}

const FinalCtaBand = ({
  eyebrow = DEFAULTS.eyebrow,
  title = DEFAULTS.title,
  description = DEFAULTS.description,
  primaryCta = DEFAULTS.primaryCta,
  email = DEFAULTS.email,
  textVariant = DEFAULTS.textVariant,
  background = {},
}: FinalCtaBandProps) => {
  const isLight = textVariant === "light"
  const overlay = clamp01((background.overlayStrength ?? 0) / 100)

  const hasImage = Boolean(background.src)
  const hasColour = Boolean(background.colorClassName || background.colorValue)

  const tone = isLight
    ? {
        card: "border-white/12 bg-white/5",
        eyebrow: "text-white/60",
        title: "text-white",
        body: "text-white/75",
        divider: "bg-white/12",
        sheen: "via-white/12",
      }
    : {
        card: "border-zinc-200 bg-zinc-50",
        eyebrow: "text-zinc-500",
        title: "text-zinc-950",
        body: "text-zinc-700",
        divider: "bg-zinc-200",
        sheen: "via-zinc-200/60",
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

      {/* Dyson-ish texture for dark */}
      {isLight ? (
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-full bg-linear-to-r from-transparent via-white/12 to-transparent blur-3xl" />
          <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[18px_18px]" />
          <div className="absolute left-0 right-0 top-0 h-px bg-white/12" />
        </div>
      ) : null}

      <Container>
        <div className="py-12 md:py-14">
          <div className={`relative overflow-hidden rounded-3xl border ${tone.card}`}>
            {/* subtle Dyson-like sheen */}
            <div className="pointer-events-none absolute inset-0">
              <div
                className={[
                  "absolute -top-24 left-1/2 h-56 w-[120%] -translate-x-1/2 rounded-full blur-3xl",
                  "bg-linear-to-r from-transparent",
                  tone.sheen,
                  "to-transparent",
                ].join(" ")}
              />
              <div className="absolute inset-0 opacity-[0.16] bg-[radial-gradient(currentColor_1px,transparent_1px)] bg-size-[18px_18px] text-black/30" />
            </div>

            <div className="relative grid gap-8 p-7 sm:p-10 md:grid-cols-12 md:items-center">
              {/* Copy */}
              <div className="md:col-span-8">
                <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${tone.eyebrow}`}>
                  {eyebrow}
                </p>
                <h2 className={`mt-3 text-2xl font-semibold tracking-tight sm:text-3xl ${tone.title}`}>
                  {title}
                </h2>
                <p className={`mt-3 text-base leading-relaxed ${tone.body}`}>{description}</p>
              </div>

              {/* Actions */}
              <div className="md:col-span-4 md:flex md:justify-end">
                <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-stretch md:gap-3">
                  <PrimaryButton href={primaryCta.href} variant={isLight ? "light" : "dark"}>
                    {primaryCta.label}
                  </PrimaryButton>
                  <SecondaryLink href={`mailto:${email}`} variant={isLight ? "light" : "dark"}>
                    Email {email}
                  </SecondaryLink>
                </div>
              </div>
            </div>

            <div className={`h-px w-full ${tone.divider}`} />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FinalCtaBand
