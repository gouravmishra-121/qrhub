import { Link } from 'react-router-dom'

import { templateDesignPreviews } from '@/data/templateDesignPreviews'
import { createTemplateReturnPath, type TemplateQRType } from '@/lib/templateFlow'

type TemplateFlowBannerProps = {
  templateId: string | null
  qrType: TemplateQRType
  qrValue: string
  isValid: boolean
}

export function TemplateFlowBanner({
  templateId,
  qrType,
  qrValue,
  isValid,
}: TemplateFlowBannerProps) {
  if (!templateId) {
    return null
  }

  const template = templateDesignPreviews.find((item) => item.id === templateId)

  if (!template) {
    return null
  }

  const returnPath = createTemplateReturnPath({
    templateId: template.id,
    qrType,
    qrValue,
  })

  return (
    <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
      <p className="text-sm font-medium text-primary">Template flow active</p>

      <h2 className="mt-1 text-lg font-semibold">Creating QR for {template.label} template</h2>

      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        Fill the QR details on this page. Once the QR code is valid, continue back to the template
        builder to customize the design and download PNG.
      </p>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        {isValid ? (
          <Link
            to={returnPath}
            className="inline-flex justify-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Continue to template builder →
          </Link>
        ) : (
          <button
            type="button"
            disabled
            className="inline-flex cursor-not-allowed justify-center rounded-full bg-muted px-5 py-2 text-sm font-medium text-muted-foreground"
          >
            Complete valid QR details to continue
          </button>
        )}

        <Link
          to={`/templates/${template.id}`}
          className="inline-flex justify-center rounded-full border bg-background px-5 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
        >
          Back to template
        </Link>
      </div>
    </div>
  )
}
