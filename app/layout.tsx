// app/layout.tsx
import type { Metadata } from 'next'
import '@/styles/globals.css'
import Nav from '@/components/Nav'
import SiteFooter from '@/components/SiteFooter'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

const GOOGLE_ANALYTICS_SCRIPT = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${GA_ID}');
`

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
    <body
        className={`${inter.className} min-h-dvh flex flex-col bg-[rgb(var(--background))] text-[rgb(var(--foreground))]`}
      >
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <Script
          id="ga-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: GOOGLE_ANALYTICS_SCRIPT }}
        />
        <Nav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
