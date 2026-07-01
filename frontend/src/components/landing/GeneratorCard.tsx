import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface GeneratorCardProps {
  emoji: string
  title: string
  description: string
}

export function GeneratorCard({ emoji, title, description }: GeneratorCardProps) {
  return (
    <div className="group rounded-2xl border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="text-5xl">{emoji}</div>

      <h3 className="mt-6 text-2xl font-semibold">{title}</h3>

      <p className="mt-3 text-muted-foreground">{description}</p>

      <Button variant="outline" className="mt-6 w-full justify-between">
        Create Now
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
