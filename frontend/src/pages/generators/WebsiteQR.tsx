import { Link } from 'react-router-dom'
import { useMemo, useRef, useState } from 'react'

import { QRCustomizationPanel, QRDownload, QRPreview, type QRSize } from '@/components/qr'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const DEFAULT_QR_SIZE: QRSize = 1024
const DEFAULT_FOREGROUND_COLOR = '#000000'
const DEFAULT_BACKGROUND_COLOR = '#ffffff'

function createSafeFileName(value: string) {
  try {
    const hostname = new URL(value).hostname.replace(/^www\./, '')

    const safeHostname = hostname
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')

    return safeHostname ? `website-qr-${safeHostname}` : 'website-qr'
  } catch {
    return 'website-qr'
  }
}

export default function WebsiteQR() {
  const [url, setUrl] = useState('')
  const [qrSize, setQrSize] = useState<QRSize>(DEFAULT_QR_SIZE)
  const [foregroundColor, setForegroundColor] = useState(DEFAULT_FOREGROUND_COLOR)
  const [backgroundColor, setBackgroundColor] = useState(DEFAULT_BACKGROUND_COLOR)

  const qrRef = useRef<HTMLDivElement>(null)

  const cleanUrl = useMemo(() => url.trim(), [url])

  const isValidUrl = useMemo(() => {
    if (!cleanUrl) return false

    if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
      return false
    }

    try {
      const parsed = new URL(cleanUrl)

      return parsed.protocol === 'http:' || parsed.protocol === 'https:'
    } catch {
      return false
    }
  }, [cleanUrl])

  const downloadFileName = useMemo(() => {
    if (!isValidUrl) return 'website-qr'

    return createSafeFileName(cleanUrl)
  }, [cleanUrl, isValidUrl])

  function resetCustomization() {
    setQrSize(DEFAULT_QR_SIZE)
    setForegroundColor(DEFAULT_FOREGROUND_COLOR)
    setBackgroundColor(DEFAULT_BACKGROUND_COLOR)
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
        {/* LEFT */}
        <section>
          <div>
            <p className="text-sm font-medium text-muted-foreground">QR Type</p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Website QR Code</h1>

            <p className="mt-3 max-w-2xl text-muted-foreground">
              Create a QR code for any website URL. Enter the complete URL, customize the design,
              and download it as PNG or SVG.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            <div className="rounded-2xl border bg-background p-5 sm:p-6 shadow-sm">
              <div>
                <h2 className="text-lg font-semibold">Enter Website URL</h2>

                <p className="mt-1 text-sm text-muted-foreground">
                  Use a full URL starting with http:// or https://.
                </p>
              </div>

              <div className="mt-5 space-y-3">
                <label className="text-sm font-medium">Website URL</label>

                <Input
                  autoFocus
                  value={url}
                  placeholder="https://example.com"
                  onChange={(event) => setUrl(event.target.value)}
                  className={
                    url.length > 0 && !isValidUrl ? 'border-red-500 focus-visible:ring-red-500' : ''
                  }
                />

                {url.length > 0 &&
                  (isValidUrl ? (
                    <p className="text-sm font-medium text-green-600">✓ Ready to generate</p>
                  ) : (
                    <p className="text-sm font-medium text-red-600">
                      Enter a valid website URL starting with http:// or https://
                    </p>
                  ))}

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-muted-foreground">Example: https://google.com</p>

                  {url && (
                    <Button variant="ghost" size="sm" onClick={() => setUrl('')}>
                      Clear URL
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
              tipTitle="Scanning tip"
              tipDescription="Keep strong contrast between the QR color and background. Black on white gives the best scanning reliability."
            />
          </div>
        </section>

        {/* RIGHT */}
        <section className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border bg-background p-5 shadow-sm sm:p-8">
            <QRPreview
              ref={qrRef}
              value={cleanUrl}
              isValid={isValidUrl}
              foregroundColor={foregroundColor}
              backgroundColor={backgroundColor}
              placeholderDescription="Enter a valid website URL to generate your QR code."
            />

            <QRDownload
              isValid={isValidUrl}
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
