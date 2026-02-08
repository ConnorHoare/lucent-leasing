import React from "react"

type HowStep = {
  title: string
  description: string
}

type HomeHowItWorksProps = {
  eyebrow?: string
  title?: string
  steps?: HowStep[]
}

const DEFAULTS: Required<Pick<HomeHowItWorksProps, "eyebrow" | "title" | "steps">> = {
  eyebrow: "Process",
  title: "How it works",
  steps: [
    {
      title: "Enquire / refer",
      description: "Share requirements, location, household size, and timescales.",
    },
    {
      title: "Match",
      description: "We identify suitable accommodation options and confirm availability.",
    },
    {
      title: "Place",
      description: "We coordinate move-in details and practical arrangements.",
    },
    {
      title: "Manage",
      description: "We oversee standards, communication, and ongoing property management.",
    },
  ],
}

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
)

const SectionHeader = ({ eyebrow, title }: { eyebrow: string; title: string }) => (
  <div className="max-w-2xl">
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
      {eyebrow}
    </p>
    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
      {title}
    </h2>
  </div>
)

const StepCard = ({ index, step }: { index: number; step: HowStep }) => (
  <div className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-0.5">
    {/* Dyson-ish highlight */}
    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
      <div className="absolute -top-20 left-1/2 h-40 w-[120%] -translate-x-1/2 rounded-full bg-linear-to-r from-transparent via-zinc-100 to-transparent blur-2xl" />
    </div>

    <div className="relative">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-semibold tracking-tight text-zinc-950">
          {step.title}
        </p>

        {/* Minimal step indicator */}
        <div className="inline-flex items-center gap-2">
          <span className="h-px w-8 bg-zinc-200" aria-hidden="true" />
          <span className="text-xs font-semibold tracking-[0.18em] text-zinc-500">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-zinc-700">
        {step.description}
      </p>
    </div>
  </div>
)

const HomeHowItWorks = ({
  eyebrow = DEFAULTS.eyebrow,
  title = DEFAULTS.title,
  steps = DEFAULTS.steps,
}: HomeHowItWorksProps) => {
  return (
    <section className="bg-white">
      <Container>
        <div className="py-12 md:py-14">
          <div className="flex flex-col gap-8">
            <SectionHeader eyebrow={eyebrow} title={title} />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, idx) => (
                <StepCard key={step.title} index={idx} step={step} />
              ))}
            </div>

            {/* Dyson-like divider rhythm */}
            <div className="mt-2 h-px w-full bg-zinc-200" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HomeHowItWorks
