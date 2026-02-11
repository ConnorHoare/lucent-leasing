import type { TextVariant } from "./types"

export function FeatureCard({
  title,
  description,
  textVariant,
}: {
  title: string
  description: string
  textVariant: TextVariant
}) {
  const isLight = textVariant === "light"
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-3xl border p-6 shadow-sm transition-transform duration-200 hover:-translate-y-0.5",
        isLight ? "border-white/10 bg-white/5" : "border-zinc-200 bg-white",
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <div
          className={[
            "absolute -top-24 left-1/2 h-48 w-[120%] -translate-x-1/2 rounded-full blur-2xl",
            isLight ? "bg-linear-to-r from-transparent via-white/10 to-transparent" : "bg-linear-to-r from-transparent via-zinc-100 to-transparent",
          ].join(" ")}
        />
      </div>
      <div className="relative">
        <p className={isLight ? "text-sm font-semibold tracking-tight text-white" : "text-sm font-semibold tracking-tight text-zinc-950"}>
          {title}
        </p>
        <p className={isLight ? "mt-2 text-sm leading-relaxed text-white/75" : "mt-2 text-sm leading-relaxed text-zinc-700"}>
          {description}
        </p>
      </div>
    </div>
  )
}
