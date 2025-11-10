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
            Not a self-help manual. Not a tech critique.
            <em> The Intimacy Code </em> is a manifesto for feeling again—
            a book about connection, sensual intelligence, and the spaces
            between algorithms and skin.
          </p>
          <p className="mt-4 text-base leading-relaxed opacity-80">
            It merges data, design, and desire into a single language—inviting
            us to rethink how we touch, communicate, and belong in the digital
            age. Each chapter blends research, storytelling, and emotion to
            remind us: presence is the new luxury.
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
