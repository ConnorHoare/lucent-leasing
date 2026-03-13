/**
 * AnimatedBackground
 * The atmospheric dark canvas with gold grid, glowing orbs, and noise texture.
 * Shared between HomeIntroOverlay and any full-bleed dark section.
 */
export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Subtle gold grid */}
      <div
        className="absolute inset-0 animate-[gridDrift_20s_ease-in-out_infinite_alternate]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,168,76,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Orb 1 — top right */}
      <div
        className="absolute -right-24 -top-24 h-150 w-150 animate-[orbFloat_14s_ease-in-out_infinite_alternate] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Orb 2 — bottom left */}
      <div
        className="absolute -bottom-12 left-[10%] h-100 w-100 animate-[orbFloat_18s_ease-in-out_infinite_alternate] rounded-full blur-[120px] [animation-delay:-6s]"
        style={{
          background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}