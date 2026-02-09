import React from "react"
import Image from "next/image"
import Link from "next/link"

/**
 * Service Page Template (LIGHT theme)
 * Copy this file for other services and only change CONFIG.
 */

type Cta = { label: string; href: string }
type FAQ = { q: string; a: string }

type ServiceConfig = {
  slug: string
  eyebrow: string
  title: string
  intro: string
  heroImage?: { src: string; alt: string }

  primaryCta: Cta
  secondaryCta: Cta

  highlights: { title: string; description: string }[]
  sections: { title: string; body: string }[]
  steps: { title: string; description: string }[]
  faqs: FAQ[]
}

const CONFIG: ServiceConfig = {
  slug: "temporary-accommodation",
  eyebrow: "Service",
  title: "Temporary accommodation",
  intro:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  heroImage: { src: "/images/services/temporary.jpg", alt: "Temporary accommodation" },

  primaryCta: { label: "Make an enquiry", href: "/contact" },
  secondaryCta: { label: "Email hello@lucentleases.co.uk", href: "mailto:hello@lucentleases.co.uk" },

  highlights: [
    { title: "Placement-ready options", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Clear coordination", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Consistent standards", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Responsive communication", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  ],

  sections: [
    {
      title: "Overview",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      title: "What’s included",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
    },
    {
      title: "Standards and suitability",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    },
  ],

  steps: [
    { title: "Enquire / refer", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Match", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Place", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Manage", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  ],

  faqs: [
    {
      q: "Do you support urgent placements?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      q: "What information do you need to assess availability?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      q: "Can you support individuals and families?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    },
  ],
}

/* ------------------------------------------------------------------------------------- */

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
)

const Divider = () => <div className="h-px w-full bg-zinc-200" />

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium tracking-wide text-zinc-700">
    {children}
  </span>
)

const PrimaryButton = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/15 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
  >
    {children}
  </Link>
)

const SecondaryButton = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-medium tracking-wide text-zinc-950 transition-colors hover:border-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/15 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
  >
    {children}
  </a>
)

const MediaCard = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
    <div className="relative aspect-16/10 w-full">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/15 via-transparent to-transparent" />
    </div>

    <div className="flex flex-col gap-2 border-t border-zinc-200 bg-white/70 px-6 py-5 backdrop-blur">
      <div className="flex items-center gap-2 text-sm text-zinc-700">
        <span className="inline-flex h-2 w-2 rounded-full bg-zinc-950" />
        <span className="font-medium">Typical response</span>
        <span className="text-zinc-500">within 1 working day</span>
      </div>
      <div className="text-xs font-medium tracking-wide text-zinc-600">
        Standards • Coordination • Communication
      </div>
    </div>
  </div>
)

const FeatureCard = ({ title, description }: { title: string; description: string }) => (
  <div className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-0.5">
    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
      <div className="absolute -top-24 left-1/2 h-48 w-[120%] -translate-x-1/2 rounded-full bg-linear-to-r from-transparent via-zinc-100 to-transparent blur-2xl" />
    </div>
    <div className="relative">
      <p className="text-sm font-semibold tracking-tight text-zinc-950">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-zinc-700">{description}</p>
    </div>
  </div>
)

const StepRow = ({
  index,
  title,
  description,
}: {
  index: number
  title: string
  description: string
}) => (
  <div className="flex items-start gap-4 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 text-xs font-semibold tracking-[0.18em] text-zinc-600">
      {String(index).padStart(2, "0")}
    </div>
    <div>
      <p className="text-sm font-semibold tracking-tight text-zinc-950">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-zinc-700">{description}</p>
    </div>
  </div>
)

const FaqItem = ({ q, a }: FAQ) => (
  <details className="group rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
    <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
      <span className="text-sm font-semibold text-zinc-950">{q}</span>
      <span className="text-zinc-500" aria-hidden="true">
        +
      </span>
    </summary>
    <p className="mt-3 text-sm leading-relaxed text-zinc-700">{a}</p>
  </details>
)

/* ------------------------------------------------------------------------------------- */

