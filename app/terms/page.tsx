export const metadata = { title: 'Terms of Use' }

const UPDATED = 'November 12, 2025'

export default function TermsPage() {
  return (
    <main className="section-glow mx-auto max-w-3xl px-4 py-24 space-y-10">
      <header>
        <h1 className="text-4xl font-semibold tracking-tight">Terms of Use</h1>
        <p className="mt-2 text-sm opacity-70">Last updated: {UPDATED}</p>
        <p className="mt-4 opacity-80">
          These terms govern your use of this website and related services. By visiting or using the
          site, you agree to them.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Who we are</h2>
        <p className="opacity-80 text-sm">
          This site is operated by Diego Sarmiento. References to “we,” “us,” or “our” mean the site
          owner and authorized collaborators.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Acceptable use</h2>
        <ul className="list-disc pl-6 opacity-80 text-sm space-y-2">
          <li>Don’t break the law or infringe others’ rights.</li>
          <li>Don’t attempt to disrupt, scrape, or reverse-engineer the services.</li>
          <li>Don’t upload harmful, illegal, or abusive content.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Content & IP</h2>
        <p className="opacity-80 text-sm">
          Unless stated otherwise, the site’s content is owned by us or used with permission.
          You may share links and brief quotes with attribution. Any other use (including reproduction,
          distribution, adaptation, or derivative works) requires prior written consent.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Purchases, events, and services</h2>
        <p className="opacity-80 text-sm">
          Workshops, talks, or consulting engagements may be subject to separate terms (scope,
          scheduling, fees, and cancellation). In case of conflict, those specific terms control for the engagement.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">User submissions</h2>
        <p className="opacity-80 text-sm">
          If you voluntarily send ideas, feedback, or materials, you grant us a non-exclusive,
          worldwide, royalty-free license to use them to operate and improve the site and services.
          Don’t send confidential information unless we’ve agreed in writing to receive it.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Disclaimers</h2>
        <p className="opacity-80 text-sm">
          The site is provided “as is.” We make no warranties of any kind, express or implied,
          including fitness for a particular purpose. Content is for informational purposes and does
          not constitute legal, medical, or therapeutic advice.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Limitation of liability</h2>
        <p className="opacity-80 text-sm">
          To the fullest extent permitted by law, we won’t be liable for indirect, incidental, special,
          or consequential damages, or for lost profits, revenue, or data arising from your use of the site.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Indemnity</h2>
        <p className="opacity-80 text-sm">
          You agree to indemnify and hold us harmless from claims arising out of your violation of these
          terms or misuse of the site.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Governing law</h2>
        <p className="opacity-80 text-sm">
          These terms are governed by the laws of the State of Florida and applicable U.S. federal law.
          Venue for any dispute will be the state or federal courts located in Florida, USA.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Changes</h2>
        <p className="opacity-80 text-sm">
          We may update these terms from time to time. Continued use of the site after changes means you
          accept the updated terms.
        </p>
      </section>

      <section className="space-y-2 border-t pt-6">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="opacity-80 text-sm">
          Email: <a className="underline underline-offset-4" href="mailto:hola@diegosarmiento.com">hola@diegosarmiento.com</a>
        </p>
      </section>

      <p className="text-xs opacity-60">
        This page is for clarity and does not replace independent legal advice.
      </p>
    </main>
  )
}
