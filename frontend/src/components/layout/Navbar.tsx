import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'

import { Container } from './Container'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'QR Types', href: '/qr-types' },
  { label: 'Templates', href: '/templates' },
  { label: 'About', href: '/about' },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold tracking-tight">
            QRHub
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}

            <Button size="sm">Generate QR</Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-72">
                <div className="mt-8 flex flex-col gap-6">
                  {navItems.map((item) => (
                    <Link key={item.href} to={item.href} className="text-lg font-medium">
                      {item.label}
                    </Link>
                  ))}

                  <Button className="mt-6 w-full">Generate QR</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </Container>
    </header>
  )
}
