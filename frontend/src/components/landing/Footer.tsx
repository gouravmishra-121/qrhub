import { Link } from 'react-router-dom'

import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'

const qrTypes = [
  { label: 'Website QR', href: '/website' },
  { label: 'UPI QR', href: '/upi' },
  { label: 'WiFi QR', href: '/wifi' },
  { label: 'WhatsApp QR', href: '/whatsapp' },
  { label: 'Email QR', href: '/email' },
  { label: 'vCard QR', href: '/vcard' },
]

const resources = [
  { label: 'All QR Types', href: '/qr-types' },
  { label: 'Templates', href: '/#templates' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Home', href: '/' },
]

export function Footer() {
  return (
    <Section className="border-t py-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-bold">QRHub</h3>

            <p className="mt-4 text-sm text-muted-foreground">
              Create beautiful QR codes for websites, WiFi, UPI, WhatsApp, business cards and more —
              completely free.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">QR Types</h4>

            <ul className="mt-4 space-y-2">
              {qrTypes.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Resources</h4>

            <ul className="mt-4 space-y-2">
              {resources.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          © 2026 QRHub. Made with ❤️ in India.
        </div>
      </Container>
    </Section>
  )
}