const page = () => {
  const c = CONFIG

  return (
    <div className="bg-white text-zinc-950">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-white">
        {/* subtle Dyson texture */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-full bg-linear-to-r from-transparent via-zinc-200/60 to-transparent blur-3xl" />
          <div className="absolute inset-0 opacity-[0.16] bg-[radial-gradient(#0a0a0a_1px,transparent_1px)] bg-size-[18px_18px]" />
          <div className="absolute left-0 right-0 top-0 h-px bg-zinc-200" />
        </div>

        <Container>
          <div className="grid gap-10 py-14 md:grid-cols-12 md:items-start md:py-18">
            <div className="md:col-span-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                {c.eyebrow}
              </p>
              <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                {c.title}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-zinc-700">{c.intro}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                <Pill>Placement-ready</Pill>
                <Pill>Public-sector friendly</Pill>
                <Pill>Property-first standards</Pill>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href={c.primaryCta.href}>{c.primaryCta.label}</PrimaryButton>
                <SecondaryButton href={c.secondaryCta.href}>{c.secondaryCta.label}</SecondaryButton>
              </div>
            </div>

            <div className="md:col-span-6">
              {c.heroImage?.src ? <MediaCard src={c.heroImage.src} alt={c.heroImage.alt} /> : null}
            </div>
          </div>

          <Divider />
        </Container>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-zinc-50">
        <Container>
          <div className="py-12 md:py-14">
            <div className="grid gap-6 md:grid-cols-12 md:items-end">
              <div className="md:col-span-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  Highlights
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Lorem ipsum dolor sit amet.
                </h2>
              </div>
              <div className="md:col-span-7">
                <p className="text-sm leading-relaxed text-zinc-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {c.highlights.map((h) => (
                <FeatureCard key={h.title} title={h.title} description={h.description} />
              ))}
            </div>

            <div className="mt-10 h-px w-full bg-zinc-200" />
          </div>
        </Container>
      </section>

      {/* DETAILS */}
      <section className="bg-white">
        <Container>
          <div className="py-12 md:py-14">
            <div className="grid gap-10 md:grid-cols-12 md:items-start">
              <div className="md:col-span-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  Details
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  What to expect
                </h2>
              </div>

              <div className="md:col-span-8">
                <div className="grid gap-4">
                  {c.sections.map((s) => (
                    <div key={s.title} className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
                      <p className="text-sm font-semibold tracking-tight text-zinc-950">{s.title}</p>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-700">{s.body}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 h-px w-full bg-zinc-200" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-zinc-50">
        <Container>
          <div className="py-12 md:py-14">
            <div className="grid gap-10 md:grid-cols-12 md:items-start">
              <div className="md:col-span-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  Process
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  How it works
                </h2>
              </div>

              <div className="md:col-span-8">
                <div className="grid gap-4">
                  {c.steps.map((s, i) => (
                    <StepRow
                      key={s.title}
                      index={i + 1}
                      title={s.title}
                      description={s.description}
                    />
                  ))}
                </div>

                <div className="mt-10 h-px w-full bg-zinc-200" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <Container>
          <div className="py-12 md:py-14">
            <div className="grid gap-10 md:grid-cols-12 md:items-start">
              <div className="md:col-span-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  FAQs
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Questions, answered
                </h2>
              </div>

              <div className="md:col-span-8">
                <div className="grid gap-3">
                  {c.faqs.map((f) => (
                    <FaqItem key={f.q} q={f.q} a={f.a} />
                  ))}
                </div>

                <div className="mt-10 h-px w-full bg-zinc-200" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="bg-zinc-50">
        <Container>
          <div className="py-12 md:py-14">
            <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm sm:p-10">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 left-1/2 h-56 w-[120%] -translate-x-1/2 rounded-full bg-linear-to-r from-transparent via-zinc-100 to-transparent blur-3xl" />
              </div>

              <div className="relative grid gap-6 md:grid-cols-12 md:items-center">
                <div className="md:col-span-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                    Next steps
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                    Lorem ipsum dolor sit amet?
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-zinc-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>

                <div className="md:col-span-4 md:flex md:justify-end">
                  <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-stretch">
                    <PrimaryButton href={c.primaryCta.href}>{c.primaryCta.label}</PrimaryButton>
                    <SecondaryButton href={c.secondaryCta.href}>Email hello@lucentleases.co.uk</SecondaryButton>
                  </div>
                </div>
              </div>

              <div className="mt-8 h-px w-full bg-zinc-200" />
              <p className="mt-5 text-xs text-zinc-600">
                Public-sector friendly processes • Responsive communication • Property-first standards
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default page
