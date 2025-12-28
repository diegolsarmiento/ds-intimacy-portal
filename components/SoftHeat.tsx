import Link from 'next/link'

const sessions = [
  {
    title: 'Morning Reset',
    meta: '8–12 min • breath + attention',
    desc: 'A gentle entry back into the body—before the day gets loud.',
  },
  {
    title: 'Late Night Decompression',
    meta: '10–15 min • softness + release',
    desc: 'For the hour when the nervous system finally admits it’s tired.',
  },
  {
    title: 'Design That Listens',
    meta: '6–9 min • emotional UX',
    desc: 'How small interface choices can hold (or bruise) the user.',
  },
]

const rituals = [
  { label: 'Best moments', value: 'early morning, late night' },
  { label: 'Tone', value: 'minimal, warm, precise' },
  { label: 'Focus', value: 'presence + emotional design' },
]

export default function SoftHeat() {
  return (
    <section className="section-glow mx-auto max-w-6xl px-4 py-24 border-t">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        {/* Left: copy + quick rituals */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Soft Heat <span className="text-glow">Sessions</span>
          </h2>

          <p className="mt-4 opacity-80 leading-relaxed max-w-xl">
            Short audiovisual rituals exploring presence, intimacy, and emotional design.
            Made to be listened to slowly—early mornings, late nights, or in between.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {rituals.map((r) => (
              <div key={r.label} className="rounded-2xl border p-4 card-hover">
                <div className="text-xs opacity-60">{r.label}</div>
                <div className="mt-1 text-sm font-semibold">{r.value}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://www.youtube.com/watch?v=bbpEYNUL6tA&list=PLMSKJY3YjkiHrFNUeCdTLGqDDJHxlcdJb"
              target="_blank"
              rel="noreferrer"
              className="border px-6 py-2.5 rounded-md text-sm border-glow cursor-pointer transition-opacity opacity-90 hover:opacity-100"
            >
              Watch on YouTube
            </a>

            <Link
              href="/journal"
              className="underline underline-offset-4 text-sm opacity-80 hover:opacity-100 cursor-pointer inline-block transition-opacity"
            >
              Read the journal
            </Link>

            <Link
              href="/contact"
              className="underline underline-offset-4 text-sm opacity-70 hover:opacity-100 cursor-pointer inline-block transition-opacity"
            >
              Invite a private session
            </Link>
          </div>

          <p className="mt-6 text-xs opacity-60">
            No algorithms. No urgency. Just atmosphere.
          </p>
        </div>

        {/* Right: “studio window” + session cards */}
        <div className="space-y-4">
          {/* Visual window (no embed yet, but feels intentional) */}
          <div className="rounded-2xl border p-6 md:p-8 card-hover relative overflow-hidden">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(40rem 20rem at 10% 0%, rgba(var(--rose),.10), transparent 60%), radial-gradient(36rem 24rem at 90% 100%, rgba(var(--lav),.10), transparent 60%)',
              }}
            />

            <div className="relative">
              <div className="text-xs opacity-60">Selected sessions</div>
              <div className="mt-2 text-lg font-semibold">
                A quiet series for nervous systems & product minds.
              </div>
              <p className="mt-3 text-sm opacity-80 max-w-lg">
                Think of these as small rooms: light, voice, pacing, and a sentence that lands.
                New pieces arrive when they’re ready.
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs opacity-60">
                <span className="rounded-full border px-2.5 py-1 border-glow">
                  <span className="text-glow">Shorts</span>
                </span>
                <span className="rounded-full border px-2.5 py-1 border-glow">
                  <span className="text-glow">40-min sessions</span>
                </span>
                <span className="rounded-full border px-2.5 py-1 border-glow">
                  <span className="text-glow">Whispers + text</span>
                </span>
              </div>
            </div>
          </div>

          {/* Mini session cards */}
          <div className="grid gap-4">
            {sessions.map((s) => (
              <div key={s.title} className="rounded-2xl border p-5 card-hover">
                <div className="flex items-start justify-between gap-4">
                  <div className="text-sm font-semibold">{s.title}</div>
                  <div className="text-xs opacity-60">{s.meta}</div>
                </div>
                <p className="mt-2 text-sm opacity-80">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
