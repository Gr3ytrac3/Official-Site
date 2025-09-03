"use client"

/**
 * Subtle, readable background:
 * - Warm off-white base
 * - Faint radial vignette
 * - Soft reading grid
 * - Low-opacity noise overlay
 * Respects prefers-reduced-motion (less shifting)
 */
export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      {/* Base gradient + vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 800px at 80% -10%, rgba(0,0,0,0.06), rgba(0,0,0,0) 50%), radial-gradient(1000px 600px at -10% 90%, rgba(0,0,0,0.04), rgba(0,0,0,0) 50%), linear-gradient(180deg, hsl(45 20% 98%) 0%, hsl(45 17% 96%) 60%, hsl(45 15% 95%) 100%)",
        }}
      />

      {/* Reading grid (very subtle) */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0f0f0f 1px, transparent 1px), linear-gradient(to bottom, #0f0f0f 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(900px 700px at 50% 30%, black, transparent 70%)",
        }}
      />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-multiply"
        style={{
          backgroundImage: "url(/textures/noise.png)",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      />
    </div>
  )
}