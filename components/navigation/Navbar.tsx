"use client"
import * as React from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Searchbar from "@/components/navigation/Searchbar"
import Link from "next/link"

const navLinkClass =
  "whitespace-nowrap px-3 py-2 text-sm font-medium tracking-wide text-white/75 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-md"

function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Lucent Leasing"
      className={[
        "inline-flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        className,
      ].join(" ")}
    >
      <span className="text-base font-semibold tracking-tight text-white">
        Lucent
      </span>
    </Link>
  )
}

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")

/**
 * Auto-mobile: switch to mobile layout if ANY overlap/collision would occur.
 * We detect by reading DOM rects for:
 * - left nav cluster
 * - center logo
 * - right search cluster
 * If their rects overlap (or get within a small buffer), we force mobile.
 */
function useAutoMobileCollision() {
  const headerRowRef = React.useRef<HTMLDivElement | null>(null)
  const leftRef = React.useRef<HTMLDivElement | null>(null)
  const logoRef = React.useRef<HTMLDivElement | null>(null)
  const rightRef = React.useRef<HTMLDivElement | null>(null)

  const [forceMobile, setForceMobile] = React.useState(false)

  const rectsOverlap = (a: DOMRect, b: DOMRect, buffer = 0) => {
    return !(
      a.right + buffer < b.left ||
      a.left - buffer > b.right ||
      a.bottom + buffer < b.top ||
      a.top - buffer > b.bottom
    )
  }

  const measure = React.useCallback(() => {
    const row = headerRowRef.current
    const left = leftRef.current
    const logo = logoRef.current
    const right = rightRef.current
    if (!row || !left || !logo || !right) return

    const buffer = 6 // switch slightly before "touching"
    const l = left.getBoundingClientRect()
    const c = logo.getBoundingClientRect()
    const r = right.getBoundingClientRect()

    const collideLeftLogo = rectsOverlap(l, c, buffer)
    const collideLogoRight = rectsOverlap(c, r, buffer)
    const collideLeftRight = rectsOverlap(l, r, buffer)

    setForceMobile(collideLeftLogo || collideLogoRight || collideLeftRight)
  }, [])

  React.useEffect(() => {
    measure()

    const ro = new ResizeObserver(() => measure())
    if (headerRowRef.current) ro.observe(headerRowRef.current)
    if (leftRef.current) ro.observe(leftRef.current)
    if (logoRef.current) ro.observe(logoRef.current)
    if (rightRef.current) ro.observe(rightRef.current)

    const onResize = () => measure()
    window.addEventListener("resize", onResize)

    return () => {
      ro.disconnect()
      window.removeEventListener("resize", onResize)
    }
  }, [measure])

  return { forceMobile, headerRowRef, leftRef, logoRef, rightRef }
}

