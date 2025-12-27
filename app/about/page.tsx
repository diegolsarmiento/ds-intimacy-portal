export const metadata = { title: 'About' }

export default function AboutPage() {
  return (
    <main className="section-glow mx-auto max-w-4xl px-4 py-24 md:py-32 space-y-14">
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          About <span className="text-glow">Diego Sarmiento</span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto opacity-80">
          Writer, engineer, and quiet provocateur exploring the intersection of design, emotion, and human connection.
          His work blends data and desire, logic and poetry—building bridges between technology and the body.
        </p>

        <p className="mt-4 max-w-2xl mx-auto text-sm opacity-70">
          Based on Florida’s northeast coast • Available for workshops, talks, and private consulting labs.
        </p>
      </header>

      {/* Quick credibility / positioning cards */}
      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-glow p-5">
          <h3 className="text-sm font-semibold">Focus</h3>
          <p className="mt-2 text-sm opacity-80">
            Emotional technology, intimacy-design, and humane interfaces that help people feel more present.
          </p>
        </div>

        <div className="rounded-xl border border-glow p-5">
          <h3 className="text-sm font-semibold">Work</h3>
          <p className="mt-2 text-sm opacity-80">
            Product strategy + experience design with a writer’s sensitivity—shaping systems, language, and rituals.
          </p>
        </div>

        <div className="rounded-xl border border-glow p-5">
          <h3 className="text-sm font-semibold">Formats</h3>
          <p className="mt-2 text-sm opacity-80">
            Workshops, keynotes, and private labs—practical, reflective, and deeply human.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">A Path Through Many Worlds</h2>
        <p className="opacity-80">
          Born in Venezuela and now an American citizen based on Florida’s northeast coast, Diego has lived and worked
          across five countries. Each one left a trace—a new language, a new kind of silence, a new way to listen.
        </p>
        <p className="opacity-80">
          From engineering teams building high-scale systems to independent creative studios, he’s spent over a decade
          helping products—and people—rediscover presence through design.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Soft Design, Hard Truths</h2>
        <p className="opacity-80">
          Diego calls his philosophy <strong>emotional technology</strong>: the craft of making systems that breathe.
          Whether he’s writing <em>The Intimacy Code</em> or facilitating workshops, the focus stays the same:
          translating empathy into product language—copy, flows, boundaries, and tone.
        </p>
        <p className="opacity-80">
          Intimacy isn’t fragile—it’s a framework. Something we can design for, practice, and sustain.
        </p>

        {/* Micro-list for SEO + clarity */}
        <div className="rounded-xl border border-glow p-5">
          <h3 className="text-sm font-semibold">What this work tends to touch</h3>
          <ul className="mt-3 space-y-2 text-sm opacity-80 list-disc pl-5">
            <li>Human-centered product narratives (from landing pages to onboarding)</li>
            <li>Trust, consent, and emotional safety in digital experiences</li>
            <li>Rituals that reduce friction and increase presence</li>
          </ul>
        </div>
      </section>

      {/* Optional: YouTube presence (only here, where it fits) */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Selected Video Atmospheres</h2>
        <p className="opacity-80">
          Short rituals and longer atmospheres—soft heat, presence, and a calmer relationship with the screen.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-glow overflow-hidden">
            <div className="p-4 border-b border-glow">
              <h3 className="text-sm font-semibold">Soft Heat Playlist</h3>
              <p className="mt-1 text-sm opacity-70">Longer sessions for evenings, focus, and emotional reset.</p>
            </div>
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                // TODO: replace with your actual playlist embed
                src="https://www.youtube.com/embed/videoseries?list=PLMSKJY3YjkiHrFNUeCdTLGqDDJHxlcdJb"
                title="Soft Heat Playlist"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="rounded-xl border border-glow overflow-hidden">
            <div className="p-4 border-b border-glow">
              <h3 className="text-sm font-semibold">Shorts (micro rituals)</h3>
              <p className="mt-1 text-sm opacity-70">Quick moments—whispers, prompts, and sensual clarity.</p>
            </div>
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                // TODO: replace with a Shorts/Channel embed or a specific video
                src="https://www.youtube.com/embed/videoseries?list=PLMSKJY3YjkiHNfFrsJZCFg6wWZHBkOD5W"
                title="Shorts"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <p className="text-xs opacity-60">
          Tip: if you prefer not to embed, we can swap these iframes for clean “cards + links” to keep the page lighter.
        </p>
      </section>

      <section className="text-center border-t pt-12">
        <p className="opacity-70">
          Most mornings start barefoot, notebook beside coffee, listening to the rhythm of the Atlantic.
        </p>
      </section>
    </main>
  )
}
