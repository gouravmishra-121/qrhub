import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { Footer } from '@/components/landing/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { getPageMeta } from '@/lib/pageMeta'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { PageViewTracker } from '@/components/analytics/PageViewTracker'
export function AppLayout() {
  const location = useLocation()

  useEffect(() => {
    const meta = getPageMeta(location.pathname)

    document.title = meta.title

    const descriptionTag = document.querySelector('meta[name="description"]')

    if (descriptionTag) {
      descriptionTag.setAttribute('content', meta.description)
    } else {
      const tag = document.createElement('meta')
      tag.name = 'description'
      tag.content = meta.description
      document.head.appendChild(tag)
    }
  }, [location.pathname])

  return (
    <>
      <ScrollToTop />

      <PageViewTracker />

      <Navbar />

      <Outlet />

      <Footer />
    </>
  )
}
