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

import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'

import { CategoryCard } from './CategoryCard'

const categories = [
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
    title: 'PDF',
    description: 'Share documents easily.',
  },
]

export function Categories() {
  return (
    <Section id="categories">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight">QR Codes for Every Need</h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Choose from multiple QR code types designed for businesses, creators, events and
            everyday use.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) =>
            category.href ? (
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
            ) : (
              <CategoryCard
                key={category.title}
                icon={category.icon}
                title={category.title}
                description={category.description}
              />
            )
          )}
        </div>
      </Container>
    </Section>
  )
}
