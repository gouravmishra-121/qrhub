const navItems = [
  { label: 'QR Types', href: '#qr-types' },
  { label: 'Templates', href: '#templates' },
  { label: 'Features', href: '#features' },
  { label: 'FAQ', href: '#faq' },
]

export function DesktopNav() {
  return (
    <nav className="hidden items-center gap-8 md:flex">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}
