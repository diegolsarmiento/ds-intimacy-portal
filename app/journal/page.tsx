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
      <main className="section-glow mx-auto max-w-6xl px-4 py-24 md:py-32 space-y-10">
        <header className="flex items-end justify-between gap-6">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Journal <span className="text-glow">/ field notes</span>
            </h1>
            <p className="mt-2 opacity-80">
              Field notes on intimacy, design, and the quiet revolutions between them.
            </p>
            <p className="mt-3 text-sm opacity-70">
              Essays arrive in seasons. If you want the next one first, join the circle.
            </p>
          </div>

          <Link
            href="/newsletter"
            className="hidden md:inline-flex rounded-md border px-4 py-2 text-sm border-glow cursor-pointer transition-opacity opacity-90 hover:opacity-100"
          >
            Join the circle
          </Link>
        </header>

        <div className="rounded-2xl border p-6 md:p-8 card-hover">
          <p className="opacity-70">
            New essays arriving soon. Stay close.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/newsletter"
              className="border px-5 py-2.5 rounded-md text-sm border-glow cursor-pointer transition-opacity opacity-90 hover:opacity-100"
            >
              Join the circle
            </Link>
            <Link
              href="/contact"
              className="underline underline-offset-4 text-sm opacity-80 hover:opacity-100 cursor-pointer inline-block transition-opacity"
            >
              Invite Diego to speak
            </Link>
          </div>
        </div>
      </main>
    )
  }

  // ✅ Sort newest first so "featured" always makes sense
  const sorted = [...posts].sort((a, b) => +new Date(b.date) - +new Date(a.date))
  const [featured, ...rest] = sorted

  // Small topic map (SEO + scanning).
  const topics = [
    { label: 'Intimacy & Presence', hint: 'attention, feeling, tenderness' },
    { label: 'Emotional UX', hint: 'trust, consent, tone' },
    { label: 'AI & Belonging', hint: 'interfaces, companionship, ethics' },
  ]

  // ✅ Suggested reading path (credibility + structure)
  const path = [
    { slug: 'soft-ux-presence', label: 'Start here', title: 'Soft UX: Designing for Presence' },
    { slug: 'companions-and-belonging', label: 'Then', title: 'Companions & the Future of Belonging' },
    { slug: 'language-that-touches', label: 'Then', title: 'Language That Touches' },
    { slug: 'designing-the-space-between', label: 'Finally', title: 'Designing the Space Between' },
  ]

  return (
    <main className="section-glow mx-auto max-w-6xl px-4 py-24 md:py-32">
      {/* Header */}
      <header className="flex items-end justify-between gap-6">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Journal <span className="text-glow">/ field notes</span>
          </h1>
          <p className="mt-2 opacity-80">Presence, tenderness, product—written softly, precisely.</p>
          <p className="mt-3 text-sm opacity-70">
            Short essays that translate emotion into design language—without turning life into optimization.
          </p>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/newsletter"
            className="rounded-md border px-4 py-2 text-sm border-glow cursor-pointer transition-opacity opacity-90 hover:opacity-100"
          >
            Join the circle
          </Link>
          <Link
            href="/contact"
            className="rounded-md border px-4 py-2 text-sm cursor-pointer transition-opacity opacity-90 hover:opacity-100"
          >
            Invite Diego
          </Link>
        </div>
      </header>

      {/* Topics (visual + SEO) */}
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {topics.map((t) => (
          <div key={t.label} className="rounded-2xl border p-5 card-hover">
            <div className="text-sm font-semibold">{t.label}</div>
            <div className="mt-2 text-sm opacity-70">{t.hint}</div>
          </div>
        ))}
      </section>

      {/* ✅ Reading path */}
      <section className="mt-10 rounded-2xl border border-glow p-6 md:p-8 card-hover">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h2 className="text-lg font-semibold">
            Suggested reading path <span className="opacity-60 text-sm">(4 essays)</span>
          </h2>
          <Link
            href="/newsletter"
            className="text-sm underline underline-offset-4 opacity-80 hover:opacity-100 cursor-pointer inline-block transition-opacity"
          >
            Receive new essays quietly, by email
          </Link>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {path.map((p) => (
            <Link
              key={p.slug}
              href={`/journal/${p.slug}`}
              className="rounded-xl border border-glow p-4 opacity-90 hover:opacity-100 cursor-pointer block transition"
            >
              <div className="text-xs opacity-60">{p.label}</div>
              <div className="mt-1 text-sm font-semibold">{p.title}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured hero card */}
      <article className="mt-10 relative overflow-hidden rounded-2xl border p-6 md:p-10 card-hover">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(60rem 40rem at 0% 0%, rgba(var(--rose),.12), transparent 60%), radial-gradient(60rem 40rem at 100% 100%, rgba(var(--lav),.12), transparent 60%)',
          }}
        />

        <div className="flex items-center justify-between gap-4">
          <div className="text-xs opacity-60">{formatDate(featured.date)}</div>
          <span className="text-xs rounded-full border px-2.5 py-1 opacity-80 border-glow">
            <span className="text-glow">Featured essay</span>
          </span>
        </div>

        <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
          <Link
            href={`/journal/${featured.slug}`}
            className="text-glow cursor-pointer inline-block transition-opacity hover:opacity-100 opacity-95"
          >
            {featured.title}
          </Link>
        </h2>

        <p className="mt-3 opacity-80 max-w-2xl">{featured.excerpt}</p>

        {featured.tags?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {featured.tags.map((t) => (
              <span key={t} className="rounded-full border px-2.5 py-1 text-xs opacity-80 border-glow">
                <span className="text-glow">{t}</span>
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/journal/${featured.slug}`}
            className="inline-flex items-center rounded-md border px-4 py-2 text-sm opacity-90 hover:opacity-100 border-glow cursor-pointer transition-opacity"
          >
            Read the essay
          </Link>
          <Link
            href="/newsletter"
            className="text-sm underline underline-offset-4 opacity-80 hover:opacity-100 cursor-pointer inline-block transition-opacity"
          >
            Receive new essays quietly, by email
          </Link>
        </div>
      </article>

      {/* List */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {rest.map((p) => (
          <article key={p.slug} className="rounded-2xl border p-6 card-hover transition">
            <div className="text-xs opacity-60">{formatDate(p.date)}</div>

            <h3 className="mt-2 text-lg font-semibold">
              <Link
                href={`/journal/${p.slug}`}
                className="cursor-pointer inline-block transition-opacity opacity-95 hover:opacity-100"
              >
                {p.title}
              </Link>
            </h3>

            <p className="mt-2 text-sm opacity-80">{p.excerpt}</p>

            {p.tags?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border px-2.5 py-1 text-xs opacity-80 border-glow">
                    <span className="text-glow">{t}</span>
                  </span>
                ))}
              </div>
            ) : null}

            <div className="mt-5">
              <Link
                href={`/journal/${p.slug}`}
                className="text-sm underline underline-offset-4 opacity-80 hover:opacity-100 cursor-pointer inline-block transition-opacity"
              >
                Continue reading
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom CTA (mobile-friendly) */}
      <section className="mt-14 border-t pt-10 text-center">
        <p className="opacity-80 max-w-2xl mx-auto">
          Want the next essay before it lands here? Join the circle.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/newsletter"
            className="border px-6 py-2.5 rounded-md text-sm border-glow cursor-pointer transition-opacity opacity-90 hover:opacity-100"
          >
            Join the circle
          </Link>
          <Link
            href="/contact"
            className="underline underline-offset-4 text-sm opacity-80 hover:opacity-100 cursor-pointer inline-block transition-opacity"
          >
            Invite Diego to speak
          </Link>
        </div>
      </section>
    </main>
  )
}
