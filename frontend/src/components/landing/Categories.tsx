import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  BadgeIndianRupee,
  FileText,
  Globe,
  IndianRupee,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquare,
  Phone,
  Store,
  Utensils,
  User,
  Wifi,
} from 'lucide-react'

import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/button'
import { templateDesignPreviews } from '@/data/templateDesignPreviews'

const qrCategories = [
  {
    icon: <IndianRupee className="h-7 w-7" />,
    title: 'UPI QR',
    description: 'Create payment QR codes for shops, stalls and invoices.',
    href: '/upi',
  },
  {
    icon: <MessageCircle className="h-7 w-7" />,
    title: 'WhatsApp QR',
    description: 'Let people scan and start a WhatsApp chat.',
    href: '/whatsapp',
  },
  {
    icon: <Wifi className="h-7 w-7" />,
    title: 'WiFi QR',
    description: 'Share guest WiFi without typing the password.',
    href: '/wifi',
  },
  {
    icon: <User className="h-7 w-7" />,
    title: 'vCard QR',
    description: 'Share contact details that people can save.',
    href: '/vcard',
  },
  {
    icon: <Globe className="h-7 w-7" />,
    title: 'Website QR',
    description: 'Turn any website, menu or landing page into a QR code.',
    href: '/website',
  },
  {
    icon: <MapPin className="h-7 w-7" />,
    title: 'Maps QR',
    description: 'Help people open your shop, office or event location.',
    href: '/maps',
  },
  {
    icon: <Mail className="h-7 w-7" />,
    title: 'Email QR',
    description: 'Open a ready-to-send email draft after scanning.',
    href: '/email',
  },
  {
    icon: <Phone className="h-7 w-7" />,
    title: 'Phone QR',
    description: 'Open the phone dialer with your number.',
    href: '/phone',
  },
  {
    icon: <MessageSquare className="h-7 w-7" />,
    title: 'SMS QR',
    description: 'Open a prefilled text message on scan.',
    href: '/sms',
  },
  {
    icon: <FileText className="h-7 w-7" />,
    title: 'Text QR',
    description: 'Share plain text, notes, instructions or labels.',
    href: '/text',
  },
]

const templateIcons = {
  'upi-payment': <BadgeIndianRupee className="h-7 w-7" />,
  'restaurant-menu': <Utensils className="h-7 w-7" />,
  wifi: <Wifi className="h-7 w-7" />,
  whatsapp: <MessageCircle className="h-7 w-7" />,
  'vcard-contact': <User className="h-7 w-7" />,
  website: <Store className="h-7 w-7" />,
}

export function Categories() {
  const [activeTab, setActiveTab] = useState<'qr-types' | 'templates'>('qr-types')

  const isQrTypesActive = activeTab === 'qr-types'
  const availableTemplates = templateDesignPreviews

  return (
    <Section id="categories" className="py-10 sm:py-12">
      <Container>
        <div id="templates" className="scroll-mt-24" />

        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Choose a QR Code Type or Template
          </h1>

          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Start with a QR generator for your data, or choose a printable template when you need a
            cleaner design for shops, menus, WiFi cards, posters or business cards.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-full border bg-background p-1 shadow-sm">
            <Button
              type="button"
              size="sm"
              variant={isQrTypesActive ? 'default' : 'ghost'}
              className="rounded-full"
              onClick={() => setActiveTab('qr-types')}
            >
              QR Types
            </Button>

            <Button
              type="button"
              size="sm"
              variant={!isQrTypesActive ? 'default' : 'ghost'}
              className="rounded-full"
              onClick={() => setActiveTab('templates')}
            >
              Templates
            </Button>
          </div>
        </div>

        {isQrTypesActive ? (
          <>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {qrCategories.map((category) => (
                <Link
                  key={category.title}
                  to={category.href}
                  aria-label={`Open ${category.title} generator`}
                  className="group relative flex min-h-[150px] cursor-pointer flex-col rounded-2xl border border-border bg-background p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:bg-muted/20 hover:shadow-md active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <span className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border bg-background text-sm text-muted-foreground opacity-70 transition-all group-hover:border-primary/50 group-hover:text-primary group-hover:opacity-100">
                    ↗
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    {category.icon}
                  </div>

                  <h3 className="mt-5 pr-10 text-lg font-semibold transition-colors group-hover:text-primary">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {category.description}
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Link
                to="/qr-types"
                className="inline-flex rounded-full border px-5 py-2 text-sm font-medium text-muted-foreground transition hover:border-primary/50 hover:text-foreground"
              >
                View all QR types →
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="mt-10 rounded-2xl border bg-muted/40 p-5 text-center">
              <p className="text-sm font-medium">Printable QR templates for real use cases</p>

              <p className="mt-1 text-sm text-muted-foreground">
                Select a template, connect your QR data, customize the text and download a clean PNG
                design.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {availableTemplates.map((template) => (
                <Link
                  key={template.id}
                  to={`/templates/${template.id}`}
                  aria-label={`Open ${template.label} template`}
                  className="group relative flex min-h-[170px] cursor-pointer flex-col rounded-2xl border border-border bg-background p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:bg-muted/20 hover:shadow-md active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <span className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border bg-background text-sm text-muted-foreground opacity-70 transition-all group-hover:border-primary/50 group-hover:text-primary group-hover:opacity-100">
                    ↗
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    {templateIcons[template.id as keyof typeof templateIcons]}
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3 pr-10">
                    <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">
                      {template.label}
                    </h3>

                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      Template
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {template.footerText}
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Link
                to="/templates"
                className="inline-flex rounded-full border px-5 py-2 text-sm font-medium text-muted-foreground transition hover:border-primary/50 hover:text-foreground"
              >
                View template gallery →
              </Link>
            </div>
          </>
        )}
      </Container>
    </Section>
  )
}
