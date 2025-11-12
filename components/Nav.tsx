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
        <Link href="/" className="font-semibold tracking-wide">
          Diego<span className="opacity-60">Sarmiento</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {links.map(l => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`text-sm transition hover:opacity-100 ${
                    pathname === l.href ? 'opacity-100 text-glow' : 'opacity-70'
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:hidden text-sm opacity-70">Menu</div>
      </div>
      {/* soft gradient underline */}
      <div className="accent-line" />
    </header>
  )
}
