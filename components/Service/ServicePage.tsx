import Image from "next/image"
import Link from "next/link"
import type { ServiceConfig, TextVariant } from "./types"

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
  return <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/8 to-transparent" aria-hidden="true" />
}

function BottomRule() {
  return <div className="absolute inset-x-0 bottom-0 h-px bg-white/5" aria-hidden="true" />
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

function Watermark({ label }: { label: string }) {
  return (
    <div
      className="pointer-events-none absolute right-6 top-4 select-none font-(family-name:--font-display) text-[160px] font-light leading-none text-white/[0.022] sm:right-10 sm:text-[200px]"
      aria-hidden="true"
    >
      {label}
    </div>
  )
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

function Hero({ c }: { c: ServiceConfig }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#080808]">
      <GridTexture />
      {/* Top glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.05) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      {/* Large watermark title */}
      <div
        className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 select-none font-(family-name:--font-display) text-[200px] font-light leading-none text-white/[0.018] sm:text-[280px]"
        aria-hidden="true"
      >
        01
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">

          {/* Left — copy */}
          <div className="md:col-span-6">
            <EyebrowRow label={c.eyebrow ?? "Service"} />

            <h1 className="mt-5 font-(family-name:--font-display) text-[clamp(36px,5.5vw,64px)] font-light leading-[1.06] tracking-[-0.01em] text-white">
              {c.title}
            </h1>

            <div className="my-5 h-px w-16 bg-linear-to-r from-white/40 to-transparent" aria-hidden="true" />

            <p className="text-[15px] font-light leading-[1.8] text-white/55">
              {c.intro}
            </p>

            {/* Chips */}
            {c.chips?.length ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {c.chips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3.5 py-1.5 text-[11px] font-light uppercase tracking-widest text-white/45"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            ) : null}

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={c.primaryCta.href}
                className="inline-flex items-center gap-2.5 rounded-lg bg-white px-6 py-3.5 text-[13px] font-medium tracking-wide text-[#080808] transition-all hover:bg-white/90 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                {c.primaryCta.label}
                <ArrowRight />
              </Link>
              <Link
                href={c.secondaryCta.href}
                className="inline-flex items-center gap-2.5 rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 text-[13px] font-light tracking-wide text-white/65 transition-all hover:border-white/35 hover:bg-white/10 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
              >
                {c.secondaryCta.label}
              </Link>
            </div>
          </div>

          {/* Right — hero image */}
          {c.heroImage?.src ? (
            <div className="md:col-span-6">
              <div className="group relative overflow-hidden rounded-2xl border border-white/10" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={c.heroImage.src}
                  alt={c.heroImage.alt}
                  fill
                  priority
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#080808]/60 via-transparent to-transparent" />
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />
              </div>
            </div>
          ) : null}

        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-white/8" aria-hidden="true" />
    </section>
  )
}

// ─── HIGHLIGHTS ───────────────────────────────────────────────────────────────

function Highlights({ c }: { c: ServiceConfig }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#080808]">
      <SectionRule />
      <GridTexture />
      <Watermark label="02" />

      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-20">
        <div className="mb-10">
          <EyebrowRow label="Highlights" />
          <h2 className="mt-4 font-(family-name:--font-display) text-[clamp(24px,3.2vw,38px)] font-light text-white">
            What makes this service different
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {c.highlights.map((h, i) => (
            <div
              key={h.title}
              className="group relative rounded-2xl border border-white/8 bg-white/2 p-6 transition-all duration-300 hover:border-white/18 hover:bg-white/4"
            >
              {/* Index */}
              <div className="mb-4 flex h-7 w-7 items-center justify-center rounded-full border border-white/12 bg-black/40">
                <span className="text-[10px] font-light text-white/40">{String(i + 1).padStart(2, "0")}</span>
              </div>

              <h3 className="mb-2 text-[13px] font-medium tracking-tight text-white/85 transition-colors group-hover:text-white">
                {h.title}
              </h3>
              <p className="text-[13px] font-light leading-relaxed text-white/40">
                {h.description}
              </p>

              {/* Hover glow */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1), 0 0 30px rgba(255,255,255,0.03)" }}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>

      <BottomRule />
    </section>
  )
}

// ─── DETAILS ──────────────────────────────────────────────────────────────────

function Details({ c }: { c: ServiceConfig }) {
  // Split body text on \n bullet lines for nicer rendering
  const renderBody = (body: string) => {
    const lines = body.split("\n")
    if (lines.length <= 1) return <p className="text-[14px] font-light leading-[1.85] text-white/55">{body}</p>
    return (
      <div className="flex flex-col gap-2">
        {lines.map((line, i) => {
          const isBullet = line.startsWith("•")
          if (isBullet) {
            return (
              <div key={i} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/30" aria-hidden="true" />
                <p className="text-[14px] font-light leading-relaxed text-white/55">{line.replace("• ", "")}</p>
              </div>
            )
          }
          return <p key={i} className="text-[14px] font-light leading-[1.85] text-white/55">{line}</p>
        })}
      </div>
    )
  }

  return (
    <section className="relative isolate overflow-hidden bg-[#080808]">
      <SectionRule />
      <Watermark label="03" />

      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:items-start">

          {/* Left */}
          <div className="relative md:col-span-4">
            <div className="absolute left-0 top-0 hidden h-full w-px md:block" aria-hidden="true">
              <div className="h-full w-px bg-linear-to-b from-white/20 via-white/8 to-transparent" />
            </div>
            <div className="md:pl-6">
              <EyebrowRow label="Details" />
              <h2 className="mt-4 font-(family-name:--font-display) text-[clamp(24px,3.2vw,38px)] font-light text-white">
                What to expect
              </h2>
              <div className="mt-4 h-px w-12 bg-linear-to-r from-white/40 to-transparent" aria-hidden="true" />
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4 md:col-span-8">
            {c.sections.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-white/8 bg-white/2 p-6 transition-colors hover:border-white/15"
              >
                <h3 className="mb-3 text-[13px] font-medium uppercase tracking-widest text-white/50">
                  {s.title}
                </h3>
                {renderBody(s.body)}
              </div>
            ))}
          </div>

        </div>
      </div>

      <BottomRule />
    </section>
  )
}

// ─── HOW IT WORKS ─────────────────────────────────────────────────────────────

function HowItWorks({ c }: { c: ServiceConfig }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#080808]">
      <SectionRule />
      <GridTexture />
      <Watermark label="04" />

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
                How it works
              </h2>
              <div className="mt-4 h-px w-12 bg-linear-to-r from-white/40 to-transparent" aria-hidden="true" />
            </div>
          </div>

          {/* Right — step rows */}
          <div className="md:col-span-8">
            <div className="flex flex-col">
              {c.steps.map((s, i) => (
                <div key={s.title} className="group relative flex gap-6 pb-8 last:pb-0">
                  {/* Vertical connector line */}
                  {i < c.steps.length - 1 && (
                    <div className="absolute left-4.75 top-10 h-full w-px bg-linear-to-b from-white/15 to-transparent" aria-hidden="true" />
                  )}

                  {/* Step number bubble */}
                  <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#080808] transition-colors group-hover:border-white/30">
                    <span className="font-(family-name:--font-display) text-[15px] font-light text-white/50 transition-colors group-hover:text-white/80">
                      {i + 1}
                    </span>
                  </div>

                  {/* Content */}
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

      <BottomRule />
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

function Faqs({ c }: { c: ServiceConfig }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#080808]">
      <SectionRule />
      <Watermark label="05" />

      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:items-start">

          {/* Left */}
          <div className="relative md:col-span-4">
            <div className="absolute left-0 top-0 hidden h-full w-px md:block" aria-hidden="true">
              <div className="h-full w-px bg-linear-to-b from-white/20 via-white/8 to-transparent" />
            </div>
            <div className="md:pl-6">
              <EyebrowRow label="FAQs" />
              <h2 className="mt-4 font-(family-name:--font-display) text-[clamp(24px,3.2vw,38px)] font-light text-white">
                Questions, answered
              </h2>
              <div className="mt-4 h-px w-12 bg-linear-to-r from-white/40 to-transparent" aria-hidden="true" />
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-3 md:col-span-8">
            {c.faqs.map((f, i) => (
              <div
                key={f.q}
                className="group rounded-2xl border border-white/8 bg-white/2 p-6 transition-colors hover:border-white/15 hover:bg-white/3"
              >
                <div className="mb-3 flex items-start gap-4">
                  <span className="mt-0.5 shrink-0 text-[10px] font-light text-white/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[14px] font-medium tracking-tight text-white/75 transition-colors group-hover:text-white">
                    {f.q}
                  </h3>
                </div>
                <p className="pl-7 text-[13px] font-light leading-relaxed text-white/40">
                  {f.a}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      <BottomRule />
    </section>
  )
}

// ─── FINAL CTA ────────────────────────────────────────────────────────────────

function FinalCta({ c }: { c: ServiceConfig }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#080808]">
      <SectionRule />

      {/* Large display watermark */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 select-none overflow-hidden text-center font-(family-name:--font-display) text-[clamp(60px,14vw,180px)] font-light leading-[0.85] text-white/[0.018]"
        aria-hidden="true"
      >
        Get in touch
      </div>

      {/* Top glow */}
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
              {c.finalCta?.eyebrow ?? "Next steps"}
            </span>
            <div className="h-px w-8 bg-white/35" aria-hidden="true" />
          </div>

          <h2 className="font-(family-name:--font-display) text-[clamp(28px,4.5vw,54px)] font-light leading-[1.1] tracking-[-0.01em] text-white">
            {c.finalCta?.title ?? "Ready to make a referral?"}
          </h2>

          <div className="mx-auto my-6 h-px w-16 bg-linear-to-r from-transparent via-white/35 to-transparent" aria-hidden="true" />

          <p className="text-[15px] font-light leading-relaxed text-white/50">
            {c.finalCta?.body ?? "Share your requirements and we'll confirm options and next steps."}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href={c.primaryCta.href}
              className="inline-flex items-center gap-2.5 rounded-lg bg-white px-8 py-4 text-[13px] font-medium tracking-wide text-[#080808] transition-all hover:bg-white/90 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              {c.primaryCta.label}
              <ArrowRight />
            </Link>
            <Link
              href={c.secondaryCta.href}
              className="inline-flex items-center gap-2.5 rounded-lg border border-white/15 bg-white/5 px-8 py-4 text-[13px] font-light tracking-wide text-white/65 transition-all hover:border-white/30 hover:bg-white/10 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
            >
              Email us directly
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            {["No obligation", "Respond within 24hrs", "Public-sector processes"].map((t) => (
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

// ─── Arrow icon ───────────────────────────────────────────────────────────────

function ArrowRight() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function ServicePage({
  config,
}: {
  config: ServiceConfig
  textVariant?: TextVariant
}) {
  return (
    <div className="bg-[#080808] text-white">
      <Hero         c={config} />
      <Highlights   c={config} />
      <Details      c={config} />
      <HowItWorks   c={config} />
      <Faqs         c={config} />
      <FinalCta     c={config} />
    </div>
  )
}