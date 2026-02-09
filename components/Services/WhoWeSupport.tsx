export type WhoWeSupportProps = {
  eyebrow?: string
  title?: string
  items?: { title: string; description: string }[]
  textVariant?: "dark" | "light"
  background?: { colorClassName?: string; colorValue?: string }
}

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
)

export const WhoWeSupport = ({
  eyebrow = "Who this is for",
  title = "Who we support",
  items = [
    { title: "Local authorities", description: "Dependable accommodation supply and placement coordination." },
    { title: "Landlords", description: "A professional leasing partner with clear processes." },
    { title: "Housing partners", description: "Collaborative delivery that supports pathways." },
  ],
  textVariant = "light",
  background = { colorValue: "#000000" },
}: WhoWeSupportProps) => {
  const isLight = textVariant === "light"
  const hasColour = Boolean(background.colorClassName || background.colorValue)

  return (
    <section
      className={[
        "relative isolate overflow-hidden",
        !hasColour ? "bg-white" : "",
        background.colorClassName ? background.colorClassName : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={background.colorValue ? { backgroundColor: background.colorValue } : undefined}
    >
      {isLight ? (
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-full bg-linear-to-r from-transparent via-white/12 to-transparent blur-3xl" />
          <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[18px_18px]" />
        </div>
      ) : null}

      <Container>
        <div className="py-12 md:py-14">
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            <div className="md:col-span-4">
              <p className={isLight ? "text-xs font-semibold uppercase tracking-[0.18em] text-white/60" : "text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500"}>
                {eyebrow}
              </p>
              <h2 className={isLight ? "mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl" : "mt-3 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl"}>
                {title}
              </h2>
            </div>

            <div className="md:col-span-8">
              <div className="grid gap-4 sm:grid-cols-3">
                {items.map((it, idx) => (
                  <div
                    key={it.title}
                    className={[
                      "relative overflow-hidden rounded-3xl border p-6 shadow-sm",
                      isLight ? "border-white/10 bg-white/5" : "border-zinc-200 bg-white",
                    ].join(" ")}
                  >
                    <div className="flex items-center justify-between">
                      <p className={isLight ? "text-sm font-semibold tracking-tight text-white" : "text-sm font-semibold tracking-tight text-zinc-950"}>
                        {it.title}
                      </p>
                      <span className={isLight ? "text-xs font-semibold tracking-[0.18em] text-white/55" : "text-xs font-semibold tracking-[0.18em] text-zinc-500"}>
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className={isLight ? "mt-3 text-sm leading-relaxed text-white/75" : "mt-3 text-sm leading-relaxed text-zinc-700"}>
                      {it.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className={isLight ? "mt-10 h-px w-full bg-white/12" : "mt-10 h-px w-full bg-zinc-200"} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}