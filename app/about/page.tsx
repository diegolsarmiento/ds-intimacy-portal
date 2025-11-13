export const metadata = { title: 'About' }

export default function AboutPage() {
  return (
    <main className="section-glow mx-auto max-w-4xl px-4 py-24 md:py-32 space-y-12">
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          About <span className="text-glow">Diego Sarmiento</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto opacity-80">
          Writer, engineer, and quiet provocateur exploring the intersection of design, emotion, and human connection.
          His work blends data and desire, logic and poetry—building bridges between technology and the body.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">A Path Through Many Worlds</h2>
        <p className="opacity-80">
          Born in Venezuela, now an American citizen based in Florida’s northeast coast, Diego has lived and worked in five countries.
          Each one left a trace—a new language, a new kind of silence, a new way to listen.
        </p>
        <p className="opacity-80">
          From engineering teams in Silicon Valley to independent creative studios, he has spent over a decade helping products
          and people rediscover presence through design.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Soft Design, Hard Truths</h2>
        <p className="opacity-80">
          Diego calls his philosophy “emotional technology”—the art of making systems that breathe.
          Whether he’s writing <em>The Intimacy Code</em> or leading workshops, his focus stays the same:
          teaching the language of empathy in digital form.
        </p>
        <p className="opacity-80">
          He believes intimacy isn’t fragile—it’s a framework. Something we can design for, practice, and sustain.
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
