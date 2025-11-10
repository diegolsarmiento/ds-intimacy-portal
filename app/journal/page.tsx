import Link from 'next/link'
import { posts } from '@/lib/posts'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export default function JournalIndex() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-24">
      <header className="flex items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Journal</h1>
          <p className="mt-2 opacity-80">Field notes on intimacy, design, and the quiet revolutions between them.</p>
        </div>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {posts.map(p => (
          <article key={p.slug} className="rounded-2xl border p-6 hover:shadow-sm transition">
            <div className="text-xs opacity-60">{formatDate(p.date)}</div>
            <h2 className="mt-2 text-lg font-semibold">
              <Link href={`/journal/${p.slug}`}>{p.title}</Link>
            </h2>
            <p className="mt-2 text-sm opacity-80">{p.excerpt}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags?.map(t => <span key={t} className="rounded-full border px-2.5 py-1 text-xs opacity-70">{t}</span>)}
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
