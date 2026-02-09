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
  "px-3 py-2 text-sm font-medium tracking-wide text-zinc-800 hover:text-zinc-950"

function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Lucent Leasing"
      className={[
        "inline-flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/15 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
        className,
      ].join(" ")}
    >
      <span className="text-base font-semibold tracking-tight text-zinc-950">
        Lucent
      </span>
    </Link>
  )
}

const Navbar = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="w-full border-b border-zinc-200 bg-white">
      <div className="mx-auto h-16 max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-full items-center md:grid md:grid-cols-3 md:gap-3">
          <div className="flex items-center gap-3 md:justify-start">
            <button
              type="button"
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-800 hover:border-zinc-300 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/15 focus-visible:ring-offset-2 focus-visible:ring-offset-white md:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>

              <span className="relative block h-4 w-4">
                <span
                  className={[
                    "absolute left-0 top-1/2 h-px w-4 bg-zinc-900",
                    "transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    open ? "rotate-45" : "-translate-y-2",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 top-1/2 h-px w-4 bg-zinc-900",
                    "transition-opacity duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    open ? "opacity-0" : "opacity-100",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 top-1/2 h-px w-4 bg-zinc-900",
                    "transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    open ? "-rotate-45" : "translate-y-2",
                  ].join(" ")}
                />
              </span>
            </button>

            {/* Desktop nav */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="items-center justify-start gap-1">
                <NavigationMenuItem>
                  <NavigationMenuLink href="/" className={navLinkClass}>
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="/about-us" className={navLinkClass}>
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`${navLinkClass} hover:cursor-pointer`}
                    
                  >
                    Services
                  </NavigationMenuTrigger>

                  <NavigationMenuContent className="min-w-60 p-2">
                    <NavigationMenuLink
                      href="/services/temporary-accommodation"
                      className={navLinkClass}
                    >
                      Temporary Accommodation
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      href="/services/self-contained-accommodation"
                      className={navLinkClass}
                    >
                      Self Contained Accommodation
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      href="/services/supported-accommodation"
                      className={navLinkClass}
                    >
                      Supported Accommodation
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      href="/services/leasing-and-property-sourcing"
                      className={navLinkClass}
                    >
                      Leasing and Property Sourcing
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      href="/services/property-management"
                      className={navLinkClass}
                    >
                      Property Management &amp; Oversight
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`${navLinkClass} hover:cursor-pointer`}
                  >
                    Areas
                  </NavigationMenuTrigger>

                  <NavigationMenuContent className="min-w-60 p-2">
                    <NavigationMenuLink
                      href="/areas/southampton"
                      className={navLinkClass}
                    >
                      Southampton
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      href="/areas/chichester"
                      className={navLinkClass}
                    >
                      Chichester
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/areas/gosport" className={navLinkClass}>
                      Gosport
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/areas/eastleigh" className={navLinkClass}>
                      Eastleigh
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      href="/areas/test-valley"
                      className={navLinkClass}
                    >
                      Test Valley
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/areas/rushmoor" className={navLinkClass}>
                      Rushmoor
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/areas/worthing" className={navLinkClass}>
                      Worthing
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/areas/eastbourne" className={navLinkClass}>
                      Eastbourne
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      href="/areas/bognor-regis"
                      className={navLinkClass}
                    >
                      Bognor Regis
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="/contact" className={navLinkClass}>
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CENTER: logo (always centered) */}
          <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:flex md:justify-center">
            <Logo />
          </div>

          {/* RIGHT: desktop search; mobile spacer to keep logo centered */}
          <div className="ml-auto flex items-center justify-end md:ml-0">
            <div className="hidden w-full max-w-sm md:block">
              <Searchbar placeholder="Search…" />
            </div>

            {/* Spacer (mobile only) to balance hamburger width so logo stays centered */}
            <div className="h-10 w-10 md:hidden" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={[
          "md:hidden overflow-hidden border-t border-zinc-200 bg-white",
          open ? "max-h-96" : "max-h-0",
          "transition-[max-height] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
        ].join(" ")}
      >
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <Searchbar className="mb-4" placeholder="Search…" />

          <nav className="flex flex-col">
            <Link
              href="/"
              className="py-2 text-sm font-medium tracking-wide text-zinc-800 hover:text-zinc-950"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="py-2 text-sm font-medium tracking-wide text-zinc-800 hover:text-zinc-950"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="py-2 text-sm font-medium tracking-wide text-zinc-800 hover:text-zinc-950"
              onClick={() => setOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/areas"
              className="py-2 text-sm font-medium tracking-wide text-zinc-800 hover:text-zinc-950"
              onClick={() => setOpen(false)}
            >
              Areas
            </Link>
            <Link
              href="/contact"
              className="py-2 text-sm font-medium tracking-wide text-zinc-800 hover:text-zinc-950"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
