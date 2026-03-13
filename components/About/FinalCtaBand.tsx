import Link from "next/link"

// ─── Types ────────────────────────────────────────────────────────────────────

type FinalCtaBandProps = {
  eyebrow?: string
  title?: string
  description?: string
  primaryCta?: { label: string; href: string }
  email?: string
  textVariant?: "dark" | "light"
  background?: { colorClassName?: string; colorValue?: string; src?: string; alt?: string; overlayStrength?: number }
}

const DEFAULTS = {
  eyebrow: "Next steps",
  title: "Ready to discuss a placement or partnership?",
  description: "Whether you're a local authority, landlord, or housing partner — Lucent Leases is here to help.",
  primaryCta: { label: "Contact us", href: "/contact" },
  email: "hello@lucentleases.co.uk",
  textVariant: "light" as const,
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function FinalCtaBand({
  eyebrow    = DEFAULTS.eyebrow,
  title      = DEFAULTS.title,
  description = DEFAULTS.description,
  primaryCta = DEFAULTS.primaryCta,
  email      = DEFAULTS.email,
  background  = {},
}: FinalCtaBandProps) {
  const hasColour = Boolean(background.colorClassName || background.colorValue)

  return (
    <section
      className={[
        "relative isolate overflow-hidden",
        !hasColour ? "bg-[#080808]" : "",
        background.colorClassName ?? "",
      ].filter(Boolean).join(" ")}
      style={background.colorValue ? { backgroundColor: background.colorValue } : undefined}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" aria-hidden="true" />

      {/* Large display watermark */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 select-none overflow-hidden font-(family-name:--font-display) text-[clamp(80px,18vw,220px)] font-light leading-none text-white/2"
        aria-hidden="true"
        style={{ lineHeight: 0.85 }}
      >
        <div className="text-center">Get in touch</div>
      </div>

      {/* Top glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 -z-10"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.05) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-3xl text-center">

          {/* Eyebrow */}
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-white/35" aria-hidden="true" />
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/35">
              {eyebrow}
            </span>
            <div className="h-px w-8 bg-white/35" aria-hidden="true" />
          </div>

          {/* Display title */}
          <h2 className="font-(family-name:--font-display) text-[clamp(32px,5vw,60px)] font-light leading-[1.1] tracking-[-0.01em] text-white">
            {title}
          </h2>

          {/* Divider */}
          <div className="mx-auto my-6 h-px w-16 bg-linear-to-r from-transparent via-white/40 to-transparent" aria-hidden="true" />

          <p className="text-[15px] font-light leading-relaxed text-white/50">
            {description}
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            {/* Primary — solid white */}
            <Link
              href={primaryCta.href}
              className="inline-flex items-center gap-2.5 rounded-lg bg-white px-8 py-4 text-[13px] font-medium tracking-wide text-[#080808] transition-all hover:bg-white/90 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              {primaryCta.label}
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            {/* Email link */}
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2.5 rounded-lg border border-white/15 bg-white/5 px-8 py-4 text-[13px] font-light tracking-wide text-white/65 transition-all hover:border-white/30 hover:bg-white/10 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
            >
              {email}
            </a>
          </div>

          {/* Trust micro-copy */}
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