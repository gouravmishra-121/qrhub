import type { TemplateDesignVariant } from '@/components/templates/TemplateDesignPreview'

type TemplateDesignPreviewItem = {
  id: string
  variant: TemplateDesignVariant
  label: string
  title: string
  subtitle: string
  ctaText: string
  footerText: string
  baseQrPath: string
}

export const templateDesignPreviews: TemplateDesignPreviewItem[] = [
  {
    id: 'upi-payment',
    variant: 'payment',
    label: 'UPI Payment',
    title: 'Scan & Pay',
    subtitle: 'Fast UPI payment accepted here',
    ctaText: 'Pay with UPI',
    footerText: 'For shops, stalls and small businesses',
    baseQrPath: '/upi',
  },
  {
    id: 'restaurant-menu',
    variant: 'restaurant',
    label: 'Restaurant Menu',
    title: 'View Our Menu',
    subtitle: 'Scan to open our digital menu',
    ctaText: 'Open Menu',
    footerText: 'For cafes, restaurants and food counters',
    baseQrPath: '/website',
  },
  {
    id: 'wifi',
    variant: 'wifi',
    label: 'Guest WiFi',
    title: 'Connect to WiFi',
    subtitle: 'Scan to join our guest network',
    ctaText: 'Join WiFi',
    footerText: 'For cafes, hotels, offices and guest areas',
    baseQrPath: '/wifi',
  },
  {
    id: 'whatsapp',
    variant: 'whatsapp',
    label: 'WhatsApp Chat',
    title: 'Chat With Us',
    subtitle: 'Scan to start a WhatsApp conversation',
    ctaText: 'Start Chat',
    footerText: 'For support, bookings and customer inquiries',
    baseQrPath: '/whatsapp',
  },
  {
    id: 'vcard-contact',
    variant: 'contact',
    label: 'Contact Card',
    title: 'Save Our Contact',
    subtitle: 'Scan to save phone, email and business details',
    ctaText: 'Save Contact',
    footerText: 'For business cards, events and networking',
    baseQrPath: '/vcard',
  },
  {
    id: 'website',
    variant: 'business',
    label: 'Business Website',
    title: 'Visit Our Website',
    subtitle: 'Scan to open our website or landing page',
    ctaText: 'Visit Website',
    footerText: 'For stores, offices and service providers',
    baseQrPath: '/website',
  },
]
