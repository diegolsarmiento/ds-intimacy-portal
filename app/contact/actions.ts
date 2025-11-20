'use server'

import { redirect } from 'next/navigation'
// import { sendContactNotification, sendContactConfirmation } from '@/lib/email/contact'

export async function handleContact(formData: FormData) {
  const email = String(formData.get('email') || '').trim()
  const message = String(formData.get('message') || '').trim()
  const trap = String(formData.get('website') || '').trim()

  // honeypot + basic guard so humans still see the same flow
  if (!email || !message || trap) {
    redirect('/contact?sent=1')
  }

  // 🚨 TEMPORARY: do not send any email at all
  redirect('/contact?sent=1')
}
