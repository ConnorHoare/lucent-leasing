import PageHeader from "@/components/About/PageHeader"
import ContactForm from "@/components/forms/ContactForm"
import Link from "next/link"

// ─── Primitives ───────────────────────────────────────────────────────────────

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

// ─── Data ─────────────────────────────────────────────────────────────────────

const contactDetails = [
  {
    label: "Email",
    value: "hello@lucentleases.co.uk",
    href:  "mailto:hello@lucentleases.co.uk",
  },
  {
    label: "Areas covered",
    value: "South Coast · Hampshire · Portsmouth · Southampton",
  },
  {
    label: "Partnerships",
    value: "Local Authorities · Landlords · Housing Providers",
  },
]

const enquiryTypes = [
  { label: "Council partnerships",   desc: "Referrals, placements, and housing solutions for local authorities." },
  { label: "Landlord enquiries",     desc: "Discuss listing your property or joining our managed portfolio." },
  { label: "Property opportunities", desc: "New properties, expanding coverage, or area-specific needs." },
  { label: "General enquiries",      desc: "Anything else — our team is happy to help." },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <main className="bg-[#080808] text-white">

      {/* 01 — Hero header */}
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        intro="Whether you are a council, landlord, or partner organisation, our team is here to help. Send us a message and we will respond as soon as possible."
        textVariant="light"
        chips={[
          "Council partnerships",
          "Landlord enquiries",
          "Property opportunities",
          "General enquiries",
        ]}
      />

      {/* 02 — Info + Form */}
      <section className="relative isolate overflow-hidden bg-[#080808]">
        <SectionRule />
        <GridTexture />

        {/* Section watermark */}
        <div
          className="pointer-events-none absolute right-4 top-4 select-none font-(family-name:--font-display) text-[160px] font-light leading-none text-white/[0.022] sm:right-8 sm:text-[200px]"
          aria-hidden="true"
        >
          02
        </div>

        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">

            {/* Left — contact info + enquiry types */}
            <div className="lg:col-span-5">

              {/* Eyebrow */}
              <div className="mb-8 flex items-center gap-3">
                <div className="h-px w-8 shrink-0 bg-white/40" aria-hidden="true" />
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/40">
                  Contact information
                </span>
              </div>

              {/* Detail rows */}
              <div className="flex flex-col divide-y divide-white/6">
                {contactDetails.map((d) => (
                  <div key={d.label} className="py-5 first:pt-0">
                    <p className="mb-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white/25">
                      {d.label}
                    </p>
                    {d.href ? (
                      <Link
                        href={d.href}
                        className="text-[14px] font-light text-white/65 transition-colors hover:text-white"
                      >
                        {d.value}
                      </Link>
                    ) : (
                      <p className="text-[14px] font-light text-white/65">{d.value}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="my-8 h-px bg-linear-to-r from-white/10 to-transparent" aria-hidden="true" />

              {/* Enquiry type cards */}
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px w-8 shrink-0 bg-white/40" aria-hidden="true" />
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/40">
                  Enquiry types
                </span>
              </div>

              <div className="flex flex-col gap-2.5">
                {enquiryTypes.map((t, i) => (
                  <div
                    key={t.label}
                    className="group rounded-xl border border-white/8 bg-white/2 px-4 py-4 transition-colors hover:border-white/15 hover:bg-white/4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 text-[10px] font-light text-white/20">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-[13px] font-medium text-white/70 transition-colors group-hover:text-white/90">
                          {t.label}
                        </p>
                        <p className="mt-0.5 text-[12px] font-light leading-relaxed text-white/35">
                          {t.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Response time note */}
              <div className="mt-8 flex items-center gap-2.5 rounded-xl border border-white/8 bg-white/2 px-4 py-3.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" aria-hidden="true" />
                <p className="text-[12px] font-light text-white/35">
                  We aim to respond to all enquiries within 24 hours.
                </p>
              </div>

            </div>

            {/* Right — form */}
            <div className="lg:col-span-7">

              <div className="mb-8 flex items-center gap-3">
                <div className="h-px w-8 shrink-0 bg-white/40" aria-hidden="true" />
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/40">
                  Send a message
                </span>
              </div>

              <ContactForm />

            </div>

          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-px bg-white/5" aria-hidden="true" />
      </section>

      {/* 03 — Bottom CTA strip */}
      <section className="relative isolate overflow-hidden bg-[#080808]">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-48"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        {/* Watermark */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 select-none overflow-hidden text-center font-(family-name:--font-display) text-[clamp(60px,14vw,180px)] font-light leading-[0.85] text-white/[0.018]"
          aria-hidden="true"
        >
          Get in touch
        </div>

        <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6">

            <div>
              <p className="font-(family-name:--font-display) text-[clamp(20px,2.5vw,28px)] font-light text-white/70">
                Prefer to email directly?
              </p>
              <p className="mt-1 text-[13px] font-light text-white/35">
                Reach us any time at hello@lucentleases.co.uk
              </p>
            </div>

            <Link
              href="mailto:hello@lucentleases.co.uk"
              className="inline-flex shrink-0 items-center gap-2.5 rounded-lg border border-white/15 bg-white/5 px-6 py-3.5 text-[13px] font-light tracking-wide text-white/65 transition-all hover:border-white/30 hover:bg-white/10 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
            >
              hello@lucentleases.co.uk
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

          </div>
        </div>
      </section>

    </main>
  )
}