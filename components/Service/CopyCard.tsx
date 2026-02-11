import type { TextVariant } from "./types"

export function CopyCard({ title, body, textVariant }: { title: string; body: string; textVariant: TextVariant }) {
  const isLight = textVariant === "light"
  return (
    <div className={["rounded-3xl border p-7 shadow-sm", isLight ? "border-white/10 bg-white/5" : "border-zinc-200 bg-white"].join(" ")}>
      <p className={isLight ? "text-sm font-semibold tracking-tight text-white" : "text-sm font-semibold tracking-tight text-zinc-950"}>{title}</p>
      <p className={isLight ? "mt-3 text-sm leading-relaxed text-white/75" : "mt-3 text-sm leading-relaxed text-zinc-700"}>{body}</p>
    </div>
  )
}
