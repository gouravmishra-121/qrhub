import type { ReactNode } from 'react'

interface CategoryCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function CategoryCard({ icon, title, description }: CategoryCardProps) {
  return (
    <div className="rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg">
      <div className="mb-4 text-primary">{icon}</div>

      <h3 className="text-lg font-semibold">{title}</h3>

      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
