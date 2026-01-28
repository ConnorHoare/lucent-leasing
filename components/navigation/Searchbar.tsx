"use client"

import * as React from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type SearchbarProps = {
  queryKey?: string
  placeholder?: string
  className?: string
  inputClassName?: string
  buttonClassName?: string
}

const Searchbar: React.FC<SearchbarProps> = ({
  queryKey = "q",
  placeholder = "Search…",
  className,
  inputClassName,
  buttonClassName,
}) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const urlValue = searchParams.get(queryKey) ?? ""
  const [value, setValue] = React.useState(urlValue)

  // Keep input in sync with browser back/forward or external navigation
  React.useEffect(() => {
    setValue(urlValue)
  }, [urlValue])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const params = new URLSearchParams(searchParams.toString())
    const trimmed = value.trim()

    if (!trimmed) params.delete(queryKey)
    else params.set(queryKey, trimmed)

    const qs = params.toString()
    router.push(qs ? `${pathname}?${qs}` : pathname)
  }

  const clear = () => {
    setValue("")
    const params = new URLSearchParams(searchParams.toString())
    params.delete(queryKey)
    const qs = params.toString()
    router.push(qs ? `${pathname}?${qs}` : pathname)
  }

  return (
    <form onSubmit={onSubmit} className={cn("w-full", className)}>
      <label className="sr-only" htmlFor="site-search">
        Search
      </label>

      <div className="relative flex items-center gap-2">
        <div className="relative w-full">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-500"
            aria-hidden="true"
          />

          <Input
            id="site-search"
            type="search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            enterKeyHint="search"
            className={cn("h-10 pl-9 pr-16", inputClassName)}
          />

          {value.trim().length > 0 && (
            <button
              type="button"
              onClick={clear}
              className={cn(
                "absolute right-2 top-1/2 -translate-y-1/2 rounded-sm px-2 py-1 text-xs font-medium tracking-wide text-zinc-600 hover:text-zinc-900",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/15 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              )}
              aria-label="Clear search"
            >
              Clear
            </button>
          )}
        </div>

        <button
          type="submit"
          className={cn(
            // Dyson-like: minimal outline button, no heavy fill
            "h-10 whitespace-nowrap rounded-md border border-zinc-200 bg-white px-4 text-sm font-medium tracking-wide text-zinc-800",
            "hover:border-zinc-300 hover:text-zinc-950",
            "transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/15 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
            buttonClassName
          )}
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default Searchbar
