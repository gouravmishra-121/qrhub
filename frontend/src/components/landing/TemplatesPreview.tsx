import { Link } from 'react-router-dom'
import { BadgeIndianRupee, BriefcaseBusiness, Store, Utensils } from 'lucide-react'

import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'

const templates = [
  {
    icon: <BadgeIndianRupee className="h-7 w-7" />,
    title: 'UPI Payment Templates',
    description: 'Create clean payment QR layouts for shops, stalls and small businesses.',
  },
  {
    icon: <Store className="h-7 w-7" />,
    title: 'Business QR Templates',
    description: 'Professional QR designs for stores, offices, freelancers and service providers.',
  },
  {
    icon: <Utensils className="h-7 w-7" />,
    title: 'Restaurant QR Templates',
    description: 'Menu and table QR layouts for cafes, restaurants and food counters.',
  },
  {
    icon: <BriefcaseBusiness className="h-7 w-7" />,
    title: 'Contact Card Templates',
    description: 'Modern vCard QR layouts for business cards and personal branding.',
  },
]

export function TemplatesPreview() {
  return (
    <Section id="templates">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-muted-foreground">Coming Soon</p>

          <h2 className="mt-2 text-4xl font-bold tracking-tight">
            QR Templates for Better Branding
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Basic QR codes will stay free. Templates will help businesses create print-ready,
            branded QR designs for payments, menus, contact cards and more.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {templates.map((template) => (
            <div key={template.title} className="rounded-2xl border bg-background p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                {template.icon}
              </div>

              <h3 className="mt-5 text-lg font-semibold">{template.title}</h3>

              <p className="mt-2 text-sm text-muted-foreground">{template.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/qr-types"
            className="rounded-full border px-5 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            Create a free QR code first
          </Link>
        </div>
      </Container>
    </Section>
  )
}
