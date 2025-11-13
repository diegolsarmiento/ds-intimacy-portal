import Link from 'next/link'
import { posts } from '@/lib/posts'

export const metadata = { title: 'Journal' }

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function JournalIndex() {
  if (!posts.length) {
    return (
      <main className="section-glow mx-auto max-w-6xl px-4 py-24 md:py-32">
        <header className="flex items-end justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Journal</h1>
            <p className="mt-2 opacity-80">Field notes on intimacy, design, and the quiet revolutions between them.</p>
          </div>
        </header>
        <p className="mt-12 opacity-70">New essays arriving soon. Stay close.</p>
      </main>
    )
  }

  const [featured, ...rest] = posts

  return (
    <main className="section-glow mx-auto max-w-6xl px-4 py-24 md:py-32">
      {/* Header */}
      <header className="flex items-end justify-between gap-6">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Journal <span className="text-glow">/ field notes</span>
          </h1>
          <p className="mt-2 opacity-80">Presence, tenderness, product—written softly, precisely.</p>
        </div>
        <Link
          href="/newsletter"
          className="hidden md:inline-flex rounded-md border px-4 py-2 text-sm border-glow"
        >
          Join the circle
        </Link>
      </header>

      {/* Featured hero card */}
      <article className="mt-10 relative overflow-hidden rounded-2xl border p-6 md:p-10 card-hover">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(60rem 40rem at 0% 0%, rgba(var(--rose),.12), transparent 60%), radial-gradient(60rem 40rem at 100% 100%, rgba(var(--lav),.12), transparent 60%)',
          }}
        />
        <div className="text-xs opacity-60">{formatDate(featured.date)}</div>
        <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
          <Link href={`/journal/${featured.slug}`} className="text-glow">
            {featured.title}
          </Link>
        </h2>
        <p className="mt-3 opacity-80 max-w-2xl">{featured.excerpt}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {featured.tags?.map((t) => (
            <span key={t} className="rounded-full border px-2.5 py-1 text-xs opacity-80 border-glow">
              <span className="text-glow">{t}</span>
            </span>
          ))}
        </div>
        <div className="mt-6">
          <Link
            href={`/journal/${featured.slug}`}
            className="inline-flex items-center rounded-md border px-4 py-2 text-sm opacity-90 hover:opacity-100 border-glow"
          >
            Read the essay
          </Link>
        </div>
      </article>

      {/* List */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {rest.map((p) => (
          <article key={p.slug} className="rounded-2xl border p-6 card-hover transition">
            <div className="text-xs opacity-60">{formatDate(p.date)}</div>
            <h3 className="mt-2 text-lg font-semibold">
              <Link href={`/journal/${p.slug}`}>{p.title}</Link>
            </h3>
            <p className="mt-2 text-sm opacity-80">{p.excerpt}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags?.map((t) => (
                <span key={t} className="rounded-full border px-2.5 py-1 text-xs opacity-80">
                  <span className="text-glow">{t}</span>
                </span>
              ))}
            </div>
            <div className="mt-5">
              <Link href={`/journal/${p.slug}`} className="text-sm underline underline-offset-4 opacity-80 hover:opacity-100">
                Continue reading
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
