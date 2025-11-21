'use server'

import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import { verifyContactSignatureToken } from '@/lib/security/contactSignature'
import { sendContactNotification, sendContactConfirmation } from '@/lib/email/contact'

async function verifyTurnstileToken(token: string, ip: string | null): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY
  if (!secretKey) {
    // Turnstile not configured – treat as "skip"
    return true
  }

  try {
    const formData = new URLSearchParams()
    formData.append('secret', secretKey)
    formData.append('response', token)
    if (ip) {
      formData.append('remoteip', ip)
    }

    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: formData,
    })

    if (!res.ok) {
      console.warn('[contact] Turnstile verify HTTP error', res.status)
      return false
    }

    const data = (await res.json()) as { success?: boolean; 'error-codes'?: string[] }
    if (!data.success) {
      console.warn('[contact] Turnstile verify failed', data['error-codes'])
      return false
    }

    return true
  } catch (err) {
    console.error('[contact] Turnstile verify exception', err)
    return false
  }
}

export async function handleContact(formData: FormData) {
  const signatureToken = String(formData.get('signatureToken') || '')
  const startedAtRaw = String(formData.get('startedAt') || '')
  const trap = String(formData.get('website') || '').trim()

  // 1) Signature must be valid
  const signatureOk = verifyContactSignatureToken(signatureToken)
  if (!signatureOk) {
    console.warn('[contact] invalid signature token, blocking request')
    redirect('/contact?sent=1')
  }

  // 2) Honeypot
  if (trap) {
    console.warn('[contact] honeypot field filled, blocking request')
    redirect('/contact?sent=1')
  }

  // 3) Timing (simple bot guard)
  let timingOk = true
  const now = Date.now()
  const startedAt = Number(startedAtRaw)
  if (Number.isFinite(startedAt)) {
    const diff = now - startedAt
    if (diff < 300 || diff > 30 * 60 * 1000) {
      timingOk = false
    }
  }
  if (!timingOk) {
    console.warn('[contact] suspicious timing, blocking request')
    redirect('/contact?sent=1')
  }

  // 4) Turnstile (optional, only if configured)
  const cfToken = String(formData.get('cf-turnstile-response') || '')
  const hasTurnstileConfigured = !!process.env.TURNSTILE_SECRET_KEY

  if (hasTurnstileConfigured) {
    if (!cfToken) {
      console.warn('[contact] missing Turnstile token, blocking request')
      redirect('/contact?sent=1')
    }

    const hdrs = await headers()
    const ipHeader = hdrs.get('x-forwarded-for')
    const ip = ipHeader ? ipHeader.split(',')[0].trim() : null

    const turnstileOk = await verifyTurnstileToken(cfToken, ip)
    if (!turnstileOk) {
      console.warn('[contact] Turnstile verification failed, blocking request')
      redirect('/contact?sent=1')
    }
  }

  // 5) Only now read the actual content fields
  const email = String(formData.get('email') || '').trim()
  const message = String(formData.get('message') || '').trim()
  const name = String(formData.get('name') || '').trim()
  const company = String(formData.get('company') || '').trim()
  const interest = String(formData.get('interest') || '').trim()

  if (!email || !message) {
    console.warn('[contact] missing required fields, blocking request')
    redirect('/contact?sent=1')
  }

  // Here you'd eventually send the emails:
  await sendContactNotification({ name, email, company, interest, message })
  await sendContactConfirmation({ name, email, message })

  redirect('/contact?sent=1')
}
