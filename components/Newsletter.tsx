export default function Newsletter() {
  return (
    <section id="newsletter" className="mx-auto max-w-6xl px-4 py-24 md:py-32 border-t" aria-labelledby="news-heading">
      <div className="max-w-3xl">
        <h2 id="news-heading" className="text-3xl md:text-4xl font-semibold tracking-tight">Join the circle</h2>
        <p className="mt-4 text-base md:text-lg opacity-80">
          Private letters, early invites, and soft experiments. No noise—only closeness.
        </p>
        <form className="mt-6 flex w-full max-w-xl gap-2">
          <input type="email" placeholder="your@email.com" className="w-full rounded-md border px-3 py-2 text-sm" />
          <button className="rounded-md border px-4 py-2 text-sm">I’m in</button>
        </form>
      </div>
    </section>
  )
}
