import React from "react"
import Image from "next/image"
import Link from "next/link"

type Benefit = {
  title: string
  description: string
}

type BenefitGroup = {
  audience: string
  benefits: Benefit[]
  cta?: { label: string; href: string }
}

type HomeKeyBenefitsProps = {
  eyebrow?: string
  title?: string
  description?: string
  groups?: BenefitGroup[]

  /** Background controls: image OR colour */
  background?: {
    /** Image background */
    src?: string
    alt?: string
    /** 0–100. Higher = stronger overlay for legibility. Default 0 */
    overlayStrength?: number
    /** Tailwind classes e.g. "object-[center_30%]" */
    objectClassName?: string

    /** Colour background (Tailwind class OR hex/rgb value) */
    colorClassName?: string // e.g. "bg-black"
    colorValue?: string // e.g. "#000000"
  }
}

const DEFAULTS: Required<Pick<HomeKeyBenefitsProps, "eyebrow" | "title" | "description" | "groups">> =
  {
    eyebrow: "Key benefits",
    title: "Key benefits",
    description:
      "Clear processes and consistent standards across every placement—built for local authorities, landlords, and housing partners.",
    groups: [
      {
        audience: "For local authorities",
        benefits: [
          {
            title: "Reliable supply",
            description:
              "Access to temporary, supported, and self-contained accommodation across our operating areas.",
          },
          {
            title: "Consistent standards",
            description: "Clear expectations, property checks, and ongoing management.",
          },
          {
            title: "Responsive working",
            description: "Straightforward communication and practical problem-solving.",
          },
        ],
      },
      {
        audience: "For landlords",
        benefits: [
          {
            title: "Secure leasing",
            description: "We can lease your property and manage day-to-day oversight.",
          },
          {
            title: "Managed occupancy",
            description: "We coordinate placements and maintain property standards.",
          },
          {
            title: "A professional partner",
            description: "Transparent processes and clear points of contact.",
          },
        ],
      },
      {
        audience: "For housing partners",
        benefits: [
          {
            title: "Collaborative delivery",
            description:
              "We work alongside support providers and services where applicable.",
          },
          {
            title: "Placement-ready properties",
            description: "Accommodation sourced and prepared to meet agreed standards.",
          },
          {
            title: "Stable outcomes",
            description: "A focus on safe housing that supports longer-term progress.",
          },
        ],
      },
    ],
  }

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
)

const BenefitCard = ({ title, description }: Benefit) => (
  <div className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-0.5">
    {/* subtle Dyson sheen */}
    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
      <div className="absolute -top-24 left-1/2 h-48 w-[120%] -translate-x-1/2 rounded-full bg-linear-to-r from-transparent via-zinc-100 to-transparent blur-2xl" />
    </div>

    <div className="relative">
      <p className="text-sm font-semibold tracking-tight text-zinc-950">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-zinc-700">{description}</p>
    </div>
  </div>
)

const GroupPanel = ({ group }: { group: BenefitGroup }) => (
  <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 sm:p-7">
    <div className="flex items-start justify-between gap-4">
      <h3 className="text-base font-semibold tracking-tight text-zinc-950">
        {group.audience}
      </h3>

      {group.cta ? (
        <Link
          href={group.cta.href}
          className="shrink-0 rounded-full border border-zinc-300 bg-white px-4 py-2 text-xs font-medium tracking-wide text-zinc-950 transition-colors hover:border-zinc-400"
        >
          {group.cta.label}
        </Link>
      ) : null}
    </div>

    <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {group.benefits.map((b) => (
        <BenefitCard
          key={`${group.audience}-${b.title}`}
          title={b.title}
          description={b.description}
        />
      ))}
    </div>
  </div>
)

const HomeKeyBenefits = ({
  eyebrow = DEFAULTS.eyebrow,
  title = DEFAULTS.title,
  description = DEFAULTS.description,
  groups = DEFAULTS.groups,
  background = {},
}: HomeKeyBenefitsProps) => {
  const overlay = Math.min(100, Math.max(0, background.overlayStrength ?? 0)) / 100

  const hasImage = Boolean(background.src)
  const hasColour = Boolean(background.colorClassName || background.colorValue)

  return (
    <section
      className={[
        "relative isolate overflow-hidden",
        // default
        !hasImage && !hasColour ? "bg-white" : "",
        // tailwind colour class
        !hasImage && background.colorClassName ? background.colorClassName : "",
      ]
        .filter(Boolean)
        .join(" ")}
      // raw colour value
      style={!hasImage && background.colorValue ? { backgroundColor: background.colorValue } : undefined}
    >
      {/* Optional background image */}
      {hasImage ? (
        <div className="absolute inset-0 -z-10">
          <Image
            src={background.src!}
            alt={background.alt || "Lucent Leasing"}
            fill
            sizes="100vw"
            className={["object-cover", background.objectClassName].filter(Boolean).join(" ")}
          />

          {/* Soft white overlay (Dyson-ish) */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(90deg,
                rgba(255,255,255,0.96) 0%,
                rgba(255,255,255,0.92) 55%,
                rgba(255,255,255,${0.85 - overlay * 0.5}) 75%,
                rgba(255,255,255,${0.65 - overlay * 0.35}) 100%)`,
            }}
          />

          {/* Optional darken layer */}
          {overlay > 0 ? (
            <div
              className="absolute inset-0"
              style={{ backgroundColor: `rgba(0,0,0,${overlay * 0.18})` }}
            />
          ) : null}
        </div>
      ) : null}

      <Container>
        <div className="py-12 md:py-14">
          <div className="grid gap-8 md:grid-cols-12 md:items-start">
            {/* Left: heading */}
            <div className="md:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                {eyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
                {title}
              </h2>
            </div>

            {/* Right: description + groups */}
            <div className="md:col-span-8">
              <p className="max-w-3xl text-pretty text-base leading-relaxed text-zinc-700">
                {description}
              </p>

              <div className="mt-8 grid gap-6">
                {groups.map((g) => (
                  <GroupPanel key={g.audience} group={g} />
                ))}
              </div>

              {/* Divider rhythm */}
              <div className="mt-10 h-px w-full bg-zinc-200" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HomeKeyBenefits
