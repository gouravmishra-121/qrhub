import type { ReactNode } from 'react'

interface BenefitCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="rounded-2xl border bg-card p-6 transition-all duration-300 hover:shadow-lg">
      <div className="mb-4 text-primary">{icon}</div>

      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-3 text-muted-foreground">{description}</p>
    </div>
  )
}