const Navbar = () => {
  const [open, setOpen] = React.useState(false)

  const [mobileOpen, setMobileOpen] = React.useState<{
    about: boolean
    what: boolean
    councils: boolean
    landlords: boolean
  }>({ about: false, what: false, councils: false, landlords: false })

  const { forceMobile, headerRowRef, leftRef, logoRef, rightRef } =
    useAutoMobileCollision()

  // If we flip into mobile mode, close the desktop-only states; if we flip back, close the mobile panel too.
  React.useEffect(() => {
    setOpen(false)
    setMobileOpen({ about: false, what: false, councils: false, landlords: false })
  }, [forceMobile])

  const showMobile = forceMobile

  return (
    <header className="w-full border-b border-white/10 bg-black">
      {/* Wider max width to delay collapse */}
      <div className="mx-auto h-16 w-full max-w-350 px-4 sm:px-6">
        {/* We keep logo centered on desktop AND on mobile */}
        <div ref={headerRowRef} className="relative flex h-full items-center">
          {/* LEFT: desktop nav OR mobile hamburger */}
          <div ref={leftRef} className="flex min-w-0 flex-1 items-center">
            {/* Mobile hamburger (shown when showMobile) */}
            <button
              type="button"
              className={[
                "relative inline-flex h-10 w-10 flex-none items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/75 hover:border-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                showMobile ? "inline-flex" : "hidden md:inline-flex",
              ].join(" ")}
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <span className="relative block h-4 w-4">
                <span
                  className={[
                    "absolute left-0 top-1/2 h-px w-4 bg-white",
                    "transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    open ? "rotate-45" : "-translate-y-2",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 top-1/2 h-px w-4 bg-white",
                    "transition-opacity duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    open ? "opacity-0" : "opacity-100",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 top-1/2 h-px w-4 bg-white",
                    "transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    open ? "-rotate-45" : "translate-y-2",
                  ].join(" ")}
                />
              </span>
            </button>

            {/* Desktop nav (shown when NOT showMobile) */}
            <div className={showMobile ? "hidden" : "hidden md:block"}>
              <NavigationMenu>
                <NavigationMenuList className="flex flex-nowrap items-center justify-start gap-1">
                  {/* 1) About Us */}
                  <NavigationMenuItem className="shrink-0">
                    <NavigationMenuTrigger className={`${navLinkClass} hover:cursor-pointer`}>
                      About Us
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="min-w-64 border border-white/10 bg-black/95 p-2 text-white shadow-lg backdrop-blur">
                      <NavigationMenuLink href="/about-us#who-we-are" className={navLinkClass}>
                        Who We Are
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/about-us#our-team" className={navLinkClass}>
                        Our Team
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/about-us#our-purpose-and-values" className={navLinkClass}>
                        Our Purpose &amp; Values
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/about-us#our-strategy" className={navLinkClass}>
                        Our Strategy
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* 2) What We Do */}
                  <NavigationMenuItem className="shrink-0">
                    <NavigationMenuTrigger className={`${navLinkClass} hover:cursor-pointer`}>
                      What We Do
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="min-w-72 border border-white/10 bg-black/95 p-2 text-white shadow-lg backdrop-blur">
                      <NavigationMenuLink
                        href={`/what-we-do/${slugify("Nightly Self-Contained")}`}
                        className={navLinkClass}
                      >
                        Nightly Self-Contained
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href={`/what-we-do/${slugify("Active Opportunities Pathway")}`}
                        className={navLinkClass}
                      >
                        Active Opportunities Pathway
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href={`/what-we-do/${slugify("Supported Shared Accommodation")}`}
                        className={navLinkClass}
                      >
                        Supported Shared Accommodation
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* 3) Services for Councils */}
                  <NavigationMenuItem className="shrink-0">
                    <NavigationMenuTrigger className={`${navLinkClass} hover:cursor-pointer`}>
                      Services for Councils
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="min-w-72 border border-white/10 bg-black/95 p-2 text-white shadow-lg backdrop-blur">
                      <NavigationMenuLink
                        href={`/services-for-councils#${slugify("Services for Councils")}`}
                        className={navLinkClass}
                      >
                        Services for Councils
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href={`/services-for-councils#${slugify("Partnership Approach")}`}
                        className={navLinkClass}
                      >
                        Partnership Approach
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href={`/services-for-councils#${slugify("Supporting Placements")}`}
                        className={navLinkClass}
                      >
                        Supporting Placements
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* 4) Landlord Partners */}
                  <NavigationMenuItem className="shrink-0">
                    <NavigationMenuTrigger className={`${navLinkClass} hover:cursor-pointer`}>
                      Landlord Partners
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="min-w-80 border border-white/10 bg-black/95 p-2 text-white shadow-lg backdrop-blur">
                      <NavigationMenuLink
                        href={`/landlord-partners#${slugify("How We Work")}`}
                        className={navLinkClass}
                      >
                        How We Work
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href={`/landlord-partners#${slugify("Where We Work")}`}
                        className={navLinkClass}
                      >
                        Where We Work
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href={`/landlord-partners#${slugify("Contact Our Landlord Partnership Team")}`}
                        className={navLinkClass}
                      >
                        Contact Our Landlord Partnership Team
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* 5) Contact Us */}
                  <NavigationMenuItem className="shrink-0">
                    <NavigationMenuLink href="/contact" className={navLinkClass}>
                      Contact Us
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          {/* CENTER: logo always centered */}
          <div ref={logoRef} className="absolute left-1/2 -translate-x-1/2">
            <Logo />
          </div>

          {/* RIGHT: search (hidden in mobile) */}
          <div ref={rightRef} className="ml-auto flex min-w-0 flex-1 justify-end">
            <div className={showMobile ? "hidden" : "hidden md:block w-full max-w-sm"}>
              <Searchbar placeholder="Search…" />
            </div>

            {/* Mobile spacer to visually balance the hamburger width so logo remains centered */}
            <div className={showMobile ? "h-10 w-10" : "h-10 w-10 md:hidden"} aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Mobile panel (shown when showMobile) */}
      <div
        className={[
          showMobile ? "block" : "md:hidden",
          "overflow-hidden border-t border-white/10 bg-black",
          open ? "max-h-130" : "max-h-0",
          "transition-[max-height] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
        ].join(" ")}
      >
        <div className="mx-auto max-w-350 px-4 py-4 sm:px-6">
          <Searchbar className="mb-4" placeholder="Search…" />

          <nav className="flex flex-col">
            {/* About Us */}
            <button
              type="button"
              className="flex items-center justify-between py-2 text-left text-sm font-medium tracking-wide text-white/75 hover:text-white"
              onClick={() => setMobileOpen((s) => ({ ...s, about: !s.about }))}
              aria-expanded={mobileOpen.about}
            >
              <span>About Us</span>
              <span className="text-white/60">{mobileOpen.about ? "−" : "+"}</span>
            </button>
            <div className={mobileOpen.about ? "pb-2 pl-3" : "hidden"}>
              {["Who We Are", "Our Team", "Our Purpose & Values", "Our Strategy"].map((t) => (
                <Link
                  key={t}
                  href={
                    t === "Who We Are"
                      ? "/about-us#who-we-are"
                      : t === "Our Team"
                      ? "/about-us#our-team"
                      : t === "Our Purpose & Values"
                      ? "/about-us#our-purpose-and-values"
                      : "/about-us#our-strategy"
                  }
                  className="block py-2 text-sm font-medium tracking-wide text-white/65 hover:text-white"
                  onClick={() => {
                    setOpen(false)
                    setMobileOpen((s) => ({ ...s, about: false }))
                  }}
                >
                  {t}
                </Link>
              ))}
            </div>

            {/* What We Do */}
            <button
              type="button"
              className="flex items-center justify-between py-2 text-left text-sm font-medium tracking-wide text-white/75 hover:text-white"
              onClick={() => setMobileOpen((s) => ({ ...s, what: !s.what }))}
              aria-expanded={mobileOpen.what}
            >
              <span>What We Do</span>
              <span className="text-white/60">{mobileOpen.what ? "−" : "+"}</span>
            </button>
            <div className={mobileOpen.what ? "pb-2 pl-3" : "hidden"}>
              {["Nightly Self-Contained", "Active Opportunities Pathway", "Supported Shared Accommodation"].map((t) => (
                <Link
                  key={t}
                  href={`/what-we-do/${slugify(t)}`}
                  className="block py-2 text-sm font-medium tracking-wide text-white/65 hover:text-white"
                  onClick={() => {
                    setOpen(false)
                    setMobileOpen((s) => ({ ...s, what: false }))
                  }}
                >
                  {t}
                </Link>
              ))}
            </div>

            {/* Services for Councils */}
            <button
              type="button"
              className="flex items-center justify-between py-2 text-left text-sm font-medium tracking-wide text-white/75 hover:text-white"
              onClick={() => setMobileOpen((s) => ({ ...s, councils: !s.councils }))}
              aria-expanded={mobileOpen.councils}
            >
              <span>Services for Councils</span>
              <span className="text-white/60">{mobileOpen.councils ? "−" : "+"}</span>
            </button>
            <div className={mobileOpen.councils ? "pb-2 pl-3" : "hidden"}>
              {["Services for Councils", "Partnership Approach", "Supporting Placements"].map((t) => (
                <Link
                  key={t}
                  href={`/services-for-councils#${slugify(t)}`}
                  className="block py-2 text-sm font-medium tracking-wide text-white/65 hover:text-white"
                  onClick={() => {
                    setOpen(false)
                    setMobileOpen((s) => ({ ...s, councils: false }))
                  }}
                >
                  {t}
                </Link>
              ))}
            </div>

            {/* Landlord Partners */}
            <button
              type="button"
              className="flex items-center justify-between py-2 text-left text-sm font-medium tracking-wide text-white/75 hover:text-white"
              onClick={() => setMobileOpen((s) => ({ ...s, landlords: !s.landlords }))}
              aria-expanded={mobileOpen.landlords}
            >
              <span>Landlord Partners</span>
              <span className="text-white/60">{mobileOpen.landlords ? "−" : "+"}</span>
            </button>
            <div className={mobileOpen.landlords ? "pb-2 pl-3" : "hidden"}>
              {["How We Work", "Where We Work", "Contact Our Landlord Partnership Team"].map((t) => (
                <Link
                  key={t}
                  href={`/landlord-partners#${slugify(t)}`}
                  className="block py-2 text-sm font-medium tracking-wide text-white/65 hover:text-white"
                  onClick={() => {
                    setOpen(false)
                    setMobileOpen((s) => ({ ...s, landlords: false }))
                  }}
                >
                  {t}
                </Link>
              ))}
            </div>

            {/* Contact Us */}
            <Link
              href="/contact"
              className="py-2 text-sm font-medium tracking-wide text-white/75 hover:text-white"
              onClick={() => {
                setOpen(false)
                setMobileOpen({ about: false, what: false, councils: false, landlords: false })
              }}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
