import Image from 'next/image'

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-4 py-24 md:py-32 border-t"
      aria-labelledby="about-heading"
    >
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <h2
            id="about-heading"
            className="text-3xl md:text-4xl font-semibold tracking-tight"
          >
            Diego Sarmiento
          </h2>

          <p className="mt-4 text-base md:text-lg leading-relaxed opacity-80">
            I was born in Venezuela and have lived in five countries, each one
            teaching me a different language of connection. Today, as an
            American citizen living in the northeast of Florida, I explore what
            it means to belong to many worlds at once—and how technology can
            deepen, not dilute, that sense of presence.
          </p>

          <p className="mt-4 text-base leading-relaxed opacity-80">
            My work sits at the intersection of technology, design, and desire—
            what I call <em>emotional technology</em>. It’s about building systems
            that feel alive: interfaces that invite, communities that listen,
            brands that speak in the language of empathy.
          </p>

          <p className="mt-4 text-base leading-relaxed opacity-80">
            I began as a software engineer, fascinated by structure; I stayed
            because I discovered poetry inside precision. Now, through
            <em> The Intimacy Code</em> and the workshops it inspired, I help
            others design experiences that honor curiosity, presence, and
            sensual intelligence.
          </p>

          <p className="mt-4 text-base leading-relaxed opacity-80">
            Most mornings start barefoot, notebook beside coffee, listening to
            the rhythm of the Atlantic. That’s where I remember: connection—
            digital or human—is still our most beautiful invention.
          </p>
        </div>

        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-neutral-100">
          <Image
            src="/images/diego-portrait.jpg"
            alt="Diego Sarmiento portrait"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  )
}
