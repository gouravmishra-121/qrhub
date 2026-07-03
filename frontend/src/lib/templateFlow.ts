export type TemplateQRType = 'upi' | 'website'

export function createTemplateGeneratorPath(baseQrPath: string, templateId: string) {
  const params = new URLSearchParams({
    template: templateId,
  })

  return `${baseQrPath}?${params.toString()}`
}

export function createTemplateReturnPath({
  templateId,
  qrType,
  qrValue,
}: {
  templateId: string
  qrType: TemplateQRType
  qrValue: string
}) {
  const params = new URLSearchParams({
    qrType,
    qrValue,
  })

  return `/templates/${templateId}?${params.toString()}`
}
