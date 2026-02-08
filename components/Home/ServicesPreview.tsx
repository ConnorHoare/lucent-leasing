import React from "react"
import Link from "next/link"
import Image from "next/image"

type ServiceItem = {
    label: string
    /** Optional: show an image/icon per service (use /public paths e.g. "/images/services/temp.jpg") */
    imageSrc?: string
    imageAlt?: string
    /** Optional: short supporting line */
    description?: string
    /** Optional: make each item clickable */
    href?: string
}

type HomeServicesPreviewProps = {
    eyebrow?: string
    title?: string
    description?: string
    items?: ServiceItem[]
    cta?: { label: string; href: string }

    /** Display mode */
    variant?: "list" | "cards"

    /** Theme + background (same idea as What We Do) */
    textVariant?: "dark" | "light"
    background?: {
        /** Colour background (Tailwind class OR hex/rgb value) */
        colorClassName?: string // e.g. "bg-black"
        colorValue?: string // e.g. "#000000"

        /** Optional image background (if you ever want it) */
        src?: string
        alt?: string
        objectClassName?: string
        /** 0–100. Higher = stronger dark overlay for legibility */
        overlayStrength?: number
    }
}

const DEFAULTS: Required<
    Pick<
        HomeServicesPreviewProps,
        "eyebrow" | "title" | "description" | "items" | "cta" | "variant" | "textVariant"
    >
> = {
    eyebrow: "Services",
    title: "Our services",
    description: "We deliver flexible accommodation options to meet varying levels of need, including:",
    items: [
        {
            label: "Temporary accommodation for urgent placements",
            imageSrc: "/images/hero.jpg",
            imageAlt: "Temporary accommodation",
            href: "/services/temporary-accommodation",
        },
        {
            label: "Supported accommodation (delivered alongside partners where applicable)",
            imageSrc: "/images/hero.jpg",
            imageAlt: "Supported accommodation",
            href: "/services/supported-accommodation",
        },
        {
            label: "Self-contained accommodation for individuals and families",
            imageSrc: "/images/hero.jpg",
            imageAlt: "Self-contained accommodation",
            href: "/services/self-contained-accommodation",
        },
        {
            label: "Property sourcing and leasing",
            imageSrc: "/images/hero.jpg",
            imageAlt: "Property sourcing and leasing",
            href: "/services/leasing-and-property-sourcing",
        },
        {
            label: "Property management and compliance support",
            imageSrc: "/images/hero.jpg",
            imageAlt: "Property management",
            href: "/services/property-management",
        },
    ],
    cta: { label: "View services", href: "/services" },
    variant: "cards",
    textVariant: "dark",
}

const Container = ({ children }: { children: React.ReactNode }) => (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
)

const clamp01 = (n: number) => Math.min(1, Math.max(0, n))

const SectionHeader = ({
    eyebrow,
    title,
    description,
    tone,
}: {
    eyebrow: string
    title: string
    description?: string
    tone: {
        eyebrow: string
        title: string
        body: string
    }
}) => (
    <div className="max-w-2xl">
        <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${tone.eyebrow}`}>
            {eyebrow}
        </p>
        <h2 className={`mt-3 text-2xl font-semibold tracking-tight sm:text-3xl ${tone.title}`}>
            {title}
        </h2>
        {description ? <p className={`mt-3 text-base leading-relaxed ${tone.body}`}>{description}</p> : null}
    </div>
)

const PrimaryLink = ({
    href,
    children,
    variant = "dark",
}: {
    href: string
    children: React.ReactNode
    variant?: "dark" | "light"
}) => {
    const base =
        "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/15 focus-visible:ring-offset-2"
    const styles =
        variant === "light"
            ? "bg-white text-zinc-950 hover:bg-white/90 focus-visible:ring-offset-black"
            : "bg-zinc-950 text-white hover:bg-zinc-900 focus-visible:ring-offset-white"

    return (
        <Link href={href} className={`${base} ${styles}`}>
            {children}
            <span aria-hidden="true" className={variant === "light" ? "text-zinc-600" : "text-white/80"}>
                →
            </span>
        </Link>
    )
}

const ServiceCard = ({
    item,
    tone,
}: {
    item: ServiceItem
    tone: {
        cardBg: string
        cardBorder: string
        cardTitle: string
        cardBody: string
        cardMeta: string
        sheen: string
    }
}) => {
    const CardInner = (
        <div
            className={[
                "group relative overflow-hidden rounded-3xl shadow-sm transition-transform duration-200 hover:-translate-y-0.5",
                tone.cardBg,
                tone.cardBorder,
            ].join(" ")}
        >
            {/* Media */}
            {item.imageSrc ? (
                <div className="relative aspect-16/10 w-full overflow-hidden">
                    <Image
                        src={item.imageSrc}
                        alt={item.imageAlt || item.label}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />
                </div>
            ) : null}

            {/* Copy */}
            <div className="p-6">
                <p className={`text-sm font-semibold tracking-tight ${tone.cardTitle}`}>{item.label}</p>
                {item.description ? (
                    <p className={`mt-2 text-sm leading-relaxed ${tone.cardBody}`}>{item.description}</p>
                ) : null}

                {item.href ? (
                    <p className={`mt-4 inline-flex items-center gap-2 text-xs font-medium tracking-wide ${tone.cardMeta}`}>
                        Learn more <span aria-hidden="true">→</span>
                    </p>
                ) : null}
            </div>

            {/* sheen */}
            <div className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100`}>
                <div className={tone.sheen} />
            </div>
        </div>
    )

    return item.href ? (
        <Link href={item.href} className="block">
            {CardInner}
        </Link>
    ) : (
        CardInner
    )
}

