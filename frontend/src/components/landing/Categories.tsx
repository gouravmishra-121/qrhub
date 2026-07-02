import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FileText,
  Globe,
  IndianRupee,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquare,
  User,
  Wifi,
} from 'lucide-react'
import { templateGroups } from '@/data/templateGroups'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/button'

import { CategoryCard } from './CategoryCard'

const qrCategories = [
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'Website',
    description: 'Convert any URL into a QR code.',
    href: '/website',
  },
  {
    icon: <Wifi className="h-8 w-8" />,
    title: 'WiFi',
    description: 'Share WiFi credentials instantly.',
    href: '/wifi',
  },
  {
    icon: <IndianRupee className="h-8 w-8" />,
    title: 'UPI',
    description: 'Accept digital payments with ease.',
    href: '/upi',
  },
  {
    icon: <MessageCircle className="h-8 w-8" />,
    title: 'WhatsApp',
    description: 'Start chats with one scan.',
    href: '/whatsapp',
  },
  {
    icon: <Mail className="h-8 w-8" />,
    title: 'Email',
    description: 'Generate email QR codes.',
    href: '/email',
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: 'SMS',
    description: 'Open prefilled text messages.',
    href: '/sms',
  },
  {
    icon: <User className="h-8 w-8" />,
    title: 'vCard',
    description: 'Share contact details instantly.',
    href: '/vcard',
  },
  {
    icon: <MapPin className="h-8 w-8" />,
    title: 'Maps',
    description: 'Navigate to any location.',
    href: '/maps',
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: 'Text',
    description: 'Share plain text, notes or instructions.',
    href: '/text',
  },
]

export function Categories() {
  const [activeTab, setActiveTab] = useState<'qr-types' | 'templates'>('qr-types')

  const isQrTypesActive = activeTab === 'qr-types'

  return (
    <Section id="categories">
      <Container>
        <div id="templates" className="scroll-mt-24" />

        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight">QR Codes for Every Need</h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Choose a QR type to create a free QR code, or explore upcoming templates for branded and
            print-ready designs.
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
        ) : (
          <div className="mt-12">
            <div className="mb-6 rounded-2xl border bg-muted/40 p-5 text-center">
              <p className="text-sm font-medium">Templates are coming soon</p>

              <p className="mt-1 text-sm text-muted-foreground">
                Basic QR generation will stay free. Templates will help businesses create branded,
                print-ready QR designs.
              </p>
              <Link
                to="/templates"
                className="mt-4 inline-flex text-sm font-medium text-primary hover:underline"
              >
                View template gallery →
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {templateGroups.slice(0, 4).map((template) => (
                <div
                  key={template.title}
                  className="rounded-2xl border bg-background p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                    {template.icon}
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold">{template.title}</h3>

                    <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                      Soon
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-muted-foreground">{template.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </Section>
  )
}
