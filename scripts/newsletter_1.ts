import { resend, FROM } from '@/lib/email/resend'

const subscribers = [
  'hi@rocketch.com',
  'dlsarmiento@gmail.com',
  'reydescalzo@yahoo.com'
]

async function main() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error(
      'RESEND_API_KEY is missing. Run: set -a; source .env.local; set +a; npx tsx scripts/newsletter_1.ts'
    )
  }

  const subject = 'Before touching the screen'

  const html = `
    <div style="max-width:600px;margin:40px auto;font-family:Georgia,serif;line-height:1.65;color:#111">
      <img src="https://www.diegosarmiento.com/newsletters/n_1.png" alt="Atmosphere" style="width:100%;border-radius:10px;margin-bottom:24px" />
      <p><em>The house is quiet. The laptop is open. You don’t write yet. You breathe.</em></p>
      <p>We touch screens all day without asking which part of us is responding first. Urgency isn’t productivity. It’s anxiety in disguise.</p>
      <p><strong>Insight</strong><br/>True digital intimacy begins before the click. In the second where you choose whether you enter… or abandon yourself.</p>
      <p><strong>DS</strong><br/>Digital Intimacy & Sensory Storytelling</p>
      <p><strong>Recommendation</strong><br/>Before opening any app today: hand on your chest, one long exhale, then decide.</p>
    </div>
  `

  await resend.emails.send({
    from: FROM,
    to: subscribers,
    subject,
    html,
  })

  console.log('Sent 💗', subscribers.length)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
