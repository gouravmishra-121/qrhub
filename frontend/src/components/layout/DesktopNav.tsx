import { Link } from 'react-router-dom'

const navItems = [
  { label: 'QR Types', href: '/qr-types' },
  { label: 'Templates', href: '/#templates' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'FAQ', href: '/#faq' },
]

export function DesktopNav() {
  return (
    <nav className="hidden items-center gap-8 md:flex">
      {navItems.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
