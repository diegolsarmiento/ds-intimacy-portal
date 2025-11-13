export const metadata = { title: 'The Intimacy Code' }

export default function BookPage() {
  return (
    <main className="section-glow mx-auto max-w-4xl px-4 py-24 md:py-32 space-y-12">
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          The <span className="text-glow">Intimacy</span> Code
        </h1>
        <p className="mt-4 max-w-2xl mx-auto opacity-80">
          A manifesto for feeling again in a world that forgot how.  
          The book explores how technology reshapes our capacity to touch, listen, and love.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">About the Book</h2>
        <p className="opacity-80">
          <em>The Intimacy Code</em> blends philosophy, design thinking, and sensual psychology
          to decode how connection evolves in the digital age.
          Each chapter invites readers to reprogram their relationship with attention.
        </p>
        <p className="opacity-80">
          From the loneliness epidemic to the rise of emotional AI,
          the book offers a vocabulary for those who crave depth beyond swipes and screens.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">For Readers Who Feel</h2>
        <p className="opacity-80">
          It’s written for the curious—the ones who notice how their pulse changes when a message arrives,
          who sense that design choices shape desire.
        </p>
        <p className="opacity-80">
          <strong>Coming soon:</strong> excerpts, reading circles, and guided reflections.
        </p>
      </section>

      <section className="text-center border-t pt-12">
        <p className="opacity-70">
          “Technology didn't steal our touch—it only reminded us how much it matters.”  
          — <em>The Intimacy Code</em>
        </p>
      </section>
    </main>
  )
}
