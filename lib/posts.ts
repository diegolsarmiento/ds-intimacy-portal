export type Post = {
  slug: string
  title: string
  excerpt: string
  date: string
  tags?: string[]
  body?: string
}

export const posts: Post[] = [
  {
    slug: 'soft-ux-presence',
    title: 'Soft UX: Designing for Presence',
    excerpt: 'Beyond clicks and funnels—how micro-rituals, consent patterns, and gentle friction teach interfaces to feel.',
    date: '2025-10-12',
    tags: ['design', 'presence', 'ethics'],
    body: `Presence is not a metric—it's a sensation...`,
  },
  {
    slug: 'companions-and-belonging',
    title: 'Companions & the Future of Belonging',
    excerpt: 'AI lovers, real loneliness, and why intimacy metrics will outlast DAUs.',
    date: '2025-09-28',
    tags: ['ai', 'intimacy'],
    body: `Companions will not replace us; they will reveal us...`,
  },
  {
    slug: 'language-that-touches',
    title: 'Language That Touches',
    excerpt: 'Voice systems, narrative interfaces, and the craft of words that stay on the skin.',
    date: '2025-08-30',
    tags: ['voice', 'writing', 'product'],
    body: `Every interface is a mouth. Some whisper; some bruise...`,
  },
]

export const findPost = (slug: string) => posts.find(p => p.slug === slug)
