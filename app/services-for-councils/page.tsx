import PageHeader from "@/components/About/PageHeader"
import Image from "next/image"
import Link from "next/link"

// ─── Data ─────────────────────────────────────────────────────────────────────

const highlights = [
  {
    index: "01",
    title: "Reliable housing solutions",
    description:
      "Safe, well-managed homes across the South Coast—ensuring residents are placed quickly and appropriately when need arises.",
  },
  {
    index: "02",
    title: "Fast placement process",
    description:
      "Our team acts without delay when housing is required, helping local authorities place residents in suitable accommodation efficiently.",
  },
  {
    index: "03",
    title: "Proactive property management",
    description:
      "Regular inspections and early issue resolution keep homes safe and comfortable, minimising disruption for residents and councils alike.",
  },
  {
    index: "04",
    title: "Resident support",
    description:
      "Alongside housing, we support residents in building independence—reducing long-term reliance on council resources.",
  },
]

const sections = [
  {
    num: "01",
    title: "Dependable housing for local authorities",
    body: [
      "Lucent Leases acts as a ready and trustworthy partner in addressing housing challenges. We offer councils fast access to a wide range of quality homes across the South Coast, helping ensure residents are placed in safe and suitable accommodation when they need it most.",
      "Our dedicated team regularly checks on properties and resolves potential issues early so that small concerns do not become major problems. All homes are maintained to strict standards, minimising disruption for residents and unexpected costs for councils.",
    ],
  },
  {
    num: "02",
    title: "Partnership approach",
    body: [
      "Lucent Leases works hand-in-hand with local authorities to deliver housing solutions that fit both resident needs and council priorities. We build strong collaborative relationships based on open communication, transparency, and trust.",
      "By understanding the challenges faced by each council, we tailor our services to provide practical and effective housing solutions that make a real difference for residents and communities alike.",
    ],
  },
  {
    num: "03",
    title: "Supporting placements",
    body: [
      "We guide councils through every stage of the placement process. From the initial referral through to move-in and ongoing support, our team stays closely involved to ensure the transition into housing is smooth and well managed.",
      "Through proactive communication and regular check-ins, we ensure residents receive the support they need while councils can have confidence that each placement is carefully managed and monitored.",
    ],
  },
]

const steps = [
  {
    title: "Referral",
    description:
      "Councils submit resident referrals so our team can quickly assess housing needs and identify suitable properties.",
  },
  {
    title: "Placement",
    description:
      "We arrange the placement and move-in process, ensuring residents settle safely and comfortably into their new homes.",
  },
  {
    title: "Ongoing management",
    description:
      "Our team manages the property and maintains communication with both residents and councils throughout the tenancy.",
  },
  {
    title: "Support & stability",
    description:
      "Residents receive practical support that helps them build confidence and independence over time.",
  },
]

// ─── Shared primitives ────────────────────────────────────────────────────────

function EyebrowRow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-px w-8 shrink-0 bg-white/40" aria-hidden="true" />
      <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/40">
        {label}
      </span>
    </div>
  )
}

function SectionRule() {
  return (
    <div
      className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/8 to-transparent"
      aria-hidden="true"
    />
  )
}

function GridTexture() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10"
      aria-hidden="true"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
        backgroundSize: "72px 72px",
      }}
    />
  )
}

// ─── HIGHLIGHTS ───────────────────────────────────────────────────────────────

function Highlights() {
  return (
    <section className="relative isolate overflow-hidden bg-[#080808]">
      <SectionRule />
      <GridTexture />

      {/* Watermark */}
      <div
        className="pointer-events-none absolute right-4 top-4 select-none font-(family-name:--font-display) text-[160px] font-light leading-none text-white/[0.022] sm:right-8 sm:text-[200px]"
        aria-hidden="true"
      >
        02
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-20">
        <div className="mb-10">
          <EyebrowRow label="Why Lucent" />
          <h2 className="mt-4 font-(family-name:--font-display) text-[clamp(24px,3.2vw,40px)] font-light text-white">
            What sets our council partnerships apart
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <div
              key={h.index}
              className="group relative rounded-2xl border border-white/8 bg-white/2 p-6 transition-all duration-300 hover:border-white/18 hover:bg-white/4"
            >
              <div className="mb-4 flex h-7 w-7 items-center justify-center rounded-full border border-white/12 bg-black/40">
                <span className="text-[10px] font-light text-white/40">{h.index}</span>
              </div>
              <h3 className="mb-2 text-[13px] font-medium tracking-tight text-white/85 transition-colors group-hover:text-white">
                {h.title}
              </h3>
              <p className="text-[13px] font-light leading-relaxed text-white/40">
                {h.description}
              </p>
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1), 0 0 30px rgba(255,255,255,0.03)" }}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-white/5" aria-hidden="true" />
    </section>
  )
}

