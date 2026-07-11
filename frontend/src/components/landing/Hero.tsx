import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

const popularLinks = [
  { label: 'UPI QR', href: '/upi' },
  { label: 'WhatsApp QR', href: '/whatsapp' },
  { label: 'WiFi QR', href: '/wifi' },
  { label: 'vCard QR', href: '/vcard' },
]

export function Hero() {
  return (
    <section className="border-b bg-background">
      <div className="mx-auto max-w-7xl px-4 py-10 text-center sm:px-6 sm:py-12">
        <p className="text-sm font-medium text-muted-foreground">
          Free QR code generator — no signup required
        </p>

        <h1 className="mx-auto mt-3 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
          Create QR Codes Online
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
          Generate QR codes for UPI payments, WhatsApp chats, WiFi access, websites, vCards, email,
          SMS, phone, maps and text. Download PNG or SVG instantly.
        </p>

        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/qr-types">
            <Button className="w-full sm:w-auto">Choose QR Type</Button>
          </Link>

          <Link to="/templates">
            <Button variant="outline" className="w-full sm:w-auto">
              Browse Templates
            </Button>
          </Link>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
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
    </section>
  )
}
