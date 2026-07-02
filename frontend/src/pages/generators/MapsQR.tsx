import { Link } from 'react-router-dom'
import { useMemo, useRef, useState } from 'react'

import {
  DEFAULT_BACKGROUND_COLOR,
  DEFAULT_FOREGROUND_COLOR,
  DEFAULT_QR_SIZE,
  QRCustomizationPanel,
  QRDownload,
  QRPreview,
  type QRSize,
} from '@/components/qr'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'


function isFullUrl(value: string) {
  if (!value.startsWith('http://') && !value.startsWith('https://')) {
    return false
  }

  try {
    const parsed = new URL(value)

    return parsed.protocol === 'http:' || parsed.protocol === 'https:'
  } catch {
    return false
  }
}

function createMapsLink(value: string) {
  const cleanValue = value.trim()

  if (isFullUrl(cleanValue)) {
    return cleanValue
  }

  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cleanValue)}`
}

function createSafeFileName(value: string) {
  const safeValue = value
    .toLowerCase()
    .slice(0, 40)
    .replace(/https?:\/\//g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

  return safeValue ? `maps-qr-${safeValue}` : 'maps-qr'
}

export default function MapsQR() {
  const [location, setLocation] = useState('')

  const [qrSize, setQrSize] = useState<QRSize>(DEFAULT_QR_SIZE)
  const [foregroundColor, setForegroundColor] = useState(DEFAULT_FOREGROUND_COLOR)
  const [backgroundColor, setBackgroundColor] = useState(DEFAULT_BACKGROUND_COLOR)

  const qrRef = useRef<HTMLDivElement>(null)

  const cleanLocation = useMemo(() => location.trim(), [location])

  const isValidMapsQR = cleanLocation.length > 0

  const qrValue = useMemo(() => {
    if (!isValidMapsQR) return ''

    return createMapsLink(cleanLocation)
  }, [cleanLocation, isValidMapsQR])

  const downloadFileName = useMemo(() => {
    if (!isValidMapsQR) return 'maps-qr'

    return createSafeFileName(cleanLocation)
  }, [cleanLocation, isValidMapsQR])

  function resetCustomization() {
    setQrSize(DEFAULT_QR_SIZE)
    setForegroundColor(DEFAULT_FOREGROUND_COLOR)
    setBackgroundColor(DEFAULT_BACKGROUND_COLOR)
  }

  function clearForm() {
    setLocation('')
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      <Link
        to="/qr-types"
        className="mb-8 inline-block text-sm text-muted-foreground hover:text-foreground"
      >
        ← Back to QR Types
      </Link>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_420px] lg:gap-16">
        <section>
          <div>
            <p className="text-sm font-medium text-muted-foreground">QR Type</p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Maps QR Code</h1>

            <p className="mt-3 max-w-2xl text-muted-foreground">
              Create a QR code that opens a location in Google Maps. Use an address, place name,
              coordinates, or a full maps link.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            <div className="rounded-2xl border bg-background p-5 shadow-sm sm:p-6">
              <div>
                <h2 className="text-lg font-semibold">Enter Location</h2>

                <p className="mt-1 text-sm text-muted-foreground">
                  Add a place name, address, coordinates, or a full Google Maps URL.
                </p>
              </div>

              <div className="mt-5 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Location or Maps Link</label>

                  <Input
                    autoFocus
                    value={location}
                    placeholder="Shaniwar Wada, Pune"
                    onChange={(event) => setLocation(event.target.value)}
                    className={
                      location.length > 0 && !isValidMapsQR
                        ? 'border-red-500 focus-visible:ring-red-500'
                        : ''
                    }
                  />

                  {location.length > 0 &&
                    (isValidMapsQR ? (
                      <p className="text-sm font-medium text-green-600">✓ Ready to generate</p>
                    ) : (
                      <p className="text-sm font-medium text-red-600">
                        Enter a location or maps link.
                      </p>
                    ))}
                </div>

                <div className="rounded-xl bg-muted/40 p-4">
                  <p className="text-sm font-medium">Generated maps link</p>

                  <p className="mt-1 break-all text-xs text-muted-foreground">
                    {qrValue || 'Not ready'}
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-muted-foreground">Example: Shaniwar Wada, Pune</p>

                  {location && (
                    <Button variant="ghost" size="sm" onClick={clearForm}>
                      Clear Location
                    </Button>
                  )}
                </div>
              </div>
            </div>

            <QRCustomizationPanel
              qrSize={qrSize}
              foregroundColor={foregroundColor}
              backgroundColor={backgroundColor}
              onSizeChange={setQrSize}
              onForegroundChange={setForegroundColor}
              onBackgroundChange={setBackgroundColor}
              onReset={resetCustomization}
              tipTitle="Maps tip"
              tipDescription="For businesses, paste the exact Google Maps link for best accuracy."
            />
          </div>
        </section>

        <section className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border bg-background p-5 shadow-sm sm:p-8">
            <QRPreview
              ref={qrRef}
              value={qrValue}
              isValid={isValidMapsQR}
              foregroundColor={foregroundColor}
              backgroundColor={backgroundColor}
              placeholderDescription="Enter a location to generate your maps QR code."
            />

            <QRDownload
              isValid={isValidMapsQR}
              qrRef={qrRef}
              fileName={downloadFileName}
              downloadSize={qrSize}
              backgroundColor={backgroundColor}
            />
          </div>
        </section>
      </div>
    </main>
  )
}
