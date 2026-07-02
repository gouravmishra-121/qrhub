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

function escapeVCardValue(value: string) {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/\n/g, '\\n')
    .replace(/,/g, '\\,')
    .replace(/;/g, '\\;')
}

function isValidEmail(value: string) {
  if (!value.trim()) return true

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

function isValidWebsite(value: string) {
  if (!value.trim()) return true

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

function createVCardString({
  fullName,
  phone,
  email,
  company,
  jobTitle,
  website,
  address,
}: {
  fullName: string
  phone: string
  email: string
  company: string
  jobTitle: string
  website: string
  address: string
}) {
  const lines = ['BEGIN:VCARD', 'VERSION:3.0']

  lines.push(`FN:${escapeVCardValue(fullName.trim())}`)

  if (phone.trim()) {
    lines.push(`TEL;TYPE=CELL:${escapeVCardValue(phone.trim())}`)
  }

  if (email.trim()) {
    lines.push(`EMAIL:${escapeVCardValue(email.trim())}`)
  }

  if (company.trim()) {
    lines.push(`ORG:${escapeVCardValue(company.trim())}`)
  }

  if (jobTitle.trim()) {
    lines.push(`TITLE:${escapeVCardValue(jobTitle.trim())}`)
  }

  if (website.trim()) {
    lines.push(`URL:${escapeVCardValue(website.trim())}`)
  }

  if (address.trim()) {
    lines.push(`ADR;TYPE=WORK:;;${escapeVCardValue(address.trim())};;;;`)
  }

  lines.push('END:VCARD')

  return lines.join('\n')
}

function createSafeFileName(value: string) {
  const safeValue = value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

  return safeValue ? `vcard-qr-${safeValue}` : 'vcard-qr'
}

export default function VCardQR() {
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [website, setWebsite] = useState('')
  const [address, setAddress] = useState('')

  const [qrSize, setQrSize] = useState<QRSize>(DEFAULT_QR_SIZE)
  const [foregroundColor, setForegroundColor] = useState(DEFAULT_FOREGROUND_COLOR)
  const [backgroundColor, setBackgroundColor] = useState(DEFAULT_BACKGROUND_COLOR)

  const qrRef = useRef<HTMLDivElement>(null)

  const cleanFullName = useMemo(() => fullName.trim(), [fullName])
  const cleanPhone = useMemo(() => phone.trim(), [phone])
  const cleanEmail = useMemo(() => email.trim(), [email])
  const cleanCompany = useMemo(() => company.trim(), [company])
  const cleanJobTitle = useMemo(() => jobTitle.trim(), [jobTitle])
  const cleanWebsite = useMemo(() => website.trim(), [website])
  const cleanAddress = useMemo(() => address.trim(), [address])

  const isNameValid = cleanFullName.length > 0
  const hasContact = cleanPhone.length > 0 || cleanEmail.length > 0
  const isEmailValidValue = useMemo(() => isValidEmail(cleanEmail), [cleanEmail])
  const isWebsiteValidValue = useMemo(() => isValidWebsite(cleanWebsite), [cleanWebsite])

  const isValidVCardQR = useMemo(() => {
    return isNameValid && hasContact && isEmailValidValue && isWebsiteValidValue
  }, [hasContact, isEmailValidValue, isNameValid, isWebsiteValidValue])

  const qrValue = useMemo(() => {
    if (!isValidVCardQR) return ''

    return createVCardString({
      fullName: cleanFullName,
      phone: cleanPhone,
      email: cleanEmail,
      company: cleanCompany,
      jobTitle: cleanJobTitle,
      website: cleanWebsite,
      address: cleanAddress,
    })
  }, [
    cleanAddress,
    cleanCompany,
    cleanEmail,
    cleanFullName,
    cleanJobTitle,
    cleanPhone,
    cleanWebsite,
    isValidVCardQR,
  ])

  const downloadFileName = useMemo(() => {
    if (!isValidVCardQR) return 'vcard-qr'

    return createSafeFileName(cleanFullName)
  }, [cleanFullName, isValidVCardQR])

  function resetCustomization() {
    setQrSize(DEFAULT_QR_SIZE)
    setForegroundColor(DEFAULT_FOREGROUND_COLOR)
    setBackgroundColor(DEFAULT_BACKGROUND_COLOR)
  }

  function clearForm() {
    setFullName('')
    setPhone('')
    setEmail('')
    setCompany('')
    setJobTitle('')
    setWebsite('')
    setAddress('')
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

            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">vCard QR Code</h1>

            <p className="mt-3 max-w-2xl text-muted-foreground">
              Create a contact QR code that lets people save your name, phone, email, company,
              website, and address directly to their contacts.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            <div className="rounded-2xl border bg-background p-5 shadow-sm sm:p-6">
              <div>
                <h2 className="text-lg font-semibold">Enter Contact Details</h2>

                <p className="mt-1 text-sm text-muted-foreground">
                  Full name is required. Add at least one contact method: phone or email.
                </p>
              </div>

              <div className="mt-5 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>

                  <Input
                    autoFocus
                    value={fullName}
                    placeholder="Gourav Mishra"
                    onChange={(event) => setFullName(event.target.value)}
                    className={
                      fullName.length > 0 && !isNameValid
                        ? 'border-red-500 focus-visible:ring-red-500'
                        : ''
                    }
                  />

                  {fullName.length > 0 && isNameValid && (
                    <p className="text-sm font-medium text-green-600">✓ Name added</p>
                  )}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone</label>

                    <Input
                      value={phone}
                      placeholder="+91 9876543210"
                      inputMode="tel"
                      onChange={(event) => setPhone(event.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>

                    <Input
                      value={email}
                      placeholder="hello@example.com"
                      inputMode="email"
                      onChange={(event) => setEmail(event.target.value)}
                      className={
                        email.length > 0 && !isEmailValidValue
                          ? 'border-red-500 focus-visible:ring-red-500'
                          : ''
                      }
                    />

                    {email.length > 0 && !isEmailValidValue && (
                      <p className="text-sm font-medium text-red-600">
                        Enter a valid email address.
                      </p>
                    )}
                  </div>
                </div>

                {!hasContact && (phone.length > 0 || email.length > 0) && (
                  <p className="text-sm font-medium text-red-600">
                    Add at least one contact method.
                  </p>
                )}

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Company optional</label>

                    <Input
                      value={company}
                      placeholder="QRHub"
                      onChange={(event) => setCompany(event.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Job Title optional</label>

                    <Input
                      value={jobTitle}
                      placeholder="Founder"
                      onChange={(event) => setJobTitle(event.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Website optional</label>

                  <Input
                    value={website}
                    placeholder="https://example.com"
                    onChange={(event) => setWebsite(event.target.value)}
                    className={
                      website.length > 0 && !isWebsiteValidValue
                        ? 'border-red-500 focus-visible:ring-red-500'
                        : ''
                    }
                  />

                  {website.length > 0 &&
                    (isWebsiteValidValue ? (
                      <p className="text-sm font-medium text-green-600">✓ Website added</p>
                    ) : (
                      <p className="text-sm font-medium text-red-600">
                        Website must start with http:// or https://
                      </p>
                    ))}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Address optional</label>

                  <textarea
                    value={address}
                    placeholder="Office address or business location"
                    onChange={(event) => setAddress(event.target.value)}
                    className="min-h-24 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-muted-foreground">
                    Example: Name + phone or email is enough.
                  </p>

                  {(fullName || phone || email || company || jobTitle || website || address) && (
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
              tipTitle="vCard tip"
              tipDescription="Test the QR on both Android and iPhone before printing it on a business card."
            />
          </div>
        </section>

        {/* RIGHT */}
        <section className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border bg-background p-5 shadow-sm sm:p-8">
            <QRPreview
              ref={qrRef}
              value={qrValue}
              isValid={isValidVCardQR}
              foregroundColor={foregroundColor}
              backgroundColor={backgroundColor}
              placeholderDescription="Enter valid contact details to generate your vCard QR code."
            />

            <QRDownload
              isValid={isValidVCardQR}
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
