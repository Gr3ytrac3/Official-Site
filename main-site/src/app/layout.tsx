import type React from "react"
import type { Metadata } from "next"
import SiteLayoutClient from "/home/gr3ytrac3/Desktop/website/Official-Site/main-site/src/app/site/SiteLayoutClient"

export const metadata: Metadata = {
  title: "RedKernel — Offensive Kernel Security Engineering",
  description:
    "Kernel exploitation, syscall manipulation, eBPF telemetry & evasion, LSM bypass research, and responsible disclosure.",
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <SiteLayoutClient children={children} />
}
