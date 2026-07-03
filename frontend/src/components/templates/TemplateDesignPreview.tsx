type TemplateDesignPreviewProps = {
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
  label,
  title,
  subtitle,
  ctaText,
  footerText,
}: TemplateDesignPreviewProps) {
  return (
    <div className="rounded-3xl border bg-background p-4 shadow-sm">
      <div className="overflow-hidden rounded-2xl border bg-muted/50 p-5">
        <div className="rounded-2xl bg-background p-5 text-center shadow-sm">
          <span className="inline-flex rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
            {label}
          </span>

          <h3 className="mt-5 text-2xl font-bold tracking-tight">{title}</h3>

          <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>

          <div className="my-6">
            <FakeQR />
          </div>

          <div className="rounded-xl bg-foreground px-4 py-3 text-sm font-semibold text-background">
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
