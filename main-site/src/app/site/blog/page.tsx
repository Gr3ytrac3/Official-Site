import Link from "next/link"
import { Section } from "/home/gr3ytrac3/Desktop/website/Official-Site/main-site/components/section"
import { posts } from "/home/gr3ytrac3/Desktop/website/Official-Site/main-site/lib/content"

export default function BlogPage() {
  return (
    <Section title="Blog" subtitle="Short, direct write-ups.">
      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((p) => (
          <article key={p.slug} className="rounded-lg border border-neutral-200 bg-white/80 p-5">
            <h3 className="text-base font-semibold text-neutral-900">
              <Link className="hover:underline" href={`/blog/${p.slug}`}>
                {p.title}
              </Link>
            </h3>
            <div className="mt-1 flex items-center gap-3 text-xs text-neutral-600">
              <span>{new Date(p.date).toLocaleDateString()}</span>
              <span>•</span>
              <span>{p.readingTime}</span>
            </div>
            <p className="mt-2 text-sm text-neutral-700">{p.excerpt}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
