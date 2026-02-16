import React from "react"

type AboutEditorialSectionProps = {
  id: string
  eyebrow: string
  title: string
  paragraphs: string[]
  textVariant?: "dark" | "light"
  background?: {
    colorClassName?: string
    colorValue?: string
  }
  /** optional smaller note under the cards */
  footnote?: string
}

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
)

const CopyCard = ({
  body,
  light,
}: {
  body: string
  light: boolean
}) => (
  <div
    className={[
      "rounded-3xl border p-7 shadow-sm",
      light ? "border-white/10 bg-white/5" : "border-zinc-200 bg-white",
    ].join(" ")}
  >
    <p className={light ? "text-sm leading-relaxed text-white/75" : "text-sm leading-relaxed text-zinc-700"}>
      {body}
    </p>
  </div>
)

const AboutEditorialSection = ({
  id,
  eyebrow,
  title,
  paragraphs,
  textVariant = "dark",
  background = {},
  footnote,
}: AboutEditorialSectionProps) => {
  const isLight = textVariant === "light"
  const hasColour = Boolean(background.colorClassName || background.colorValue)

  return (
    <section
      id={id}
      className={[
        "relative isolate overflow-hidden scroll-mt-24",
        !hasColour ? "bg-white" : "",
        background.colorClassName ? background.colorClassName : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={background.colorValue ? { backgroundColor: background.colorValue } : undefined}
    >
      {/* Texture for dark sections */}
      {isLight ? (
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-full bg-linear-to-r from-transparent via-white/12 to-transparent blur-3xl" />
          <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[18px_18px]" />
          <div className="absolute left-0 right-0 top-0 h-px bg-white/12" />
        </div>
      ) : null}

      <Container>
        <div className="py-12 md:py-14">
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            {/* Left header */}
            <div className="md:col-span-4">
              <p
                className={[
                  "text-xs font-semibold uppercase tracking-[0.18em]",
                  isLight ? "text-white/60" : "text-zinc-500",
                ].join(" ")}
              >
                {eyebrow}
              </p>
              <h2
                className={[
                  "mt-3 text-2xl font-semibold tracking-tight sm:text-3xl",
                  isLight ? "text-white" : "text-zinc-950",
                ].join(" ")}
              >
                {title}
              </h2>
            </div>

            {/* Right content */}
            <div className="md:col-span-8">
              <div className="grid gap-4">
                {paragraphs.map((p, idx) => (
                  <CopyCard key={idx} body={p} light={isLight} />
                ))}
              </div>

              {footnote ? (
                <p className={isLight ? "mt-6 text-xs text-white/55" : "mt-6 text-xs text-zinc-500"}>
                  {footnote}
                </p>
              ) : null}

              <div className={isLight ? "mt-10 h-px w-full bg-white/12" : "mt-10 h-px w-full bg-zinc-200"} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutEditorialSection
