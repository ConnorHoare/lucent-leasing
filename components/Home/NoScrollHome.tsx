"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"

// ─── Types ────────────────────────────────────────────────────────────────────

type Cta = { label: string; href: string }

type HomeIntroOverlayProps = {
  eyebrow?: string
  headline?: string
  highlightWords?: string[]
  subheadline?: string
  trustItems?: string[]
  primaryCta?: Cta
  secondaryCta?: Cta
  stats?: { value: string; label: string }[]
  /**
   * 3 images for the desktop stack + mobile strip.
   * Provide { src, alt, caption? } for each.
   * Falls back to placeholder divs if not supplied.
   */
  images?: { src: string; alt: string; caption?: string }[]
}

// ─── Defaults ─────────────────────────────────────────────────────────────────

const DEFAULTS: Required<HomeIntroOverlayProps> = {
  eyebrow: "Lucent Leases",
  headline: "Accommodation delivered with clarity, care, and reliability.",
  highlightWords: ["clarity,", "care,"],
  subheadline:
    "We work with local authorities, landlords, and housing partners to provide safe, high-quality temporary, supported, and self-contained accommodation for individuals and families who need housing.",
  trustItems: [
    "Public-sector friendly",
    "Responsive communication",
    "Property-first standards",
  ],
  primaryCta: { label: "Make an enquiry", href: "/contact" },
  secondaryCta: { label: "Landlords: lease your property", href: "/landlord-partners" },
  stats: [
    { value: "100%", label: "Compliant properties" },
    { value: "LA",   label: "Authority aligned" },
    { value: "24/7", label: "Partner support" },
  ],
  images: [
    { src: "/images/lucent-images/1.jpeg", alt: "Bright self-contained flat", caption: "Self-contained" },
    { src: "/images/lucent-images/2.jpeg", alt: "Clean modern kitchen",        caption: "Placement-ready" },
    { src: "/images/lucent-images/3.jpeg", alt: "Well-maintained bedroom",     caption: "High standards" },
  ],
}

// ─── Small components ─────────────────────────────────────────────────────────

function ArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function StyledHeadline({ text, highlight }: { text: string; highlight: string[] }) {
  const words = text.split(" ")
  return (
    <>
      {words.map((word, i) => {
        const isHighlighted = highlight.some((h) => word.toLowerCase() === h.toLowerCase())
        return (
          <React.Fragment key={i}>
            {isHighlighted
              ? <em className="italic font-medium text-white">{word}</em>
              : word}
            {i < words.length - 1 ? " " : ""}
          </React.Fragment>
        )
      })}
    </>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-(family-name:--font-display) text-3xl font-light leading-none text-white">{value}</span>
      <span className="text-[10px] font-light uppercase tracking-widest text-white/30">{label}</span>
    </div>
  )
}

function MonoTrustPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1 text-[11px] font-light tracking-wide text-white/40">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" aria-hidden="true" />
      {label}
    </span>
  )
}

function WhiteDivider({ className = "" }: { className?: string }) {
  return <div className={`h-px bg-linear-to-r from-white/50 to-transparent ${className}`} aria-hidden="true" />
}

// ─── Background ───────────────────────────────────────────────────────────────

function MonochromeBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Fine grid */}
      <div
        className="absolute inset-0 animate-[gridDrift_24s_ease-in-out_infinite_alternate]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
        }}
      />
      {/* Top-right glow */}
      <div
        className="absolute -right-32 -top-32 h-160 w-160 animate-[orbFloat_16s_ease-in-out_infinite_alternate] rounded-full blur-[150px]"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)" }}
      />
      {/* Bottom-left glow */}
      <div
        className="absolute -bottom-16 left-[8%] h-105 w-105 animate-[orbFloat_20s_ease-in-out_infinite_alternate] rounded-full blur-[120px] [animation-delay:-8s]"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.035) 0%, transparent 70%)" }}
      />
      {/* Diagonal vignette */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.45) 0%, transparent 50%, rgba(0,0,0,0.25) 100%)" }} />
      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")` }}
      />
    </div>
  )
}

// ─── Desktop image stack ──────────────────────────────────────────────────────
/**
 * Three images in a vertical asymmetric column:
 * - Top:    small, dimmed, shifted left  — peeks in from above
 * - Middle: tall, bright, full width     — the hero image
 * - Bottom: small, dimmed, shifted right — peeks in from below
 *
 * The whole column fades in from the right on mount.
 */

type ImgEntry = { src: string; alt: string; caption?: string }

