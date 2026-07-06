import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { loadAnalytics, trackPageView } from '@/lib/analytics'

export function PageViewTracker() {
  const location = useLocation()

  useEffect(() => {
    loadAnalytics()
  }, [])

  useEffect(() => {
    const path = `${location.pathname}${location.search}`
    trackPageView(path)
  }, [location.pathname, location.search])

  return null
}
