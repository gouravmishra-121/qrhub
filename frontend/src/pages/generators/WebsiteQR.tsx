import { Link } from 'react-router-dom'
import { useMemo, useRef, useState } from 'react'

import { QRColorPicker, QRDownload, QRPreview, QRSizeSelector, type QRSize } from '@/components/qr'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function WebsiteQR() {
  const [url, setUrl] = useState('')
  const [qrSize, setQrSize] = useState<QRSize>(1024)
  const [foregroundColor, setForegroundColor] = useState('#000000')
  const [backgroundColor, setBackgroundColor] = useState('#ffffff')

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

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <Link
        to="/qr-types"
        className="mb-8 inline-block text-sm text-muted-foreground hover:text-foreground"
      >
        ← Back to QR Types
      </Link>

      <div className="grid gap-16 lg:grid-cols-[1.2fr_420px]">
        {/* LEFT */}
        <section>
          <h1 className="text-4xl font-bold">Website QR Code</h1>

          <p className="mt-3 text-muted-foreground">Generate QR codes for any website instantly.</p>

          <div className="mt-10 space-y-3">
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

            <p className="text-xs text-muted-foreground">Example: https://google.com</p>

            {url && (
              <Button variant="ghost" size="sm" onClick={() => setUrl('')}>
                Clear
              </Button>
            )}

            <QRSizeSelector value={qrSize} onChange={setQrSize} />

            <QRColorPicker
              foregroundColor={foregroundColor}
              backgroundColor={backgroundColor}
              onForegroundChange={setForegroundColor}
              onBackgroundChange={setBackgroundColor}
            />
          </div>
        </section>

        {/* RIGHT */}
        <section>
          <div className="rounded-2xl border bg-background p-8 shadow-sm">
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
              fileName="website-qr"
              downloadSize={qrSize}
              backgroundColor={backgroundColor}
            />
          </div>
        </section>
      </div>
    </main>
  )
}
