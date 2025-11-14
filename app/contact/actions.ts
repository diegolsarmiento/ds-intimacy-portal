'use server'

import { sendContactNotification, sendContactConfirmation } from '@/lib/email/contact'

export async function handleContact(formData: FormData) {
  const name = String(formData.get('name') || '')
  const email = String(formData.get('email') || '')
  const company = String(formData.get('company') || '')
  const interest = String(formData.get('interest') || '')
  const message = String(formData.get('message') || '')

  if (!email || !message) {
    throw new Error('Missing required fields')
  }

  const payload = { name, email, company, interest, message }

  await sendContactNotification(payload)
  await sendContactConfirmation(payload)

  // you can return a status or redirect later if you want
}
