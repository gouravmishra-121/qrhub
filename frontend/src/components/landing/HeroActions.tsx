import { Button } from '@/components/ui/button'

export function HeroActions() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
      <Button size="lg">Generate QR Code</Button>

      <Button size="lg" variant="outline">
        Browse Templates
      </Button>
    </div>
  )
}
