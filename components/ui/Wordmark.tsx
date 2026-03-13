import Link from "next/link"

type WordmarkProps = {
  href?: string
  className?: string
  /** "md" is the homepage large treatment, "sm" is the navbar compact version */
  size?: "sm" | "md"
}

/**
 * Lucent Leases wordmark.
 * "Lucent" renders in gold italic; "Leasing" in cream.
 * Uses Cormorant Garamond (loaded via globals.css).
 */
export default function Wordmark({ href = "/", className = "", size = "sm" }: WordmarkProps) {
  const textSize = size === "md" ? "text-4xl sm:text-5xl" : "text-2xl"

  return (
    <Link
      href={href}
      aria-label="Lucent Leases — home"
      className={`inline-flex items-baseline gap-0 font-(family-name:--font-display) font-light tracking-[0.12em] uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]/40 rounded-sm ${textSize} ${className}`}
    >
      <em className="not-italic text-white text-3xl">Lucent</em>
    </Link>
  )
}