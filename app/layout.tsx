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

export const metadata: Metadata = {
  metadataBase: new URL('https://www.diegosarmiento.com'),
  title: {
    default: 'Diego Sarmiento - The Intimacy Code',
    template: '%s | Diego Sarmiento',
  },
  description:
    'Author of The Intimacy Code — exploring technology, desire, and the art of emotional connection.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],

  openGraph: {
    type: 'website',
    url: 'https://www.diegosarmiento.com',
    siteName: 'Diego Sarmiento',
    title: 'Diego Sarmiento - The Intimacy Code',
    description:
      'Author of The Intimacy Code — exploring technology, desire, and the art of emotional connection.',
    images: [
      {
        url: '/images/og-book.png',
        width: 1200,
        height: 630,
        alt: 'The Intimacy Code — Diego Sarmiento',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Diego Sarmiento - The Intimacy Code',
    description:
      'Author of The Intimacy Code — exploring technology, desire, and the art of emotional connection.',
    images: ['/images/og-book.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GA_INIT = GA_ID
    ? `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}');
    `
    : ''

  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-dvh flex flex-col bg-[rgb(var(--background))] text-[rgb(var(--foreground))]`}
      >
        {/* Google Analytics (only if configured) */}
        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{ __html: GA_INIT }}
            />
          </>
        ) : null}

        <Nav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
