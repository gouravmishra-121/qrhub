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
  { label: 'Phone QR', href: '/phone' },
  { label: 'SMS QR', href: '/sms' },
  { label: 'Text QR', href: '/text' },
  { label: 'Maps QR', href: '/maps' },
]

const resources = [
  { label: 'All QR Types', href: '/qr-types' },
  { label: 'Templates', href: '/templates' },
  { label: 'Blog', href: '/blog' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Contact', href: '/contact' },
]

const seoLinks = [
  { label: 'UPI QR for Shops', href: '/upi-qr-code-generator-for-shops' },
  {
    label: 'WhatsApp QR for Business',
    href: '/whatsapp-qr-code-for-business',
  },
  { label: 'WiFi QR for Cafe', href: '/wifi-qr-code-for-cafe' },
  {
    label: 'Restaurant Menu QR',
    href: '/restaurant-menu-qr-code-generator',
  },
]

export function Footer() {
  return (
    <Section className="border-t py-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <h3 className="text-2xl font-bold">QRPrintly</h3>

            <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
              Create free QR codes for websites, WiFi, UPI payments, WhatsApp, business cards,
              menus, maps and more. No signup required.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">QR Types</h4>

            <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
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
            <h4 className="font-semibold">Popular Guides</h4>

            <ul className="mt-4 space-y-2">
              {seoLinks.map((item) => (
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
          © 2026 QRPrintly. Made with ❤️ in India.
        </div>
      </Container>
    </Section>
  )
}
