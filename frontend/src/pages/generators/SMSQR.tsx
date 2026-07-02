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
  return value.replace(/[^\d+]/g, '')
}

function getDigitsOnly(value: string) {
  return value.replace(/\D/g, '')
}

function isValidPhoneNumber(value: string) {
  const digits = getDigitsOnly(value)

  return digits.length >= 7 && digits.length <= 15
}

function createSMSLink(phoneNumber: string, message: string) {
  const normalizedPhone = normalizePhoneNumber(phoneNumber)
  const cleanMessage = message.trim()

  if (!cleanMessage) {
    return `sms:${normalizedPhone}`
  }

  return `sms:${normalizedPhone}?&body=${encodeURIComponent(cleanMessage)}`
}

function createSafeFileName(value: string) {
  const safeValue = getDigitsOnly(value)

  return safeValue ? `sms-qr-${safeValue}` : 'sms-qr'
}

export default function SMSQR() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [message, setMessage] = useState('')

  const [qrSize, setQrSize] = useState<QRSize>(DEFAULT_QR_SIZE)
  const [foregroundColor, setForegroundColor] = useState(DEFAULT_FOREGROUND_COLOR)
  const [backgroundColor, setBackgroundColor] = useState(DEFAULT_BACKGROUND_COLOR)

  const qrRef = useRef<HTMLDivElement>(null)

  const cleanPhoneNumber = useMemo(() => normalizePhoneNumber(phoneNumber), [phoneNumber])

  const isPhoneValid = useMemo(() => isValidPhoneNumber(phoneNumber), [phoneNumber])

  const qrValue = useMemo(() => {
    if (!isPhoneValid) return ''

    return createSMSLink(cleanPhoneNumber, message)
  }, [cleanPhoneNumber, isPhoneValid, message])

  const downloadFileName = useMemo(() => {
    if (!isPhoneValid) return 'sms-qr'

    return createSafeFileName(phoneNumber)
  }, [isPhoneValid, phoneNumber])

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
        <section>
          <div>
            <p className="text-sm font-medium text-muted-foreground">QR Type</p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">SMS QR Code</h1>

            <p className="mt-3 max-w-2xl text-muted-foreground">
              Create an SMS QR code that opens the messaging app with a phone number and optional
              pre-filled message.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            <div className="rounded-2xl border bg-background p-5 shadow-sm sm:p-6">
              <div>
                <h2 className="text-lg font-semibold">Enter SMS Details</h2>

                <p className="mt-1 text-sm text-muted-foreground">
                  Phone number is required. Message is optional.
                </p>
              </div>

              <div className="mt-5 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Number</label>

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
                      <p className="text-sm font-medium text-green-600">✓ Valid phone number</p>
                    ) : (
                      <p className="text-sm font-medium text-red-600">
                        Enter a valid phone number.
                      </p>
                    ))}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message optional</label>

                  <textarea
                    value={message}
                    placeholder="Hi, I would like to know more."
                    onChange={(event) => setMessage(event.target.value)}
                    className="min-h-24 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-muted-foreground">Example: +91 9876543210</p>

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
              tipTitle="SMS tip"
              tipDescription="Keep the message short so it opens cleanly across different phones."
            />
          </div>
        </section>

        <section className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border bg-background p-5 shadow-sm sm:p-8">
            <QRPreview
              ref={qrRef}
              value={qrValue}
              isValid={isPhoneValid}
              foregroundColor={foregroundColor}
              backgroundColor={backgroundColor}
              placeholderDescription="Enter a valid phone number to generate your SMS QR code."
            />

            <QRDownload
              isValid={isPhoneValid}
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
