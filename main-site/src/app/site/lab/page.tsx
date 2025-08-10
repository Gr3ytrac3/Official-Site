import { Section } from "/home/gr3ytrac3/Desktop/website/Official-Site/main-site/components/section"

export default function LabPage() {
  return (
    <Section title="Lab" subtitle="Targets, tooling, and execution environment (sanitized).">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-neutral-200 bg-white/80 p-5">
          <h3 className="text-base font-semibold text-neutral-900">Targets</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700">
            <li>Linux kernel (various LTS series)</li>
            <li>Syscall surfaces and LSMs</li>
            <li>eBPF programs and maps</li>
          </ul>
        </div>
        <div className="rounded-lg border border-neutral-200 bg-white/80 p-5">
          <h3 className="text-base font-semibold text-neutral-900">Tooling</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700">
            <li>Syzkaller, AFL++</li>
            <li>GDB, QEMU</li>
            <li>IDA Pro, Ghidra</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}
