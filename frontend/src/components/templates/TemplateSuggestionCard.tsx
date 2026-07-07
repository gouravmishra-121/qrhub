import { Link } from 'react-router-dom'

import {
  createTemplateReturnPath,
  saveTemplateQrValue,
  type TemplateQRType,
} from '@/lib/templateFlow'

type TemplateSuggestionCardProps = {
  templateId: string
  qrType: TemplateQRType
  qrValue: string
  isValid: boolean
  title: string
  description: string
  ctaLabel: string
}

export function TemplateSuggestionCard({
  templateId,
  qrType,
  qrValue,
  isValid,
  title,
  description,
  ctaLabel,
}: TemplateSuggestionCardProps) {
  const templatePath = createTemplateReturnPath({
    templateId,
    qrType,
  })

  function handleUseTemplate() {
    if (!isValid || !qrValue) {
      return
    }

    saveTemplateQrValue({
      templateId,
      qrValue,
    })
  }

  return (
    <div className="mt-5 rounded-2xl border bg-muted/30 p-5">
      <p className="text-sm font-medium">{title}</p>

      <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>

      {isValid ? (
        <Link
          to={templatePath}
          onClick={handleUseTemplate}
          className="mt-4 inline-flex w-full justify-center rounded-full border bg-background px-5 py-2 text-sm font-medium text-muted-foreground transition hover:border-primary/50 hover:text-foreground"
        >
          {ctaLabel}
        </Link>
      ) : (
        <button
          type="button"
          disabled
          className="mt-4 inline-flex w-full cursor-not-allowed justify-center rounded-full bg-muted px-5 py-2 text-sm font-medium text-muted-foreground"
        >
          Generate a valid QR first
        </button>
      )}
    </div>
  )
}
