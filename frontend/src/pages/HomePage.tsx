import { Categories } from '@/components/landing/Categories'
import { FAQ } from '@/components/landing/FAQ'
import { HowItWorks } from '@/components/landing/HowItWorks'
import { PopularUseCases } from '@/components/landing/PopularUseCases'
import { TrustStats } from '@/components/landing/TrustStats'
import { WhyQRPrintly } from '@/components/landing/WhyQRPrintly'

export default function HomePage() {
  return (
    <>
      <Categories />
      <PopularUseCases />
      <TrustStats />
      <WhyQRPrintly />
      <HowItWorks />
      <FAQ />
    </>
  )
}
