import React from "react"
import Image from "next/image"

type TrustBullet = {
  title: string
}

type HomeTrustProps = {
  eyebrow?: string
  title?: string
  description?: string
  bullets?: TrustBullet[]

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
}

const DEFAULTS: Required<Pick<HomeTrustProps, "eyebrow" | "title" | "description" | "bullets">> = {
  eyebrow: "Trust",
  title: "Built for public-sector partnership",
  description:
    "We’re committed to clear communication, consistent accommodation standards, and practical delivery. Our approach is designed to support local authorities and partners with reliable, placement-ready options.",
  bullets: [
    { title: "Clear onboarding and placement process" },
    { title: "Property oversight and maintenance coordination" },
    { title: "Respectful, professional approach with service users" },
  ],
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
  description: string
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
      <p className={isLight ? "mt-3 text-base leading-relaxed text-white/75" : "mt-3 text-base leading-relaxed text-zinc-700"}>
        {description}
      </p>
    </div>
  )
}

const BulletRow = ({ title, textVariant }: { title: string; textVariant: "dark" | "light" }) => {
  const isLight = textVariant === "light"
  return (
    <div
      className={[
        "flex items-start gap-3 rounded-2xl border px-5 py-4 shadow-sm",
        isLight ? "border-white/10 bg-white/5" : "border-zinc-200 bg-white",
      ].join(" ")}
    >
      <span className={isLight ? "mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-white/80" : "mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-zinc-950"} />
      <p className={isLight ? "text-sm leading-relaxed text-white/80" : "text-sm leading-relaxed text-zinc-800"}>{title}</p>
    </div>
  )
}

const HomeTrust = ({
  eyebrow = DEFAULTS.eyebrow,
  title = DEFAULTS.title,
  description = DEFAULTS.description,
  bullets = DEFAULTS.bullets,
  textVariant = "dark",
  background = {},
}: HomeTrustProps) => {
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
          <div className="md:col-span-5">
            <SectionHeader eyebrow={eyebrow} title={title} description={description} textVariant={textVariant} />
          </div>

          {/* Right */}
          <div className="md:col-span-7">
            <div
              className={[
                "rounded-3xl border p-6 sm:p-7",
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
                What you can expect
              </p>

              <div className="mt-5 grid gap-3">
                {bullets.map((b) => (
                  <BulletRow key={b.title} title={b.title} textVariant={textVariant} />
                ))}
              </div>

              {/* Divider */}
              <div className={`mt-8 h-px w-full ${dividerClass}`} />

              <p className={isLight ? "mt-6 text-sm leading-relaxed text-white/75" : "mt-6 text-sm leading-relaxed text-zinc-700"}>
                We keep processes straightforward and standards consistent—so partners can move quickly, with clarity.
              </p>
            </div>

            <div className={`mt-10 h-px w-full ${dividerClass}`} />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HomeTrust
