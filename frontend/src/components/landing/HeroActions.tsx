import { Button } from '@/components/ui/button'

export function HeroActions() {
  return (
    <div className="flex gap-4 justify-center">
      <Button size="lg">Generate QR</Button>

      <Button variant="outline" size="lg">
        View Templates
      </Button>
    </div>
  )
}
