import { Section } from "/home/gr3ytrac3/Desktop/website/Official-Site/main-site/components/section"

export default function AboutPage() {
  return (
    <Section title="About" subtitle="Who I am and how I work.">
      <div className="prose prose-neutral max-w-none prose-p:my-3 prose-li:my-1">
        <p>
          I operate in the deepest layers of system architecture — the Linux kernel. My work focuses on exploitation,
          syscall manipulation, eBPF telemetry & evasion, and LSM bypass research in support of offensive security and
          red team objectives.
        </p>
        <p>
          I value clarity, restraint, and responsibility. That means reproducible results, minimal surface area, and
          explicit disclosure paths.
        </p>
        <h3>Principles</h3>
        <ul>
          <li>Evidence over aesthetics — code, harnesses, and traces.</li>
          <li>Operate from the kernel outward — understand the substrate.</li>
          <li>Responsible disclosure — strengthen the ecosystem.</li>
        </ul>
      </div>
    </Section>
  )
}
