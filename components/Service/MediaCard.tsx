import Image from "next/image"
import type { TextVariant } from "./types"

export function MediaCard({ src, alt, textVariant }: { src: string; alt: string; textVariant: TextVariant }) {
  const isLight = textVariant === "light"
  return (
    <div
      className={[
        "relative overflow-hidden rounded-3xl border shadow-sm",
        isLight ? "border-white/10 bg-white/5" : "border-zinc-200 bg-white",
      ].join(" ")}
    >
      <div className="relative aspect-16/10 w-full">
        <Image src={src} alt={alt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />
      </div>

      <div
        className={[
          "flex flex-col gap-2 border-t px-6 py-5 backdrop-blur",
          isLight ? "border-white/10 bg-black/20" : "border-zinc-200 bg-white/70",
        ].join(" ")}
      >
        <div className={isLight ? "flex items-center gap-2 text-sm text-white/75" : "flex items-center gap-2 text-sm text-zinc-700"}>
          <span className={isLight ? "inline-flex h-2 w-2 rounded-full bg-white/80" : "inline-flex h-2 w-2 rounded-full bg-zinc-950"} />
          <span className="font-medium">Typical response</span>
          <span className={isLight ? "text-white/55" : "text-zinc-500"}>within 1 working day</span>
        </div>
        <div className={isLight ? "text-xs font-medium tracking-wide text-white/55" : "text-xs font-medium tracking-wide text-zinc-600"}>
          Standards • Coordination • Communication
        </div>
      </div>
    </div>
  )
}
