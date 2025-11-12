import Image from 'next/image'
import Link from 'next/link'

export default function Book() {
  return (
    <section id="book" className="section-glow mx-auto max-w-6xl px-4 py-24 md:py-32 border-t" aria-labelledby="book-heading">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-neutral-100 card-hover">
          <Image src="/images/intimacy-code-cover.jpg" alt="The Intimacy Code book cover" fill className="object-cover object-center" />
        </div>

        <div>
          <h2 id="book-heading" className="text-3xl md:text-4xl font-semibold tracking-tight">
            The <span className="text-glow">Intimacy</span> Code
          </h2>

          <p className="mt-4 text-base md:text-lg leading-relaxed opacity-80">
            A book for those who still believe technology can feel. It explores the space between our devices—where attention becomes touch and algorithms learn to listen back.
          </p>
          <p className="mt-4 text-base leading-relaxed opacity-80">
            Chapter 9 reframes connection as a currency of survival. Chapter 10 brings us back barefoot to the world. Together, they close the loop: intellect and sensation, circuit and pulse.
          </p>
          <p className="mt-4 text-base leading-relaxed opacity-80">
            Not self-help—an act of remembering that feeling deeply is a form of intelligence.
          </p>

          <div className="mt-8 flex gap-3">
            <Link href="/book" className="border px-5 py-2.5 rounded-md text-sm font-medium opacity-90 hover:opacity-100 border-glow">
              Explore the book
            </Link>
            <Link href="#newsletter" className="underline underline-offset-4 text-sm opacity-90 hover:opacity-100 text-glow">
              Read an excerpt
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
