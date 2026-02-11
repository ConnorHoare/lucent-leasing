import React from "react"
import Link from "next/link"
import Image from "next/image"

type FaqItem = {
  question: string
  answer: React.ReactNode
}

type HomeFaqsProps = {
  eyebrow?: string
  title?: string
  faqs?: FaqItem[]

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

const DEFAULTS: Required<Pick<HomeFaqsProps, "eyebrow" | "title" | "faqs">> = {
  eyebrow: "FAQs",
  title: "Frequently asked questions",
  faqs: [
    {
      question: "What type of accommodation do you provide?",
      answer:
        "We provide temporary, supported (where applicable with partners), and self-contained accommodation depending on placement needs and availability.",
    },
    {
      question: "Who do you work with?",
      answer:
        "We work with local authorities, landlords, and housing partners to deliver accommodation solutions across our operating areas.",
    },
    {
      question: "Are landlords able to lease properties to you?",
      answer:
        "Yes. If you have a suitable property, we can discuss leasing options and how we manage the property day-to-day.",
    },
    {
      question: "How do we make a referral or enquiry?",
      answer: (
        <>
          Use the contact form or email{" "}
          <a
            className="font-medium underline underline-offset-4"
            href="mailto:hello@lucentleases.co.uk"
          >
            hello@lucentleases.co.uk
          </a>{" "}
          with placement requirements, location preferences, household details, and timescales.
        </>
      ),
    },
  ],
}

const clamp01 = (n: number) => Math.min(1, Math.max(0, n))

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
)

const SectionHeader = ({
  eyebrow,
  title,
  textVariant,
}: {
  eyebrow: string
  title: string
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
    </div>
  )
}

const FaqRow = ({
  question,
  answer,
  textVariant,
}: {
  question: string
  answer: React.ReactNode
  defaultOpen?: boolean
  textVariant: "dark" | "light"
}) => {
  const isLight = textVariant === "light"

  return (
    <details
      className={[
        "group rounded-3xl border p-6 shadow-sm",
        isLight ? "border-white/10 bg-white/5" : "border-zinc-200 bg-white",
      ].join(" ")}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
        <span className={isLight ? "text-sm font-semibold tracking-tight text-white" : "text-sm font-semibold tracking-tight text-zinc-950"}>
          {question}
        </span>

        {/* Minimal Dyson-ish toggle */}
        <span
          className={[
            "relative inline-flex h-8 w-8 flex-none items-center justify-center rounded-full border",
            isLight ? "border-white/15 bg-white/5 text-white" : "border-zinc-200 bg-white text-zinc-950",
          ].join(" ")}
        >
          <span className={isLight ? "absolute h-px w-3 bg-white" : "absolute h-px w-3 bg-zinc-950"} />
          <span
            className={[
              "absolute h-3 w-px transition-transform group-open:scale-y-0",
              isLight ? "bg-white" : "bg-zinc-950",
            ].join(" ")}
          />
        </span>
      </summary>

      <div className={isLight ? "mt-4 text-sm leading-relaxed text-white/75" : "mt-4 text-sm leading-relaxed text-zinc-700"}>
        {answer}
      </div>
    </details>
  )
}

const HomeFaqs = ({
  eyebrow = DEFAULTS.eyebrow,
  title = DEFAULTS.title,
  faqs = DEFAULTS.faqs,
  textVariant = "dark",
  background = {},
}: HomeFaqsProps) => {
  const isLight = textVariant === "light"
  const overlay = clamp01((background.overlayStrength ?? 0) / 100)

  const hasImage = Boolean(background.src)
  const hasColour = Boolean(background.colorClassName || background.colorValue)

  const dividerClass = isLight ? "bg-white/12" : "bg-zinc-200"
  const helperText = isLight ? "text-white/75" : "text-zinc-700"
  const helperLink = isLight ? "text-white underline underline-offset-4 hover:text-white/85" : "text-zinc-950 underline underline-offset-4 hover:text-zinc-900"

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
        <div className="py-12 md:py-14">
          <div className="grid gap-8 md:grid-cols-12 md:items-start">
            {/* Left */}
            <div className="md:col-span-4">
              <SectionHeader eyebrow={eyebrow} title={title} textVariant={textVariant} />

              <p className={`mt-4 text-sm leading-relaxed ${helperText}`}>
                Can’t find what you need?{" "}
                <Link href="/contact" className={helperLink}>
                  Make an enquiry
                </Link>
                .
              </p>
            </div>

            {/* Right */}
            <div className="md:col-span-8">
              <div className="grid gap-3">
                {faqs.map((f, idx) => (
                  <FaqRow
                    key={f.question}
                    question={f.question}
                    answer={
                      // If the answer is JSX with hardcoded dark classes, you can swap them here.
                      typeof f.answer === "string" ? (
                        f.answer
                      ) : (
                        <span
                          className={
                            isLight
                              ? "[&_a]:text-white [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-white/85"
                              : "[&_a]:text-zinc-950 [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-zinc-900"
                          }
                        >
                          {f.answer}
                        </span>
                      )
                    }
                    defaultOpen={idx === 0}
                    textVariant={textVariant}
                  />
                ))}
              </div>

              {/* Divider rhythm */}
              <div className={`mt-10 h-px w-full ${dividerClass}`} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HomeFaqs
