export type PageMeta = {
  title: string
  description: string
}

import { longTailPagesByPath } from '@/data/longTailPages'
import { blogPostsByPath } from '@/data/blogPosts'

export const defaultPageMeta: PageMeta = {
  title: 'QRPrintly — Free QR Code Generator',
  description:
    'Create free QR codes for websites, UPI, WiFi, WhatsApp, email, vCard, maps and more.',
}

export const pageMetaByPath: Record<string, PageMeta> = {
  '/': {
    title: 'Free QR Code Generator Online | QRPrintly',
    description:
      'Create free QR codes online for UPI, WhatsApp, WiFi, websites, vCards, email, SMS, phone, maps and text. No signup required. Download PNG or SVG instantly.',
  },
  '/qr-types': {
    title: 'QR Code Generator Types | QRPrintly',
    description:
      'Explore free QR code generators for UPI, WhatsApp, WiFi, websites, vCards, email, SMS, phone, maps and text. Download PNG or SVG instantly.',
  },
  '/templates': {
    title: 'Printable QR Code Templates | QRPrintly',
    description:
      'Choose printable QR code templates for payments, menus, WiFi, business cards, websites and customer chats. Customize text and download a clean PNG design.',
  },
  '/website': {
    title: 'Free Website QR Code Generator | QRPrintly',
    description:
      'Turn any website link into a QR code. Create free QR codes for landing pages, menus, portfolios, forms, products and business websites. Download PNG or SVG.',
  },
  '/upi': {
    title: 'Free UPI QR Code Generator | QRPrintly',
    description:
      'Create a free UPI QR code online for shops, stalls, freelancers and small businesses. No signup required. Download your UPI QR code as PNG or SVG.',
  },
  '/wifi': {
    title: 'Free WiFi QR Code Generator | QRPrintly',
    description:
      'Create a free WiFi QR code so guests can connect without typing the password. Useful for homes, cafes, hotels, offices and guest networks.',
  },
  '/whatsapp': {
    title: 'WhatsApp QR Code Generator | QRPrintly',
    description:
      'Create a free WhatsApp QR code for direct chats. Add your WhatsApp number, optional message, and download the QR code as PNG or SVG. No signup required.',
  },
  '/email': {
    title: 'Free Email QR Code Generator | QRPrintly',
    description:
      'Create a free email QR code that opens a ready-to-send email draft. Add recipient, subject and message. Download PNG or SVG. No signup required.',
  },
  '/vcard': {
    title: 'Free vCard QR Code Generator | QRPrintly',
    description:
      'Create a free vCard QR code to share contact details. Useful for business cards, freelancers, sales teams, events and networking.',
  },
  '/phone': {
    title: 'Free Phone QR Code Generator | QRPrintly',
    description:
      'Create a free phone QR code that opens the dialer with your number. Useful for business cards, posters and customer support.',
  },
  '/sms': {
    title: 'Free SMS QR Code Generator | QRPrintly',
    description:
      'Create a free SMS QR code that opens a text message draft. Add phone number and message. Download PNG or SVG. No signup required.',
  },
  '/text': {
    title: 'Free Text QR Code Generator | QRPrintly',
    description:
      'Create a free plain text QR code for notes, labels, instructions, IDs and offline information. Download PNG or SVG instantly.',
  },
  '/maps': {
    title: 'Free Google Maps QR Code Generator | QRPrintly',
    description:
      'Create a free Google Maps QR code for shops, offices, restaurants, events and venues. Add a map link and download PNG or SVG.',
  },
  '/privacy': {
    title: 'Privacy Policy — QRPrintly',
    description: 'Learn how QRPrintly handles privacy for browser-based QR code generation.',
  },
  '/blog': {
    title: 'QR Code Guides for Small Businesses | QRPrintly',
    description:
      'Read practical QR code guides for UPI payments, WhatsApp chats, WiFi access, menus, business cards and small business use cases.',
  },
  '/terms': {
    title: 'Terms of Service — QRPrintly',
    description: 'Read the basic terms for using QRPrintly free QR code generators and templates.',
  },
  '/contact': {
    title: 'Contact — QRPrintly',
    description:
      'Contact QRPrintly for feedback, QR type suggestions, template ideas, and support.',
  },
}

function normalizePathname(pathname: string) {
  if (pathname === '/') {
    return pathname
  }

  return pathname.replace(/\/+$/, '')
}

export function getPageMeta(pathname: string): PageMeta {
  const normalizedPathname = normalizePathname(pathname)
  const longTailPage = longTailPagesByPath[normalizedPathname]

  if (longTailPage) {
    return {
      title: longTailPage.metaTitle,
      description: longTailPage.metaDescription,
    }
  }

  const blogPost = blogPostsByPath[normalizedPathname]

  if (blogPost) {
    return {
      title: blogPost.metaTitle,
      description: blogPost.metaDescription,
    }
  }

  if (normalizedPathname.startsWith('/templates/')) {
    return {
      title: 'Template Builder — QRPrintly',
      description:
        'Customize a QR code template, connect QR data and download a branded QR design.',
    }
  }

  return (
    pageMetaByPath[normalizedPathname] ?? {
      title: 'Page Not Found — QRPrintly',
      description:
        'The page you are looking for does not exist. Browse QR types and create a free QR code on QRPrintly.',
    }
  )
}
