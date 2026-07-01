import { ShieldCheck, Zap, Palette, Download, Smartphone, BadgeCheck } from 'lucide-react'

import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'

import { BenefitCard } from './BenefitCard'

const benefits = [
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: 'Privacy First',
    description: 'Your QR codes are generated without collecting personal data.',
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: 'Lightning Fast',
    description: 'Generate QR codes in seconds with instant previews.',
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: 'Beautiful Designs',
    description: 'Customize colors, styles and branding with ease.',
  },
  {
    icon: <Download className="h-8 w-8" />,
    title: 'High Quality Downloads',
    description: 'Export crisp PNG and SVG files for digital and print use.',
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: 'Works Everywhere',
    description: 'Responsive experience across desktop, tablet and mobile.',
  },
  {
    icon: <BadgeCheck className="h-8 w-8" />,
    title: 'Forever Free',
    description: 'Core QR generation stays free with no account required.',
  },
]

export function WhyQRHub() {
  return (
    <Section id="why-qrhub">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight">Why Choose QRHub?</h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Built for speed, privacy and simplicity—everything you need to create professional QR
            codes without the clutter.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <BenefitCard
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
