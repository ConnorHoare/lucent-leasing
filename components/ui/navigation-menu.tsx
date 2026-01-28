import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { ChevronDownIcon } from "lucide-react"

function NavigationMenu({
  className,
  children,
  ...props
}: NavigationMenuPrimitive.Root.Props) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      className={cn(
        // Minimal, header-friendly container
        "relative flex max-w-max flex-1 items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
      <NavigationMenuPositioner />
    </NavigationMenuPrimitive.Root>
  )
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        // Slight spacing between items, still tight/clean
        "flex flex-1 list-none items-center justify-center gap-1",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  )
}

/**
 * Dyson-like: transparent trigger, subtle underline on hover/open.
 * No filled backgrounds, minimal ring, crisp typography.
 */
const navigationMenuTriggerStyle = cva(
  cn(
    "group/navigation-menu-trigger inline-flex h-10 w-max items-center justify-center",
    "px-3 py-2 text-sm font-medium tracking-wide",
    "text-zinc-800 hover:text-zinc-950",
    "bg-transparent rounded-none",
    "transition-colors",
    "outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/20 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
    "disabled:pointer-events-none disabled:opacity-50",
    // Underline treatment
    "relative",
    "after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-zinc-900",
    "after:origin-left after:scale-x-0 after:transition-transform after:duration-200",
    "hover:after:scale-x-100",
    "data-open:after:scale-x-100 data-popup-open:after:scale-x-100",
    "data-open:text-zinc-950 data-popup-open:text-zinc-950"
  )
)

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: NavigationMenuPrimitive.Trigger.Props) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), className)}
      {...props}
    >
      {children}
      <ChevronDownIcon
        className="ml-1 size-3 text-zinc-700 transition-transform duration-200 group-data-open/navigation-menu-trigger:rotate-180 group-data-popup-open/navigation-menu-trigger:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationMenuContent({
  className,
  ...props
}: NavigationMenuPrimitive.Content.Props) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        // Keep motion subtle + premium
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out",
        "data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out",
        "data-[motion=from-end]:slide-in-from-right-6 data-[motion=from-start]:slide-in-from-left-6",
        "data-[motion=to-end]:slide-out-to-right-6 data-[motion=to-start]:slide-out-to-left-6",
        "ease-[cubic-bezier(0.22,1,0.36,1)] duration-200",
        // Content padding + clean focus behaviour
        "p-2 h-full w-auto",
        "**:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuPositioner({
  className,
  side = "bottom",
  sideOffset = 10,
  align = "start",
  alignOffset = 0,
  ...props
}: NavigationMenuPrimitive.Positioner.Props) {
  return (
    <NavigationMenuPrimitive.Portal>
      <NavigationMenuPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        className={cn(
          "isolate z-50 h-[var(--positioner-height)] w-[var(--positioner-width)] max-w-[var(--available-width)]",
          "transition-[top,left,right,bottom] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
          "data-[instant]:transition-none",
          className
        )}
        {...props}
      >
        <NavigationMenuPrimitive.Popup
          className={cn(
            // Dyson-ish: white panel, light border, very subtle shadow, modest radius
            "bg-white text-zinc-900 border border-zinc-200",
            "shadow-[0_10px_30px_-20px_rgba(0,0,0,0.35)]",
            "rounded-md",
            "outline-none",
            "transition-all ease-[cubic-bezier(0.22,1,0.36,1)]",
            "data-[ending-style]:scale-[0.98] data-[ending-style]:opacity-0 data-[ending-style]:duration-150",
            "data-[starting-style]:scale-[0.98] data-[starting-style]:opacity-0",
            "xs:w-(--popup-width) relative h-(--popup-height) w-(--popup-width) origin-(--transform-origin)"
          )}
        >
          <NavigationMenuPrimitive.Viewport className="relative size-full overflow-hidden" />
        </NavigationMenuPrimitive.Popup>
      </NavigationMenuPrimitive.Positioner>
    </NavigationMenuPrimitive.Portal>
  )
}

function NavigationMenuLink({
  className,
  ...props
}: NavigationMenuPrimitive.Link.Props) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        // Minimal list item: no filled hover, crisp text, gentle focus ring
        "flex items-center gap-2",
        "px-3 py-2 text-sm text-zinc-800 hover:text-zinc-950",
        "rounded-sm",
        "transition-colors",
        "outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/20 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
        // Active state: slight emphasis without background blocks
        "data-active:font-medium data-active:text-zinc-950",
        "[[data-slot=navigation-menu-content]_&]:rounded-sm",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.Icon>) {
  return (
    <NavigationMenuPrimitive.Icon
      data-slot="navigation-menu-indicator"
      className={cn(
        "top-full z-[1] flex h-2 items-end justify-center overflow-hidden",
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out",
        "data-[state=hidden]:fade-out data-[state=visible]:fade-in",
        className
      )}
      {...props}
    >
      {/* Little “pointer” matches the white panel + border */}
      <div className="relative top-[60%] h-2 w-2 rotate-45 bg-white border border-zinc-200 shadow-sm" />
    </NavigationMenuPrimitive.Icon>
  )
}

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuPositioner,
}
