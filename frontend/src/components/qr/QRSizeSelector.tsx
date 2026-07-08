import { Button } from '@/components/ui/button'

import type { QRSize } from './types'

const QR_SIZES: QRSize[] = [256, 512, 1024]

type QRSizeSelectorProps = {
  value: QRSize
  onChange: (value: QRSize) => void
}

export function QRSizeSelector({ value, onChange }: QRSizeSelectorProps) {
  return (
    <section className="rounded-2xl border bg-muted/20 p-4">
      <div>
        <h3 className="text-sm font-medium">Download size</h3>

        <p className="mt-1 text-xs leading-5 text-muted-foreground">
          Choose the output size for your QR code download.
        </p>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {QR_SIZES.map((size) => (
          <Button
            key={size}
            type="button"
            size="sm"
            variant={value === size ? 'default' : 'outline'}
            onClick={() => onChange(size)}
            className="w-full px-2 text-xs sm:text-sm"
          >
            {size}px
          </Button>
        ))}
      </div>

      <p className="mt-3 text-xs leading-5 text-muted-foreground">
        PNG downloads as {value} × {value}px. SVG stays scalable for design and print work.
      </p>
    </section>
  )
}
