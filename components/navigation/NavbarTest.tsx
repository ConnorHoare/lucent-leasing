"use client"

import React from "react"
import Link from "next/link"
import Wordmark from "../ui/Wordmark"

// ─── Types ────────────────────────────────────────────────────────────────────

type NavChild = { label: string; href: string }
type NavSection = { label: string; href?: string; children?: NavChild[] }

// ─── Navigation data ──────────────────────────────────────────────────────────

const NAV: NavSection[] = [
  {
    label: "About Us",
    children: [
      { label: "Who We Are",           href: "/about-us#who-we-are" },
      { label: "Our Team",             href: "/about-us#our-team" },
      { label: "Our Purpose & Values", href: "/about-us#our-purpose-and-values" },
      { label: "Our Strategy",         href: "/about-us#our-strategy" },
    ],
  },
  {
    label: "What We Do",
    children: [
      { label: "Nightly Self-Contained",         href: "/what-we-do/nightly-self-contained" },
      { label: "Active Opportunities Pathway",   href: "/what-we-do/active-opportunities-pathway" },
      { label: "Supported Shared Accommodation", href: "/what-we-do/supported-shared-accommodation" },
    ],
  },
  {
    label: "Services for Councils",
    children: [
      { label: "Partnership Approach",  href: "/services-for-councils#partnership-approach" },
      { label: "Supporting Placements", href: "/services-for-councils#supporting-placements" },
    ],
  },
  {
    label: "Landlord Partners",
    children: [
      { label: "How We Work",                           href: "/landlord-partners#how-we-work" },
      { label: "Where We Work",                         href: "/landlord-partners#where-we-work" },
      { label: "Contact Our Landlord Partnership Team", href: "/landlord-partners#contact-our-landlord-partnership-team" },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
]

// ─── Hamburger button ─────────────────────────────────────────────────────────

function HamburgerButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Open navigation menu"
      className="group flex h-12 w-12 shrink-0 flex-col items-center justify-center gap-1.5 rounded-[14px] border border-white/15 bg-white/5 backdrop-blur-sm transition-colors hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
    >
      {/* Middle bar shorter at rest — all equalise on hover */}
      <span className="h-px w-5.5 rounded-full bg-white/70 transition-all duration-200 group-hover:bg-white" />
      <span className="h-px w-4 rounded-full bg-white/70 transition-all duration-200 group-hover:w-5.5 group-hover:bg-white" />
      <span className="h-px w-5.5 rounded-full bg-white/70 transition-all duration-200 group-hover:bg-white" />
    </button>
  )
}

// ─── Close button ─────────────────────────────────────────────────────────────

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Close menu"
      className="relative flex h-10.5 w-10.5 shrink-0 items-center justify-center rounded-[10px] border border-white/15 bg-white/5 transition-colors hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
    >
      <span className="absolute h-px w-4 rotate-45 rounded-full bg-white/70" />
      <span className="absolute h-px w-4 -rotate-45 rounded-full bg-white/70" />
    </button>
  )
}

// ─── Panel section (accordion item) ──────────────────────────────────────────

function PanelSection({
  section,
  isOpen,
  onToggle,
  onNavigate,
}: {
  section: NavSection
  isOpen: boolean
  onToggle: () => void
  onNavigate: () => void
}) {
  // Plain link — no children
  if (!section.children) {
    return (
      <Link
        href={section.href!}
        onClick={onNavigate}
        className="flex items-center justify-between border-b border-white/8 py-4 font-(family-name:--font-display) text-xl font-light text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
      >
        {section.label}
        <span className="text-white/30 text-sm transition-colors group-hover:text-white/60">→</span>
      </Link>
    )
  }

  return (
    <div className="border-b border-white/8">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between py-4 text-left font-(family-name:--font-display) text-xl font-light text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
      >
        {section.label}
        <span
          className={`text-white/30 text-lg leading-none transition-transform duration-200 ${
            isOpen ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      {/* Accordion children */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "max-h-96 pb-3" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-0.5 pl-3">
          {section.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onNavigate}
              className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-light text-white/40 transition-all hover:bg-white/5 hover:text-white/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20"
            >
              {child.label}
              <span className="translate-x-0 text-xs text-white/0 transition-all group-hover:translate-x-1 group-hover:text-white/40">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────

export default function Navbar() {
  const [panelOpen, setPanelOpen] = React.useState(false)
  const [openSection, setOpenSection] = React.useState<string | null>(null)

  const closePanel = () => {
    setPanelOpen(false)
    setOpenSection(null)
  }

  const toggleSection = (label: string) =>
    setOpenSection((prev) => (prev === label ? null : label))

  return (
    <>
      {/* ── Fixed top bar ────────────────────────────────────────────────────── */}
      <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/8 bg-[#080808]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">

          {/* Left: hamburger */}
          <HamburgerButton onClick={() => setPanelOpen(true)} />

          {/* Centre: wordmark — absolutely positioned so it's always truly centred */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Wordmark size="sm" />
          </div>

          {/* Right: enquiry CTA */}
          <Link
            href="/contact"
            className="hidden rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium tracking-wide text-white/70 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white sm:inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
          >
            Make an enquiry
          </Link>

          {/* Mobile: invisible spacer keeps wordmark centred */}
          <div className="h-9 w-27.5 sm:hidden" aria-hidden="true" />
        </div>
      </header>

      {/* ── Backdrop ─────────────────────────────────────────────────────────── */}
      <div
        onClick={closePanel}
        aria-hidden="true"
        className={`fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-opacity duration-250 ${
          panelOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ── Slide panel ──────────────────────────────────────────────────────── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`fixed left-0 top-0 z-50 flex h-full w-full max-w-125 flex-col border-r border-white/8 bg-[#0A0A0A] transition-transform duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          panelOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between border-b border-white/8 px-7 py-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/30">
            Navigation
          </p>
          <CloseButton onClick={closePanel} />
        </div>

        {/* Panel body */}
        <div className="flex-1 overflow-y-auto px-7 pb-10 pt-5">

          {/* Intro card */}
          <div className="mb-6 rounded-xl border border-white/10 bg-white/4 p-5">
            <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white/35">
              Lucent Leases
            </p>
            <p className="text-[13px] font-light leading-relaxed text-white/45">
              Bridging the gap between housing need and quality supply — partnering with local authorities, landlords, and support services.
            </p>
          </div>

          {/* Nav sections */}
          <nav aria-label="Main navigation">
            {NAV.map((section) => (
              <PanelSection
                key={section.label}
                section={section}
                isOpen={openSection === section.label}
                onToggle={() => toggleSection(section.label)}
                onNavigate={closePanel}
              />
            ))}
          </nav>

          {/* Contact footer */}
          <div className="mt-8 border-t border-white/8 pt-6">
            <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white/25">
              Get in touch
            </p>
            <a
              href="mailto:hello@lucentleases.co.uk"
              className="font-(family-name:--font-display) text-lg font-light text-white/70 underline underline-offset-4 decoration-white/20 transition-colors hover:text-white hover:decoration-white/50 focus-visible:outline-none"
            >
              hello@lucentleases.co.uk
            </a>
          </div>
        </div>
      </div>
    </>
  )
}