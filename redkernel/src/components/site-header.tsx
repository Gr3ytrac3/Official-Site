"use client"

import Link from "next/link"
import React from "react"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export function SiteHeader() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/60 bg-white/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-neutral-900">
          CyberDevHq
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium text-neutral-700 hover:text-neutral-900",
              pathname === "/" && "text-neutral-900"
            )}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={cn(
              "text-sm font-medium text-neutral-700 hover:text-neutral-900",
              pathname === "/about" && "text-neutral-900"
            )}
          >
            About
          </Link>
          <Link
            href="/research"
            className={cn(
              "text-sm font-medium text-neutral-700 hover:text-neutral-900",
              pathname === "/research" && "text-neutral-900"
            )}
          >
            Research
          </Link>
          <Link
            href="/advisories"
            className={cn(
              "text-sm font-medium text-neutral-700 hover:text-neutral-900",
              pathname === "/advisories" && "text-neutral-900"
            )}
          >
            Advisories
          </Link>
          <Link
            href="/lab"
            className={cn(
              "text-sm font-medium text-neutral-700 hover:text-neutral-900",
              pathname === "/lab" && "text-neutral-900"
            )}
          >
            Lab
          </Link>
          <Link
            href="/blog"
            className={cn(
              "text-sm font-medium text-neutral-700 hover:text-neutral-900",
              pathname === "/blog" && "text-neutral-900"
            )}
          >
            Blog
          </Link>
          <Link
            href="/disclosure"
            className={cn(
              "text-sm font-medium text-neutral-700 hover:text-neutral-900",
              pathname === "/disclosure" && "text-neutral-900"
            )}
          >
            Disclosure
          </Link>
          <Link
            href="/contact"
            className={cn(
              "text-sm font-medium text-neutral-700 hover:text-neutral-900",
              pathname === "/contact" && "text-neutral-900"
            )}
          >
            Contact
          </Link>
          <Button asChild variant="default" className="ml-4">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-200 text-neutral-700 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((p) => !p)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn("md:hidden", open ? "block" : "hidden")}>
        <div className="mx-auto px-4 py-4 bg-white border-t border-neutral-200">
          <Link
            href="/"
            className={cn(
              "block px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100",
              pathname === "/" && "bg-neutral-100 text-neutral-900"
            )}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={cn(
              "block px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100",
              pathname === "/about" && "bg-neutral-100 text-neutral-900"
            )}
          >
            About
          </Link>
          <Link
            href="/research"
            className={cn(
              "block px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100",
              pathname === "/research" && "bg-neutral-100 text-neutral-900"
            )}
          >
            Research
          </Link>
          <Link
            href="/advisories"
            className={cn(
              "block px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100",
              pathname === "/advisories" && "bg-neutral-100 text-neutral-900"
            )}
          >
            Advisories
          </Link>
          <Link
            href="/lab"
            className={cn(
              "block px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100",
              pathname === "/lab" && "bg-neutral-100 text-neutral-900"
            )}
          >
            Lab
          </Link>
          <Link
            href="/blog"
            className={cn(
              "block px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100",
              pathname === "/blog" && "bg-neutral-100 text-neutral-900"
            )}
          >
            Blog
          </Link>
          <Link
            href="/disclosure"
            className={cn(
              "block px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100",
              pathname === "/disclosure" && "bg-neutral-100 text-neutral-900"
            )}
          >
            Disclosure
          </Link>
          <Link
            href="/contact"
            className={cn(
              "block px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100",
              pathname === "/contact" && "bg-neutral-100 text-neutral-900"
            )}
          >
            Contact
          </Link>
          <Button asChild className="w-full mt-2">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}