declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined

const isDev = import.meta.env.DEV

let isAnalyticsLoaded = false

export type QRAnalyticsType =
  'website' | 'upi' | 'wifi' | 'whatsapp' | 'email' | 'vcard' | 'phone' | 'sms' | 'text' | 'maps'

export type QRDownloadFormat = 'png' | 'svg'

type AnalyticsParams = Record<string, string | number | boolean>

export function isAnalyticsEnabled() {
  return Boolean(GA_MEASUREMENT_ID)
}

export function loadAnalytics() {
  if (!GA_MEASUREMENT_ID) {
    debugAnalytics('analytics_disabled', {
      reason: 'missing VITE_GA_MEASUREMENT_ID',
    })
    return
  }

  if (isAnalyticsLoaded) {
    return
  }

  window.dataLayer = window.dataLayer ?? []

  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args)
  }

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`

  script.onload = () => {
    debugAnalytics('gtag_script_loaded', {
      measurement_id: GA_MEASUREMENT_ID,
    })
  }

  script.onerror = () => {
    debugAnalytics('gtag_script_failed', {
      measurement_id: GA_MEASUREMENT_ID,
    })
  }

  document.head.appendChild(script)

  window.gtag('js', new Date())
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false,
    debug_mode: isDev,
  })

  isAnalyticsLoaded = true

  debugAnalytics('analytics_loaded', {
    measurement_id: GA_MEASUREMENT_ID,
  })
}

export function trackPageView(path: string) {
  trackEvent('page_view', {
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
    debugAnalytics('qr_generate_skipped', {
      reason: 'unknown_qr_type_path',
      path: window.location.pathname,
    })
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
    debugAnalytics('qr_download_skipped', {
      reason: 'unknown_qr_type_path',
      path: window.location.pathname,
    })
    return
  }

  trackQrDownload({
    qrType,
    format,
    size,
  })
}

function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  const eventParams = {
    ...params,
    debug_mode: isDev,
  }

  debugAnalytics(eventName, eventParams)

  if (!GA_MEASUREMENT_ID || !window.gtag) {
    return
  }

  window.gtag('event', eventName, eventParams)
}

function debugAnalytics(eventName: string, params?: AnalyticsParams) {
  if (!isDev) {
    return
  }

  console.info('[QRPrintly Analytics]', eventName, params ?? {})
}
