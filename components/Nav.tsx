'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/book', label: 'The Intimacy Code' },
  { href: '/experiences', label: 'Experiences' },
  { href: '/journal', label: 'Journal' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 header-surface hairline-b">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold tracking-wide cursor-pointer inline-flex items-center transition-opacity opacity-95 hover:opacity-100"
        >
          Diego<span className="opacity-60">Sarmiento</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-2">
            {links.map(l => {
              const active = pathname === l.href
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={[
                      'text-sm cursor-pointer inline-flex items-center rounded-md px-3 py-2 transition-opacity',
                      active ? 'opacity-100 text-glow' : 'opacity-70 hover:opacity-100',
                    ].join(' ')}
                    aria-current={active ? 'page' : undefined}
                  >
                    {l.label}
                    {active ? (
                      <span className="ml-2 h-1 w-1 rounded-full bg-[rgb(var(--foreground))] opacity-40" />
                    ) : null}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Mobile: keep it honest and useful (no fake menu) */}
        <Link
          href="/contact"
          className="md:hidden text-sm opacity-70 hover:opacity-100 transition-opacity cursor-pointer underline underline-offset-4 inline-block"
        >
          Contact
        </Link>
      </div>

      {/* soft gradient underline */}
      <div className="accent-line" />
    </header>
  )
}
