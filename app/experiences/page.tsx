export const metadata = { title: 'Experiences & Workshops' }

export default function ExperiencesPage() {
  return (
    <main className="section-glow mx-auto max-w-6xl px-4 py-24 md:py-32 space-y-24">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Experiences <span className="text-glow">& Workshops</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto opacity-80">
          Immersive sessions for teams, founders, and creators who want to design with
          empathy, curiosity, and sensual intelligence.
        </p>

        <p className="mt-4 text-sm opacity-70 max-w-2xl mx-auto">
          These are not motivational talks. They are spaces to slow down, think clearly,
          and reconnect with what people actually feel.
        </p>
      </header>

      {/* Core formats */}
      <section className="grid gap-10 md:grid-cols-2 md:items-start">
        {/* Workshops */}
        <div className="rounded-2xl border border-glow p-8 card-hover h-full flex flex-col space-y-4">
          <h2 className="text-2xl font-semibold">Workshops</h2>

          <p className="opacity-80">
            3–6 hour hands-on sessions blending design psychology, emotional UX, and
            reflective practice. Ideal for product teams who want to build trust,
            clarity, and presence into their systems.
          </p>

          <ul className="list-disc pl-6 opacity-80 text-sm space-y-2">
            <li>Soft UX and consent-based design patterns</li>
            <li>Mapping emotional friction and user temperature</li>
            <li>Design rituals that nurture trust and retention</li>
            <li>Turning qualitative signals into shared language</li>
          </ul>

          <p className="text-sm opacity-70 mt-auto">
            Best for: product teams, design orgs, creative studios, early-stage founders.
          </p>
        </div>

        {/* Talks */}
        <div className="rounded-2xl border border-glow p-8 card-hover h-full flex flex-col space-y-4">
          <h2 className="text-2xl font-semibold">Keynotes & Talks</h2>

          <p className="opacity-80">
            Diego’s talks fuse neuroscience, narrative, and design philosophy.
            They’re reflective, grounded, and designed to leave people thinking long
            after the event ends.
          </p>

          <ul className="list-disc pl-6 opacity-80 text-sm space-y-2">
            <li>The future of belonging in the age of AI</li>
            <li>Why touch, trust, and tone are the new metrics</li>
            <li>Soft rebellion: designing for tenderness</li>
            <li>Emotional technology beyond optimization</li>
          </ul>

          <p className="text-sm opacity-70 mt-auto">
            Best for: conferences, leadership offsites, internal culture events.
          </p>

        </div>
      </section>

      {/* How it works */}
      <section className="border-t pt-16 space-y-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center">
          How These Experiences Work
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-glow p-5 text-sm opacity-80">
            <strong className="block mb-2">1. Listening first</strong>
            We start with context — your team, your product, your tensions.
            No off-the-shelf content.
          </div>

          <div className="rounded-xl border border-glow p-5 text-sm opacity-80">
            <strong className="block mb-2">2. Shared language</strong>
            We build a vocabulary around emotion, trust, and presence that teams
            can actually use.
          </div>

          <div className="rounded-xl border border-glow p-5 text-sm opacity-80">
            <strong className="block mb-2">3. Lasting traces</strong>
            Participants leave with concepts, rituals, and artifacts — not just inspiration.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t pt-16 text-center">
        <p className="opacity-80 max-w-2xl mx-auto">
          Every experience is tailored to the people in the room.
          If you’re building something meaningful and want it to feel human,
          let’s design a moment they’ll remember.
        </p>

        <div className="mt-6">
          <a
            href="/contact"
            className="border px-6 py-2.5 rounded-md text-sm border-glow"
          >
            Design an experience
          </a>
        </div>
      </section>
    </main>
  )
}
