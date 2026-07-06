export type PageMeta = {
  title: string
  description: string
}

export const defaultPageMeta: PageMeta = {
  title: 'QRPrintly — Free QR Code Generator',
  description:
    'Create free QR codes for websites, UPI, WiFi, WhatsApp, email, vCard, maps and more.',
}

export const pageMetaByPath: Record<string, PageMeta> = {
  '/': {
    title: 'QRPrintly — Free QR Code Generator',
    description:
      'Create free QR codes for websites, WiFi, UPI payments, WhatsApp, business cards, maps and more.',
  },
  '/qr-types': {
    title: 'All QR Code Types — QRPrintly',
    description:
      'Choose from website, UPI, WiFi, WhatsApp, email, vCard, phone, SMS, text and maps QR code generators.',
  },
  '/templates': {
    title: 'QR Code Templates — QRPrintly',
    description:
      'Explore QR code templates for UPI payments, restaurants, business websites, WiFi and branded QR designs.',
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
    title: 'WiFi QR Code Generator — QRPrintly',
    description:
      'Create a free WiFi QR code so people can connect to your network without typing the password.',
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

export function getPageMeta(pathname: string): PageMeta {
  if (pathname.startsWith('/templates/')) {
    return {
      title: 'Template Builder — QRPrintly',
      description:
        'Customize a QR code template, connect QR data and download a branded QR design.',
    }
  }

  return (
    pageMetaByPath[pathname] ?? {
      title: 'Page Not Found — QRPrintly',
      description:
        'The page you are looking for does not exist. Browse QR types and create a free QR code on QRPrintly.',
    }
  )
}
