
import { BlockHeader } from "./BlockHeader"
import { PrimaryButton, SecondaryButton } from "./Buttons"
import { Container } from "./Container"
import { CopyCard } from "./CopyCard"
import { Divider } from "./Divider"
import { FaqItem } from "./FAQItem"
import { FeatureCard } from "./FeatureCard"
import { MediaCard } from "./MediaCard"
import { Pill } from "./Pill"
import { SectionShell } from "./SectionShell"
import { StepRow } from "./StepRow"
import type { ServiceConfig, TextVariant } from "./types"

export function ServicePage({
  config,
  textVariant = "light",
}: {
  config: ServiceConfig
  textVariant?: TextVariant
}) {
  const c = config

  return (
    <div className={textVariant === "light" ? "bg-black text-white" : "bg-white text-zinc-950"}>
      {/* HERO */}
      <SectionShell textVariant={textVariant} background={{ colorValue: "#000000" }}>
        <Container>
          <div className="grid gap-10 py-14 md:grid-cols-12 md:items-start md:py-18">
            <div className="md:col-span-6">
              <p className={textVariant === "light" ? "text-xs font-semibold uppercase tracking-[0.18em] text-white/60" : "text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500"}>
                {c.eyebrow}
              </p>
              <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">{c.title}</h1>
              <p className={textVariant === "light" ? "mt-4 text-base leading-relaxed text-white/75" : "mt-4 text-base leading-relaxed text-zinc-700"}>
                {c.intro}
              </p>

              {c.chips?.length ? (
                <div className="mt-6 flex flex-wrap gap-2">
                  {c.chips.map((chip) => (
                    <Pill key={chip} textVariant={textVariant}>
                      {chip}
                    </Pill>
                  ))}
                </div>
              ) : null}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href={c.primaryCta.href} textVariant={textVariant}>
                  {c.primaryCta.label}
                </PrimaryButton>
                <SecondaryButton href={c.secondaryCta.href} textVariant={textVariant}>
                  {c.secondaryCta.label}
                </SecondaryButton>
              </div>
            </div>

            <div className="md:col-span-6">{c.heroImage?.src ? <MediaCard src={c.heroImage.src} alt={c.heroImage.alt} textVariant={textVariant} /> : null}</div>
          </div>

          <Divider textVariant={textVariant} />
        </Container>
      </SectionShell>

      {/* HIGHLIGHTS */}
      <SectionShell textVariant={textVariant} background={{ colorValue: "#000000" }}>
        <Container>
          <div className="py-12 md:py-14">
            <BlockHeader
              eyebrow="Highlights"
              title="Lorem ipsum dolor sit amet."
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              textVariant={textVariant}
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {c.highlights.map((h) => (
                <FeatureCard key={h.title} title={h.title} description={h.description} textVariant={textVariant} />
              ))}
            </div>

            <div className="mt-10">
              <Divider textVariant={textVariant} />
            </div>
          </div>
        </Container>
      </SectionShell>

      {/* DETAILS */}
      <SectionShell textVariant={textVariant} background={{ colorValue: "#000000" }}>
        <Container>
          <div className="py-12 md:py-14">
            <div className="grid gap-10 md:grid-cols-12 md:items-start">
              <div className="md:col-span-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Details</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">What to expect</h2>
              </div>

              <div className="md:col-span-8">
                <div className="grid gap-4">
                  {c.sections.map((s) => (
                    <CopyCard key={s.title} title={s.title} body={s.body} textVariant={textVariant} />
                  ))}
                </div>

                <div className="mt-10">
                  <Divider textVariant={textVariant} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </SectionShell>

      {/* HOW IT WORKS */}
      <SectionShell textVariant={textVariant} background={{ colorValue: "#000000" }}>
        <Container>
          <div className="py-12 md:py-14">
            <div className="grid gap-10 md:grid-cols-12 md:items-start">
              <div className="md:col-span-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Process</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">How it works</h2>
              </div>

              <div className="md:col-span-8">
                <div className="grid gap-4">
                  {c.steps.map((s, i) => (
                    <StepRow key={s.title} index={i + 1} title={s.title} description={s.description} textVariant={textVariant} />
                  ))}
                </div>

                <div className="mt-10">
                  <Divider textVariant={textVariant} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </SectionShell>

      {/* FAQ */}
      <SectionShell textVariant={textVariant} background={{ colorValue: "#000000" }}>
        <Container>
          <div className="py-12 md:py-14">
            <div className="grid gap-10 md:grid-cols-12 md:items-start">
              <div className="md:col-span-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">FAQs</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Questions, answered</h2>
              </div>

              <div className="md:col-span-8">
                <div className="grid gap-3">
                  {c.faqs.map((f) => (
                    <FaqItem key={f.q} q={f.q} a={f.a} textVariant={textVariant} />
                  ))}
                </div>

                <div className="mt-10">
                  <Divider textVariant={textVariant} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </SectionShell>

      {/* FINAL CTA */}
      <SectionShell textVariant={textVariant} background={{ colorValue: "#000000" }}>
        <Container>
          <div className="py-12 md:py-14">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 shadow-[0_18px_70px_rgba(0,0,0,0.45)] sm:p-10">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 left-1/2 h-56 w-[120%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent blur-3xl" />
              </div>

              <div className="relative grid gap-6 md:grid-cols-12 md:items-center">
                <div className="md:col-span-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">{c.finalCta?.eyebrow || "Next steps"}</p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{c.finalCta?.title || "Let’s talk"}</h2>
                  <p className="mt-3 text-base leading-relaxed text-white/75">
                    {c.finalCta?.body || "Share your requirements and we’ll confirm options and next steps."}
                  </p>
                </div>

                <div className="md:col-span-4 md:flex md:justify-end">
                  <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-stretch">
                    <PrimaryButton href={c.primaryCta.href} textVariant={textVariant}>
                      {c.primaryCta.label}
                    </PrimaryButton>
                    <SecondaryButton href={c.secondaryCta.href} textVariant={textVariant}>
                      Email hello@lucentleases.co.uk
                    </SecondaryButton>
                  </div>
                </div>
              </div>

              <div className="mt-8 h-px w-full bg-white/12" />
              <p className="mt-5 text-xs text-white/55">Public-sector friendly processes • Responsive communication • Property-first standards</p>
            </div>
          </div>
        </Container>
      </SectionShell>
    </div>
  )
}
