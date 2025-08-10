"use client"

import React from "react"
import { usePathname } from "next/navigation"

export function ProgressBar() {
  const pathname = usePathname()
  const [progress, setProgress] = React.useState(0)
  const [visible, setVisible] = React.useState(false)
  const timerRef = React.useRef<number | null>(null)

  React.useEffect(() => {
    // Start fake progress when the path changes
    setVisible(true)
    setProgress(0)

    // Ramp up to 80%
    let current = 0
    const tick = () => {
      current = Math.min(current + Math.random() * 18, 80)
      setProgress(current)
      timerRef.current = window.setTimeout(tick, 120) as unknown as number
    }
    tick()

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  React.useEffect(() => {
    // Finish quickly after content paints
    const done = window.setTimeout(() => {
      setProgress(100)
      const hide = window.setTimeout(() => {
        setVisible(false)
        setProgress(0)
      }, 200)
      return () => clearTimeout(hide)
    }, 250)

    return () => clearTimeout(done)
  }, [pathname])

  if (!visible) return null

  return (
    <div aria-hidden="true" className="fixed left-0 right-0 top-0 z-[9999] h-[2px] bg-transparent">
      <div
        className="h-full origin-left bg-neutral-900/70 dark:bg-neutral-100/80 transition-transform"
        style={{ transform: `scaleX(${Math.max(progress, 5) / 100})` }}
      />
      {/* Soft shadow bloom */}
      <div
        className="absolute inset-x-0 top-0 h-[6px]"
        style={{
          background: "radial-gradient(closest-side, rgba(0,0,0,0.08), rgba(0,0,0,0))",
        }}
      />
    </div>
  )
}
