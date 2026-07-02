import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/landing/Hero'
import { Categories } from '@/components/landing/Categories'
import { TrustStats } from '@/components/landing/TrustStats'
import { WhyQRHub } from '@/components/landing/WhyQRHub'
import { HowItWorks } from '@/components/landing/HowItWorks'
import { FAQ } from '@/components/landing/FAQ'
import { Footer } from '@/components/landing/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />

      <Hero />
      <Categories />

      <TrustStats />

      <WhyQRHub />

      <HowItWorks />

      <FAQ />

      <Footer />
    </>
  )
}
