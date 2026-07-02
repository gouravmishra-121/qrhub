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

function createPhoneLink(value: string) {
  return `tel:${normalizePhoneNumber(value)}`
}

function createSafeFileName(value: string) {
  const safeValue = getDigitsOnly(value)

  return safeValue ? `phone-qr-${safeValue}` : 'phone-qr'
}

export default function PhoneQR() {
  const [phoneNumber, setPhoneNumber] = useState('')

  const [qrSize, setQrSize] = useState<QRSize>(DEFAULT_QR_SIZE)
  const [foregroundColor, setForegroundColor] = useState(DEFAULT_FOREGROUND_COLOR)
  const [backgroundColor, setBackgroundColor] = useState(DEFAULT_BACKGROUND_COLOR)

  const qrRef = useRef<HTMLDivElement>(null)

  const cleanPhoneNumber = useMemo(() => normalizePhoneNumber(phoneNumber), [phoneNumber])

  const isPhoneValid = useMemo(() => isValidPhoneNumber(phoneNumber), [phoneNumber])

  const qrValue = useMemo(() => {
    if (!isPhoneValid) return ''

    return createPhoneLink(cleanPhoneNumber)
  }, [cleanPhoneNumber, isPhoneValid])

  const downloadFileName = useMemo(() => {
    if (!isPhoneValid) return 'phone-qr'

    return createSafeFileName(phoneNumber)
  }, [isPhoneValid, phoneNumber])

  function resetCustomization() {
    setQrSize(DEFAULT_QR_SIZE)
    setForegroundColor(DEFAULT_FOREGROUND_COLOR)
    setBackgroundColor(DEFAULT_BACKGROUND_COLOR)
  }

  function clearForm() {
    setPhoneNumber('')
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

            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Phone QR Code</h1>

            <p className="mt-3 max-w-2xl text-muted-foreground">
              Create a phone QR code that opens the dialer with your phone number ready to call.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            <div className="rounded-2xl border bg-background p-5 shadow-sm sm:p-6">
              <div>
                <h2 className="text-lg font-semibold">Enter Phone Number</h2>

                <p className="mt-1 text-sm text-muted-foreground">
                  Add the phone number with country code for better compatibility.
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

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-muted-foreground">Example: +91 9876543210</p>

                  {phoneNumber && (
                    <Button variant="ghost" size="sm" onClick={clearForm}>
                      Clear Number
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
              tipTitle="Phone tip"
              tipDescription="Use country code so the number works correctly for people in different regions."
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
              placeholderDescription="Enter a valid phone number to generate your QR code."
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
