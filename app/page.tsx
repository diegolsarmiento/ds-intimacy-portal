import Nav from '@/components/Nav'
import SiteFooter from '@/components/SiteFooter'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Book from '@/components/Book'
import Experiences from '@/components/Experiences'
import Journal from '@/components/Journal'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Book />
        <Experiences />
        <Journal />
      </main>
      <SiteFooter />
    </>
  )
}
