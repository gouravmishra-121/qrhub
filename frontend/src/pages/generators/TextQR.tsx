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

function createSafeFileName(value: string) {
  const safeValue = value
    .toLowerCase()
    .slice(0, 40)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

  return safeValue ? `text-qr-${safeValue}` : 'text-qr'
}

export default function TextQR() {
  const [text, setText] = useState('')

  const [qrSize, setQrSize] = useState<QRSize>(DEFAULT_QR_SIZE)
  const [foregroundColor, setForegroundColor] = useState(DEFAULT_FOREGROUND_COLOR)
  const [backgroundColor, setBackgroundColor] = useState(DEFAULT_BACKGROUND_COLOR)

  const qrRef = useRef<HTMLDivElement>(null)

  const cleanText = useMemo(() => text.trim(), [text])

  const isValidTextQR = cleanText.length > 0

  const downloadFileName = useMemo(() => {
    if (!isValidTextQR) return 'text-qr'

    return createSafeFileName(cleanText)
  }, [cleanText, isValidTextQR])

  function resetCustomization() {
    setQrSize(DEFAULT_QR_SIZE)
    setForegroundColor(DEFAULT_FOREGROUND_COLOR)
    setBackgroundColor(DEFAULT_BACKGROUND_COLOR)
  }

  function clearForm() {
    setText('')
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

            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Text QR Code</h1>

            <p className="mt-3 max-w-2xl text-muted-foreground">
              Create a QR code for plain text, notes, instructions, IDs, coupon codes, or any
              message you want to share offline.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            <div className="rounded-2xl border bg-background p-5 shadow-sm sm:p-6">
              <div>
                <h2 className="text-lg font-semibold">Enter Text</h2>

                <p className="mt-1 text-sm text-muted-foreground">
                  The text is stored directly inside the QR code.
                </p>
              </div>

              <div className="mt-5 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Text</label>

                  <textarea
                    autoFocus
                    value={text}
                    placeholder="Enter your message, note, code, or instruction..."
                    onChange={(event) => setText(event.target.value)}
                    className={
                      text.length > 0 && !isValidTextQR
                        ? 'min-h-32 w-full rounded-md border border-red-500 bg-transparent px-3 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:ring-[3px] focus-visible:ring-red-500/50'
                        : 'min-h-32 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50'
                    }
                  />

                  {text.length > 0 &&
                    (isValidTextQR ? (
                      <p className="text-sm font-medium text-green-600">✓ Ready to generate</p>
                    ) : (
                      <p className="text-sm font-medium text-red-600">
                        Enter some text to generate QR.
                      </p>
                    ))}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-muted-foreground">Characters: {text.length}</p>

                  {text && (
                    <Button variant="ghost" size="sm" onClick={clearForm}>
                      Clear Text
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
              tipTitle="Text tip"
              tipDescription="Keep text short for faster scanning. Very long text creates a denser QR code."
            />
          </div>
        </section>

        <section className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border bg-background p-5 shadow-sm sm:p-8">
            <QRPreview
              ref={qrRef}
              value={cleanText}
              isValid={isValidTextQR}
              foregroundColor={foregroundColor}
              backgroundColor={backgroundColor}
              placeholderDescription="Enter text to generate your QR code."
            />

            <QRDownload
              isValid={isValidTextQR}
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
