import Image from 'next/image'
import Link from 'next/link'

export default function Book() {
  return (
    <section
      id="book"
      className="mx-auto max-w-6xl px-4 py-24 md:py-32 border-t"
      aria-labelledby="book-heading"
    >
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-neutral-100">
          <Image
            src="/images/intimacy-code-cover.jpg"
            alt="The Intimacy Code book cover"
            fill
            className="object-cover object-center"
          />
        </div>

        <div>
          <h2
            id="book-heading"
            className="text-3xl md:text-4xl font-semibold tracking-tight"
          >
            The Intimacy Code
          </h2>

          <p className="mt-4 text-base md:text-lg leading-relaxed opacity-80">
            A book written for those who still believe technology can feel.  
            <em>The Intimacy Code</em> explores the silent spaces between our
            devices — where attention becomes touch, and algorithms learn to
            listen back.
          </p>

          <p className="mt-4 text-base leading-relaxed opacity-80">
            Chapter 9 taught us that connection is the new currency of survival.
            Chapter 10 reminded us to return barefoot to the world — to let grass,
            breath, and skin decode what Wi-Fi never could.  
            Together, they close the loop: intellect and sensation,
            circuit and pulse.
          </p>

          <p className="mt-4 text-base leading-relaxed opacity-80">
            This isn’t self-help. It’s an act of remembering — that feeling deeply
            is still a kind of intelligence.
          </p>

          <div className="mt-8 flex gap-3">
            <Link
              href="/book"
              className="border px-5 py-2.5 rounded-md text-sm font-medium opacity-90 hover:opacity-100"
            >
              Explore the book
            </Link>
            <Link
              href="#newsletter"
              className="underline underline-offset-4 text-sm opacity-80 hover:opacity-100"
            >
              Read an excerpt
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
