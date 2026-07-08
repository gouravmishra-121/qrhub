import { useEffect, useRef, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { toPng } from 'html-to-image'

import { TemplateDesignPreview } from '@/components/templates/TemplateDesignPreview'
import { Input } from '@/components/ui/input'
import { templateDesignPreviews } from '@/data/templateDesignPreviews'
import {
  trackMoreExportOptionsClick,
  trackTemplateDownload,
  trackTemplateQrConnected,
  trackTemplateSelect,
  type QRAnalyticsType,
} from '@/lib/analytics'
import {
  clearTemplateQrValue,
  createTemplateGeneratorPath,
  getTemplateQrValue,
} from '@/lib/templateFlow'

type SelectedTemplate = (typeof templateDesignPreviews)[number]

function isQRAnalyticsType(value: string | null): value is QRAnalyticsType {
  return (
    value === 'website' ||
    value === 'upi' ||
    value === 'wifi' ||
    value === 'whatsapp' ||
    value === 'email' ||
    value === 'vcard' ||
    value === 'phone' ||
    value === 'sms' ||
    value === 'text' ||
    value === 'maps'
  )
}

export default function TemplateBuilderPage() {
  const { templateId } = useParams()
  const [searchParams] = useSearchParams()

  const template = templateDesignPreviews.find((item) => item.id === templateId)

  const qrType = searchParams.get('qrType')
  const connected = searchParams.get('connected')

  if (!template) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <p className="text-sm font-medium text-muted-foreground">Template not found</p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight">This template does not exist</h1>

        <p className="mt-4 text-muted-foreground">
          Choose another QR template from the template gallery.
        </p>

        <Link
          to="/templates"
          className="mt-8 inline-flex rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          Back to templates
        </Link>
      </main>
    )
  }

  return (
    <TemplateBuilderContent
      key={template.id}
      template={template}
      qrType={qrType}
      isConnected={connected === '1'}
    />
  )
}

