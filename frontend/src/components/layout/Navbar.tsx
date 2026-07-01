import { Link } from 'react-router-dom'

import { Container } from './Container'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tight">
            QRHub
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>

            <Link
              to="/generators"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Generators
            </Link>

            <Link
              to="/templates"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Templates
            </Link>

            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  )
}