// ─── EDITORIAL IMAGE + COPY BAND ──────────────────────────────────────────────

function EditorialBand() {
  return (
    <section className="relative isolate overflow-hidden bg-[#080808]">
      <SectionRule />

      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-20">
        <div className="grid gap-4 md:grid-cols-12 md:gap-5">

          {/* Large image */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/8 md:col-span-7" style={{ aspectRatio: "16/10" }}>
            <Image
              src="/images/lucent-images/13.jpeg"
              alt="Council housing partnership"
              fill
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover opacity-75 transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#080808]/70 via-transparent to-transparent" />
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />

            {/* Badge */}
            <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-3.5 py-1.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-white/60" aria-hidden="true" />
              <span className="text-[11px] font-light tracking-wide text-white/70">South Coast coverage</span>
            </div>
          </div>

          {/* Two stacked images */}
          <div className="flex flex-col gap-4 md:col-span-5">
            {["/images/lucent-images/14.jpeg", "/images/lucent-images/15.jpeg"].map((src, i) => (
              <div
                key={i}
                className="group relative flex-1 overflow-hidden rounded-2xl border border-white/8"
                style={{ minHeight: "160px" }}
              >
                <Image
                  src={src}
                  alt={`Council partnership property ${i + 2}`}
                  fill
                  sizes="(min-width: 768px) 38vw, 100vw"
                  className="object-cover opacity-65 transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#080808]/60 via-transparent to-transparent" />
              </div>
            ))}
          </div>

        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-white/5" aria-hidden="true" />
    </section>
  )
}

// ─── EDITORIAL TEXT SECTIONS ──────────────────────────────────────────────────

function EditorialSections() {
  return (
    <section className="relative isolate overflow-hidden bg-[#080808]">
      <SectionRule />

      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-20">
        <div className="flex flex-col gap-16">
          {sections.map((s) => (
            <div key={s.num} className="grid gap-8 md:grid-cols-12 md:items-start">

              {/* Left — number + title */}
              <div className="relative md:col-span-4">
                <div className="absolute left-0 top-0 hidden h-full w-px md:block" aria-hidden="true">
                  <div className="h-full w-px bg-linear-to-b from-white/20 via-white/8 to-transparent" />
                </div>
                <div className="md:pl-6">
                  <span className="font-(family-name:--font-display) text-[11px] font-light tracking-[0.18em] text-white/25">
                    {s.num}
                  </span>
                  <h2 className="mt-2 font-(family-name:--font-display) text-[clamp(20px,2.5vw,30px)] font-light leading-tight text-white">
                    {s.title}
                  </h2>
                  <div className="mt-4 h-px w-10 bg-linear-to-r from-white/40 to-transparent" aria-hidden="true" />
                </div>
              </div>

              {/* Right — body */}
              <div className="flex flex-col gap-4 md:col-span-8">
                {s.body.map((para, i) => (
                  <p key={i} className="text-[14px] font-light leading-[1.85] text-white/55">
                    {para}
                  </p>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-white/5" aria-hidden="true" />
    </section>
  )
}

// ─── PROCESS ──────────────────────────────────────────────────────────────────

function Process() {
  return (
    <section className="relative isolate overflow-hidden bg-[#080808]">
      <SectionRule />
      <GridTexture />

      {/* Watermark */}
      <div
        className="pointer-events-none absolute right-4 top-4 select-none font-(family-name:--font-display) text-[160px] font-light leading-none text-white/[0.022] sm:right-8 sm:text-[200px]"
        aria-hidden="true"
      >
        05
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:items-start">

          {/* Left */}
          <div className="relative md:col-span-4">
            <div className="absolute left-0 top-0 hidden h-full w-px md:block" aria-hidden="true">
              <div className="h-full w-px bg-linear-to-b from-white/20 via-white/8 to-transparent" />
            </div>
            <div className="md:pl-6">
              <EyebrowRow label="Process" />
              <h2 className="mt-4 font-(family-name:--font-display) text-[clamp(24px,3.2vw,38px)] font-light text-white">
                Our placement process
              </h2>
              <div className="mt-4 h-px w-12 bg-linear-to-r from-white/40 to-transparent" aria-hidden="true" />
            </div>
          </div>

          {/* Right — steps */}
          <div className="md:col-span-8">
            <div className="flex flex-col">
              {steps.map((s, i) => (
                <div key={s.title} className="group relative flex gap-6 pb-8 last:pb-0">
                  {i < steps.length - 1 && (
                    <div
                      className="absolute left-4.75 top-10 h-full w-px bg-linear-to-b from-white/15 to-transparent"
                      aria-hidden="true"
                    />
                  )}

                  <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#080808] transition-colors group-hover:border-white/30">
                    <span className="font-(family-name:--font-display) text-[15px] font-light text-white/50 transition-colors group-hover:text-white/80">
                      {i + 1}
                    </span>
                  </div>

                  <div className="flex-1 pt-1.5">
                    <h3 className="text-[14px] font-medium tracking-tight text-white/80 transition-colors group-hover:text-white">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] font-light leading-relaxed text-white/40">
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-white/5" aria-hidden="true" />
    </section>
  )
}

// ─── FINAL CTA ────────────────────────────────────────────────────────────────

function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-[#080808]">
      <SectionRule />

      {/* Watermark */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 select-none overflow-hidden text-center font-(family-name:--font-display) text-[clamp(60px,14vw,180px)] font-light leading-[0.85] text-white/[0.018]"
        aria-hidden="true"
      >
        Get in touch
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-48"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.05) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-white/35" aria-hidden="true" />
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/35">
              Next steps
            </span>
            <div className="h-px w-8 bg-white/35" aria-hidden="true" />
          </div>

          <h2 className="font-(family-name:--font-display) text-[clamp(28px,4.5vw,54px)] font-light leading-[1.1] tracking-[-0.01em] text-white">
            Work with Lucent Leases
          </h2>

          <div className="mx-auto my-6 h-px w-16 bg-linear-to-r from-transparent via-white/35 to-transparent" aria-hidden="true" />

          <p className="text-[15px] font-light leading-relaxed text-white/50">
            If your council is looking for dependable housing solutions across the South Coast,
            our team is ready to help. Reach out and we&apos;ll discuss how we can support your residents.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-lg bg-white px-8 py-4 text-[13px] font-medium tracking-wide text-[#080808] transition-all hover:bg-white/90 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              Contact our team
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="mailto:hello@lucentleases.co.uk"
              className="inline-flex items-center gap-2.5 rounded-lg border border-white/15 bg-white/5 px-8 py-4 text-[13px] font-light tracking-wide text-white/65 transition-all hover:border-white/30 hover:bg-white/10 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
            >
              Email us directly
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            {["No obligation", "South Coast coverage", "Public-sector processes"].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-[11px] font-light text-white/25">
                <span className="h-1 w-1 rounded-full bg-white/25" aria-hidden="true" />
                {t}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ServicesForCouncilsPage() {
  return (
    <main className="bg-[#080808] text-white">

      {/* 01 — Hero header */}
      <PageHeader
        eyebrow="Partnership"
        title="Services for councils"
        intro="At Lucent Leases, we provide local authorities with dependable housing solutions that are safe, well-managed, and tailored to residents' needs. Every situation is unique, so we act quickly to place individuals in properties that suit them while ensuring they receive the support necessary to feel secure and settled."
        textVariant="light"
        chips={[
          "Local authority partnerships",
          "South Coast coverage",
          "Managed housing",
          "Resident support",
        ]}
      />

      {/* 02 — Highlights grid */}
      <Highlights />

      {/* 03 — Editorial image band */}
      <EditorialBand />

      {/* 04 — Numbered editorial text sections */}
      <EditorialSections />

      {/* 05 — Process steps */}
      <Process />

      {/* 06 — Final CTA */}
      <FinalCta />

    </main>
  )
}