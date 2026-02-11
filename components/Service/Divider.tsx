import type { TextVariant } from "./types"

export function Divider({ textVariant }: { textVariant: TextVariant }) {
  return <div className={textVariant === "light" ? "h-px w-full bg-white/12" : "h-px w-full bg-zinc-200"} />
}
