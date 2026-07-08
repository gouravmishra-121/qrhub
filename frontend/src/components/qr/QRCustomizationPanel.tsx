import { Button } from '@/components/ui/button'

import { QRColorPicker } from './QRColorPicker'
import { QRSizeSelector } from './QRSizeSelector'
import type { QRSize } from './types'

type QRCustomizationPanelProps = {
  qrSize: QRSize
  foregroundColor: string
  backgroundColor: string
  onSizeChange: (value: QRSize) => void
  onForegroundChange: (value: string) => void
  onBackgroundChange: (value: string) => void
  onReset: () => void
  tipTitle?: string
  tipDescription?: string
}

export function QRCustomizationPanel({
  qrSize,
  foregroundColor,
  backgroundColor,
  onSizeChange,
  onForegroundChange,
  onBackgroundChange,
  onReset,
  tipTitle = 'Scanning tip',
  tipDescription = 'Keep strong contrast between the QR color and background. Black on white gives the best scanning reliability.',
}: QRCustomizationPanelProps) {
  return (
    <section className="rounded-2xl border bg-background p-5 shadow-sm sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Optional customization</p>

          <h2 className="mt-1 text-lg font-semibold">Customize QR</h2>

          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            Adjust size and colors before downloading. Keep the QR easy to scan, especially for
            printed use.
          </p>
        </div>

        <Button variant="outline" size="sm" onClick={onReset} className="w-full sm:w-auto">
          Reset
        </Button>
      </div>

      <div className="mt-6 space-y-6">
        <QRSizeSelector value={qrSize} onChange={onSizeChange} />

        <QRColorPicker
          foregroundColor={foregroundColor}
          backgroundColor={backgroundColor}
          onForegroundChange={onForegroundChange}
          onBackgroundChange={onBackgroundChange}
        />
      </div>

      <div className="mt-6 rounded-2xl border bg-muted/30 p-4">
        <p className="text-sm font-medium">{tipTitle}</p>

        <p className="mt-1 text-sm leading-6 text-muted-foreground">{tipDescription}</p>
      </div>
    </section>
  )
}
