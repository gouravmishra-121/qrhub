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

function normalizePhoneNumber(value: string) {
  return value.replace(/\D/g, '')
}

function isValidWhatsAppNumber(value: string) {
  const normalized = normalizePhoneNumber(value)

  return normalized.length >= 8 && normalized.length <= 15
}

function createWhatsAppLink(phoneNumber: string, message: string) {
  const normalizedPhone = normalizePhoneNumber(phoneNumber)
  const cleanMessage = message.trim()

  if (!cleanMessage) {
    return `https://wa.me/${normalizedPhone}`
  }

  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(cleanMessage)}`
}

function createSafeFileName(value: string) {
  const safeValue = normalizePhoneNumber(value)

  return safeValue ? `whatsapp-qr-${safeValue}` : 'whatsapp-qr'
}

export default function WhatsAppQR() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [message, setMessage] = useState('')

  const [qrSize, setQrSize] = useState<QRSize>(DEFAULT_QR_SIZE)
  const [foregroundColor, setForegroundColor] = useState(DEFAULT_FOREGROUND_COLOR)
  const [backgroundColor, setBackgroundColor] = useState(DEFAULT_BACKGROUND_COLOR)

  const qrRef = useRef<HTMLDivElement>(null)

  const cleanPhoneNumber = useMemo(() => normalizePhoneNumber(phoneNumber), [phoneNumber])

  const isPhoneValid = useMemo(() => isValidWhatsAppNumber(phoneNumber), [phoneNumber])

  const isValidWhatsAppQR = isPhoneValid

  const qrValue = useMemo(() => {
    if (!isValidWhatsAppQR) return ''

    return createWhatsAppLink(phoneNumber, message)
  }, [isValidWhatsAppQR, message, phoneNumber])

  const downloadFileName = useMemo(() => {
    if (!isValidWhatsAppQR) return 'whatsapp-qr'

    return createSafeFileName(phoneNumber)
  }, [isValidWhatsAppQR, phoneNumber])

  function resetCustomization() {
    setQrSize(DEFAULT_QR_SIZE)
    setForegroundColor(DEFAULT_FOREGROUND_COLOR)
    setBackgroundColor(DEFAULT_BACKGROUND_COLOR)
  }

  function clearForm() {
    setPhoneNumber('')
    setMessage('')
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

            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">WhatsApp QR Code</h1>

            <p className="mt-3 max-w-2xl text-muted-foreground">
              Create a WhatsApp QR code that opens a chat with your number. Add an optional
              pre-filled message for customers or visitors.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            <div className="rounded-2xl border bg-background p-5 shadow-sm sm:p-6">
              <div>
                <h2 className="text-lg font-semibold">Enter WhatsApp Details</h2>

                <p className="mt-1 text-sm text-muted-foreground">
                  Enter your WhatsApp number with country code. Message is optional.
                </p>
              </div>

              <div className="mt-5 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">WhatsApp Number</label>

                  <Input
                    autoFocus
                    value={phoneNumber}
                    placeholder="+91 9876543210"
                    inputMode="tel"
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    className={
                      phoneNumber.length > 0 && !isPhoneValid
                        ? 'border-red-500 focus-visible:ring-red-500'
                        : ''
                    }
                  />

                  {phoneNumber.length > 0 &&
                    (isPhoneValid ? (
                      <p className="text-sm font-medium text-green-600">✓ Valid WhatsApp number</p>
                    ) : (
                      <p className="text-sm font-medium text-red-600">
                        Enter a valid number with country code.
                      </p>
                    ))}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message optional</label>

                  <textarea
                    value={message}
                    placeholder="Hi, I want to know more about your service."
                    onChange={(event) => setMessage(event.target.value)}
                    className="min-h-24 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-muted-foreground">
                    Encoded number: {cleanPhoneNumber || 'Not ready'}
                  </p>

                  {(phoneNumber || message) && (
                    <Button variant="ghost" size="sm" onClick={clearForm}>
                      Clear Details
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
              tipTitle="WhatsApp tip"
              tipDescription="Use country code in the number so the QR works correctly for everyone."
            />
          </div>
        </section>

        {/* RIGHT */}
        <section className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border bg-background p-5 shadow-sm sm:p-8">
            <QRPreview
              ref={qrRef}
              value={qrValue}
              isValid={isValidWhatsAppQR}
              foregroundColor={foregroundColor}
              backgroundColor={backgroundColor}
              placeholderDescription="Enter a valid WhatsApp number to generate your QR code."
            />

            <QRDownload
              isValid={isValidWhatsAppQR}
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
