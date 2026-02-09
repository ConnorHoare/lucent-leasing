import React from "react"
import Image from "next/image"
import Link from "next/link"

type Cta = { label: string; href: string }

export type ServicesPageHeaderProps = {
    eyebrow?: string
    title?: string
    intro?: string
    chips?: string[]

    textVariant?: "dark" | "light"
    background?: {
        colorClassName?: string
        colorValue?: string

        src?: string
        alt?: string
        objectClassName?: string
        overlayStrength?: number // 0–100
    }

    primaryCta?: Cta
    secondaryCta?: Cta
}

const clamp01 = (n: number) => Math.min(1, Math.max(0, n))

const Container = ({ children }: { children: React.ReactNode }) => (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
)

const Chip = ({ label, light }: { label: string; light: boolean }) => (
    <span
        className={[
            "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide",
            light ? "border-white/15 bg-white/5 text-white/80" : "border-zinc-200 bg-white text-zinc-700",
        ].join(" ")}
    >
        {label}
    </span>
)

const Button = ({
    href,
    children,
    variant,
}: {
    href: string
    children: React.ReactNode
    variant: "primary-dark" | "primary-light" | "secondary-dark" | "secondary-light"
}) => {
    const base =
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/15 focus-visible:ring-offset-2"
    const styles =
        variant === "primary-dark"
            ? "bg-zinc-950 text-white hover:bg-zinc-900 focus-visible:ring-offset-white"
            : variant === "primary-light"
                ? "bg-white text-zinc-950 hover:bg-white/90 focus-visible:ring-offset-black"
                : variant === "secondary-dark"
                    ? "border border-zinc-300 bg-white text-zinc-950 hover:border-zinc-400 focus-visible:ring-offset-white"
                    : "border border-white/20 bg-white/5 text-white hover:border-white/30 focus-visible:ring-offset-black"

    return (
        <Link href={href} className={`${base} ${styles}`}>
            {children}
            <span aria-hidden="true" className="ml-2 opacity-70">
                →
            </span>
        </Link>
    )
}

export const ServicesPageHeader = ({
    eyebrow = "Services",
    title = "Our services",
    intro = "We work with local authorities, landlords, and housing partners to deliver safe, high-quality accommodation solutions. Our services are designed to support placements quickly, maintain standards, and reduce operational pressure for partners.",
    chips = ["Placements", "Standards", "Partnership-led"],
    textVariant = "light",
    background = { colorValue: "#000000", overlayStrength: 35 },
    primaryCta = { label: "Make an enquiry", href: "/contact" },
    secondaryCta = { label: "Email hello@lucentleases.co.uk", href: "mailto:hello@lucentleases.co.uk" },
}: ServicesPageHeaderProps) => {
    const isLight = textVariant === "light"
    const overlay = clamp01((background.overlayStrength ?? 35) / 100)

    const hasImage = Boolean(background.src)
    const hasColour = Boolean(background.colorClassName || background.colorValue)

    const tone = isLight
        ? {
            eyebrow: "text-white/60",
            title: "text-white",
            intro: "text-white/75",
            card: "border-white/12 bg-white/5",
            divider: "bg-white/12",
        }
        : {
            eyebrow: "text-zinc-500",
            title: "text-zinc-950",
            intro: "text-zinc-700",
            card: "border-zinc-200 bg-white",
            divider: "bg-zinc-200",
        }

    return (
        <section
            className={[
                "relative isolate overflow-hidden",
                !hasImage && !hasColour ? "bg-white" : "",
                !hasImage && background.colorClassName ? background.colorClassName : "",
            ]
                .filter(Boolean)
                .join(" ")}
            style={!hasImage && background.colorValue ? { backgroundColor: background.colorValue } : undefined}
        >
            {/* Image background */}
            {hasImage ? (
                <div className="absolute inset-0 -z-10">
                    <Image
                        src={background.src!}
                        alt={background.alt || title}
                        fill
                        priority
                        sizes="100vw"
                        className={["object-cover", background.objectClassName].filter(Boolean).join(" ")}
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundColor: isLight ? `rgba(0,0,0,${0.55 + overlay * 0.35})` : `rgba(255,255,255,0.78)`,
                        }}
                    />
                </div>
            ) : null}

            {/* Texture on dark */}
            {isLight ? (
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute -top-32 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-full bg-linear-to-r from-transparent via-white/12 to-transparent blur-3xl" />
                    <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[18px_18px]" />
                    <div className="absolute left-0 right-0 top-0 h-px bg-white/12" />
                </div>
            ) : null}

            <Container>
                <div className="py-14 md:py-18">
                    <div className="grid gap-8 md:grid-cols-12 md:items-start">
                        <div className="md:col-span-6">
                            <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${tone.eyebrow}`}>{eyebrow}</p>
                            <h1 className={`mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl ${tone.title}`}>
                                {title}
                            </h1>
                            <p className={`mt-4 text-base leading-relaxed ${tone.intro}`}>{intro}</p>

                            {chips.length ? (
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {chips.map((c) => (
                                        <Chip key={c} label={c} light={isLight} />
                                    ))}
                                </div>
                            ) : null}

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <Button
                                    href={primaryCta.href}
                                    variant={isLight ? "primary-light" : "primary-dark"}
                                >
                                    {primaryCta.label}
                                </Button>
                                <Button
                                    href={secondaryCta.href}
                                    variant={isLight ? "secondary-light" : "secondary-dark"}
                                >
                                    {secondaryCta.label}
                                </Button>
                            </div>
                        </div>

                        {/* Right: small editorial media card */}
                        <div className="md:col-span-6">
                            <div className={`relative overflow-hidden rounded-3xl border ${tone.card}`}>
                                <div className="pointer-events-none absolute inset-0">
                                    <div
                                        className={[
                                            "absolute -top-24 left-1/2 h-56 w-[120%] -translate-x-1/2 rounded-full blur-3xl",
                                            isLight
                                                ? "bg-linear-to-r from-transparent via-white/10 to-transparent"
                                                : "bg-linear-to-r from-transparent via-zinc-200/60 to-transparent",
                                        ].join(" ")}
                                    />
                                </div>
                                <div className="relative p-7 sm:p-8">
                                    <p className={isLight ? "text-xs font-semibold uppercase tracking-[0.18em] text-white/60" : "text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500"}>
                                        What we deliver
                                    </p>
                                    <p className={isLight ? "mt-3 text-xl font-semibold tracking-tight text-white" : "mt-3 text-xl font-semibold tracking-tight text-zinc-950"}>
                                        Flexible accommodation options
                                    </p>
                                    <p className={isLight ? "mt-3 text-sm leading-relaxed text-white/70" : "mt-3 text-sm leading-relaxed text-zinc-700"}>
                                        Temporary • Self-contained • Supported (where applicable) • Leasing • Property oversight
                                    </p>
                                    <div className={`mt-8 h-px w-full ${tone.divider}`} />
                                    <p className={isLight ? "mt-5 text-xs text-white/55" : "mt-5 text-xs text-zinc-600"}>
                                        Clear onboarding • Practical coordination • Consistent standards
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`mt-10 h-px w-full ${tone.divider}`} />
                </div>
            </Container>
        </section>
    )
}