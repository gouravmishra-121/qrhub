export type TemplateDesignVariant = 'payment' | 'restaurant' | 'business'

type TemplateDesignPreviewProps = {
  variant: TemplateDesignVariant
  label: string
  title: string
  subtitle: string
  ctaText: string
  footerText: string
}

const qrBlocks = [
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  false,
  true,
  true,
  false,
  true,
  false,
  true,
  true,
  false,
  false,
  true,
  true,
  false,
  true,
  false,
  true,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  false,
  true,
  true,
  false,
  true,
  false,
  true,
  true,
  false,
  true,
  false,
  true,
]

const variantStyles: Record<
  TemplateDesignVariant,
  {
    frame: string
    card: string
    badge: string
    cta: string
    corner: string
  }
> = {
  payment: {
    frame: 'bg-emerald-50',
    card: 'bg-white',
    badge: 'bg-emerald-600 text-white',
    cta: 'bg-emerald-700 text-white',
    corner: 'bg-emerald-500',
  },
  restaurant: {
    frame: 'bg-orange-50',
    card: 'bg-white',
    badge: 'bg-orange-600 text-white',
    cta: 'bg-orange-700 text-white',
    corner: 'bg-orange-500',
  },
  business: {
    frame: 'bg-slate-100',
    card: 'bg-white',
    badge: 'bg-slate-900 text-white',
    cta: 'bg-slate-950 text-white',
    corner: 'bg-slate-700',
  },
}

function FakeQR() {
  return (
    <div className="mx-auto grid h-36 w-36 grid-cols-7 gap-1 rounded-xl bg-white p-3 shadow-sm">
      {qrBlocks.map((isDark, index) => (
        <div key={index} className={isDark ? 'rounded-sm bg-black' : 'rounded-sm bg-white'} />
      ))}
    </div>
  )
}

export function TemplateDesignPreview({
  variant,
  label,
  title,
  subtitle,
  ctaText,
  footerText,
}: TemplateDesignPreviewProps) {
  const styles = variantStyles[variant]

  return (
    <div className="rounded-3xl border bg-background p-4 shadow-sm">
      <div className={`overflow-hidden rounded-2xl border p-5 ${styles.frame}`}>
        <div className={`relative rounded-2xl p-5 text-center shadow-sm ${styles.card}`}>
          <div className={`absolute right-0 top-0 h-16 w-16 rounded-bl-full ${styles.corner}`} />

          <span
            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${styles.badge}`}
          >
            {label}
          </span>

          <h3 className="mt-5 text-2xl font-bold tracking-tight">{title}</h3>

          <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>

          <div className="my-6">
            <FakeQR />
          </div>

          <div className={`rounded-xl px-4 py-3 text-sm font-semibold ${styles.cta}`}>
            {ctaText}
          </div>

          <p className="mt-4 text-xs text-muted-foreground">{footerText}</p>
        </div>
      </div>

      <div className="px-2 pt-4">
        <p className="text-sm font-medium">Print-ready style preview</p>

        <p className="mt-1 text-sm text-muted-foreground">
          A sample visual layout for future branded QR templates.
        </p>
      </div>
    </div>
  )
}
