import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'

import { StatCard } from './StatCard'

const stats = [
  {
    value: '500K+',
    label: 'QR Codes Generated',
  },
  {
    value: '120+',
    label: 'Countries Reached',
  },
  {
    value: '100%',
    label: 'Privacy Focused',
  },
  {
    value: 'Free',
    label: 'No Signup Required',
  },
]

export function TrustStats() {
  return (
    <Section id="trust">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
