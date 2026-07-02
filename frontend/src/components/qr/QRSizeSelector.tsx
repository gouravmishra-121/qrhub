import { Button } from '@/components/ui/button'

import type { QRSize } from './types'

const QR_SIZES: QRSize[] = [256, 512, 1024]

type QRSizeSelectorProps = {
  value: QRSize
  onChange: (value: QRSize) => void
}

export function QRSizeSelector({ value, onChange }: QRSizeSelectorProps) {
  return (
    <div className="mt-8 space-y-3">
      <div>
        <h3 className="text-sm font-medium">Download Size</h3>

        <p className="mt-1 text-xs text-muted-foreground">
          Choose the output size for your QR code.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {QR_SIZES.map((size) => (
          <Button
            key={size}
            type="button"
            size="sm"
            variant={value === size ? 'default' : 'outline'}
            onClick={() => onChange(size)}
            className="w-full"
          >
            {size}px
          </Button>
        ))}
      </div>

      <p className="text-xs text-muted-foreground">
        PNG will download as {value} × {value}px. SVG is scalable.
      </p>
    </div>
  )
}
