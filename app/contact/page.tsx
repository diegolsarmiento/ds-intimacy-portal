import { handleContact } from './actions'

export const metadata = { title: 'Contact' }

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { sent?: string }
}) {
  const sent = searchParams?.sent === '1'

  return (
    <main className="section-glow mx-auto max-w-3xl px-4 py-24">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-4 opacity-80">
        Tell me about your team, your product, and the feeling you want your users to remember.
      </p>

      {/* ✨ success message */}
      {sent && (
        <p className="mt-4 text-sm text-glow">
          Thank you — your message has been received.
        </p>
      )}

      <form className="mt-10 space-y-4 max-w-xl" action={handleContact}>
        <div className="grid gap-4 md:grid-cols-2">
          <input className="rounded-md border px-3 py-2 text-sm" name="name" placeholder="Name" required />
          <input className="rounded-md border px-3 py-2 text-sm" name="email" type="email" placeholder="Email" required />
        </div>
        <input className="rounded-md border px-3 py-2 text-sm w-full" name="company" placeholder="Company (optional)" />
        <select className="rounded-md border px-3 py-2 text-sm w-full" name="interest" defaultValue="">
          <option value="" disabled>I'm interested in…</option>
          <option>Workshop</option>
          <option>Keynote / Talk</option>
          <option>Consulting (Private Lab)</option>
          <option>Other</option>
        </select>
        <textarea className="rounded-md border px-3 py-2 text-sm w-full h-36" name="message" placeholder="Message" required />

        {/* TODO: wire to /api/contact (Resend or your mail provider) */}
        <button type="submit" className="button rounded-md border px-5 py-2 text-sm border-glow">
          Send
        </button>

        <p className="text-xs opacity-60">
          I read everything. You’ll hear back soon.
        </p>
      </form>
    </main>
  )
}
