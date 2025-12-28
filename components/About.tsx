import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <section
      id="about"
      className="section-glow mx-auto max-w-6xl px-4 py-24 md:py-32 border-t"
      aria-labelledby="about-heading"
    >
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <h2 id="about-heading" className="text-3xl md:text-4xl font-semibold tracking-tight">
            <span className="text-glow">Diego</span> Sarmiento
          </h2>

          <p className="mt-4 text-base md:text-lg leading-relaxed opacity-80">
            Writer and product engineer exploring how technology shapes attention, intimacy, and the way we feel.
            Born in Venezuela, shaped across five countries, now based on Florida’s northeast coast.
          </p>

          <p className="mt-4 text-base leading-relaxed opacity-80">
            I work with teams and founders on <em>emotional UX</em>: the craft of designing systems that build trust,
            communicate consent, and make people feel safe, seen, and understood—without turning life into optimization.
          </p>

          <p className="mt-4 text-base leading-relaxed opacity-80">
            Through <em>The Intimacy Code</em> and the workshops it inspired, I teach practical rituals for
            kinder interfaces: language that lands, friction that protects, and design decisions that respect the nervous system.
          </p>

          <p className="mt-4 text-base leading-relaxed opacity-80">
            Most ideas start barefoot—coffee, notebook, and the Atlantic breathing in the background.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/experiences"
              className="rounded-md border px-5 py-2.5 text-sm border-glow cursor-pointer transition-opacity opacity-90 hover:opacity-100"
            >
              Workshops & talks
            </Link>
            <Link
              href="/contact"
              className="underline underline-offset-4 text-sm opacity-80 hover:opacity-100 cursor-pointer inline-block transition-opacity"
            >
              Work with Diego
            </Link>
          </div>
        </div>

        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-[rgb(var(--background))] card-hover p-3 md:p-4">
          <div className="relative h-full w-full overflow-hidden rounded-xl">
            <Image
              src="/images/diego-portrait.png"
              alt="Portrait of Diego Sarmiento"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-center"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
