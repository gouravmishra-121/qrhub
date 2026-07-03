import { useRef, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { toPng } from 'html-to-image'

import { TemplateDesignPreview } from '@/components/templates/TemplateDesignPreview'
import { templateDesignPreviews } from '@/data/templateDesignPreviews'
import { createTemplateGeneratorPath } from '@/lib/templateFlow'

export default function TemplateBuilderPage() {
  const { templateId } = useParams()
  const [searchParams] = useSearchParams()

  const templateDownloadRef = useRef<HTMLDivElement>(null)
  const [isDownloading, setIsDownloading] = useState(false)

  const template = templateDesignPreviews.find((item) => item.id === templateId)

  const qrType = searchParams.get('qrType')
  const qrValue = searchParams.get('qrValue')
  const hasConnectedQr = Boolean(qrType && qrValue)

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

  const templateFileName = `${template.id}-qr-template.png`

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

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium text-muted-foreground">Template Builder</p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">{template.title}</h1>

        <p className="mt-4 text-muted-foreground">
          Choose or replace the base QR for this template. Once connected, the real QR appears
          inside the template preview.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_380px]">
        <section className="rounded-2xl border bg-background p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Template setup</h2>

          <p className="mt-2 text-sm text-muted-foreground">
            First connect the QR data, then download the full branded template design as PNG.
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

            <button
              type="button"
              disabled={!hasConnectedQr || isDownloading}
              onClick={downloadTemplatePng}
              className={
                hasConnectedQr
                  ? 'inline-flex justify-center rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition hover:opacity-90'
                  : 'inline-flex cursor-not-allowed justify-center rounded-full bg-muted px-5 py-2 text-sm font-medium text-muted-foreground'
              }
            >
              {isDownloading ? 'Preparing PNG...' : 'Download template PNG'}
            </button>

            <Link
              to="/templates"
              className="inline-flex justify-center rounded-full border px-5 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              Choose another template
            </Link>
          </div>

          {hasConnectedQr ? (
            <div className="mt-6 rounded-2xl border bg-muted/30 p-5">
              <p className="text-sm font-medium">Free template download</p>

              <p className="mt-2 text-sm text-muted-foreground">
                This PNG download is the first free template export. Later, we can add premium HD
                export, PDF print layout, logo placement and watermark-free downloads.
              </p>
            </div>
          ) : (
            <div className="mt-6 rounded-2xl border bg-muted/30 p-5">
              <p className="text-sm font-medium">Download locked</p>

              <p className="mt-2 text-sm text-muted-foreground">
                Create and connect a base QR first. After that, the template PNG download will be
                enabled.
              </p>
            </div>
          )}
        </section>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <TemplateDesignPreview
            variant={template.variant}
            label={template.label}
            title={template.title}
            subtitle={template.subtitle}
            ctaText={template.ctaText}
            footerText={template.footerText}
            qrValue={qrValue ?? undefined}
            downloadRef={templateDownloadRef}
          />
        </aside>
      </div>
    </main>
  )
}
