'use server'

import { redirect } from 'next/navigation'
import { sendContactNotification, sendContactConfirmation } from '@/lib/email/contact'

export async function handleContact(formData: FormData) {
  // 🕳️ honeypot
  const trap = String(formData.get('website') || '')
  if (trap) {
    // bot detected – pretend everything is fine
    redirect('/contact?sent=1')
  }

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

  redirect('/contact?sent=1')
}
