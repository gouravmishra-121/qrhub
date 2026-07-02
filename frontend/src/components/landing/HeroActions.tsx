import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function HeroActions() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
      <Button asChild size="lg">
        <Link to="/qr-types">Create QR Code</Link>
      </Button>
    </div>
  )
}