function TemplateBuilderContent({
  template,
  qrType,
  isConnected,
}: {
  template: SelectedTemplate
  qrType: string | null
  isConnected: boolean
}) {
  const templateDownloadRef = useRef<HTMLDivElement>(null)
  const [isDownloading, setIsDownloading] = useState(false)
  const [connectedQrValue, setConnectedQrValue] = useState(() => {
    if (!isConnected) {
      return ''
    }

    return getTemplateQrValue(template.id)
  })

  const [templateTitle, setTemplateTitle] = useState(template.title)
  const [templateSubtitle, setTemplateSubtitle] = useState(template.subtitle)
  const [templateCtaText, setTemplateCtaText] = useState(template.ctaText)
  const [templateFooterText, setTemplateFooterText] = useState(template.footerText)

  const hasTrackedTemplateSelect = useRef(false)
  const hasTrackedQrConnected = useRef(false)

  const hasConnectedQr = Boolean(qrType && connectedQrValue)
  const templateFileName = `${template.id}-qrprintly-template.png`

  useEffect(() => {
    if (hasTrackedTemplateSelect.current) {
      return
    }

    trackTemplateSelect(template.id)
    hasTrackedTemplateSelect.current = true
  }, [template.id])

  useEffect(() => {
    if (!connectedQrValue || !isQRAnalyticsType(qrType) || hasTrackedQrConnected.current) {
      return
    }

    trackTemplateQrConnected({
      templateId: template.id,
      qrType,
    })

    hasTrackedQrConnected.current = true
  }, [connectedQrValue, qrType, template.id])

  async function downloadTemplatePng() {
    if (!templateDownloadRef.current || !hasConnectedQr) return

    try {
      setIsDownloading(true)

      const dataUrl = await toPng(templateDownloadRef.current, {
        cacheBust: true,
        pixelRatio: 3,
        backgroundColor: '#ffffff',
      })

      const link = document.createElement('a')
      link.download = templateFileName
      link.href = dataUrl

      trackTemplateDownload({
        templateId: template.id,
        exportType: 'free_png',
      })

      link.click()
    } finally {
      setIsDownloading(false)
    }
  }

  function handleMoreExportOptionsClick() {
    trackMoreExportOptionsClick(template.id)
  }

  function resetTemplateText() {
    setTemplateTitle(template.title)
    setTemplateSubtitle(template.subtitle)
    setTemplateCtaText(template.ctaText)
    setTemplateFooterText(template.footerText)
  }

  function clearConnectedQr() {
    clearTemplateQrValue(template.id)
    setConnectedQrValue('')
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium text-muted-foreground">QR Template Builder</p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          Customize your {template.label} QR template
        </h1>

        <p className="mt-4 text-muted-foreground">
          Connect your QR code, edit the template text, preview the final design, and download a
          ready-to-use PNG for sharing or printing.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_380px]">
        <section className="space-y-6">
          <div className="rounded-2xl border bg-background p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Connect QR code</h2>

            <p className="mt-2 text-sm text-muted-foreground">
              Start by creating the QR code for this template. Once connected, the QR will appear
              inside your design preview.
            </p>

            <div
              className={
                hasConnectedQr
                  ? 'mt-6 rounded-2xl border border-primary/30 bg-primary/5 p-5'
                  : 'mt-6 rounded-2xl border bg-muted/40 p-5'
              }
            >
              <p className="text-sm font-medium">
                {hasConnectedQr ? 'QR connected' : 'No QR connected yet'}
              </p>

              <div className="mt-4 grid gap-3 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-muted-foreground">Template</span>
                  <span className="font-medium">{template.label}</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-muted-foreground">QR type</span>
                  <span className="font-medium">
                    {qrType ? qrType.toUpperCase() : 'Not selected'}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-muted-foreground">Status</span>
                  <span className="font-medium">
                    {hasConnectedQr ? 'Ready to download' : 'Pending'}
                  </span>
                </div>
              </div>

              {hasConnectedQr ? (
                <p className="mt-4 rounded-xl bg-background p-3 text-xs leading-5 text-muted-foreground">
                  QR data connected successfully in this browser session. The QR value is not added
                  to the page URL.
                </p>
              ) : null}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to={createTemplateGeneratorPath(template.baseQrPath, template.id)}
                className="inline-flex justify-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                {hasConnectedQr ? 'Replace QR code' : 'Create QR code first'}
              </Link>

              <Link
                to="/templates"
                className="inline-flex justify-center rounded-full border px-5 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                Choose another template
              </Link>

              {hasConnectedQr ? (
                <button
                  type="button"
                  onClick={clearConnectedQr}
                  className="inline-flex justify-center rounded-full border px-5 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
                >
                  Clear connected QR
                </button>
              ) : null}
            </div>
          </div>

          <div className="rounded-2xl border bg-background p-6 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold">Customize text</h2>

                <p className="mt-2 text-sm text-muted-foreground">
                  Update the title, subtitle, button text, and footer note shown on your QR
                  template.
                </p>
              </div>

              <button
                type="button"
                onClick={resetTemplateText}
                className="inline-flex justify-center rounded-full border px-4 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                Reset text
              </button>
            </div>

            <div className="mt-6 grid gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Main title</label>

                <Input
                  value={templateTitle}
                  maxLength={32}
                  placeholder="Scan & Pay"
                  onChange={(event) => setTemplateTitle(event.target.value)}
                />

                <p className="text-xs text-muted-foreground">
                  Short titles work best for printed templates.
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Subtitle</label>

                <Input
                  value={templateSubtitle}
                  maxLength={60}
                  placeholder="Fast UPI payment accepted here"
                  onChange={(event) => setTemplateSubtitle(event.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Button text</label>

                <Input
                  value={templateCtaText}
                  maxLength={28}
                  placeholder="Pay with UPI"
                  onChange={(event) => setTemplateCtaText(event.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Footer text</label>

                <Input
                  value={templateFooterText}
                  maxLength={70}
                  placeholder="For shops, stalls and small businesses"
                  onChange={(event) => setTemplateFooterText(event.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border bg-background p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Download template</h2>

            <p className="mt-2 text-sm text-muted-foreground">
              Download a PNG version of your QR template. You can use it on posters, payment boards,
              menus, cards, or digital sharing.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border bg-muted/30 p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold">PNG Download</h3>

                  <span className="rounded-full bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                    Available
                  </span>
                </div>

                <p className="mt-2 text-sm text-muted-foreground">
                  Export your completed QR template as a high-quality PNG file.
                </p>

                <button
                  type="button"
                  disabled={!hasConnectedQr || isDownloading}
                  onClick={downloadTemplatePng}
                  className={
                    hasConnectedQr
                      ? 'mt-5 inline-flex w-full justify-center rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition hover:opacity-90'
                      : 'mt-5 inline-flex w-full cursor-not-allowed justify-center rounded-full bg-muted px-5 py-2 text-sm font-medium text-muted-foreground'
                  }
                >
                  {isDownloading ? 'Preparing PNG...' : 'Download PNG'}
                </button>
              </div>

              <div className="rounded-2xl border border-dashed bg-background p-5 opacity-90">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold">More export options</h3>

                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                    Planned
                  </span>
                </div>

                <p className="mt-2 text-sm text-muted-foreground">
                  More export formats like PDF and higher-resolution files may be added based on
                  user feedback.
                </p>

                <button
                  type="button"
                  onClick={handleMoreExportOptionsClick}
                  className="mt-5 inline-flex w-full justify-center rounded-full border px-5 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
                >
                  I&apos;d like more export options
                </button>
              </div>
            </div>

            {!hasConnectedQr ? (
              <p className="mt-4 text-sm text-muted-foreground">
                Create and connect a QR code first to enable the PNG download.
              </p>
            ) : null}
          </div>

          <div className="rounded-2xl border bg-muted/30 p-5">
            <p className="text-sm font-medium">Privacy-first QR creation</p>

            <p className="mt-2 text-sm text-muted-foreground">
              Your QR code is created in your browser. QRPrintly does not store the information you
              enter while creating a QR code, and connected QR values are kept only in your browser
              session.
            </p>
          </div>
        </section>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <TemplateDesignPreview
            variant={template.variant}
            label={template.label}
            title={templateTitle || template.title}
            subtitle={templateSubtitle || template.subtitle}
            ctaText={templateCtaText || template.ctaText}
            footerText={templateFooterText || template.footerText}
            qrValue={connectedQrValue || undefined}
            downloadRef={templateDownloadRef}
            showWatermark={Boolean(connectedQrValue)}
          />
        </aside>
      </div>
    </main>
  )
}
