const SITE_URL = 'https://qrprintly.com'

function normalizePathname(pathname: string) {
  if (pathname === '/') {
    return pathname
  }

  return pathname.replace(/\/+$/, '')
}

export function getCanonicalUrl(pathname: string) {
  const normalizedPathname = normalizePathname(pathname)

  if (normalizedPathname === '/') {
    return SITE_URL
  }

  return `${SITE_URL}${normalizedPathname}`
}

export function updateCanonicalUrl(pathname: string) {
  const canonicalUrl = getCanonicalUrl(pathname)

  let canonicalTag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')

  if (!canonicalTag) {
    canonicalTag = document.createElement('link')
    canonicalTag.rel = 'canonical'
    document.head.appendChild(canonicalTag)
  }

  canonicalTag.href = canonicalUrl
}
