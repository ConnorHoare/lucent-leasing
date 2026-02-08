import React from "react"
import Image from "next/image"

type WhatWeDoProps = {
  eyebrow?: string
  title?: string
  description?: string

  textVariant?: "dark" | "light"

  background?: {
    src?: string
    alt?: string
    objectClassName?: string
    overlayStrength?: number

    colorClassName?: string // e.g. "bg-black"
    colorValue?: string // e.g. "#000"
  }
}

const DEFAULTS: Required<Pick<WhatWeDoProps, "eyebrow" | "title" | "description">> = {
  eyebrow: "What we do",
  title: "What we do",
  description:
    "Lucent Leasing provides accommodation solutions in partnership with local authorities and housing partners. We source and manage properties, coordinate placements, and maintain high standards—helping create stable outcomes while reducing pressure on public services.",
}

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
)

const clamp01 = (n: number) => Math.min(1, Math.max(0, n))

const HomeWhatWeDo = ({
  eyebrow = DEFAULTS.eyebrow,
  title = DEFAULTS.title,
  description = DEFAULTS.description,
  textVariant = "dark",
  background = {},
}: WhatWeDoProps) => {
  const overlay = clamp01((background.overlayStrength ?? 0) / 100)

  const hasImage = Boolean(background.src)
  const hasColour = Boolean(background.colorClassName || background.colorValue)

  const text =
    textVariant === "light"
      ? {
          eyebrow: "text-white/70",
          title: "text-white",
          body: "text-white/80",
          divider: "bg-white/20",
        }
      : {
          eyebrow: "text-zinc-500",
          title: "text-zinc-950",
          body: "text-zinc-700",
          divider: "bg-zinc-200",
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
            alt={background.alt || "Lucent Leasing"}
            fill
            sizes="100vw"
            className={["object-cover", background.objectClassName].filter(Boolean).join(" ")}
            priority
          />

          {/* If you use a background image, apply a contrast overlay.
              For light text, increase overlayStrength (e.g. 50–70). */}
          {overlay > 0 ? (
            <div
              className="absolute inset-0"
              style={{ backgroundColor: `rgba(0,0,0,${overlay})` }}
            />
          ) : (
            <div className="absolute inset-0 bg-white/70" />
          )}
        </div>
      ) : null}

      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-12 md:items-start md:py-14">
          {/* Left */}
          <div className="md:col-span-4">
            <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${text.eyebrow}`}>
              {eyebrow}
            </p>
            <h2 className={`mt-3 text-2xl font-semibold tracking-tight sm:text-3xl ${text.title}`}>
              {title}
            </h2>
          </div>

          {/* Right */}
          <div className="md:col-span-8">
            <p className={`max-w-3xl text-pretty text-base leading-relaxed ${text.body}`}>
              {description}
            </p>

            <div className={`mt-8 h-px w-full ${text.divider}`} />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HomeWhatWeDo
