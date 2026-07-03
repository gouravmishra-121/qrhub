import { FAQ } from '@/components/landing/FAQ'
import { Footer } from '@/components/landing/Footer'
import { Hero } from '@/components/landing/Hero'
import { HowItWorks } from '@/components/landing/HowItWorks'
import { Categories } from '@/components/landing/Categories'
import { TrustStats } from '@/components/landing/TrustStats'
import { WhyQRHub } from '@/components/landing/WhyQRHub'

export default function HomePage() {
  return (
    <>
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
