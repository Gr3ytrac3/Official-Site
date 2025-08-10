"use client"

import type React from "react"
import { SiteHeader } from "/home/gr3ytrac3/Desktop/website/Official-Site/main-site/components/site-header"
import { SiteFooter } from "/home/gr3ytrac3/Desktop/website/Official-Site/main-site/components/site-footer"
import { PageTransition } from "/home/gr3ytrac3/Desktop/website/Official-Site/main-site/components/page-transition"
import { ProgressBar } from "/home/gr3ytrac3/Desktop/website/Official-Site/main-site/components/progress-bar"
import { Background } from "/home/gr3ytrac3/Desktop/website/Official-Site/main-site/components/background"

export default function SiteLayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh text-neutral-900">
      {/* Smooth scrolling without adding flashy motion */}
      <style jsx global>{`
        html { scroll-behavior: smooth; }
        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
        }
      `}</style>

      <ProgressBar />
      <Background />
      <SiteHeader />
      <main role="main">
        <PageTransition>{children}</PageTransition>
      </main>
      <SiteFooter />
    </div>
  )
}
