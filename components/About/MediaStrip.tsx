import React from "react"
import Image from "next/image"

type MediaItem = {
    src: string
    alt: string
    caption?: string
}

type AboutMediaStripProps = {
    eyebrow?: string
    title?: string
    description?: string
    items?: MediaItem[]

    textVariant?: "dark" | "light"
    background?: {
        colorClassName?: string
        colorValue?: string
    }
}

const DEFAULTS: Required<Pick<AboutMediaStripProps, "eyebrow" | "title" | "description" | "items">> =
{
    eyebrow: "Inside Lucent",
    title: "Quality-led delivery, with a property-first mindset.",
    description:
        "A quick look at the kind of accommodation and standards we aim to maintain—clean, placement-ready, and managed with care.",
    items: [
        { src: "/images/hero.jpg", alt: "Modern living room", caption: "Placement-ready homes" },
        { src: "/images/hero.jpg", alt: "Kitchen and dining space", caption: "Maintained standards" },
        { src: "/images/hero.jpg", alt: "Bedroom", caption: "Comfort and suitability" },
        { src: "/images/hero.jpg", alt: "Building exterior", caption: "Reliable local supply" },
    ],
}

const Container = ({ children }: { children: React.ReactNode }) => (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
)

const AboutMediaStrip = ({
    eyebrow = DEFAULTS.eyebrow,
    title = DEFAULTS.title,
    description = DEFAULTS.description,
    items = DEFAULTS.items,
    textVariant = "dark",
    background = {},
}: AboutMediaStripProps) => {
    const isLight = textVariant === "light"
    const hasColour = Boolean(background.colorClassName || background.colorValue)

    const tone = isLight
        ? {
            eyebrow: "text-white/60",
            title: "text-white",
            body: "text-white/75",
            divider: "bg-white/12",
            cardBorder: "border-white/10",
            caption: "text-white/70",
            shadow: "shadow-[0_12px_50px_rgba(0,0,0,0.45)]",
        }
        : {
            eyebrow: "text-zinc-500",
            title: "text-zinc-950",
            body: "text-zinc-700",
            divider: "bg-zinc-200",
            cardBorder: "border-zinc-200",
            caption: "text-zinc-600",
            shadow: "shadow-sm",
        }

    return (
        <section
            className={[
                "relative isolate overflow-hidden",
                !hasColour ? "bg-white" : "",
                background.colorClassName ? background.colorClassName : "",
            ]
                .filter(Boolean)
                .join(" ")}
            style={background.colorValue ? { backgroundColor: background.colorValue } : undefined}
        >
            {/* Texture for dark */}
            {isLight ? (
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute -top-32 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-full bg-linear-to-r from-transparent via-white/12 to-transparent blur-3xl" />
                    <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[18px_18px]" />
                    <div className="absolute left-0 right-0 top-0 h-px bg-white/12" />
                </div>
            ) : null}

            <Container>
                <div className="py-12 md:py-14">
                    <div className="grid gap-10 md:grid-cols-12 md:items-start">
                        <div className="md:col-span-4">
                            <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${tone.eyebrow}`}>
                                {eyebrow}
                            </p>
                            <h2 className={`mt-3 text-2xl font-semibold tracking-tight sm:text-3xl ${tone.title}`}>
                                {title}
                            </h2>
                            <p className={`mt-4 text-sm leading-relaxed ${tone.body}`}>{description}</p>
                        </div>

                        {/* Editorial grid */}
                        <div className="md:col-span-8">
                            <div className="grid gap-4 sm:grid-cols-2">
                                {/* Big tile */}
                                <div
                                    className={[
                                        "group relative overflow-hidden rounded-3xl border",
                                        tone.cardBorder,
                                        tone.shadow,
                                        "sm:col-span-2",
                                    ].join(" ")}
                                >
                                    <div className="relative aspect-21/9 w-full">
                                        <Image
                                            src={items[0]?.src}
                                            alt={items[0]?.alt || "Lucent Leasing"}
                                            fill
                                            priority
                                            sizes="(min-width: 768px) 66vw, 100vw"
                                            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                                        />
                                        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />
                                    </div>
                                    {items[0]?.caption ? (
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <p className={`text-xs font-medium tracking-wide ${tone.caption}`}>
                                                {items[0].caption}
                                            </p>
                                        </div>
                                    ) : null}
                                </div>

                                {/* Small tiles */}
                                {items.slice(1, 4).map((it) => (
                                    <div
                                        key={it.alt}
                                        className={[
                                            "group relative overflow-hidden rounded-3xl border",
                                            tone.cardBorder,
                                            tone.shadow,
                                        ].join(" ")}
                                    >
                                        <div className="relative aspect-16/12 w-full">
                                            <Image
                                                src={it.src}
                                                alt={it.alt}
                                                fill
                                                sizes="(min-width: 768px) 33vw, 100vw"
                                                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                                            />
                                            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />
                                        </div>
                                        {it.caption ? (
                                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                                <p className={`text-xs font-medium tracking-wide ${tone.caption}`}>
                                                    {it.caption}
                                                </p>
                                            </div>
                                        ) : null}
                                    </div>
                                ))}
                            </div>

                            <div className={`mt-10 h-px w-full ${tone.divider}`} />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default AboutMediaStrip
