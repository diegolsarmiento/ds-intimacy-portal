import { resend, FROM, CONTACT_TO } from './resend'

export async function sendSubscribeNotification(email: string) {
  await resend.emails.send({
    from: FROM,
    to: CONTACT_TO,
    subject: 'New newsletter subscriber',
    text: `New subscriber: ${email}`,
  })
}

export async function sendSubscribeWelcome(email: string) {
  await resend.emails.send({
    from: FROM,
    to: email,
    subject: 'Welcome to the circle',
    text: [
      `Hi,`,
      '',
      `Thank you for joining the circle.`,
      `You’ll receive occasional letters about intimacy, design, and presence—never spam.`,
      '',
      `— Diego`,
    ].join('\n'),
  })
}
