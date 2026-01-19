import Image from 'next/image'

const items = [
  {
    name: 'Rocketch',
    href: 'https://www.rocketch.ai',
    desc: 'Order and calm for family law—an AI assistant designed to reduce friction, anxiety, and overload in emotionally sensitive journeys.',
    logo: '/images/rocketch_mark.png',
    tag: 'Active product · Founder & designer',
  },
  {
    name: 'SeductHub',
    href: 'https://www.seducthub.com',
    desc: 'An AI-powered commerce and creator platform exploring emotional UX, intimacy, and trust in adult wellness.',
    logo: '/images/seducthub_mark.png',
    tag: 'Ongoing lab · Founder',
  },
  {
    name: 'TabooTemp',
    href: 'https://www.tabootempt.com',
    desc: 'An experimental AI role-play and companion platform exploring desire, power, secrecy, and consent through narrative-driven intimacy.',
    logo: '/images/tabootempt_mark.png',
    tag: 'Experimental platform · Founder',
  }
]

export default function Projects() {
  return (
    <section className="section-glow mx-auto max-w-6xl px-4 py-24 md:py-28 border-t">
      <div className="max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Built <span className="text-glow">products</span>
        </h2>
        <p className="mt-3 opacity-80">
          Selected work—real systems, real users, built with emotional precision.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {items.map((it) => (
          <a
            key={it.name}
            href={it.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border p-6 card-hover cursor-pointer transition-opacity opacity-95 hover:opacity-100"
          >
            <div className="flex items-start gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-xl p-5">
                <Image src={it.logo} alt={`${it.name} logo`} fill className="object-cover" sizes="48px" />
              </div>
              <div>
                <div className="text-sm font-semibold">{it.name}</div>
                <p className="mt-2 text-sm opacity-80">{it.desc}</p>
                <p className="mt-3 text-xs opacity-60">
                  {it.tag}
                </p>
                <p className="mt-3 text-sm underline underline-offset-4 opacity-80">
                  Visit site →
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
