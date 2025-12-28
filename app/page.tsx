import Hero from '@/components/Hero'
import About from '@/components/About'
import Book from '@/components/Book'
import Experiences from '@/components/Experiences'
import Journal from '@/components/Journal'
import SoftHeat from '@/components/SoftHeat'
import Projects from '@/components/Projects'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Book />
      <Experiences />
      <Journal />
      <SoftHeat />
    </>
  )
}

