/**
 * A small pill badge used in headers and the homepage to show trust signals.
 */
export default function TrustPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(201,168,76,0.2)] px-3 py-1 text-[11px] font-light tracking-wide text-[#F5F0E8]/50">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A84C]/70" aria-hidden="true" />
      {label}
    </span>
  )
}