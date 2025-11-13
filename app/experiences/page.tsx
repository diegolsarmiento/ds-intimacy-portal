export const metadata = { title: 'Experiences' }

export default function ExperiencesPage() {
  return (
    <main className="section-glow mx-auto max-w-6xl px-4 py-24 md:py-32 space-y-20">
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Experiences <span className="text-glow">& Workshops</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto opacity-80">
          Immersive sessions for teams and creators who want to design with empathy, curiosity, and sensual intelligence.
        </p>
      </header>

      <section className="grid gap-10 md:grid-cols-2 md:items-start">
        <div>
          <h2 className="text-2xl font-semibold">Workshops</h2>
          <p className="mt-3 opacity-80">
            3–6 hour sessions blending design psychology and emotional UX.  
            Participants learn to identify the emotional temperature of their products and turn data into empathy maps.
          </p>
          <ul className="mt-4 list-disc pl-6 opacity-80 text-sm space-y-2">
            <li>Soft UX and consent-based design patterns</li>
            <li>Design rituals that nurture user trust</li>
            <li>Ethical storytelling in digital interfaces</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Keynotes & Talks</h2>
          <p className="mt-3 opacity-80">
            Diego's talks fuse neuroscience, narrative, and design philosophy.  
            They are ideal for conferences or internal events that crave more heart than hype.
          </p>
          <ul className="mt-4 list-disc pl-6 opacity-80 text-sm space-y-2">
            <li>The future of belonging in the age of AI</li>
            <li>Why touch is the new metric</li>
            <li>Soft rebellion: designing for tenderness</li>
          </ul>
        </div>
      </section>

      <section className="border-t pt-12 text-center">
        <p className="opacity-80">
          Every experience can be tailored to your team or community.  
          Tell me what you're building, and we'll design a moment they'll remember.
        </p>
        <div className="mt-6">
          <a href="/contact" className="border px-5 py-2.5 rounded-md text-sm border-glow">
            Design an experience
          </a>
        </div>
      </section>
    </main>
  )
}
