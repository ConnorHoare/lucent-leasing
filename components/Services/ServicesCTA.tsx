
import Link from "next/link";

export type ServicesCtaProps = {
  title?: string
  description?: string
  primaryCta?: { label: string; href: string }
  email?: string
  textVariant?: "dark" | "light"
  background?: { colorClassName?: string; colorValue?: string }
}

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
)

export const ServicesCta = ({
  title = "Let’s discuss your requirements",
  description = "Share area, household size, timescales, and any key considerations. We’ll confirm options and next steps.",
  primaryCta = { label: "Make an enquiry", href: "/contact" },
  email = "hello@lucentleases.co.uk",
  textVariant = "light",
  background = { colorValue: "#000000" },
}: ServicesCtaProps) => {
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
          <div className={isLight ? "rounded-3xl border border-white/12 bg-white/5 p-7 shadow-sm sm:p-10" : "rounded-3xl border border-zinc-200 bg-zinc-50 p-7 shadow-sm sm:p-10"}>
            <div className="grid gap-6 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <h2 className={isLight ? "text-2xl font-semibold tracking-tight text-white sm:text-3xl" : "text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl"}>
                  {title}
                </h2>
                <p className={isLight ? "mt-3 text-base leading-relaxed text-white/75" : "mt-3 text-base leading-relaxed text-zinc-700"}>
                  {description}
                </p>
              </div>

              <div className="md:col-span-4 md:flex md:justify-end">
                <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-stretch">
                  <Link
                    href={primaryCta.href}
                    className={isLight ? "inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium tracking-wide text-zinc-950 hover:bg-white/90" : "inline-flex items-center justify-center rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium tracking-wide text-white hover:bg-zinc-900"}
                  >
                    {primaryCta.label}
                  </Link>
                  <a
                    href={`mailto:${email}`}
                    className={isLight ? "inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium tracking-wide text-white hover:border-white/30" : "inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-medium tracking-wide text-zinc-950 hover:border-zinc-400"}
                  >
                    Email {email}
                  </a>
                </div>
              </div>
            </div>

            <div className={isLight ? "mt-8 h-px w-full bg-white/12" : "mt-8 h-px w-full bg-zinc-200"} />
            <p className={isLight ? "mt-5 text-xs text-white/55" : "mt-5 text-xs text-zinc-600"}>
              Public-sector friendly processes • Responsive communication • Property-first standards
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}