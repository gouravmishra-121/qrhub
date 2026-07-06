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
              Free QR Code Generator for UPI, WhatsApp, WiFi, Links and More
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Create QR codes online for payments, websites, WhatsApp chats, WiFi access,
            business contacts, email, SMS, phone calls, maps, and plain text. No signup
            required — generate, preview, and download your QR code instantly.
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
