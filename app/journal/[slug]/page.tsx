import Link from 'next/link'
import { notFound } from 'next/navigation'
import { posts, findPost } from '@/lib/posts'

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

type Params = { slug: string }

function estimateReadingTime(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.round(words / 220))
  return { words, minutes }
}

export function generateStaticParams(): Params[] {
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const post = findPost(slug)
  if (!post) return { title: 'Journal' }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/journal/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/journal/${post.slug}`,
      type: 'article',
    },
  }
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const post = findPost(slug)
  if (!post) return notFound()

  const idx = posts.findIndex(p => p.slug === post.slug)
  const prev = idx > 0 ? posts[idx - 1] : null
  const next = idx < posts.length - 1 ? posts[idx + 1] : null

  const bodyText = post.body?.trim() || ''
  const rt = bodyText ? estimateReadingTime(bodyText) : null

  return (
    <main className="section-glow mx-auto max-w-3xl px-4 py-24">
      {/* Top bar */}
      <div className="flex items-center justify-between gap-6">
        <Link href="/journal" className="text-sm underline underline-offset-4 opacity-80 hover:opacity-100">
          ← Back to Journal
        </Link>

        <div className="flex items-center gap-3 text-xs opacity-60">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {rt ? <span>• {rt.minutes} min read</span> : null}
        </div>
      </div>

      {/* Title */}
      <h1 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
        <span className="text-glow">{post.title}</span>
      </h1>

      {/* Tags */}
      {post.tags?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map(t => (
            <span key={t} className="rounded-full border px-2.5 py-1 text-xs opacity-80 border-glow">
              <span className="text-glow">{t}</span>
            </span>
          ))}
        </div>
      ) : null}

      {/* Small “about” box (visual + SEO, no fluff) */}
      <section className="mt-8 rounded-2xl border border-glow p-5">
        <div className="text-sm font-semibold">About this essay</div>
        <p className="mt-2 text-sm opacity-80">
          A field note on intimacy, emotional design, and the small choices that shape how we feel online.
        </p>
        <div className="mt-3 flex flex-wrap gap-3 text-sm">
          <Link
            href="/newsletter"
            className="underline underline-offset-4 opacity-80 hover:opacity-100"
          >
            Receive new essays quietly, by email
          </Link>

          <span className="opacity-50">•</span>

          <Link
            href="/book"
            className="underline underline-offset-4 opacity-80 hover:opacity-100"
          >
            Read the book that shaped this essay
          </Link>
        </div>
      </section>

      {/* Body */}
      <article className="mt-10 space-y-6 leading-relaxed opacity-90">
        {post.body ? (
          post.body
            .split('\n\n')
            .map((para, i) => <p key={i}>{para}</p>)
        ) : (
          <p>
            This essay is coming soon. Join the circle to get it first—then come back and let it linger on your skin.
          </p>
        )}
      </article>

      {/* Bottom divider */}
      <div className="mt-14 h-px w-full border-t" />

      {/* Post navigation */}
      <nav aria-label="Post navigation" className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-glow p-5 card-hover">
          {prev ? (
            <>
              <div className="text-xs opacity-60">Previous</div>
              <Link
                href={`/journal/${prev.slug}`}
                className="mt-2 inline-block text-sm underline underline-offset-4 opacity-80 hover:opacity-100"
              >
                ← {prev.title}
              </Link>
            </>
          ) : (
            <div className="text-sm opacity-40">Start</div>
          )}
        </div>

        <div className="rounded-2xl border border-glow p-5 card-hover md:text-right">
          {next ? (
            <>
              <div className="text-xs opacity-60">Next</div>
              <Link
                href={`/journal/${next.slug}`}
                className="mt-2 inline-block text-sm underline underline-offset-4 opacity-80 hover:opacity-100"
              >
                {next.title} →
              </Link>
            </>
          ) : (
            <div className="text-sm opacity-40">End</div>
          )}
        </div>
      </nav>

      {/* Final CTA */}
      <section className="mt-10 text-center">
        <p className="opacity-80">
          If this stayed with you, join the circle. I send new essays quietly—no noise.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/newsletter" className="border px-6 py-2.5 rounded-md text-sm border-glow">
            Join the circle
          </Link>
          <Link href="/contact" className="underline underline-offset-4 text-sm opacity-80 hover:opacity-100">
            Invite Diego to speak
          </Link>
        </div>
      </section>
    </main>
  )
}
