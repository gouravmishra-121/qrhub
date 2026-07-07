import { Categories } from '@/components/landing/Categories'
import { FAQ } from '@/components/landing/FAQ'
import { Hero } from '@/components/landing/Hero'
import { HowItWorks } from '@/components/landing/HowItWorks'
import { PopularUseCases } from '@/components/landing/PopularUseCases'
import { TrustStats } from '@/components/landing/TrustStats'
import { WhyQRPrintly } from '@/components/landing/WhyQRPrintly'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <PopularUseCases />
      <TrustStats />
      <WhyQRPrintly />
      <HowItWorks />
      <FAQ />
    </>
  )
}
