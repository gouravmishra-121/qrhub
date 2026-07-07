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

import { CategoryCard } from './CategoryCard'

const qrCategories = [
  {
    icon: <IndianRupee className="h-8 w-8" />,
    title: 'UPI QR',
    description: 'Create payment QR codes for shops, stalls and invoices.',
    href: '/upi',
  },
  {
    icon: <MessageCircle className="h-8 w-8" />,
    title: 'WhatsApp QR',
    description: 'Let people scan and start a WhatsApp chat.',
    href: '/whatsapp',
  },
  {
    icon: <Wifi className="h-8 w-8" />,
    title: 'WiFi QR',
    description: 'Share guest WiFi without typing the password.',
    href: '/wifi',
  },
  {
    icon: <User className="h-8 w-8" />,
    title: 'vCard QR',
    description: 'Share contact details that people can save.',
    href: '/vcard',
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'Website QR',
    description: 'Turn any website, menu or landing page into a QR code.',
    href: '/website',
  },
  {
    icon: <MapPin className="h-8 w-8" />,
    title: 'Maps QR',
    description: 'Help people open your shop, office or event location.',
    href: '/maps',
  },
  {
    icon: <Mail className="h-8 w-8" />,
    title: 'Email QR',
    description: 'Open a ready-to-send email draft after scanning.',
    href: '/email',
  },
  {
    icon: <Phone className="h-8 w-8" />,
    title: 'Phone QR',
    description: 'Open the phone dialer with your number.',
    href: '/phone',
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: 'SMS QR',
    description: 'Open a prefilled text message on scan.',
    href: '/sms',
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: 'Text QR',
    description: 'Share plain text, notes, instructions or labels.',
    href: '/text',
  },
]

const templateIcons = {
  'upi-payment': <BadgeIndianRupee className="h-8 w-8" />,
  'restaurant-menu': <Utensils className="h-8 w-8" />,
  wifi: <Wifi className="h-8 w-8" />,
  whatsapp: <MessageCircle className="h-8 w-8" />,
  'vcard-contact': <User className="h-8 w-8" />,
  website: <Store className="h-8 w-8" />,
}

export function Categories() {
  const [activeTab, setActiveTab] = useState<'qr-types' | 'templates'>('qr-types')

  const isQrTypesActive = activeTab === 'qr-types'
  const availableTemplates = templateDesignPreviews

  return (
    <Section id="categories" className="pt-10">
      <Container>
        <div id="templates" className="scroll-mt-24" />

        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight">Choose a QR Code Type or Template</h2>

          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Start with a QR generator for your data, or choose a printable template when you need a
            cleaner design for shops, menus, WiFi cards, posters or business cards.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-full border bg-background p-1">
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
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {qrCategories.map((category) => (
                <Link
                  key={category.title}
                  to={category.href}
                  className="block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <CategoryCard
                    icon={category.icon}
                    title={category.title}
                    description={category.description}
                  />
                </Link>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Link
                to="/qr-types"
                className="inline-flex rounded-full border px-5 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
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

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {availableTemplates.map((template) => (
                <Link
                  key={template.id}
                  to={`/templates/${template.id}`}
                  className="group rounded-2xl border bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                    {templateIcons[template.id as keyof typeof templateIcons]}
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold group-hover:text-primary">
                      {template.label}
                    </h3>

                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      Available
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {template.footerText}
                  </p>

                  <p className="mt-5 text-sm font-medium text-primary">Use template →</p>
                </Link>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Link
                to="/templates"
                className="inline-flex rounded-full border px-5 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
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
