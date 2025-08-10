import { Section } from "/home/gr3ytrac3/Desktop/website/Official-Site/main-site/components/section"
import { research } from "/home/gr3ytrac3/Desktop/website/Official-Site/main-site/lib/content"

export default function ResearchPage() {
  return (
    <Section title="Research" subtitle="Work in progress and notes.">
      <div className="grid gap-4 md:grid-cols-2">
        {research.map((r) => (
          <article key={r.title} className="rounded-lg border border-neutral-200 bg-white/80 p-5">
            <h3 className="text-base font-semibold text-neutral-900">{r.title}</h3>
            <p className="mt-2 text-sm text-neutral-700">{r.summary}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
