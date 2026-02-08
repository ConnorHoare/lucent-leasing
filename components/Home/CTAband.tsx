import React from "react"
import Link from "next/link"

type FinalCtaBandProps = {
  eyebrow?: string
  title?: string
  description?: string
  primaryCta?: { label: string; href: string }
  email?: string
}

const DEFAULTS: Required<
  Pick<FinalCtaBandProps, "eyebrow" | "title" | "description" | "primaryCta" | "email">
> = {
  eyebrow: "Next steps",
  title: "Ready to discuss a placement or partnership?",
  description:
    "Whether you’re a local authority, landlord, or housing partner—Lucent Leasing is here to help.",
  primaryCta: { label: "Contact us", href: "/contact" },
  email: "hello@lucentleases.co.uk",
}

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
)

const PrimaryButton = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/15 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
  >
    {children}
  </Link>
)

const SecondaryLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-medium tracking-wide text-zinc-950 transition-colors hover:border-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/15 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
  >
    {children}
  </a>
)

const FinalCtaBand = ({
  eyebrow = DEFAULTS.eyebrow,
  title = DEFAULTS.title,
  description = DEFAULTS.description,
  primaryCta = DEFAULTS.primaryCta,
  email = DEFAULTS.email,
}: FinalCtaBandProps) => {
  return (
    <section className="bg-white">
      <Container>
        <div className="py-12 md:py-14">
          <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50">
            {/* subtle Dyson-like sheen */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-24 left-1/2 h-56 w-[120%] -translate-x-1/2 rounded-full bg-linear-to-r from-transparent via-zinc-200/60 to-transparent blur-3xl" />
              <div className="absolute inset-0 opacity-[0.18] bg-[radial-gradient(#0a0a0a_1px,transparent_1px)] bg-size-[18px_18px]" />
            </div>

            <div className="relative grid gap-8 p-7 sm:p-10 md:grid-cols-12 md:items-center">
              {/* Copy */}
              <div className="md:col-span-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  {eyebrow}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
                  {title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-zinc-700">
                  {description}
                </p>
              </div>

              {/* Actions */}
              <div className="md:col-span-4 md:flex md:justify-end">
                <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-stretch md:gap-3">
                  <PrimaryButton href={primaryCta.href}>{primaryCta.label}</PrimaryButton>
                  <SecondaryLink href={`mailto:${email}`}>Email {email}</SecondaryLink>
                </div>
              </div>
            </div>

            {/* bottom divider */}
            <div className="h-px w-full bg-zinc-200" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FinalCtaBand
