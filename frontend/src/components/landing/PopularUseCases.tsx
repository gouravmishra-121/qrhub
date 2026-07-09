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

const blogGuides = [
  {
    title: 'How to Create a WiFi QR Code for Your Cafe',
    description:
      'Learn how to create, test, download and print a WiFi QR code for cafe or guest networks.',
    href: '/blog/how-to-create-wifi-qr-code-for-cafe',
  },
  {
    title: 'Best QR Code Size for Printing',
    description:
      'Choose the right QR code size for business cards, menus, posters, stickers and shop boards.',
    href: '/blog/best-qr-code-size-for-printing',
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

        <div className="mt-12 rounded-3xl border bg-muted/30 p-6 sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Helpful QR guides</p>

              <h3 className="mt-2 text-2xl font-semibold">Learn before you print or share</h3>
            </div>

            <Link to="/blog" className="text-sm font-medium text-primary hover:underline">
              View all guides →
            </Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {blogGuides.map((guide) => (
              <Link
                key={guide.href}
                to={guide.href}
                className="rounded-2xl border bg-background p-5 transition hover:border-primary/50 hover:bg-muted/30"
              >
                <h4 className="font-semibold">{guide.title}</h4>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">{guide.description}</p>

                <p className="mt-4 text-sm font-medium text-primary">Read guide →</p>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
