// app/layout.tsx
import type { Metadata } from 'next'
import '@/styles/globals.css'
import Nav from '@/components/Nav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: {
    default: 'Diego Sarmiento - The Intimacy Code',
    template: '%s | Diego Sarmiento',
  },
  description:
    'Author of The Intimacy Code — exploring technology, desire, and the art of emotional connection.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh flex flex-col bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
        <Nav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
