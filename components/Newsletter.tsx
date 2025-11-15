'use client'
import { useState } from 'react'

export default function Newsletter() {
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const email = (new FormData(form).get('email') as string)?.trim()
    if (!email) return
    setStatus('loading')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-heading"
      className="section-glow mx-auto max-w-6xl px-4 py-24 md:py-32 border-t"
    >
      <div className="max-w-3xl">
        <h2 id="newsletter-heading" className="text-3xl md:text-4xl font-semibold tracking-tight">
          Join the <span className="text-glow">circle</span>
        </h2>
        <p className="mt-4 text-base md:text-lg opacity-80">
          Private letters, early invites, soft experiments. No noise—only closeness.
        </p>

        <form onSubmit={onSubmit} className="mt-6 flex w-full max-w-xl gap-2" aria-describedby="consent">
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="your@email.com"
            className="w-full rounded-md border px-3 py-2 text-sm"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="rounded-md border px-4 py-2 text-sm border-glow disabled:opacity-60"
          >
            {status === 'loading' ? 'One moment…' : 'I’m in'}
          </button>
        </form>

        <p id="consent" className="mt-3 text-xs opacity-60">
          A gentle note, sometimes weekly. Unsubscribe anytime.
        </p>

        {status === 'success' && (
          <p role="status"  className="mt-4 text-sm text-glow animate-fadeIn">Check your inbox—your first letter is on its way.</p>
        )}
        {status === 'error' && (
          <p role="status"  className="mt-4 text-sm text-glow animate-fadeIn">Something flickered. Try again, love.</p>
        )}
      </div>
    </section>
  )
}
