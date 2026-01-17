import Image from 'next/image'
import Link from 'next/link'

const AMAZON_EN_URL = 'https://www.amazon.com/dp/B0G2G277KX'
const AMAZON_ES_URL = 'https://www.amazon.com/dp/B0GH1XKGD7'

export default function Book() {
  return (
    <section
      id="book"
      className="section-glow mx-auto max-w-6xl px-4 py-24 md:py-32 border-t"
      aria-labelledby="book-heading"
    >
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        {/* Cover frame (About-style) */}
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-[rgb(var(--background))] card-hover p-3 md:p-4">
          <div className="relative h-full w-full overflow-hidden rounded-xl">
            <Image
              src="/images/intimacy-code-cover.png"
              alt="The Intimacy Code book cover"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-center"
              priority={false}
            />
          </div>
        </div>

        <div>
          <h2 id="book-heading" className="text-3xl md:text-4xl font-semibold tracking-tight">
            The <span className="text-glow">Intimacy</span> Code
          </h2>

          <p className="mt-4 text-base md:text-lg leading-relaxed opacity-80">
            A book for those who still believe technology can feel. It explores the space between our devices—where
            attention becomes touch and language becomes a design decision.
          </p>

          <p className="mt-4 text-base leading-relaxed opacity-80">
            Not self-help—an act of remembering that feeling deeply is a form of intelligence.
            Part manifesto, part field guide, written for the ones who want warmth without noise.
          </p>

          {/* Credibility / scanning (SEO-friendly) */}
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border p-4 card-hover">
              <div className="text-xs opacity-60">You’ll get</div>
              <div className="mt-1 text-sm font-semibold">a new vocabulary</div>
            </div>
            <div className="rounded-2xl border p-4 card-hover">
              <div className="text-xs opacity-60">You’ll notice</div>
              <div className="mt-1 text-sm font-semibold">attention patterns</div>
            </div>
            <div className="rounded-2xl border p-4 card-hover">
              <div className="text-xs opacity-60">You’ll leave with</div>
              <div className="mt-1 text-sm font-semibold">gentle clarity</div>
            </div>
          </div>

          <p className="mt-6 text-sm opacity-70 max-w-xl">
            Best for readers, product teams, and creators working in sensitive spaces—where tone, trust, and desire are part of the UX.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 items-center">
            {/* English */}
            <Link
              target="_blank"
              rel="noreferrer"
              href={AMAZON_EN_URL}
              className="px-5 py-2.5 rounded-md text-sm font-medium opacity-90 border border-[rgb(var(--lav))] hover:border-[rgb(var(--rose))] transition-colors cursor-pointer "
            >
              Explore the book <span className="ml-1 text-xs opacity-70">(EN)</span>
            </Link>

            {/* Spanish */}
            <Link
              target="_blank"
              rel="noreferrer"
              href={AMAZON_ES_URL}
              className="px-5 py-2.5 rounded-md text-sm font-medium opacity-80 border border-[rgb(var(--rose))] hover:border-[rgb(var(--lav))] transition-colors cursor-pointer "
            >
              Leer el libro <span className="ml-1 text-xs opacity-60">(ES)</span>
            </Link>

            {/* Secondary links */}
            <Link
              href="/book"
              className="underline underline-offset-4 text-sm opacity-80 hover:opacity-100 cursor-pointer inline-block transition-opacity"
            >
              Read an excerpt
            </Link>

            <Link
              href="/journal"
              className="underline underline-offset-4 text-sm opacity-70 hover:opacity-100 cursor-pointer inline-block transition-opacity"
            >
              Read related essays
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
