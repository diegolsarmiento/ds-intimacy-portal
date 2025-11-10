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
            A Venezuelan-born engineer and writer exploring how
            <em> technology, design, and desire </em> intertwine.
            He’s lived in five countries—each one teaching him a different
            dialect of connection.
          </p>
          <p className="mt-4 text-base leading-relaxed opacity-80">
            Today, from the northeast coast of Florida, he builds digital
            experiences that feel human. Through <em>The Intimacy Code</em>,
            he invites readers and brands to rediscover the art of presence in a wired world.
          </p>
          <p className="mt-4 text-base leading-relaxed opacity-80">
            <strong>Workshops, talks, and consulting</strong> explore what he
            calls “emotional technology”—the skill of designing products,
            systems, and stories that move people on a sensual and
            psychological level.
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
