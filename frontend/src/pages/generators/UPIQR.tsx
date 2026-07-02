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

function createUPIString({
  upiId,
  payeeName,
  amount,
  note,
}: {
  upiId: string
  payeeName: string
  amount: string
  note: string
}) {
  const params = new URLSearchParams()

  params.set('pa', upiId.trim())

  if (payeeName.trim()) {
    params.set('pn', payeeName.trim())
  }

  if (amount.trim()) {
    params.set('am', amount.trim())
  }

  if (note.trim()) {
    params.set('tn', note.trim())
  }

  params.set('cu', 'INR')

  return `upi://pay?${params.toString()}`
}

function isValidUPIId(value: string) {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+$/.test(value.trim())
}

function isValidAmount(value: string) {
  if (!value.trim()) return true

  return /^\d+(\.\d{1,2})?$/.test(value.trim())
}

function createSafeFileName(value: string) {
  const safeValue = value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

  return safeValue ? `upi-qr-${safeValue}` : 'upi-qr'
}

export default function UPIQR() {
  const [upiId, setUpiId] = useState('')
  const [payeeName, setPayeeName] = useState('')
  const [amount, setAmount] = useState('')
  const [note, setNote] = useState('')

  const [qrSize, setQrSize] = useState<QRSize>(DEFAULT_QR_SIZE)
  const [foregroundColor, setForegroundColor] = useState(DEFAULT_FOREGROUND_COLOR)
  const [backgroundColor, setBackgroundColor] = useState(DEFAULT_BACKGROUND_COLOR)

  const qrRef = useRef<HTMLDivElement>(null)

  const cleanUpiId = useMemo(() => upiId.trim(), [upiId])
  const cleanPayeeName = useMemo(() => payeeName.trim(), [payeeName])
  const cleanAmount = useMemo(() => amount.trim(), [amount])
  const cleanNote = useMemo(() => note.trim(), [note])

  const isUPIIdValid = useMemo(() => isValidUPIId(cleanUpiId), [cleanUpiId])
  const isAmountValid = useMemo(() => isValidAmount(cleanAmount), [cleanAmount])

  const isValidUPIQR = useMemo(() => {
    return isUPIIdValid && cleanPayeeName.length > 0 && isAmountValid
  }, [cleanPayeeName.length, isAmountValid, isUPIIdValid])

  const qrValue = useMemo(() => {
    if (!isValidUPIQR) return ''

    return createUPIString({
      upiId: cleanUpiId,
      payeeName: cleanPayeeName,
      amount: cleanAmount,
      note: cleanNote,
    })
  }, [cleanAmount, cleanNote, cleanPayeeName, cleanUpiId, isValidUPIQR])

  const downloadFileName = useMemo(() => {
    if (!isValidUPIQR) return 'upi-qr'

    return createSafeFileName(cleanUpiId)
  }, [cleanUpiId, isValidUPIQR])

  function resetCustomization() {
    setQrSize(DEFAULT_QR_SIZE)
    setForegroundColor(DEFAULT_FOREGROUND_COLOR)
    setBackgroundColor(DEFAULT_BACKGROUND_COLOR)
  }

  function clearForm() {
    setUpiId('')
    setPayeeName('')
    setAmount('')
    setNote('')
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

            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">UPI QR Code</h1>

            <p className="mt-3 max-w-2xl text-muted-foreground">
              Create a UPI payment QR code for Indian payment apps. Add your UPI ID, payee name,
              optional amount, and download it as PNG or SVG.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            <div className="rounded-2xl border bg-background p-5 shadow-sm sm:p-6">
              <div>
                <h2 className="text-lg font-semibold">Enter UPI Details</h2>

                <p className="mt-1 text-sm text-muted-foreground">
                  UPI ID and payee name are required. Amount and note are optional.
                </p>
              </div>

              <div className="mt-5 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">UPI ID</label>

                  <Input
                    autoFocus
                    value={upiId}
                    placeholder="yourname@upi"
                    onChange={(event) => setUpiId(event.target.value)}
                    className={
                      upiId.length > 0 && !isUPIIdValid
                        ? 'border-red-500 focus-visible:ring-red-500'
                        : ''
                    }
                  />

                  {upiId.length > 0 &&
                    (isUPIIdValid ? (
                      <p className="text-sm font-medium text-green-600">✓ Valid UPI ID</p>
                    ) : (
                      <p className="text-sm font-medium text-red-600">
                        Enter a valid UPI ID like name@bank
                      </p>
                    ))}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Payee Name</label>

                  <Input
                    value={payeeName}
                    placeholder="Your name or business name"
                    onChange={(event) => setPayeeName(event.target.value)}
                    className={
                      payeeName.length > 0 && cleanPayeeName.length === 0
                        ? 'border-red-500 focus-visible:ring-red-500'
                        : ''
                    }
                  />

                  {payeeName.length > 0 && cleanPayeeName.length > 0 && (
                    <p className="text-sm font-medium text-green-600">✓ Payee name added</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Amount optional</label>

                  <Input
                    value={amount}
                    placeholder="100"
                    inputMode="decimal"
                    onChange={(event) => setAmount(event.target.value)}
                    className={
                      amount.length > 0 && !isAmountValid
                        ? 'border-red-500 focus-visible:ring-red-500'
                        : ''
                    }
                  />

                  {amount.length > 0 &&
                    (isAmountValid ? (
                      <p className="text-sm font-medium text-green-600">✓ Amount added</p>
                    ) : (
                      <p className="text-sm font-medium text-red-600">
                        Enter amount like 100 or 100.50
                      </p>
                    ))}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Note optional</label>

                  <textarea
                    value={note}
                    placeholder="Payment for order, donation, service, etc."
                    onChange={(event) => setNote(event.target.value)}
                    className="min-h-24 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-muted-foreground">Example: yourname@upi</p>

                  {(upiId || payeeName || amount || note) && (
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
              tipTitle="Payment tip"
              tipDescription="Test your QR once using a UPI app before printing or sharing it publicly."
            />
          </div>
        </section>

        {/* RIGHT */}
        <section className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border bg-background p-5 shadow-sm sm:p-8">
            <QRPreview
              ref={qrRef}
              value={qrValue}
              isValid={isValidUPIQR}
              foregroundColor={foregroundColor}
              backgroundColor={backgroundColor}
              placeholderDescription="Enter valid UPI details to generate your payment QR code."
            />

            <QRDownload
              isValid={isValidUPIQR}
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
