import { Link } from 'react-router-dom'

import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'

const generators = ['Website QR', 'WiFi QR', 'UPI QR', 'WhatsApp QR']

const resources = ['About', 'Privacy Policy', 'Terms of Service', 'Contact']

export function Footer() {
  return (
    <Section className="border-t py-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold">QRHub</h3>

            <p className="mt-4 text-sm text-muted-foreground">
              Create beautiful QR codes for websites, WiFi, UPI, WhatsApp, business cards and more —
              completely free.
            </p>
          </div>

          {/* Generators */}
          <div>
            <h4 className="font-semibold">Generators</h4>

            <ul className="mt-4 space-y-2">
              {generators.map((item) => (
                <li key={item}>
                  <Link
                    to="/generators"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold">Resources</h4>

            <ul className="mt-4 space-y-2">
              {resources.map((item) => (
                <li key={item}>
                  <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
                    {item}
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
