declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined

let isAnalyticsLoaded = false

export type QRAnalyticsType =
  'website' | 'upi' | 'wifi' | 'whatsapp' | 'email' | 'vcard' | 'phone' | 'sms' | 'text' | 'maps'

export type QRDownloadFormat = 'png' | 'svg'

export function isAnalyticsEnabled() {
  return Boolean(GA_MEASUREMENT_ID)
}

export function loadAnalytics() {
  if (!GA_MEASUREMENT_ID || isAnalyticsLoaded) {
    return
  }

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer ?? []

  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args)
  }

  window.gtag('js', new Date())
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false,
  })

  isAnalyticsLoaded = true
}

export function trackPageView(path: string) {
  if (!GA_MEASUREMENT_ID || !window.gtag) {
    return
  }

  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  })
}

export function trackQrGenerate(qrType: QRAnalyticsType) {
  trackEvent('qr_generate', {
    qr_type: qrType,
  })
}

export function trackQrDownload({
  qrType,
  format,
  size,
}: {
  qrType: QRAnalyticsType
  format: QRDownloadFormat
  size: number
}) {
  trackEvent('qr_download', {
    qr_type: qrType,
    format,
    size,
  })
}

export function trackTemplateSelect(templateId: string) {
  trackEvent('template_select', {
    template_id: templateId,
  })
}

export function trackTemplateQrConnected({
  templateId,
  qrType,
}: {
  templateId: string
  qrType: QRAnalyticsType
}) {
  trackEvent('template_qr_connected', {
    template_id: templateId,
    qr_type: qrType,
  })
}

export function trackTemplateDownload({
  templateId,
  exportType,
}: {
  templateId: string
  exportType: 'free_png'
}) {
  trackEvent('template_download', {
    template_id: templateId,
    export_type: exportType,
  })
}

export function trackPremiumExportClick(templateId: string) {
  trackEvent('premium_export_click', {
    template_id: templateId,
  })
}

export function getQRTypeFromCurrentPath(): QRAnalyticsType | null {
  const path = window.location.pathname.replace('/', '')

  const validTypes: QRAnalyticsType[] = [
    'website',
    'upi',
    'wifi',
    'whatsapp',
    'email',
    'vcard',
    'phone',
    'sms',
    'text',
    'maps',
  ]

  if (validTypes.includes(path as QRAnalyticsType)) {
    return path as QRAnalyticsType
  }

  return null
}

export function trackQrGenerateFromCurrentPath() {
  const qrType = getQRTypeFromCurrentPath()

  if (!qrType) {
    return
  }

  trackQrGenerate(qrType)
}

export function trackQrDownloadFromCurrentPath({
  format,
  size,
}: {
  format: QRDownloadFormat
  size: number
}) {
  const qrType = getQRTypeFromCurrentPath()

  if (!qrType) {
    return
  }

  trackQrDownload({
    qrType,
    format,
    size,
  })
}

function trackEvent(eventName: string, params?: Record<string, string | number>) {
  if (!GA_MEASUREMENT_ID || !window.gtag) {
    return
  }

  window.gtag('event', eventName, params)
}
