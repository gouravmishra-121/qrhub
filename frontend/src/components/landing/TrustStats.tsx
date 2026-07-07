import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'

import { StatCard } from './StatCard'

const stats = [
  {
    value: '10',
    label: 'QR code types',
  },
  {
    value: '6',
    label: 'Printable templates',
  },
  {
    value: 'No',
    label: 'Signup required',
  },
  {
    value: 'Local',
    label: 'Browser-based generation',
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
