import Link from 'next/link'

export default function Hero() {
  return (
    <section aria-labelledby="home-hero" className="section-glow relative isolate overflow-hidden border-b">
      {/* soft vignette sweep */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(80rem 60rem at 20% 0%, rgba(var(--rose),.18), transparent 60%), radial-gradient(70rem 50rem at 90% 100%, rgba(var(--lav),.16), transparent 60%)',
        }}
      />

      <div className="mx-auto max-w-6xl px-4 py-28 text-center">
        <h1 id="home-hero" className="text-4xl md:text-6xl font-semibold tracking-tight">
          The intimacy lab—<span className="opacity-70">where design learns to feel</span>
        </h1>

        {/* small anchor line (clarity + “what is this”) */}
        <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base opacity-70">
          Essays, workshops, and quiet rituals for teams and creators designing in sensitive spaces.
        </p>

        <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg leading-relaxed opacity-80">
          I teach emotional technology—uniting touch, psychology, and beautiful systems.
          For readers of <em>The Intimacy Code</em>, curious teams, and brands brave enough to whisper.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/experiences"
            className="rounded-md border px-5 py-2.5 text-sm font-medium opacity-90 hover:opacity-100 border-glow"
          >
            Explore experiences
          </Link>

          <Link
            href="/book"
            className="rounded-md px-5 py-2.5 text-sm font-medium underline underline-offset-4 hover:opacity-100 opacity-90 text-glow"
          >
            Read about the book
          </Link>
        </div>

        <p className="mt-6 text-xs opacity-60">Minimalism. Warmth. Precision. Stay a little longer.</p>
      </div>
    </section>
  )
}
