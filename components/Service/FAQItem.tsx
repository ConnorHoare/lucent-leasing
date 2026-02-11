import type { FAQ, TextVariant } from "./types"

export function FaqItem({ q, a, textVariant }: FAQ & { textVariant: TextVariant }) {
  const isLight = textVariant === "light"
  return (
    <details className={["group rounded-3xl border p-6 shadow-sm", isLight ? "border-white/10 bg-white/5" : "border-zinc-200 bg-white"].join(" ")}>
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
        <span className={isLight ? "text-sm font-semibold text-white" : "text-sm font-semibold text-zinc-950"}>{q}</span>
        <span className={isLight ? "text-white/60" : "text-zinc-500"} aria-hidden="true">
          +
        </span>
      </summary>
      <p className={isLight ? "mt-3 text-sm leading-relaxed text-white/75" : "mt-3 text-sm leading-relaxed text-zinc-700"}>{a}</p>
    </details>
  )
}
