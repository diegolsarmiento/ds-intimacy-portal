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
    cta: 'Request a workshop',
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
    cta: 'Invite a keynote',
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
    cta: 'Start a private lab',
  },
]

export default function Experiences() {
  return (
    <section
      id="experiences"
      className="section-glow mx-auto max-w-6xl px-4 py-24 md:py-32 border-t"
      aria-labelledby="exp-heading"
    >
      <div className="max-w-3xl">
        <h2 id="exp-heading" className="text-3xl md:text-4xl font-semibold tracking-tight">
          Experiences
        </h2>
        <p className="mt-4 text-base md:text-lg opacity-80">
          I help teams and creators translate desire into design—quiet, precise, unforgettable.
          Choose an experience, or invite me to craft one for your world.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {offers.map((o) => (
          <div
            key={o.title}
            className="group relative rounded-2xl border p-6 card-hover flex flex-col min-h-[360px]"
          >
            {/* soft inner glow */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100"
              style={{
                background:
                  'linear-gradient(135deg, rgba(var(--rose),.08), rgba(var(--lav),.08))',
              }}
            />

            <div className="relative flex flex-col flex-1">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-semibold">{o.title}</h3>
                <span className="text-xs opacity-60">{o.subtitle}</span>
              </div>

              <ul className="mt-4 space-y-2 text-sm opacity-90">
                {o.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span
                      className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{
                        background:
                          'linear-gradient(90deg, rgb(var(--rose)), rgb(var(--lav)))',
                      }}
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {o.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-glow px-2.5 py-1 text-xs opacity-80"
                  >
                    <span className="text-glow">{t}</span>
                  </span>
                ))}
              </div>

              {/* push CTA to bottom for equal-height cards */}
              <div className="mt-auto pt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-md border border-glow px-4 py-2 text-sm opacity-90 hover:opacity-100 cursor-pointer transition-opacity"
                >
                  {o.cta}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Soft CTA */}
      <div
        className="mt-12 rounded-2xl border p-6 md:p-8 card-hover"
        style={{ background: 'linear-gradient(135deg, rgba(var(--rose),.06), rgba(var(--lav),.06))' }}
      >
        <p className="text-base md:text-lg opacity-80">
          Not sure which format fits? Tell me about your team, your product, and the feeling you want your users to remember.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-md border border-glow px-5 py-2.5 text-sm font-medium cursor-pointer transition-opacity opacity-90 hover:opacity-100"
          >
            Design an experience
          </Link>
          <Link
            href="/journal"
            className="text-sm underline underline-offset-4 opacity-80 hover:opacity-100 cursor-pointer inline-block transition-opacity"
          >
            Read how I think
          </Link>
        </div>
      </div>
    </section>
  )
}
