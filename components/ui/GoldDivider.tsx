/**
 * A short horizontal gold rule used as a visual rhythm element.
 */
export default function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-px bg-linear-to-r from-[#C9A84C] to-transparent ${className}`}
      aria-hidden="true"
    />
  )
}