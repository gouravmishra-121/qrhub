import { Download, PencilRuler, QrCode } from 'lucide-react'

import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'

import { StepCard } from './StepCard'

const steps = [
  {
    step: 1,
    icon: <QrCode className="h-10 w-10" />,
    title: 'Enter Your Data',
    description:
      'Choose a QR type and enter your website, WiFi, UPI, contact details or other information.',
  },
  {
    step: 2,
    icon: <PencilRuler className="h-10 w-10" />,
    title: 'Customize',
    description: 'Adjust colors, size and style to create a QR code that matches your brand.',
  },
  {
    step: 3,
    icon: <Download className="h-10 w-10" />,
    title: 'Download',
    description: 'Export high-quality PNG or SVG files and start sharing instantly.',
  },
]

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight">How It Works</h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Generate professional QR codes in three simple steps.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <StepCard
              key={step.step}
              step={step.step}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
