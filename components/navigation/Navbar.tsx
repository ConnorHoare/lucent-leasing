import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Searchbar from "./Searchbar"

const Navbar = () => {
  return (
    <header className="w-full border-b border-zinc-200 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center px-4 sm:px-6 justify-between gap-4">
        <NavigationMenu className="w-full">
          <NavigationMenuList className="w-full justify-center gap-2">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className="px-2 py-2 text-sm font-medium tracking-wide text-zinc-800 hover:text-zinc-950"
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about"
                className="px-2 py-2 text-sm font-medium tracking-wide text-zinc-800 hover:text-zinc-950"
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/services"
                className="px-2 py-2 text-sm font-medium tracking-wide text-zinc-800 hover:text-zinc-950"
              >
                Services
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className="px-2 py-2 text-sm font-medium tracking-wide text-zinc-800 hover:text-zinc-950"
              >
                Areas
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/contact"
                className="px-2 py-2 text-sm font-medium tracking-wide text-zinc-800 hover:text-zinc-950"
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="w-full max-w-xs sm:max-w-sm">
          <Searchbar placeholder="Search…" />
        </div>
      </div>
    </header>
  )
}

export default Navbar
