import Link from "next/link"
import { Button } from "/home/gr3ytrac3/Desktop/website/Official-Site/main-site/components/ui/button"
import { Section } from "/home/gr3ytrac3/Desktop/website/Official-Site/main-site/components/section"
import { hero, focus, research as researchItems } from "/home/gr3ytrac3/Desktop/website/Official-Site/main-site/lib/content"

export default function HomePage() {
  return (
    <>
      <Section className="pt-10 md:pt-16">
        <div className="mx-auto max-w-3xl space-y-6">
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-4xl">
            {hero.title}
          </h1>
          <p className="text-base text-neutral-700 md:text-lg">{hero.tagline}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            {hero.ctas.map((cta) => (
              <Button key={cta.href} asChild>
                <Link href={cta.href}>{cta.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Focus" subtitle="Evidence-driven and responsibility-first.">
        <ul className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
          {focus.map((item) => (
            <li key={item} className="rounded-lg border border-neutral-200 bg-white/80 p-4 text-sm text-neutral-700">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Recent research notes" subtitle="Short, plain write-ups — no theatrics, just signal.">
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2">
          {researchItems.map((r) => (
            <article key={r.title} className="rounded-lg border border-neutral-200 bg-white/80 p-5">
              <h3 className="text-base font-semibold text-neutral-900">{r.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{r.summary}</p>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <Button variant="outline" asChild>
            <Link href="/research">Explore all research</Link>
          </Button>
        </div>
      </Section>
    </>
  )
}
