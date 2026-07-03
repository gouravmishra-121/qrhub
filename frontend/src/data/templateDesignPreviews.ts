import type { TemplateDesignVariant } from '@/components/templates/TemplateDesignPreview'

export const templateDesignPreviews = [
  {
    variant: 'payment' as TemplateDesignVariant,
    label: 'UPI Payment',
    title: 'Scan & Pay',
    subtitle: 'Fast UPI payment accepted here',
    ctaText: 'Pay with UPI',
    footerText: 'For shops, stalls and small businesses',
  },
  {
    variant: 'restaurant' as TemplateDesignVariant,
    label: 'Restaurant',
    title: 'View Our Menu',
    subtitle: 'Scan to open our digital menu',
    ctaText: 'Open Menu',
    footerText: 'For cafes, restaurants and food counters',
  },
  {
    variant: 'business' as TemplateDesignVariant,
    label: 'Business',
    title: 'Connect With Us',
    subtitle: 'Scan to visit our website',
    ctaText: 'Visit Website',
    footerText: 'For stores, offices and service providers',
  },
]
