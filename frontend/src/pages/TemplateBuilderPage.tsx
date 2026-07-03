import { useEffect, useRef, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { toPng } from 'html-to-image'

import { TemplateDesignPreview } from '@/components/templates/TemplateDesignPreview'
import { Input } from '@/components/ui/input'
import { templateDesignPreviews } from '@/data/templateDesignPreviews'
import { createTemplateGeneratorPath } from '@/lib/templateFlow'

export default function TemplateBuilderPage() {
  const { templateId } = useParams()
  const [searchParams] = useSearchParams()

  const templateDownloadRef = useRef<HTMLDivElement>(null)
  const [isDownloading, setIsDownloading] = useState(false)

  const template = templateDesignPreviews.find((item) => item.id === templateId)

  const [templateTitle, setTemplateTitle] = useState(template?.title ?? '')
  const [templateSubtitle, setTemplateSubtitle] = useState(template?.subtitle ?? '')
  const [templateCtaText, setTemplateCtaText] = useState(template?.ctaText ?? '')
  const [templateFooterText, setTemplateFooterText] = useState(template?.footerText ?? '')

  const qrType = searchParams.get('qrType')
  const qrValue = searchParams.get('qrValue')
  const hasConnectedQr = Boolean(qrType && qrValue)

  useEffect(() => {
    if (!template) return

    setTemplateTitle(template.title)
    setTemplateSubtitle(template.subtitle)
    setTemplateCtaText(template.ctaText)
    setTemplateFooterText(template.footerText)
  }, [template?.id])

  if (!template) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <p className="text-sm font-medium text-muted-foreground">Template not found</p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight">This template does not exist</h1>

        <p className="mt-4 text-muted-foreground">
          Please go back to the template gallery and choose another template.
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

  const templateFileName = `${template.id}-qrhub-free-template.png`

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
      link.click()
    } finally {
      setIsDownloading(false)
    }
  }

  function resetTemplateText() {
    if (!template) return

    setTemplateTitle(template.title)
    setTemplateSubtitle(template.subtitle)
    setTemplateCtaText(template.ctaText)
    setTemplateFooterText(template.footerText)
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium text-muted-foreground">Template Builder</p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">{template.title}</h1>

        <p className="mt-4 text-muted-foreground">
          Connect a base QR, customize the template text, preview the final design, and download a
          branded QR layout.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_380px]">
        <section className="space-y-6">
          <div className="rounded-2xl border bg-background p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Template setup</h2>

            <p className="mt-2 text-sm text-muted-foreground">
              First connect the QR data, then customize the text and export the final template.
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
                <p className="mt-4 break-all rounded-xl bg-background p-3 text-xs text-muted-foreground">
                  {qrValue}
                </p>
              ) : null}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to={createTemplateGeneratorPath(template.baseQrPath, template.id)}
                className="inline-flex justify-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                {hasConnectedQr ? 'Replace base QR' : 'Create base QR first'}
              </Link>

              <Link
                to="/templates"
                className="inline-flex justify-center rounded-full border px-5 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                Choose another template
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border bg-background p-6 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold">Customize text</h2>

                <p className="mt-2 text-sm text-muted-foreground">
                  Edit the text that appears on the template before downloading.
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
                  Keep it short for better print layout.
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
            <h2 className="text-xl font-semibold">Export options</h2>

            <p className="mt-2 text-sm text-muted-foreground">
              Free export is available now. Premium export options are planned for monetization.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border bg-muted/30 p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold">Free PNG</h3>

                  <span className="rounded-full bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                    Available
                  </span>
                </div>

                <p className="mt-2 text-sm text-muted-foreground">
                  Download a branded PNG template with a small QRHub watermark.
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
                  {isDownloading ? 'Preparing PNG...' : 'Download free PNG'}
                </button>
              </div>

              <div className="rounded-2xl border border-dashed bg-background p-5 opacity-80">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold">Premium Export</h3>

                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                    Coming soon
                  </span>
                </div>

                <p className="mt-2 text-sm text-muted-foreground">
                  Future paid export: HD PNG, print-ready PDF, no watermark, logo placement, and
                  premium designs.
                </p>

                <button
                  type="button"
                  disabled
                  className="mt-5 inline-flex w-full cursor-not-allowed justify-center rounded-full bg-muted px-5 py-2 text-sm font-medium text-muted-foreground"
                >
                  Unlock premium export
                </button>
              </div>
            </div>

            {!hasConnectedQr ? (
              <p className="mt-4 text-sm text-muted-foreground">
                Create and connect a base QR first to enable free export.
              </p>
            ) : null}
          </div>

          <div className="rounded-2xl border bg-muted/30 p-5">
            <p className="text-sm font-medium">Monetization direction</p>

            <p className="mt-2 text-sm text-muted-foreground">
              QR generation remains free for traffic. Template exports create the monetization layer
              through premium layouts, HD downloads and watermark-free files.
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
            qrValue={qrValue ?? undefined}
            downloadRef={templateDownloadRef}
            showWatermark={Boolean(qrValue)}
          />
        </aside>
      </div>
    </main>
  )
}
