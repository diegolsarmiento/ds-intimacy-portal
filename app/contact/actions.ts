'use server'

import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import { sendContactNotification, sendContactConfirmation } from '@/lib/email/contact'
// import { canAcceptContact } from '@/lib/rate-limit'  // we can keep this, but first: hard block

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

  // 🚫 1) TEMPORARY HARD BLOCK: known spam domains / patterns
  const lowerEmail = email.toLowerCase()
  const domain = lowerEmail.split('@')[1] || ''

  const blockedDomains = new Set([
    'vtext.com',
    'crewtoncare.com',
    'promotionwatch.com',
  ])

  const blockedNames = new Set([
    'robertphlre', // normalize weird spam name
  ])

  const blocked = 
    blockedDomains.has(domain) ||
    blockedNames.has(name.toLowerCase())

  const looksLikeObviousSpam =
    message.toLowerCase().includes('precio') && !company && interest === ''

  if (blocked || looksLikeObviousSpam) {
    // silently drop – UI still shows "sent"
    redirect('/contact?sent=1')
  }

  // 🔒 (optional) rate-limit using IP/email, even if it's imperfect on serverless
  const h = await headers()
  const ip =
    h.get('x-forwarded-for')?.split(',')[0].trim() ||
    h.get('x-real-ip') ||
    'unknown'

  // if you keep the rate-limit helper:
  // const ipKey = `ip:${ip}`
  // const emailKey = `email:${lowerEmail}`
  // if (!canAcceptContact(ipKey) || !canAcceptContact(emailKey)) {
  //   redirect('/contact?sent=1')
  // }

  const payload = { name, email, company, interest, message }

  await sendContactNotification(payload)
  await sendContactConfirmation(payload)

  redirect('/contact?sent=1')
}
