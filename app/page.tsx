import Nav from '@/components/Nav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <Nav />

      <main>
        {/* Placeholder hero so you can drop your block later */}
        <section className="mx-auto max-w-4xl px-4 py-28 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            The philosopher who whispers in design.
          </h1>
          <p className="mt-4 text-base md:text-lg opacity-80">
            Intimacy, technology, and the art of feeling more—on and off the screen.
          </p>
          <div className="mt-8">
            <Link href="/experiences" className="border px-5 py-2 rounded-md text-sm">
              Enter the intimacy lab
            </Link>
          </div>
        </section>

        {/* Section anchors you’ll fill with UI Blocks later */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-20 border-t">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold">About Diego</h2>
            <p className="mt-3 opacity-80 text-sm">
              (Drop in “Content Sections · Centered” here)
            </p>
          </div>
        </section>

        <section id="book" className="mx-auto max-w-6xl px-4 py-20 border-t">
          <h2 className="text-2xl font-semibold">The Intimacy Code</h2>
          <p className="mt-3 opacity-80 text-sm">
            (Drop in “Feature Sections · With large bordered screenshot” here)
          </p>
        </section>

        <section id="experiences" className="mx-auto max-w-6xl px-4 py-20 border-t">
          <h2 className="text-2xl font-semibold">Experiences</h2>
          <p className="mt-3 opacity-80 text-sm">
            (Drop in “Feature Sections · Offset with feature list” here)
          </p>
        </section>

        <section id="journal" className="mx-auto max-w-6xl px-4 py-20 border-t">
          <h2 className="text-2xl font-semibold">Journal</h2>
          <p className="mt-3 opacity-80 text-sm">
            (Drop in “Blog Sections · With featured post” here)
          </p>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
