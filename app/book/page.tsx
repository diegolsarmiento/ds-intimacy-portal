export const metadata = { title: 'The Intimacy Code' }

const AMAZON_URL = 'https://www.amazon.com/dp/B0G2G277KX'

export default function BookPage() {
  return (
    <main className="section-glow mx-auto max-w-4xl px-4 py-24 md:py-32 space-y-14">
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          The <span className="text-glow">Intimacy</span> Code
        </h1>

        <p className="mt-4 max-w-2xl mx-auto opacity-80">
          A manifesto for feeling again in a world that forgot how.
          The book explores how technology reshapes our capacity to touch, listen, and love.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="button rounded-md border px-5 py-2 text-sm border-glow"
          >
            Buy on Amazon
          </a>

          <a
            href="/contact"
            className="rounded-md border px-5 py-2 text-sm opacity-90 hover:opacity-100"
          >
            Invite Diego to speak
          </a>
        </div>

        <p className="mt-3 text-xs opacity-60">
          Prefer a workshop or reading circle for your team/community? Reach out — I’ll tailor it.
        </p>
      </header>

      {/* Visual + credibility block */}
      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-glow p-5">
          <h3 className="text-sm font-semibold">What it is</h3>
          <p className="mt-2 text-sm opacity-80">
            A practical, poetic lens for designing connection — attention, trust, and emotional safety.
          </p>
        </div>

        <div className="rounded-xl border border-glow p-5">
          <h3 className="text-sm font-semibold">What you’ll get</h3>
          <p className="mt-2 text-sm opacity-80">
            A vocabulary for intimacy in the digital age — and habits that bring you back to presence.
          </p>
        </div>

        <div className="rounded-xl border border-glow p-5">
          <h3 className="text-sm font-semibold">Best for</h3>
          <p className="mt-2 text-sm opacity-80">
            Builders, readers, and leaders who want depth beyond metrics, swipes, and noise.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">About the Book</h2>
        <p className="opacity-80">
          <em>The Intimacy Code</em> blends philosophy, design thinking, and sensual psychology to decode how connection
          evolves in the digital age. Each chapter invites readers to reprogram their relationship with attention.
        </p>
        <p className="opacity-80">
          From the loneliness epidemic to emotional AI, the book offers language for those who crave depth beyond
          screens — without turning life into performance.
        </p>

        {/* SEO-friendly micro bullets */}
        <div className="rounded-xl border border-glow p-5">
          <h3 className="text-sm font-semibold">Inside the themes</h3>
          <ul className="mt-3 space-y-2 text-sm opacity-80 list-disc pl-5">
            <li>Attention as intimacy (and what apps trained us to forget)</li>
            <li>Emotional interface design: tone, boundaries, consent</li>
            <li>Presence practices: rituals that reduce friction and restore feeling</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">For Readers Who Feel</h2>
        <p className="opacity-80">
          It’s for the curious — the ones who notice how their pulse changes when a message arrives,
          who sense that design choices shape desire.
        </p>

        {/* A little “what to do next” block (better than “coming soon”) */}
        <div className="rounded-xl border border-glow p-5">
          <h3 className="text-sm font-semibold">Next (optional)</h3>
          <p className="mt-2 text-sm opacity-80">
            Excerpts, guided reflections, and small reading circles. If you want early access, write me from the contact
            page and mention “Intimacy Code”.
          </p>
        </div>
      </section>

      {/* Optional: YouTube embed where it fits */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Related Atmospheres</h2>
        <p className="opacity-80">
          If the book resonates, these videos extend the same mood: presence, soft heat, and a calmer relationship with the screen.
        </p>

        <div className="rounded-xl border border-glow overflow-hidden">
          <div className="p-4 border-b border-glow">
            <h3 className="text-sm font-semibold">Soft Heat (playlist)</h3>
            <p className="mt-1 text-sm opacity-70">Longer sessions — perfect for evenings, reflection, and reset.</p>
          </div>

          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              // TODO: replace with your real playlist ID
              src="https://www.youtube.com/embed/videoseries?list=PLMSKJY3YjkiHrFNUeCdTLGqDDJHxlcdJb"
              title="Soft Heat Playlist"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Mini-FAQ: clean SEO, no extra components */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">FAQ</h2>

        <div className="rounded-xl border border-glow p-5 space-y-3">
          <details className="group">
            <summary className="cursor-pointer text-sm font-semibold">
              Is it more philosophy or practical?
            </summary>
            <p className="mt-2 text-sm opacity-80">
              Both — reflective writing grounded in real design patterns, language, and everyday rituals.
            </p>
          </details>

          <details className="group">
            <summary className="cursor-pointer text-sm font-semibold">
              Can Diego speak or run a workshop based on the book?
            </summary>
            <p className="mt-2 text-sm opacity-80">
              Yes. Workshops and private labs can be tailored for product teams, founders, and communities.
              Use the contact page to start.
            </p>
          </details>
        </div>
      </section>

      <section className="text-center border-t pt-12">
        <p className="opacity-70">
          “Technology didn’t steal our touch — it only reminded us how much it matters.”
          <br />
          — <em>The Intimacy Code</em>
        </p>

        <div className="mt-6">
          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:opacity-100 opacity-80"
          >
            View on Amazon
          </a>
        </div>
      </section>
    </main>
  )
}
