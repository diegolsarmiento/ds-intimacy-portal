import { resend, FROM, CONTACT_TO } from './resend'

type ContactPayload = {
  name: string
  email: string
  company?: string
  interest?: string
  message: string
}

export async function sendContactNotification(data: ContactPayload) {
  const { name, email, company, interest, message } = data

  await resend.emails.send({
    from: FROM,
    to: CONTACT_TO,
    subject: `New contact from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      company && `Company: ${company}`,
      interest && `Interest: ${interest}`,
      '',
      'Message:',
      message,
    ]
      .filter(Boolean)
      .join('\n'),
  })
}

export async function sendContactConfirmation(data: ContactPayload) {
  const { name, email } = data

  await resend.emails.send({
    from: FROM,
    to: email,
    subject: 'Thank you for reaching out',
    text: [
      `Hi ${name || 'there'},`,
      '',
      `Thank you for writing. I’ve received your message and I’ll get back to you as soon as I can.`,
      '',
      `In the meantime, you can explore more at diegosarmiento.com or revisit The Intimacy Code.`,
      '',
      `— Diego`,
    ].join('\n'),
  })
}
