import type React from "react"
import { cn } from "@/lib/utils"

export function Section({
  title,
  subtitle,
  children,
  className,
}: {
  title?: string
  subtitle?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={cn("mx-auto max-w-6xl px-4 py-10 md:py-14", className)}>
      {(title || subtitle) && (
        <header className="mb-6 space-y-1">
          {title && <h2 className="text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">{title}</h2>}
          {subtitle && <p className="text-sm text-neutral-600 md:text-base">{subtitle}</p>}
        </header>
      )}
      {children}
    </section>
  )
}
