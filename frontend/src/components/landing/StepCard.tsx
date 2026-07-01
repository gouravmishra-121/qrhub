import type { ReactNode } from 'react'

interface StepCardProps {
  step: number
  icon: ReactNode
  title: string
  description: string
}

export function StepCard({ step, icon, title, description }: StepCardProps) {
  return (
    <div className="relative rounded-2xl border bg-card p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="absolute -top-4 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
        {step}
      </div>

      <div className="mt-6 flex justify-center text-primary">{icon}</div>

      <h3 className="mt-5 text-xl font-semibold">{title}</h3>

      <p className="mt-3 text-muted-foreground">{description}</p>
    </div>
  )
}
