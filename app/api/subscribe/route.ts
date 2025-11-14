import { NextResponse } from 'next/server'
import { sendSubscribeNotification, sendSubscribeWelcome } from '@/lib/email/subscribe'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    await Promise.all([
      sendSubscribeNotification(email),
      sendSubscribeWelcome(email),
    ])

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Subscribe error', err)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
