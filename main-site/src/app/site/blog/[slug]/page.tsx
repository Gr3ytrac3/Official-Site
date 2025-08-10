import { notFound } from "next/navigation"
import { Section } from "/home/gr3ytrac3/Desktop/website/Official-Site/main-site/components/section"
import { posts } from "/home/gr3ytrac3/Desktop/website/Official-Site/main-site/lib/content"

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) return notFound()

  return (
    <Section>
      <article className="mx-auto max-w-3xl">
        <header className="mb-4">
          <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">{post.title}</h1>
          <div className="mt-2 flex items-center gap-3 text-xs text-neutral-600">
            <span>{new Date(post.date).toLocaleDateString()}</span>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span
                key={t}
                className="rounded-md border border-neutral-200 bg-white/80 px-2 py-0.5 text-xs text-neutral-700"
              >
                {t}
              </span>
            ))}
          </div>
        </header>
        <div className="prose prose-neutral max-w-none prose-p:my-3">
          {post.body.split("\n\n").map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </article>
    </Section>
  )
}
