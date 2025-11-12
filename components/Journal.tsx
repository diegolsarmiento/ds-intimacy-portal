import Link from 'next/link'

type Post = { slug: string; title: string; excerpt: string; date: string; tags?: string[] }

const posts: Post[] = [
  { slug: 'soft-ux-presence', title: 'Soft UX: Designing for Presence', excerpt: 'Rituals, consent patterns, and gentle friction that teach interfaces to feel.', date: '2025-10-12', tags: ['design','presence','ethics'] },
  { slug: 'companions-and-belonging', title: 'Companions & the Future of Belonging', excerpt: 'Real loneliness, artificial lovers, and why intimacy metrics will outlast DAUs.', date: '2025-09-28', tags: ['ai','intimacy'] },
  { slug: 'language-that-touches', title: 'Language That Touches', excerpt: 'Voice systems and the craft of words that stay on the skin.', date: '2025-08-30', tags: ['voice','writing','product'] },
]

const f = (iso:string)=>new Date(iso).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})

export default function Journal() {
  const [featured, ...rest] = posts
  return (
    <section id="journal" className="section-glow mx-auto max-w-6xl px-4 py-24 md:py-32 border-t" aria-labelledby="journal-heading">
      <div className="flex items-end justify-between gap-6">
        <div className="max-w-3xl">
          <h2 id="journal-heading" className="text-3xl md:text-4xl font-semibold tracking-tight">Journal</h2>
          <p className="mt-3 opacity-80">Field notes on intimacy, design, and the quiet revolutions between them.</p>
        </div>
        <Link href="/journal" className="text-sm underline underline-offset-4 opacity-80 hover:opacity-100">View all</Link>
      </div>

      {/* Featured */}
      <article className="mt-10 rounded-2xl border p-6 md:p-8 card-hover transition">
        <div className="text-xs opacity-60">{f(featured.date)}</div>
        <h3 className="mt-2 text-2xl md:text-3xl font-semibold">
          <Link href={`/journal/${featured.slug}`} className="text-glow">{featured.title}</Link>
        </h3>
        <p className="mt-3 opacity-80">{featured.excerpt}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {featured.tags?.map(t => <span key={t} className="rounded-full border px-2.5 py-1 text-xs opacity-80 border-glow"><span className="text-glow">{t}</span></span>)}
        </div>
        <div className="mt-6">
          <Link href={`/journal/${featured.slug}`} className="inline-flex items-center rounded-md border px-4 py-2 text-sm opacity-90 hover:opacity-100 border-glow">
            Read the essay
          </Link>
        </div>
      </article>

      {/* Rest */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {rest.map(p=>(
          <article key={p.slug} className="rounded-2xl border p-6 card-hover transition">
            <div className="text-xs opacity-60">{f(p.date)}</div>
            <h3 className="mt-2 text-lg font-semibold">
              <Link href={`/journal/${p.slug}`}>{p.title}</Link>
            </h3>
            <p className="mt-2 text-sm opacity-80">{p.excerpt}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags?.map(t => <span key={t} className="rounded-full border px-2.5 py-1 text-xs opacity-80"><span className="text-glow">{t}</span></span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
