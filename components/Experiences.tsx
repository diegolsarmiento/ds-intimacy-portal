import Link from 'next/link'

const offers = [
  {
    title: 'Workshops — Emotional Technology',
    subtitle: '3–6 hours · team immersion',
    points: [
      'Design rituals that increase felt presence in products',
      'Build “soft UX” patterns for intimacy & consent',
      'Translate desire into ethical, testable interfaces',
    ],
    tags: ['product', 'research', 'ux'],
  },
  {
    title: 'Keynotes — The Intimacy Code',
    subtitle: '30–60 min · thought-provocation',
    points: [
      'Why touch is the new metric',
      'AI companions & the future of belonging',
      'Soft rebellion: designing for tenderness',
    ],
    tags: ['events', 'inspiration', 'trend'],
  },
  {
    title: 'Consulting — Private Lab',
    subtitle: 'Advisory sprints · 2–8 weeks',
    points: [
      'Audit of product language & emotional UX',
      'Positioning, story architecture, voice systems',
      'Prototype reviews with live narrative edits',
    ],
    tags: ['strategy', 'brand', 'voice'],
  },
]

export default function Experiences() {
  return (
    <section id="experiences" className="mx-auto max-w-6xl px-4 py-24 md:py-32 border-t" aria-labelledby="exp-heading">
      <div className="max-w-3xl">
        <h2 id="exp-heading" className="text-3xl md:text-4xl font-semibold tracking-tight">Experiences</h2>
        <p className="mt-4 text-base md:text-lg opacity-80">
          I help teams and creators translate desire into design—quiet, precise, unforgettable.
          Choose an experience, or invite me to craft one for your world.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {offers.map((o) => (
          <div key={o.title} className="rounded-2xl border p-6 hover:shadow-sm transition">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-lg font-semibold">{o.title}</h3>
              <span className="text-xs opacity-60">{o.subtitle}</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm opacity-90">
              {o.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full border" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {o.tags.map((t) => (
                <span key={t} className="rounded-full border px-2.5 py-1 text-xs opacity-70">{t}</span>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/contact" className="inline-flex items-center rounded-md border px-4 py-2 text-sm hover:opacity-100 opacity-90">
                Book a private session
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Soft CTA */}
      <div className="mt-12 rounded-2xl border p-6 md:p-8">
        <p className="text-base md:text-lg opacity-80">
          Not sure which format fits? Tell me about your team, your product, and the feeling you want your users to remember.
        </p>
        <div className="mt-4 flex gap-3">
          <Link href="/contact" className="rounded-md border px-5 py-2.5 text-sm font-medium">Design an experience</Link>
          <Link href="/journal" className="text-sm underline underline-offset-4 opacity-80 hover:opacity-100">Read how I think</Link>
        </div>
      </div>
    </section>
  )
}
