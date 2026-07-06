const SITE_URL = 'https://qrprintly.com'

export function getCanonicalUrl(pathname: string) {
  if (pathname === '/') {
    return SITE_URL
  }

  return `${SITE_URL}${pathname}`
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
