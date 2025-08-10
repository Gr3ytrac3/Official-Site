import { Section } from "/home/gr3ytrac3/Desktop/website/Official-Site/main-site/components/section"
import { advisories } from "/home/gr3ytrac3/Desktop/website/Official-Site/main-site/lib/content"

export default function AdvisoriesPage() {
  return (
    <Section title="Advisories & ZDI Goals" subtitle="Tracking disclosures and 2025 ZDI submission goals.">
      <div className="rounded-lg border border-neutral-200 bg-white/80">
        <div className="grid grid-cols-4 gap-2 border-b border-neutral-200 px-4 py-3 text-sm font-medium text-neutral-900">
          <div>ID</div>
          <div>Title</div>
          <div>Vendor</div>
          <div className="text-right">Status</div>
        </div>
        <div>
          {advisories.map((a) => (
            <div key={a.id} className="grid grid-cols-4 gap-2 border-t border-neutral-200 px-4 py-3 text-sm">
              <div className="font-mono text-neutral-900">{a.id}</div>
              <div className="text-neutral-800">{a.title}</div>
              <div className="text-neutral-700">{a.vendor}</div>
              <div className="text-right text-neutral-700">{a.status}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 text-sm text-neutral-700">
        2025 ZDI submissions: 0/5 — public goal. Increment as work lands.
      </div>
    </Section>
  )
}
