export type Post = {
  slug: string
  title: string
  excerpt: string
  date: string
  tags: string[]
  readingTime: string
  body: string
}

export const hero = {
  title: "Offensive Kernel Security Engineering",
  tagline: "Linux kernel exploitation, syscall manipulation, eBPF telemetry & evasion, and LSM bypass research.",
  ctas: [
    { href: "/research", label: "View research" },
    { href: "/advisories", label: "Advisories & ZDI" },
  ],
}

export const focus = [
  "Reproducing and weaponizing kernel CVEs with responsible disclosure.",
  "Designing stealthy ring 0 tooling for red team operations.",
  "Researching eBPF-based telemetry, stealth, and bypass techniques.",
]

export const advisories = [
  {
    id: "ZDI-2025-XXX",
    title: "Placeholder advisory (ZDI goal tracking)",
    vendor: "TBD",
    status: "In research",
    date: "2025-07-01",
  },
]

export const research = [
  {
    title: "Syscall proxying strategies in confined environments",
    summary: "Explores syscall-level indirection to evade userland hooks and static policy enforcement.",
  },
  {
    title: "eBPF for stealth telemetry and defensive bypass",
    summary: "Tradeoffs and detection contours of eBPF-based implants vs LSM-based interception.",
  },
  {
    title: "Practical LSM chaining and selective bypass",
    summary: "Granular hook selection to minimize signal while retaining operational control.",
  },
]

export const posts: Post[] = [
  {
    slug: "kernel-cve-reproduction-methodology",
    title: "Kernel CVE Reproduction Methodology: From Patch to PoC",
    excerpt:
      "A practical workflow to reproduce and validate Linux kernel CVEs, including triage, patch diffing, and harness design.",
    date: "2025-07-15",
    tags: ["kernel", "cve", "exploitation"],
    readingTime: "7 min",
    body: `
This post outlines a repeatable approach for reproducing Linux kernel CVEs:

1. Triage and scope the subsystem, commit, and environment.
2. Patch diff to identify vulnerable paths and object lifetimes.
3. Recreate the preconditions with a minimal harness (syzkaller or custom).
4. Validate crash signature and controllability.
5. Iterate exploitation with memory layout hints and fault oracles.

Artifacts and harness templates coming soon.
`.trim(),
  },
  {
    slug: "syscall-manipulation-primer",
    title: "Primer: Syscall Manipulation for Red Team Operations",
    excerpt: "Notes on syscall proxying, tracing boundaries, and evading basic userland hookers.",
    date: "2025-06-30",
    tags: ["syscall", "red-team"],
    readingTime: "5 min",
    body: `
Notes on syscall manipulation:

- Proxying entry points to move decision boundaries.
- Avoiding LD_PRELOAD and userland interceptors.
- Keeping surface area minimal; only change what you must.
`.trim(),
  },
]
