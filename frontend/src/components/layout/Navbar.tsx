import { Link } from 'react-router-dom'
import { QrCode } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { DesktopNav } from './DesktopNav'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link
          to="/"
          className="flex items-center gap-2 font-bold tracking-tight text-foreground"
          aria-label="Go to QRHub homepage"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <QrCode className="h-5 w-5" />
          </span>

          <span className="text-xl">QRHub</span>
        </Link>

        <DesktopNav />

        <Link to="/qr-types" className="hidden sm:inline-flex">
          <Button size="sm">Create QR</Button>
        </Link>
      </div>
    </header>
  )
}