const ServiceRow = ({
    item,
    tone,
}: {
    item: ServiceItem
    tone: {
        rowBg: string
        rowBorder: string
        rowTitle: string
        rowBody: string
    }
}) => {
    const row = (
        <div className={["flex items-start gap-4 rounded-2xl px-5 py-4 shadow-sm", tone.rowBg, tone.rowBorder].join(" ")}>
            {item.imageSrc ? (
                <div className="relative mt-0.5 h-12 w-12 flex-none overflow-hidden rounded-xl border border-white/10 bg-white/5">
                    <Image src={item.imageSrc} alt={item.imageAlt || item.label} fill sizes="48px" className="object-cover" />
                </div>
            ) : (
                <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-current opacity-80" />
            )}

            <div>
                <p className={`text-sm font-medium leading-relaxed ${tone.rowTitle}`}>{item.label}</p>
                {item.description ? (
                    <p className={`mt-1 text-sm leading-relaxed ${tone.rowBody}`}>{item.description}</p>
                ) : null}
            </div>
        </div>
    )

    return item.href ? (
        <Link href={item.href} className="block">
            {row}
        </Link>
    ) : (
        row
    )
}

const HomeServicesPreview = ({
    eyebrow = DEFAULTS.eyebrow,
    title = DEFAULTS.title,
    description = DEFAULTS.description,
    items = DEFAULTS.items,
    cta = DEFAULTS.cta,
    variant = DEFAULTS.variant,
    textVariant = DEFAULTS.textVariant,
    background = {},
}: HomeServicesPreviewProps) => {
    const isLight = textVariant === "light"
    const overlay = clamp01((background.overlayStrength ?? 0) / 100)

    const hasImage = Boolean(background.src)
    const hasColour = Boolean(background.colorClassName || background.colorValue)

    const tone = isLight
        ? {
            eyebrow: "text-white/60",
            title: "text-white",
            body: "text-white/75",
            divider: "bg-white/14",

            cardBg: "bg-white/5",
            cardBorder: "border border-white/10",
            cardTitle: "text-white",
            cardBody: "text-white/75",
            cardMeta: "text-white/80",
            sheen:
                "absolute -top-24 left-1/2 h-48 w-[120%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent blur-2xl",

            rowBg: "bg-white/5",
            rowBorder: "border border-white/10",
            rowTitle: "text-white",
            rowBody: "text-white/75",
        }
        : {
            eyebrow: "text-zinc-500",
            title: "text-zinc-950",
            body: "text-zinc-700",
            divider: "bg-zinc-200",

            cardBg: "bg-white",
            cardBorder: "border border-zinc-200",
            cardTitle: "text-zinc-950",
            cardBody: "text-zinc-700",
            cardMeta: "text-zinc-950",
            sheen:
                "absolute -top-24 left-1/2 h-48 w-[120%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-zinc-100 to-transparent blur-2xl",

            rowBg: "bg-white",
            rowBorder: "border border-zinc-200",
            rowTitle: "text-zinc-900",
            rowBody: "text-zinc-700",
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
            {/* Optional image background (if you want it later) */}
            {hasImage ? (
                <div className="absolute inset-0 -z-10">
                    <Image
                        src={background.src!}
                        alt={background.alt || "Lucent Leasing"}
                        fill
                        sizes="100vw"
                        className={["object-cover", background.objectClassName].filter(Boolean).join(" ")}
                        priority
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundColor: isLight ? `rgba(0,0,0,${0.55 + overlay * 0.35})` : `rgba(255,255,255,0.75)`,
                        }}
                    />
                </div>
            ) : null}

            {/* Dyson-ish texture for dark sections */}
            {isLight ? (
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute -top-32 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-full bg-linear-to-r from-transparent via-white/12 to-transparent blur-3xl" />
                    <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[18px_18px]" />
                    <div className="absolute left-0 right-0 top-0 h-px bg-white/12" />
                </div>
            ) : null}

            <Container>
                <div className="grid gap-10 py-12 md:grid-cols-12 md:items-start md:py-14">
                    {/* Left: header + CTA */}
                    <div className="md:col-span-4">
                        <SectionHeader eyebrow={eyebrow} title={title} description={description} tone={tone} />
                        <div className="mt-6">
                            <PrimaryLink href={cta.href} variant={isLight ? "light" : "dark"}>
                                {cta.label}
                            </PrimaryLink>
                        </div>
                    </div>

                    {/* Right: services */}
                    <div className="md:col-span-8">
                        {variant === "cards" ? (
                            <div className="grid gap-4 sm:grid-cols-2">
                                {items.map((item) => (
                                    <ServiceCard key={item.label} item={item} tone={tone} />
                                ))}
                            </div>
                        ) : (
                            <div className="grid gap-3 sm:grid-cols-2">
                                {items.map((item) => (
                                    <ServiceRow key={item.label} item={item} tone={tone} />
                                ))}
                            </div>
                        )}

                        {/* Divider rhythm */}
                        <div className={`mt-10 h-px w-full ${tone.divider}`} />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default HomeServicesPreview
