import type { Ref } from 'react'
import QRCode from 'react-qr-code'

export type TemplateDesignVariant =
  'payment' | 'restaurant' | 'business' | 'wifi' | 'whatsapp' | 'contact'

type TemplateDesignPreviewProps = {
  variant: TemplateDesignVariant
  label: string
  title: string
  subtitle: string
  ctaText: string
  footerText: string
  qrValue?: string
  downloadRef?: Ref<HTMLDivElement>
  showWatermark?: boolean
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
    accent: string
  }
> = {
  payment: {
    frame: 'border-emerald-100 bg-emerald-50',
    card: 'bg-white',
    badge: 'bg-emerald-600 text-white',
    cta: 'bg-emerald-700 text-white',
    corner: 'bg-emerald-500',
    accent: 'bg-emerald-100',
  },
  restaurant: {
    frame: 'border-orange-100 bg-orange-50',
    card: 'bg-white',
    badge: 'bg-orange-600 text-white',
    cta: 'bg-orange-700 text-white',
    corner: 'bg-orange-500',
    accent: 'bg-orange-100',
  },
  business: {
    frame: 'border-slate-200 bg-slate-100',
    card: 'bg-white',
    badge: 'bg-slate-900 text-white',
    cta: 'bg-slate-950 text-white',
    corner: 'bg-slate-700',
    accent: 'bg-slate-200',
  },
  wifi: {
    frame: 'border-sky-100 bg-sky-50',
    card: 'bg-white',
    badge: 'bg-sky-600 text-white',
    cta: 'bg-sky-700 text-white',
    corner: 'bg-sky-500',
    accent: 'bg-sky-100',
  },
  whatsapp: {
    frame: 'border-green-100 bg-green-50',
    card: 'bg-white',
    badge: 'bg-green-600 text-white',
    cta: 'bg-green-700 text-white',
    corner: 'bg-green-500',
    accent: 'bg-green-100',
  },
  contact: {
    frame: 'border-violet-100 bg-violet-50',
    card: 'bg-white',
    badge: 'bg-violet-600 text-white',
    cta: 'bg-violet-700 text-white',
    corner: 'bg-violet-500',
    accent: 'bg-violet-100',
  },
}

function FakeQR() {
  return (
    <div className="mx-auto grid h-40 w-40 grid-cols-7 gap-1 rounded-2xl bg-white p-4 shadow-sm">
      {qrBlocks.map((isDark, index) => (
        <div key={index} className={isDark ? 'rounded-sm bg-black' : 'rounded-sm bg-white'} />
      ))}
    </div>
  )
}

function TemplateQR({ value }: { value?: string }) {
  if (!value) {
    return <FakeQR />
  }

  return (
    <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-2xl bg-white p-4 shadow-sm">
      <QRCode value={value} size={124} bgColor="#ffffff" fgColor="#000000" level="M" />
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
  qrValue,
  downloadRef,
  showWatermark = false,
}: TemplateDesignPreviewProps) {
  const styles = variantStyles[variant]

  return (
    <div className="rounded-3xl border bg-background p-4 shadow-sm">
      <div ref={downloadRef} className={`overflow-hidden rounded-2xl border p-5 ${styles.frame}`}>
        <div
          className={`relative overflow-hidden rounded-2xl p-5 text-center shadow-sm ${styles.card}`}
        >
          <div className={`absolute right-0 top-0 h-20 w-20 rounded-bl-full ${styles.corner}`} />

          <div className={`absolute bottom-6 left-6 h-16 w-16 rounded-full ${styles.accent}`} />

          <div className="relative">
            <span
              className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${styles.badge}`}
            >
              {label}
            </span>

            <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-950">{title}</h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">{subtitle}</p>

            <div className="my-6">
              <TemplateQR value={qrValue} />
            </div>

            <div className={`rounded-xl px-4 py-3 text-sm font-semibold ${styles.cta}`}>
              {ctaText}
            </div>

            <p className="mt-4 text-xs leading-5 text-slate-500">{footerText}</p>

            {showWatermark ? (
              <div className="mt-5 border-t pt-3 text-center text-[10px] font-medium uppercase tracking-wide text-slate-400">
                Made with QRPrintly
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="px-2 pt-4">
        <p className="text-sm font-medium">Printable QR template</p>

        <p className="mt-1 text-sm leading-6 text-muted-foreground">
          {qrValue
            ? 'This template is connected with your generated QR code.'
            : 'Choose this layout, connect a QR code, customize the text, and download PNG.'}
        </p>
      </div>
    </div>
  )
}
