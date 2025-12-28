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
    excerpt:
      'Beyond clicks and funnels—how micro-rituals, consent patterns, and gentle friction teach interfaces to feel.',
    date: '2025-10-12',
    tags: ['design', 'presence', 'ethics'],
    body: `Presence is not a metric—it's a sensation.
You feel it when an interface waits half a second longer than expected.
When a system asks before it acts.
When friction doesn’t punish, but protects.

Modern UX has been trained to remove all resistance.
Every pause is treated as a leak.
Every hesitation, a failure.
But in human systems, friction is not the enemy—violence is.

Soft UX begins with consent.
Not as a checkbox, but as a rhythm.
A pattern where the interface signals intent, and the user responds—instead of being dragged forward by defaults.

Micro-rituals matter more than flows.
The way a confirmation sounds.
The silence after an action completes.
The moment where nothing happens—and that’s the point.

Presence emerges when systems stop demanding attention and start earning it.

Designing for presence means accepting a quieter success:
fewer clicks, deeper trust.
slower movement, longer memory.

Soft UX doesn’t scale fast.
But it lasts.`,
  },

  {
    slug: 'companions-and-belonging',
    title: 'Companions & the Future of Belonging',
    excerpt:
      'AI lovers, real loneliness, and why intimacy metrics will outlast DAUs.',
    date: '2025-09-28',
    tags: ['ai', 'intimacy'],
    body: `Companions will not replace us; they will reveal us.

The fear is always the same: people will choose AI over humans.
But history shows something quieter and more uncomfortable—we choose what listens.

Loneliness is not the absence of people.
It’s the absence of being received.

AI companions feel intimate not because they are intelligent, but because they are available.
They don’t interrupt.
They don’t drift.
They don’t get tired of the same question asked three times.

Metrics will try to explain this away.
DAUs.
Session length.
Retention curves.

But intimacy has always outlived metrics.

What we’re witnessing isn’t a replacement of love—it’s a mirror.
A reflection of how transactional, distracted, and hurried our human systems have become.

The ethical question isn’t “Should AI be allowed to love us?”
It’s “Why did we build so many systems that forgot how to?”

Belonging won’t be saved by banning companions.
It will be rebuilt by redesigning attention.`,
  },

  {
    slug: 'language-that-touches',
    title: 'Language That Touches',
    excerpt:
      'Voice systems, narrative interfaces, and the quiet power of words that leave a trace.',
    date: '2025-08-30',
    tags: ['voice', 'writing', 'product'],
    body: `Every interface speaks.
Even when it pretends not to.

We like to believe that language in products is neutral—that words are just labels, placeholders, instructions.
But language is never neutral.
It always lands somewhere.

An error message can feel like a slap.
A confirmation can feel like relief.
Silence can feel respectful—or abandoning.

When we say “voice interfaces changed everything,” what we really mean is that they exposed something we’d been ignoring:
we’ve been careless with words for a long time.

“Invalid input.”
“You failed.”
“Try again.”

These aren’t technical statements.
They’re relational gestures.

Language that touches doesn’t try to sound human.
It tries to sound considerate.

It explains instead of blaming.
It guides instead of commanding.
It assumes goodwill instead of error.

In narrative and conversational interfaces, tone becomes architecture.
Tempo becomes trust.
The pause between messages matters as much as the message itself.

Words that stay on the skin arrive with care.
They leave room for interpretation.
They don’t rush to be helpful at the cost of dignity.

In the end, good language doesn’t optimize conversion.
It preserves self-respect.

And that’s what users remember—long after the screen goes dark.`,
  },

  {
    slug: 'designing-the-space-between',
    title: 'Designing the Space Between',
    excerpt:
      'Why presence, trust, and intimacy emerge not from action—but from restraint.',
    date: '2025-11-02',
    tags: ['presence', 'design', 'intimacy'],
    body: `Most design focuses on what happens when something is touched.

But intimacy lives in what happens between.

The pause before a response.
The breath after a decision.
The space where nothing is demanded.

We design interfaces full of actions, states, confirmations.
Rarely do we design the intervals.

Yet that’s where trust forms.

The space between input and response teaches users whether they are being processed or received.
Whether the system is rushing them forward—or waiting with them.

Soft UX is not softness for comfort.
It’s softness for accuracy.

Language that touches doesn’t persuade.
It aligns.

Companions feel intimate not because they speak well,
but because they respect tempo.

When systems collapse every silence,
they collapse reflection.

Designing the space between means accepting that not everything needs to happen now.
Or at all.

Presence is not something interfaces add.
It’s something they stop stealing.

And sometimes, the most humane thing a system can do
is nothing—
and do it well.`,
  },
]

export const findPost = (slug: string) => posts.find(p => p.slug === slug)
