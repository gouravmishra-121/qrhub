import { Link } from 'react-router-dom'
import { useMemo, useRef, useState } from 'react'

import { QRColorPicker, QRDownload, QRPreview, QRSizeSelector, type QRSize } from '@/components/qr'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const DEFAULT_QR_SIZE: QRSize = 1024
const DEFAULT_FOREGROUND_COLOR = '#000000'
const DEFAULT_BACKGROUND_COLOR = '#ffffff'

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

function createEmailLink({
  email,
  subject,
  body,
}: {
  email: string
  subject: string
  body: string
}) {
  const params = new URLSearchParams()

  if (subject.trim()) {
    params.set('subject', subject.trim())
  }

  if (body.trim()) {
    params.set('body', body.trim())
  }

  const queryString = params.toString()

  return queryString ? `mailto:${email.trim()}?${queryString}` : `mailto:${email.trim()}`
}

function createSafeFileName(value: string) {
  const safeValue = value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

  return safeValue ? `email-qr-${safeValue}` : 'email-qr'
}

export default function EmailQR() {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')

  const [qrSize, setQrSize] = useState<QRSize>(DEFAULT_QR_SIZE)
  const [foregroundColor, setForegroundColor] = useState(DEFAULT_FOREGROUND_COLOR)
  const [backgroundColor, setBackgroundColor] = useState(DEFAULT_BACKGROUND_COLOR)

  const qrRef = useRef<HTMLDivElement>(null)

  const cleanEmail = useMemo(() => email.trim(), [email])
  const cleanSubject = useMemo(() => subject.trim(), [subject])
  const cleanBody = useMemo(() => body.trim(), [body])

  const isEmailValid = useMemo(() => isValidEmail(cleanEmail), [cleanEmail])

  const isValidEmailQR = isEmailValid

  const qrValue = useMemo(() => {
    if (!isValidEmailQR) return ''

    return createEmailLink({
      email: cleanEmail,
      subject: cleanSubject,
      body: cleanBody,
    })
  }, [cleanBody, cleanEmail, cleanSubject, isValidEmailQR])

  const downloadFileName = useMemo(() => {
    if (!isValidEmailQR) return 'email-qr'

    return createSafeFileName(cleanEmail)
  }, [cleanEmail, isValidEmailQR])

  function resetCustomization() {
    setQrSize(DEFAULT_QR_SIZE)
    setForegroundColor(DEFAULT_FOREGROUND_COLOR)
    setBackgroundColor(DEFAULT_BACKGROUND_COLOR)
  }

  function clearForm() {
    setEmail('')
    setSubject('')
    setBody('')
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

            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Email QR Code</h1>

            <p className="mt-3 max-w-2xl text-muted-foreground">
              Create an email QR code that opens the user’s mail app with a recipient, optional
              subject, and optional message body.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            <div className="rounded-2xl border bg-background p-5 shadow-sm sm:p-6">
              <div>
                <h2 className="text-lg font-semibold">Enter Email Details</h2>

                <p className="mt-1 text-sm text-muted-foreground">
                  Email address is required. Subject and message are optional.
                </p>
              </div>

              <div className="mt-5 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>

                  <Input
                    autoFocus
                    value={email}
                    placeholder="hello@example.com"
                    inputMode="email"
                    onChange={(event) => setEmail(event.target.value)}
                    className={
                      email.length > 0 && !isEmailValid
                        ? 'border-red-500 focus-visible:ring-red-500'
                        : ''
                    }
                  />

                  {email.length > 0 &&
                    (isEmailValid ? (
                      <p className="text-sm font-medium text-green-600">✓ Valid email address</p>
                    ) : (
                      <p className="text-sm font-medium text-red-600">
                        Enter a valid email address.
                      </p>
                    ))}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject optional</label>

                  <Input
                    value={subject}
                    placeholder="Inquiry about your service"
                    onChange={(event) => setSubject(event.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message optional</label>

                  <textarea
                    value={body}
                    placeholder="Hi, I would like to know more..."
                    onChange={(event) => setBody(event.target.value)}
                    className="min-h-24 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-muted-foreground">Example: hello@example.com</p>

                  {(email || subject || body) && (
                    <Button variant="ghost" size="sm" onClick={clearForm}>
                      Clear Details
                    </Button>
                  )}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border bg-background p-5 shadow-sm sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-lg font-semibold">Customize QR</h2>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Adjust size and colors before downloading.
                  </p>
                </div>

                <Button variant="outline" size="sm" onClick={resetCustomization}>
                  Reset
                </Button>
              </div>

              <QRSizeSelector value={qrSize} onChange={setQrSize} />

              <QRColorPicker
                foregroundColor={foregroundColor}
                backgroundColor={backgroundColor}
                onForegroundChange={setForegroundColor}
                onBackgroundChange={setBackgroundColor}
              />

              <div className="mt-6 rounded-xl bg-muted/40 p-4">
                <p className="text-sm font-medium">Email tip</p>

                <p className="mt-1 text-sm text-muted-foreground">
                  Keep the subject short so the email opens cleanly across mail apps.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RIGHT */}
        <section className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border bg-background p-5 shadow-sm sm:p-8">
            <QRPreview
              ref={qrRef}
              value={qrValue}
              isValid={isValidEmailQR}
              foregroundColor={foregroundColor}
              backgroundColor={backgroundColor}
              placeholderDescription="Enter a valid email address to generate your QR code."
            />

            <QRDownload
              isValid={isValidEmailQR}
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
