"use client"

import Link from "next/link"
import React from "react"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/advisories", label: "Advisories" },
  { href: "/lab", label: "Lab" },
  { href: "/blog", label: "Blog" },
  { href: "/disclosure", label: "Disclosure" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/60 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-lg font-semibold tracking-tight text-neutral-900">CyberdevHq</span>
          <span className="hidden text-sm text-neutral-500 sm:inline">Offensive Kernel Security</span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900",
                  active && "text-neutral-900",
                )}
              >
                {item.label}
              </Link>
            )
          })}
          <Button asChild variant="default" className="ml-2">
            <Link href="/contact">Get in touch</Link>
          </Button>
        </nav>

        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-200 text-neutral-700 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((p) => !p)}
        >
          <Menu className="h-5 w-5" />
        </button>
        
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", open ? "block" : "hidden")}>
        <div className="mx-auto grid max-w-6xl gap-1 px-4 pb-4">
          {nav.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100",
                  active && "bg-neutral-100 text-neutral-900",
                )}
              >
                {item.label}
              </Link>
            )
          })}
          <Button asChild className="mt-2">
            <Link href="/contact">Get in touch</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
