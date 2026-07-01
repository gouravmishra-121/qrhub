import { Hero } from '@/components/landing/Hero'
import { Features } from '@/components/landing/Features'
import { Generators } from '@/components/landing/Generators'
import { Templates } from '@/components/landing/Templates'
import { Footer } from '@/components/landing/Footer'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Generators />
      <Templates />
      <Footer />
    </>
  )
}
