import React from "react"
import Link from "next/link"

type FaqItem = {
  question: string
  answer: React.ReactNode
}

type HomeFaqsProps = {
  eyebrow?: string
  title?: string
  faqs?: FaqItem[]
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
            className="font-medium text-zinc-950 underline underline-offset-4 hover:text-zinc-900"
            href="mailto:hello@lucentleases.co.uk"
          >
            hello@lucentleases.co.uk
          </a>{" "}
          with placement requirements, location preferences, household details, and
          timescales.
        </>
      ),
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

const FaqRow = ({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string
  answer: React.ReactNode
  defaultOpen?: boolean
}) => (
  <details
    className="group rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
    defaultChecked={defaultOpen}
  >
    <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
      <span className="text-sm font-semibold tracking-tight text-zinc-950">
        {question}
      </span>

      {/* Minimal Dyson-ish toggle */}
      <span className="relative inline-flex h-8 w-8 flex-none items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-950">
        <span className="absolute h-px w-3 bg-zinc-950" />
        <span className="absolute h-3 w-px bg-zinc-950 transition-transform group-open:scale-y-0" />
      </span>
    </summary>

    <div className="mt-4 text-sm leading-relaxed text-zinc-700">{answer}</div>
  </details>
)

const HomeFaqs = ({
  eyebrow = DEFAULTS.eyebrow,
  title = DEFAULTS.title,
  faqs = DEFAULTS.faqs,
}: HomeFaqsProps) => {
  return (
    <section className="bg-white">
      <Container>
        <div className="py-12 md:py-14">
          <div className="grid gap-8 md:grid-cols-12 md:items-start">
            {/* Left */}
            <div className="md:col-span-4">
              <SectionHeader eyebrow={eyebrow} title={title} />

              <p className="mt-4 text-sm leading-relaxed text-zinc-700">
                Can’t find what you need?{" "}
                <Link
                  href="/contact"
                  className="font-medium text-zinc-950 underline underline-offset-4 hover:text-zinc-900"
                >
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
                    answer={f.answer}
                    defaultOpen={idx === 0}
                  />
                ))}
              </div>

              {/* Dyson-ish divider rhythm */}
              <div className="mt-10 h-px w-full bg-zinc-200" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HomeFaqs
