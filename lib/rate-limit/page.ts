// Simple in-memory rate limiter for contact form
// NOTE: Works best on long-lived server processes; on serverless it still helps, but isn't perfect.

type Key = string

type Record = {
  count: number
  resetAt: number
}

const WINDOW_MS = 10 * 60 * 1000 // 10 minutes
const MAX_PER_WINDOW = 2         // max 2 messages per window per key

const store = new Map<Key, Record>()

export function canAcceptContact(key: Key): boolean {
  const now = Date.now()
  const existing = store.get(key)

  if (!existing || existing.resetAt < now) {
    // new window
    store.set(key, { count: 1, resetAt: now + WINDOW_MS })
    return true
  }

  if (existing.count >= MAX_PER_WINDOW) {
    return false
  }

  existing.count += 1
  return true
}
