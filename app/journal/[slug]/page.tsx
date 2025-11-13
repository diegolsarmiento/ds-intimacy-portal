import Link from 'next/link'
import { notFound } from 'next/navigation'
import { posts, findPost } from '@/lib/posts'

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params
  const post = findPost(slug)
  if (!post) return { title: 'Journal' }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/journal/${post.slug}`,
      type: 'article',
    },
  }
}

export default async function PostPage(
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params
  const post = findPost(slug)
  if (!post) return notFound()

  const idx = posts.findIndex(p => p.slug === post.slug)
  const prev = idx > 0 ? posts[idx - 1] : null
  const next = idx < posts.length - 1 ? posts[idx + 1] : null

  return (
    <main className="section-glow mx-auto max-w-3xl px-4 py-24">
      <div className="flex items-center justify-between gap-6">
        <Link href="/journal" className="text-sm underline underline-offset-4 opacity-80 hover:opacity-100">
          ← Back to Journal
        </Link>
        <time dateTime={post.date} className="text-xs opacity-60">
          {formatDate(post.date)}
        </time>
      </div>

      <h1 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
        <span className="text-glow">{post.title}</span>
      </h1>

      {post.tags?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map(t => (
            <span key={t} className="rounded-full border px-2.5 py-1 text-xs opacity-80 border-glow">
              <span className="text-glow">{t}</span>
            </span>
          ))}
        </div>
      ) : null}

      <article className="mt-8 space-y-5 leading-relaxed opacity-90">
        {post.body ? (
          post.body.split('\n\n').map((para, i) => <p key={i}>{para}</p>)
        ) : (
          <p>
            This essay is coming soon. Join the circle to get it first—then come back and let it linger on your skin.
          </p>
        )}
      </article>

      <div className="mt-12 h-px w-full border-t" />

      <nav aria-label="Post navigation" className="mt-6 flex items-center justify-between gap-4">
        <div>
          {prev ? (
            <Link href={`/journal/${prev.slug}`} className="text-sm underline underline-offset-4 opacity-80 hover:opacity-100">
              ← {prev.title}
            </Link>
          ) : (
            <span className="text-sm opacity-40">Start</span>
          )}
        </div>
        <div>
          {next ? (
            <Link href={`/journal/${next.slug}`} className="text-sm underline underline-offset-4 opacity-80 hover:opacity-100">
              {next.title} →
            </Link>
          ) : (
            <span className="text-sm opacity-40">End</span>
          )}
        </div>
      </nav>
    </main>
  )
}
