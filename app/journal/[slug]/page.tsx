import { notFound } from 'next/navigation'
import { findPost } from '@/lib/posts'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = findPost(params.slug)
  if (!post) return notFound()

  return (
    <main className="mx-auto max-w-3xl px-4 py-24">
      <p className="text-xs opacity-60">{formatDate(post.date)}</p>
      <h1 className="mt-1 text-3xl md:text-4xl font-semibold tracking-tight">{post.title}</h1>
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags?.map(t => <span key={t} className="rounded-full border px-2.5 py-1 text-xs opacity-70">{t}</span>)}
      </div>
      <article className="prose prose-neutral mt-8">
        <p>{post.body}</p>
      </article>
    </main>
  )
}
