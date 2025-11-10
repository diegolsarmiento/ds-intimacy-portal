import Link from 'next/link'

export default function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden border-b"
      aria-labelledby="home-hero"
    >
      {/* Soft cinematic backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full opacity-[0.18] blur-3xl"
             style={{ background: 'radial-gradient(circle at 50% 50%, #bfa6a0 0%, transparent 60%)' }} />
        <div className="absolute bottom-[-12rem] right-[-6rem] h-[26rem] w-[26rem] rounded-full opacity-[0.12] blur-3xl"
             style={{ background: 'radial-gradient(circle at 50% 50%, #0f0f10 0%, transparent 60%)' }} />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-28 text-center">
        <h1 id="home-hero" className="text-4xl md:text-6xl font-semibold tracking-tight">
          The intimacy lab—<span className="opacity-70">where design learns to feel</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg leading-relaxed opacity-80">
          I teach the art of emotional technology—uniting touch, psychology, and beautiful systems.
          For readers of <em>The Intimacy Code</em>, curious teams, and brands brave enough to whisper.
        </p>

        <div className="mt-10 flex items-center justify-center gap-3">
          <Link
            href="/experiences"
            className="rounded-md border px-5 py-2.5 text-sm font-medium hover:opacity-100 opacity-90"
          >
            Enter the intimacy lab
          </Link>
          <Link
            href="/book"
            className="rounded-md px-5 py-2.5 text-sm font-medium underline-offset-4 hover:underline"
          >
            Meet the book
          </Link>
        </div>

        {/* Soft note under CTAs */}
        <p className="mt-6 text-xs opacity-60">
          Minimalism. Warmth. Precision. Come closer.
        </p>
      </div>
    </section>
  )
}
