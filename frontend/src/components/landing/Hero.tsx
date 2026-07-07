import { Link } from 'react-router-dom'

import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'

const trustPoints = ['No signup', 'Browser-based', 'PNG/SVG download', 'Static QR codes']

const popularLinks = [
  { label: 'UPI QR', href: '/upi' },
  { label: 'WhatsApp QR', href: '/whatsapp' },
  { label: 'WiFi QR', href: '/wifi' },
  { label: 'vCard QR', href: '/vcard' },
]

export function Hero() {
  return (
    <Section className="pt-20 sm:pt-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium text-muted-foreground">
            Free QR code generator for everyday business use
          </p>

          <h1 className="mt-3 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Create QR Codes Online for Payments, WiFi, WhatsApp and More
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Generate QR codes for UPI payments, websites, WhatsApp chats, WiFi access, contact
            cards, emails, SMS, phone calls, maps and text. No signup required — create, preview and
            download instantly.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/qr-types"
              className="inline-flex justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Create QR Code
            </Link>

            <Link
              to="/templates"
              className="inline-flex justify-center rounded-full border px-6 py-3 text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              Browse Templates
            </Link>

            <Link
              to="/blog"
              className="inline-flex justify-center rounded-full border px-6 py-3 text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              Read Guides
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            {trustPoints.map((item) => (
              <span key={item}>✓ {item}</span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm text-muted-foreground">Popular:</span>

            {popularLinks.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="rounded-full border px-4 py-2 text-sm font-medium text-muted-foreground transition hover:border-primary/50 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
