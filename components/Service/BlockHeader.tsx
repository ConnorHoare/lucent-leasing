import type { TextVariant } from "./types"

export function BlockHeader({
  eyebrow,
  title,
  body,
  textVariant,
}: {
  eyebrow: string
  title: string
  body?: string
  textVariant: TextVariant
}) {
  const isLight = textVariant === "light"
  return (
    <div className="grid gap-6 md:grid-cols-12 md:items-end">
      <div className="md:col-span-5">
        <p className={isLight ? "text-xs font-semibold uppercase tracking-[0.18em] text-white/60" : "text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500"}>
          {eyebrow}
        </p>
        <h2 className={isLight ? "mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl" : "mt-3 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl"}>
          {title}
        </h2>
      </div>
      {body ? (
        <div className="md:col-span-7">
          <p className={isLight ? "text-sm leading-relaxed text-white/75" : "text-sm leading-relaxed text-zinc-700"}>{body}</p>
        </div>
      ) : null}
    </div>
  )
}
