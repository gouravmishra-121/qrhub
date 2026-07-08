import { Link } from 'react-router-dom'
import { QrCode } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { DesktopNav } from './DesktopNav'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-2 font-bold tracking-tight text-foreground"
          aria-label="Go to QRPrintly homepage"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <QrCode className="h-5 w-5" />
          </span>

          <span className="truncate text-lg sm:text-xl">QRPrintly</span>
        </Link>

        <DesktopNav />

        <Link to="/qr-types" className="shrink-0">
          <Button size="sm">
            <span className="sm:hidden">Create</span>
            <span className="hidden sm:inline">Create QR</span>
          </Button>
        </Link>
      </div>
    </header>
  )
}
