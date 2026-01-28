import * as React from "react"
import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Dyson-like: clean, neutral, public-sector friendly
        "w-full min-w-0 bg-white text-zinc-900 placeholder:text-zinc-500",
        "h-10 px-3 text-sm tracking-wide",
        // Crisp border, modest radius, no heavy shadow
        "border border-zinc-200 rounded-md",
        "transition-colors outline-none",
        // Focus: subtle ring + slightly darker border (accessible, not flashy)
        "focus-visible:border-zinc-300 focus-visible:ring-2 focus-visible:ring-zinc-900/15 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
        // File input basics kept (harmless)
        "file:inline-flex file:h-8 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        // Disabled / invalid states
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-red-500 aria-invalid:ring-2 aria-invalid:ring-red-500/15",
        className
      )}
      {...props}
    />
  )
}

export { Input }
