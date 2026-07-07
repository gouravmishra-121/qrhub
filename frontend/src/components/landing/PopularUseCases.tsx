import { Link } from 'react-router-dom'

import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'

const useCases = [
  {
    title: 'UPI QR Code for Shops',
    description: 'Create a UPI QR code for shop counters, stalls, invoices and payment boards.',
    href: '/upi-qr-code-generator-for-shops',
  },
  {
    title: 'WhatsApp QR for Business',
    description: 'Let customers scan and start a WhatsApp chat for inquiries, bookings or support.',
    href: '/whatsapp-qr-code-for-business',
  },
  {
    title: 'WiFi QR Code for Cafe',
    description:
      'Create a guest WiFi QR code for cafes, restaurants, hotels, offices and reception areas.',
    href: '/wifi-qr-code-for-cafe',
  },
  {
    title: 'Restaurant Menu QR Code',
    description:
      'Create a QR code for restaurant menus, cafe menus, food stalls and cloud kitchens.',
    href: '/restaurant-menu-qr-code-generator',
  },
]

export function PopularUseCases() {
  return (
    <Section id="popular-use-cases">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-muted-foreground">Popular use cases</p>

          <h2 className="mt-2 text-4xl font-bold tracking-tight">
            QR Codes for Shops, Cafes and Small Businesses
          </h2>

          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Explore practical QR code pages made for real business situations — payments, customer
            chats, guest WiFi and digital menus.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {useCases.map((useCase) => (
            <Link
              key={useCase.href}
              to={useCase.href}
              className="rounded-2xl border bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold">{useCase.title}</h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">{useCase.description}</p>

              <p className="mt-5 text-sm font-medium text-primary">Explore guide →</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/blog"
            className="inline-flex rounded-full border px-5 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            Read QR code guides →
          </Link>
        </div>
      </Container>
    </Section>
  )
}
