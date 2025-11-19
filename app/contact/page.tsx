import { handleContact } from './actions'

export const metadata = { title: 'Contact' }

type ContactSearchParams = {
  sent?: string
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams?: Promise<ContactSearchParams>
}) {
  const sp = (await searchParams) ?? {}
  const sent = sp.sent === '1'

  return (
    <main className="section-glow mx-auto max-w-3xl px-4 py-24">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-4 opacity-80">
        Tell me about your team, your product, and the feeling you want your users to remember.
      </p>

      {sent && (
        <p className="mt-4 text-sm text-glow">
          Thank you — your message has been received.
        </p>
      )}

      {/* Contact Info Blocks */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 max-w-xl">
        <div className="rounded-xl border border-glow p-4 space-y-1">
          <h3 className="text-sm font-semibold">Phone</h3>
          <p className="text-sm opacity-80">
            <a href="tel:+1-XXX-XXX-XXXX" className="underline underline-offset-4 hover:opacity-100">
              +1 (904) 792-2601
            </a>
          </p>
        </div>

        <div className="rounded-xl border border-glow p-4 space-y-1">
          <h3 className="text-sm font-semibold">Location</h3>
          <p className="text-sm opacity-80">
            St. Johns County, FL  
          </p>
        </div>
      </div>

      <form className="mt-10 space-y-4 max-w-xl" action={handleContact}>
        <div className="grid gap-4 md:grid-cols-2">
          <input
            className="rounded-md border px-3 py-2 text-sm"
            name="name"
            placeholder="Name"
            required
            disabled
          />
          <input
            className="rounded-md border px-3 py-2 text-sm"
            name="email"
            type="email"
            placeholder="Email"
            required
            disabled
          />
        </div>

        <input
          className="rounded-md border px-3 py-2 text-sm w-full"
          name="company"
          placeholder="Company (optional)"
          disabled
        />

        <select
          className="rounded-md border px-3 py-2 text-sm w-full"
          name="interest"
          defaultValue=""
          disabled
        >
          <option value="" disabled>
            I'm interested in…
          </option>
          <option>Workshop</option>
          <option>Keynote / Talk</option>
          <option>Consulting (Private Lab)</option>
          <option>Other</option>
        </select>

        <textarea
          className="rounded-md border px-3 py-2 text-sm w-full h-36"
          name="message"
          placeholder="Message"
          required
          disabled
        />

        {/* Honeypot – humans never see this */}
        <div className="hidden">
          <label>
            Leave this field empty
            <input name="website" autoComplete="off" />
          </label>
        </div>

        <button
          type="submit"
          className="button rounded-md border px-5 py-2 text-sm border-glow"
          disabled
        >
          Send
        </button>

        <p className="text-xs opacity-60">
          I read everything. You’ll hear back soon.
        </p>
      </form>
    </main>
  )
}
