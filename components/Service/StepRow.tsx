import type { TextVariant } from "./types"

export function StepRow({
  index,
  title,
  description,
  textVariant,
}: {
  index: number
  title: string
  description: string
  textVariant: TextVariant
}) {
  const isLight = textVariant === "light"
  return (
    <div className={["flex items-start gap-4 rounded-3xl border p-6 shadow-sm", isLight ? "border-white/10 bg-white/5" : "border-zinc-200 bg-white"].join(" ")}>
      <div
        className={[
          "flex h-10 w-10 flex-none items-center justify-center rounded-2xl border text-xs font-semibold tracking-[0.18em]",
          isLight ? "border-white/12 bg-white/5 text-white/70" : "border-zinc-200 bg-zinc-50 text-zinc-600",
        ].join(" ")}
      >
        {String(index).padStart(2, "0")}
      </div>
      <div>
        <p className={isLight ? "text-sm font-semibold tracking-tight text-white" : "text-sm font-semibold tracking-tight text-zinc-950"}>{title}</p>
        <p className={isLight ? "mt-2 text-sm leading-relaxed text-white/75" : "mt-2 text-sm leading-relaxed text-zinc-700"}>{description}</p>
      </div>
    </div>
  )
}
