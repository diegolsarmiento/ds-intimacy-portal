import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="section-glow mx-auto max-w-6xl px-4 py-24 md:py-32 border-t" aria-labelledby="about-heading">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <h2 id="about-heading" className="text-3xl md:text-4xl font-semibold tracking-tight">
            <span className="text-glow">Diego</span> Sarmiento
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed opacity-80">
            I was born in Venezuela and have lived in five countries. Today, as an American citizen in northeast Florida, I explore how technology can deepen presence rather than dilute it.
          </p>
          <p className="mt-4 text-base leading-relaxed opacity-80">
            My work lives at the intersection of technology, design, and desire—what I call <em>emotional technology</em>. Systems that feel alive: interfaces that invite, communities that listen, brands that whisper.
          </p>
          <p className="mt-4 text-base leading-relaxed opacity-80">
            Through <em>The Intimacy Code</em> and the workshops it inspired, I help teams design experiences with curiosity, presence, and a soft rebellion.
          </p>
          <p className="mt-4 text-base leading-relaxed opacity-80">
            Most ideas start barefoot—coffee, notebook, and the Atlantic breathing in the background.
          </p>
        </div>

        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-neutral-100 card-hover">
          <Image src="/images/diego-portrait.png" alt="Diego Sarmiento portrait" fill className="object-cover object-center" />
        </div>
      </div>
    </section>
  )
}
