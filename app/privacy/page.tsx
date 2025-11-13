export const metadata = { title: 'Privacy Policy' }

const UPDATED = 'November 12, 2025'

export default function PrivacyPage() {
  return (
    <main className="section-glow mx-auto max-w-3xl px-4 py-24 space-y-10">
      <header>
        <h1 className="text-4xl font-semibold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm opacity-70">Last updated: {UPDATED}</p>
        <p className="mt-4 opacity-80">
          This policy explains how I collect, use, and protect your information across this website,
          newsletter, and related services.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">What we collect</h2>
        <ul className="list-disc pl-6 opacity-80 text-sm space-y-2">
          <li><b>Contact data</b> (name, email) when you join the newsletter or reach out.</li>
          <li><b>Usage data</b> (pages visited, device info) for analytics and performance.</li>
          <li><b>Message content</b> you submit via forms or chat interfaces.</li>
          <li><b>Cookies</b> to remember preferences and measure engagement.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">How we use it</h2>
        <ul className="list-disc pl-6 opacity-80 text-sm space-y-2">
          <li>To send letters, updates, and invitations you’ve requested.</li>
          <li>To improve content, design, and site performance.</li>
          <li>To respond to inquiries and provide support.</li>
          <li>To maintain security and prevent abuse.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Sharing</h2>
        <p className="opacity-80 text-sm">
          We don’t sell personal data. We may share limited information with service providers
          (email delivery, analytics, hosting) under contracts that require confidentiality and
          lawful processing. We may disclose information to comply with legal obligations or to
          protect rights and safety.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Cookies & analytics</h2>
        <p className="opacity-80 text-sm">
          Cookies help remember preferences and measure traffic. You can control cookies in your
          browser settings. Analytics is used in aggregate to understand what’s working and what
          needs love.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Data retention</h2>
        <p className="opacity-80 text-sm">
          We keep personal data only as long as needed for the purpose it was collected, or as
          required by law. You can request deletion (see “Your rights”).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Your rights</h2>
        <p className="opacity-80 text-sm">
          Depending on your location, you may have rights to access, correct, delete, or export
          personal data, and to object or restrict certain processing. To make a request, contact
          us below—we’ll respond within a reasonable time.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Children</h2>
        <p className="opacity-80 text-sm">
          This site is not directed to children under 16. We don’t knowingly collect data from
          children. If you believe a child has provided personal information, contact us to remove it.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">International transfers</h2>
        <p className="opacity-80 text-sm">
          Data may be processed in the United States and other countries with different privacy laws.
          We take steps to protect your information according to this policy wherever it’s processed.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Changes</h2>
        <p className="opacity-80 text-sm">
          We may update this policy from time to time. Material changes will be noted here with a new
          “Last updated” date.
        </p>
      </section>

      <section className="space-y-2 border-t pt-6">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="opacity-80 text-sm">
          Email: <a className="underline underline-offset-4" href="mailto:hola@diegosarmiento.com">hola@diegosarmiento.com</a>
        </p>
      </section>

      <p className="text-xs opacity-60">
        This page is for transparency and does not constitute legal advice.
      </p>
    </main>
  )
}
