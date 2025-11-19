'use server'

import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import { sendContactNotification, sendContactConfirmation } from '@/lib/email/contact'
import { canAcceptContact } from '@/lib/rate-limit/page'

export async function handleContact(formData: FormData) {
  const name = String(formData.get('name') || '')
  const email = String(formData.get('email') || '')
  const company = String(formData.get('company') || '')
  const interest = String(formData.get('interest') || '')
  const message = String(formData.get('message') || '')
  const trap = String(formData.get('website') || '')

  // 🕳️ Honeypot – if filled, pretend it's fine but do nothing
  if (trap) {
    redirect('/contact?sent=1')
  }

  if (!email || !message) {
    throw new Error('Missing required fields')
  }

  // 🔒 Extract IP (best-effort)
  const h = await headers()

  const ip =
    h.get('x-forwarded-for')?.split(',')[0].trim() ||
    h.get('x-real-ip') ||
    'unknown'

  // Build keys: per IP and per email
  const ipKey = `ip:${ip}`
  const emailKey = `email:${email.toLowerCase()}`

  // If either is over limit, silently drop (but show "sent" to the user)
  if (!canAcceptContact(ipKey) || !canAcceptContact(emailKey)) {
    redirect('/contact?sent=1')
  }

  const payload = { name, email, company, interest, message }

  await sendContactNotification(payload)
  await sendContactConfirmation(payload)

  redirect('/contact?sent=1')
}
