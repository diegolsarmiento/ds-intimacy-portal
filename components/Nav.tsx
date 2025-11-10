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
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide">
          Diego<span className="opacity-60">Sarmiento</span>
        </Link>

        <nav aria-label="Primary">
          <ul className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`text-sm hover:opacity-100 transition ${
                    pathname === l.href ? 'opacity-100' : 'opacity-70'
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:hidden">
          {/* drop in a mobile menu later (shadcn Sheet) */}
          <span className="text-sm opacity-70">Menu</span>
        </div>
      </div>
    </header>
  )
}
