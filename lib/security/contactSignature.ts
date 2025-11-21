import crypto from 'crypto'

const SIGNATURE_TTL_MS = 5 * 60 * 1000 // 5 minutes

function getSecret() {
  const secret = process.env.CONTACT_FORM_SECRET
  if (!secret) {
    throw new Error('CONTACT_FORM_SECRET is not set')
  }
  return secret
}

export function createContactSignatureToken() {
  const secret = getSecret()
  const timestamp = Date.now().toString()
  const nonce = crypto.randomBytes(16).toString('hex')

  const payload = `${timestamp}:${nonce}`

  const hmac = crypto.createHmac('sha256', secret)
  hmac.update(payload)
  const digest = hmac.digest('hex')

  // token format: ts:nonce:signature
  return `${timestamp}:${nonce}:${digest}`
}

export function verifyContactSignatureToken(token: string | null | undefined): boolean {
  if (!token) return false

  const secret = getSecret()

  const parts = token.split(':')
  if (parts.length !== 3) return false

  const [timestampStr, nonce, signature] = parts
  const timestamp = Number(timestampStr)
  if (!Number.isFinite(timestamp)) return false

  // Expiration check
  const now = Date.now()
  if (now - timestamp > SIGNATURE_TTL_MS) return false

  const payload = `${timestampStr}:${nonce}`
  const hmac = crypto.createHmac('sha256', secret)
  hmac.update(payload)
  const expected = hmac.digest('hex')

  try {
    const sigBuf = Buffer.from(signature, 'hex')
    const expBuf = Buffer.from(expected, 'hex')
    if (sigBuf.length !== expBuf.length) return false
    return crypto.timingSafeEqual(sigBuf, expBuf)
  } catch {
    return false
  }
}
