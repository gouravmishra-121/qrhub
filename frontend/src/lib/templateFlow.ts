export type TemplateQRType = 'upi' | 'website' | 'wifi' | 'whatsapp' | 'vcard'

const TEMPLATE_QR_STORAGE_PREFIX = 'qrprintly-template-qr'

export function createTemplateGeneratorPath(baseQrPath: string, templateId: string) {
  const params = new URLSearchParams({
    template: templateId,
  })

  return `${baseQrPath}?${params.toString()}`
}

export function createTemplateReturnPath({
  templateId,
  qrType,
}: {
  templateId: string
  qrType: TemplateQRType
}) {
  const params = new URLSearchParams({
    qrType,
    connected: '1',
  })

  return `/templates/${templateId}?${params.toString()}`
}

export function createTemplateQrStorageKey(templateId: string) {
  return `${TEMPLATE_QR_STORAGE_PREFIX}:${templateId}`
}

export function saveTemplateQrValue({
  templateId,
  qrValue,
}: {
  templateId: string
  qrValue: string
}) {
  if (typeof window === 'undefined') {
    return
  }

  window.sessionStorage.setItem(createTemplateQrStorageKey(templateId), qrValue)
}

export function getTemplateQrValue(templateId: string) {
  if (typeof window === 'undefined') {
    return ''
  }

  return window.sessionStorage.getItem(createTemplateQrStorageKey(templateId)) ?? ''
}

export function clearTemplateQrValue(templateId: string) {
  if (typeof window === 'undefined') {
    return
  }

  window.sessionStorage.removeItem(createTemplateQrStorageKey(templateId))
}
