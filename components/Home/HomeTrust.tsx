import React from "react"

type TrustBullet = {
  title: string
}

type HomeTrustProps = {
  eyebrow?: string
  title?: string
  description?: string
  bullets?: TrustBullet[]
}

const DEFAULTS: Required<Pick<HomeTrustProps, "eyebrow" | "title" | "description" | "bullets">> =
  {
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

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
)

const SectionHeader = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) => (
  <div className="max-w-2xl">
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
      {eyebrow}
    </p>
    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
      {title}
    </h2>
    <p className="mt-3 text-base leading-relaxed text-zinc-700">{description}</p>
  </div>
)

const BulletRow = ({ title }: { title: string }) => (
  <div className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-white px-5 py-4 shadow-sm">
    <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-zinc-950" />
    <p className="text-sm leading-relaxed text-zinc-800">{title}</p>
  </div>
)

const HomeTrust = ({
  eyebrow = DEFAULTS.eyebrow,
  title = DEFAULTS.title,
  description = DEFAULTS.description,
  bullets = DEFAULTS.bullets,
}: HomeTrustProps) => {
  return (
    <section className="bg-white">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-12 md:items-start md:py-14">
          {/* Left */}
          <div className="md:col-span-5">
            <SectionHeader eyebrow={eyebrow} title={title} description={description} />
          </div>

          {/* Right */}
          <div className="md:col-span-7">
            <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                What you can expect
              </p>

              <div className="mt-5 grid gap-3">
                {bullets.map((b) => (
                  <BulletRow key={b.title} title={b.title} />
                ))}
              </div>

              {/* Dyson-ish divider rhythm */}
              <div className="mt-8 h-px w-full bg-zinc-200" />

              <p className="mt-6 text-sm leading-relaxed text-zinc-700">
                We keep processes straightforward and standards consistent—so partners
                can move quickly, with clarity.
              </p>
            </div>

            <div className="mt-10 h-px w-full bg-zinc-200" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HomeTrust
