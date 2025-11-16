import { NextResponse, NextRequest, NextFetchEvent } from 'next/server'
import { clerkMiddleware } from '@clerk/nextjs/server'

const SPANISH_COUNTRIES = new Set<string>([
  'ES', 'MX', 'AR', 'CO', 'CL', 'PE', 'VE', 'UY', 'PY', 'BO', 'EC', 'CR',
  'PA', 'SV', 'GT', 'HN', 'NI', 'DO', 'PR',
])

const clerk = clerkMiddleware()

export default function middleware(request: NextRequest, event: NextFetchEvent) {
  const { pathname } = request.nextUrl

  // 🌎 Geo-based redirect: only from "/" to "/es"
  if (pathname === '/') {
    // TS-safe: use Vercel header only
    const country = request.headers.get('x-vercel-ip-country')

    if (country && SPANISH_COUNTRIES.has(country)) {
      const url = request.nextUrl.clone()
      url.pathname = '/es'
      return NextResponse.redirect(url)
    }
  }

  // 🔐 Let Clerk handle everything else
  return clerk(request, event)
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}