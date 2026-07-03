import { Link } from 'react-router-dom'

import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'

const trustPoints = ['Free Forever', 'No Signup', 'Privacy First', 'Instant Download']

export function Hero() {
  return (
    <Section className="pt-20 sm:pt-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Generate Beautiful QR Codes for Everything
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Create QR codes for websites, WiFi, UPI payments, WhatsApp, business cards, maps and
            more. Fast, privacy-first and completely free.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              to="/qr-types"
              className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Create QR Code
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            {trustPoints.map((item) => (
              <span key={item}>✓ {item}</span>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
