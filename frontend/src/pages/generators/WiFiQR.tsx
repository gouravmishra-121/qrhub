import { Link } from 'react-router-dom'
import { useMemo, useRef, useState } from 'react'

import { QRColorPicker, QRDownload, QRPreview, QRSizeSelector, type QRSize } from '@/components/qr'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const DEFAULT_QR_SIZE: QRSize = 1024
const DEFAULT_FOREGROUND_COLOR = '#000000'
const DEFAULT_BACKGROUND_COLOR = '#ffffff'

type WiFiSecurity = 'WPA' | 'WEP' | 'nopass'

function escapeWiFiValue(value: string) {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/:/g, '\\:')
    .replace(/"/g, '\\"')
}

function createWiFiString({
  networkName,
  password,
  security,
  hidden,
}: {
  networkName: string
  password: string
  security: WiFiSecurity
  hidden: boolean
}) {
  const escapedNetworkName = escapeWiFiValue(networkName.trim())
  const escapedPassword = escapeWiFiValue(password.trim())
  const hiddenPart = hidden ? 'H:true;' : ''

  if (security === 'nopass') {
    return `WIFI:T:nopass;S:${escapedNetworkName};${hiddenPart};`
  }

  return `WIFI:T:${security};S:${escapedNetworkName};P:${escapedPassword};${hiddenPart};`
}

function createSafeFileName(value: string) {
  const safeValue = value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

  return safeValue ? `wifi-qr-${safeValue}` : 'wifi-qr'
}

export default function WiFiQR() {
  const [networkName, setNetworkName] = useState('')
  const [password, setPassword] = useState('')
  const [security, setSecurity] = useState<WiFiSecurity>('WPA')
  const [hidden, setHidden] = useState(false)

  const [qrSize, setQrSize] = useState<QRSize>(DEFAULT_QR_SIZE)
  const [foregroundColor, setForegroundColor] = useState(DEFAULT_FOREGROUND_COLOR)
  const [backgroundColor, setBackgroundColor] = useState(DEFAULT_BACKGROUND_COLOR)

  const qrRef = useRef<HTMLDivElement>(null)

  const cleanNetworkName = useMemo(() => networkName.trim(), [networkName])
  const cleanPassword = useMemo(() => password.trim(), [password])

  const isNetworkNameValid = cleanNetworkName.length > 0

  const isPasswordValid = useMemo(() => {
    if (security === 'nopass') return true

    return cleanPassword.length > 0
  }, [cleanPassword.length, security])

  const isValidWiFiQR = isNetworkNameValid && isPasswordValid

  const qrValue = useMemo(() => {
    if (!isValidWiFiQR) return ''

    return createWiFiString({
      networkName: cleanNetworkName,
      password: cleanPassword,
      security,
      hidden,
    })
  }, [cleanNetworkName, cleanPassword, hidden, isValidWiFiQR, security])

  const downloadFileName = useMemo(() => {
    if (!isValidWiFiQR) return 'wifi-qr'

    return createSafeFileName(cleanNetworkName)
  }, [cleanNetworkName, isValidWiFiQR])

  function resetCustomization() {
    setQrSize(DEFAULT_QR_SIZE)
    setForegroundColor(DEFAULT_FOREGROUND_COLOR)
    setBackgroundColor(DEFAULT_BACKGROUND_COLOR)
  }

  function clearForm() {
    setNetworkName('')
    setPassword('')
    setSecurity('WPA')
    setHidden(false)
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

            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">WiFi QR Code</h1>

            <p className="mt-3 max-w-2xl text-muted-foreground">
              Create a WiFi QR code so guests can connect to your network without typing the
              password manually.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            <div className="rounded-2xl border bg-background p-5 shadow-sm sm:p-6">
              <div>
                <h2 className="text-lg font-semibold">Enter WiFi Details</h2>

                <p className="mt-1 text-sm text-muted-foreground">
                  Network name is required. Password is required for WPA/WPA2 and WEP networks.
                </p>
              </div>

              <div className="mt-5 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Network Name</label>

                  <Input
                    autoFocus
                    value={networkName}
                    placeholder="Home WiFi"
                    onChange={(event) => setNetworkName(event.target.value)}
                    className={
                      networkName.length > 0 && !isNetworkNameValid
                        ? 'border-red-500 focus-visible:ring-red-500'
                        : ''
                    }
                  />

                  {networkName.length > 0 && isNetworkNameValid && (
                    <p className="text-sm font-medium text-green-600">✓ Network name added</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Security Type</label>

                  <select
                    value={security}
                    onChange={(event) => {
                      const value = event.target.value as WiFiSecurity

                      setSecurity(value)

                      if (value === 'nopass') {
                        setPassword('')
                      }
                    }}
                    className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                  >
                    <option value="WPA">WPA/WPA2</option>
                    <option value="WEP">WEP</option>
                    <option value="nopass">No password</option>
                  </select>
                </div>

                {security !== 'nopass' && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Password</label>

                    <Input
                      value={password}
                      placeholder="WiFi password"
                      onChange={(event) => setPassword(event.target.value)}
                      className={
                        password.length > 0 && !isPasswordValid
                          ? 'border-red-500 focus-visible:ring-red-500'
                          : ''
                      }
                    />

                    {password.length > 0 &&
                      (isPasswordValid ? (
                        <p className="text-sm font-medium text-green-600">✓ Password added</p>
                      ) : (
                        <p className="text-sm font-medium text-red-600">
                          Password is required for selected security type
                        </p>
                      ))}
                  </div>
                )}

                <label className="flex items-center gap-3 rounded-xl border bg-muted/30 p-4 text-sm">
                  <input
                    type="checkbox"
                    checked={hidden}
                    onChange={(event) => setHidden(event.target.checked)}
                    className="h-4 w-4"
                  />

                  <span>
                    This is a hidden network
                    <span className="block text-xs text-muted-foreground">
                      Enable this only if your WiFi network is not visible in the network list.
                    </span>
                  </span>
                </label>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-muted-foreground">Example network: Home WiFi</p>

                  {(networkName || password || security !== 'WPA' || hidden) && (
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
                <p className="text-sm font-medium">WiFi tip</p>

                <p className="mt-1 text-sm text-muted-foreground">
                  Test your QR with a phone camera before printing it for guests or office visitors.
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
              isValid={isValidWiFiQR}
              foregroundColor={foregroundColor}
              backgroundColor={backgroundColor}
              placeholderDescription="Enter valid WiFi details to generate your WiFi QR code."
            />

            <QRDownload
              isValid={isValidWiFiQR}
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