function DesktopImageStack({ images }: { images: ImgEntry[] }) {
  const [top, mid, bot] = images

  return (
    <div
      className="
        pointer-events-none hidden select-none
        lg:pointer-events-auto lg:flex
        absolute right-0 top-0 h-full w-85 xl:w-100
        flex-col items-stretch justify-center gap-3
        pr-0 pl-4
        animate-[imageStackReveal_1.4s_0.4s_cubic-bezier(0.22,1,0.36,1)_both]
      "
      aria-hidden="true"
    >
      {/* Top — small, offset left, dimmed */}
      <div className="relative -translate-x-8 overflow-hidden rounded-2xl"
        style={{ height: "160px" }}>
        {top?.src
          ? <Image src={top.src} alt={top.alt} fill className="object-cover opacity-40 scale-105 transition-transform duration-700 hover:scale-100" sizes="400px" />
          : <div className="h-full w-full bg-white/6 animate-pulse" />
        }
        {/* Inner shadow overlay — makes it feel recessed */}
        <div className="absolute inset-0 bg-linear-to-b from-[#080808]/60 via-transparent to-[#080808]/40 rounded-2xl" />
        {top?.caption && (
          <span className="absolute bottom-2.5 left-3 text-[10px] font-light uppercase tracking-[0.14em] text-white/40">
            {top.caption}
          </span>
        )}
      </div>

      {/* Middle — tall, bright, slightly right-shifted = hero image */}
      <div className="relative translate-x-2 overflow-hidden rounded-2xl ring-1 ring-white/10"
        style={{ height: "280px" }}>
        {mid?.src
          ? <Image src={mid.src} alt={mid.alt} fill className="object-cover opacity-80 scale-105 transition-transform duration-700 hover:scale-100" sizes="420px" />
          : <div className="h-full w-full bg-white/10 animate-pulse" />
        }
        <div className="absolute inset-0 bg-linear-to-t from-[#080808]/70 via-transparent to-transparent rounded-2xl" />
        {mid?.caption && (
          <span className="absolute bottom-3 left-4 text-[11px] font-light uppercase tracking-[0.14em] text-white/60">
            {mid.caption}
          </span>
        )}
        {/* Bright edge highlight */}
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* Bottom — small, offset right, dimmed */}
      <div className="relative translate-x-4 overflow-hidden rounded-2xl"
        style={{ height: "140px" }}>
        {bot?.src
          ? <Image src={bot.src} alt={bot.alt} fill className="object-cover opacity-35 scale-105 transition-transform duration-700 hover:scale-100" sizes="380px" />
          : <div className="h-full w-full bg-white/5 animate-pulse" />
        }
        <div className="absolute inset-0 bg-linear-to-t from-[#080808]/60 via-transparent to-[#080808]/50 rounded-2xl" />
        {bot?.caption && (
          <span className="absolute bottom-2.5 left-3 text-[10px] font-light uppercase tracking-[0.14em] text-white/35">
            {bot.caption}
          </span>
        )}
      </div>

      {/* Right-edge soft fade — blends stack into the page bg */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-linear-to-l from-[#080808] to-transparent" />
      {/* Top + bottom fades */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-[#080808] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#080808] to-transparent" />
    </div>
  )
}

// ─── Mobile image strip ───────────────────────────────────────────────────────
/**
 * On mobile: a single cinematic letterbox strip at the very bottom of the screen.
 * Fixed height (96px), full width, no overflow, vignette top & sides.
 * Cycles through the 3 images with a slow crossfade every 4s.
 */
function MobileImageStrip({ images }: { images: ImgEntry[] }) {
  const [active, setActive] = React.useState(0)

  React.useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % images.length), 4000)
    return () => clearInterval(id)
  }, [images.length])

  return (
    <div className="lg:hidden absolute bottom-0 left-0 right-0 h-24 overflow-hidden" aria-hidden="true">
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === active ? "opacity-100" : "opacity-0"}`}
        >
          {img.src
            ? <Image src={img.src} alt={img.alt} fill className="object-cover object-center scale-105" sizes="100vw" />
            : <div className="h-full w-full bg-white/8" />
          }
        </div>
      ))}

      {/* Heavy top fade — blends into page, feels flush not jarring */}
      <div className="absolute inset-0 bg-linear-to-b from-[#080808] via-[#080808]/70 to-transparent pointer-events-none" />
      {/* Side fades */}
      <div className="absolute inset-y-0 left-0 w-12 bg-linear-to-r from-[#080808] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 bg-linear-to-l from-[#080808] to-transparent pointer-events-none" />

      {/* Crossfade dots — subtle indicator */}
      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-px rounded-full transition-all duration-500 ${i === active ? "w-5 bg-white/50" : "w-1.5 bg-white/20"}`}
          />
        ))}
      </div>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function HomeIntroOverlay({
  eyebrow        = DEFAULTS.eyebrow,
  headline       = DEFAULTS.headline,
  highlightWords = DEFAULTS.highlightWords,
  subheadline    = DEFAULTS.subheadline,
  trustItems     = DEFAULTS.trustItems,
  primaryCta     = DEFAULTS.primaryCta,
  secondaryCta   = DEFAULTS.secondaryCta,
  stats          = DEFAULTS.stats,
  images         = DEFAULTS.images,
}: HomeIntroOverlayProps) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#080808] text-white">
      <MonochromeBackground />

      {/* Desktop: absolute image column right side */}
      <DesktopImageStack images={images} />

      {/* ── Hero content ─────────────────────────────────────────────────────── */}
      <main className="relative z-10 flex flex-1 items-center px-8 sm:px-10 lg:pr-95 xl:pr-110">
        <div className="max-w-2xl w-full animate-[contentReveal_1.1s_cubic-bezier(0.22,1,0.36,1)_both]">

          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3 animate-[contentReveal_1.1s_0.1s_cubic-bezier(0.22,1,0.36,1)_both]">
            <div className="h-px w-10 shrink-0 bg-white/50" aria-hidden="true" />
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/45">{eyebrow}</span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 font-(family-name:--font-display) text-[clamp(36px,5.5vw,68px)] font-light leading-[1.08] tracking-[-0.01em] text-white/80 animate-[contentReveal_1.1s_0.2s_cubic-bezier(0.22,1,0.36,1)_both]">
            <StyledHeadline text={headline} highlight={highlightWords} />
          </h1>

          {/* Divider */}
          <div className="mb-6 animate-[contentReveal_1.1s_0.3s_cubic-bezier(0.22,1,0.36,1)_both]">
            <WhiteDivider className="w-16" />
          </div>

          {/* Subheadline */}
          <p className="mb-9 max-w-130 text-[15px] font-light leading-[1.75] text-white/45 animate-[contentReveal_1.1s_0.35s_cubic-bezier(0.22,1,0.36,1)_both]">
            {subheadline}
          </p>

          {/* CTAs */}
          <div className="mb-9 flex flex-wrap gap-3 animate-[contentReveal_1.1s_0.45s_cubic-bezier(0.22,1,0.36,1)_both]">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center gap-2.5 rounded-lg bg-white px-6 py-3.5 text-[13px] font-medium tracking-wide text-[#080808] transition-all hover:bg-white/90 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              {primaryCta.label}
              <ArrowRight />
            </Link>
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center gap-2.5 rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 text-[13px] font-light tracking-wide text-white/65 transition-all hover:border-white/35 hover:bg-white/10 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
            >
              {secondaryCta.label}
              <ArrowRight />
            </Link>
          </div>

          {/* Trust pills */}
          <div className="flex flex-wrap gap-2 animate-[contentReveal_1.1s_0.55s_cubic-bezier(0.22,1,0.36,1)_both]">
            {trustItems.map((t) => <MonoTrustPill key={t} label={t} />)}
          </div>
        </div>
      </main>

      {/* ── Bottom bar ───────────────────────────────────────────────────────── */}
      <footer className="relative z-10 hidden items-end justify-between px-8 pb-8 sm:flex sm:px-10 lg:pr-95 xl:pr-110 animate-[contentReveal_1.1s_0.65s_cubic-bezier(0.22,1,0.36,1)_both]">
        <div className="flex gap-10">
          {stats.map((s) => <Stat key={s.label} value={s.value} label={s.label} />)}
        </div>
        <div className="flex items-center gap-2 text-[11px] font-light uppercase tracking-[0.08em] text-white/20">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <rect x="1" y="2" width="2" height="1.5" rx=".5" fill="currentColor" opacity=".6" />
              <rect x="1" y="5" width="2" height="1.5" rx=".5" fill="currentColor" opacity=".6" />
              <rect x="1" y="8" width="2" height="1.5" rx=".5" fill="currentColor" opacity=".6" />
              <rect x="5" y="2" width="6" height="1.5" rx=".5" fill="currentColor" opacity=".4" />
              <rect x="5" y="5" width="6" height="1.5" rx=".5" fill="currentColor" opacity=".4" />
              <rect x="5" y="8" width="6" height="1.5" rx=".5" fill="currentColor" opacity=".4" />
            </svg>
          </div>
          Menu to explore
        </div>
      </footer>

      {/* ── Side accent (xl only, left of image column) ───────────────────── */}
      <div
        className="pointer-events-none absolute top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-1.5 xl:flex"
        style={{ right: "calc(400px + 20px)" }}
        aria-hidden="true"
      >
        <div className="h-16 w-px bg-linear-to-b from-transparent via-white/15 to-transparent" />
        <span className="text-[10px] font-light uppercase tracking-[0.2em] text-white/15" style={{ writingMode: "vertical-rl" }}>
          Trusted housing
        </span>
        <div className="h-16 w-px bg-linear-to-b from-transparent via-white/15 to-transparent" />
      </div>

      {/* Mobile image strip — bottom of screen */}
      <MobileImageStrip images={images} />
    </div>
  )
}