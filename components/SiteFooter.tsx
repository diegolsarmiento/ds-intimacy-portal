import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="footer-surface hairline-t">
      {/* soft gradient top edge */}
      <div className="accent-line" />

      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 md:grid-cols-4 section-glow">
        <div className="md:col-span-2">
          <p className="font-semibold">Stay barefoot in a wired world.</p>
          <p className="text-sm opacity-70 mt-2">
            Essays, invitations, early access to workshops.
          </p>
          <form className="mt-4 flex gap-2 max-w-md">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full rounded-md border px-3 py-2 text-sm"
            />
            <button className="rounded-md border px-4 py-2 text-sm border-glow">
              Join the circle
            </button>
          </form>
        </div>

        <div>
          <p className="text-sm font-semibold mb-3">Explore</p>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link href="/book">The Intimacy Code</Link></li>
            <li><Link href="/experiences">Workshops & Talks</Link></li>
            <li><Link href="/journal">Journal</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold mb-3">Contact</p>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link href="/contact">Say hello</Link></li>
            <li><a href="mailto:hello@diegosarmiento.com">Email</a></li>
          </ul>
        </div>
      </div>

      <div className="hairline-t">
        <div className="mx-auto max-w-6xl px-4 h-12 flex items-center justify-between text-xs opacity-70">
          <span>© {new Date().getFullYear()} Diego Sarmiento</span>
          <div className="flex gap-4">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
