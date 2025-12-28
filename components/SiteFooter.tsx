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

          {/* Newsletter */}
          <form
            className="mt-4 flex gap-2 max-w-md"
            action="/newsletter"
            method="post"
          >
            <label className="sr-only" htmlFor="footer-email">
              Email
            </label>
            <input
              id="footer-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="your@email.com"
              className="w-full rounded-md border px-3 py-2 text-sm"
            />

            <button
              type="submit"
              className="rounded-md border px-4 py-2 text-sm border-glow cursor-pointer transition-opacity opacity-90 hover:opacity-100"
            >
              Join the circle
            </button>
          </form>

          <p className="mt-3 text-xs opacity-60">
            No noise. Just essays when they’re ready.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold mb-3">Explore</p>
          <ul className="space-y-2 text-sm opacity-80">
            <li>
              <Link
                href="/book"
                className="cursor-pointer inline-block transition-opacity opacity-90 hover:opacity-100"
              >
                The Intimacy Code
              </Link>
            </li>
            <li>
              <Link
                href="/experiences"
                className="cursor-pointer inline-block transition-opacity opacity-90 hover:opacity-100"
              >
                Workshops & Talks
              </Link>
            </li>
            <li>
              <Link
                href="/journal"
                className="cursor-pointer inline-block transition-opacity opacity-90 hover:opacity-100"
              >
                Journal
              </Link>
            </li>

            {/* Optional: YouTube / Soft Heat */}
            <li>
              <a
                href="https://www.youtube.com/watch?v=bbpEYNUL6tA&list=PLMSKJY3YjkiHrFNUeCdTLGqDDJHxlcdJb"
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer inline-block transition-opacity opacity-90 hover:opacity-100"
              >
                Soft Heat (YouTube)
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold mb-3">Contact</p>
          <ul className="space-y-2 text-sm opacity-80">
            <li>
              <a
                href="https://www.linkedin.com/in/diegolsarmiento"
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer inline-block transition-opacity opacity-90 hover:opacity-100"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://x.com/DiegoLSarmiento"
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer inline-block transition-opacity opacity-90 hover:opacity-100"
              >
                X / Twitter
              </a>
            </li>
            <li>
              <Link
                href="/contact"
                className="cursor-pointer inline-block transition-opacity opacity-90 hover:opacity-100"
              >
                Say hello
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="hairline-t">
        <div className="mx-auto max-w-6xl px-4 h-12 flex items-center justify-between text-xs opacity-70">
          <span>© {new Date().getFullYear()} Diego Sarmiento</span>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="cursor-pointer inline-block transition-opacity opacity-90 hover:opacity-100"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="cursor-pointer inline-block transition-opacity opacity-90 hover:opacity-100"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
