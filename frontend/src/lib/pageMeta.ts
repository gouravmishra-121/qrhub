export type PageMeta = {
  title: string
  description: string
}

export const defaultPageMeta: PageMeta = {
  title: 'QRHub — Free QR Code Generator',
  description:
    'Create free QR codes for websites, UPI, WiFi, WhatsApp, email, vCard, maps and more.',
}

export const pageMetaByPath: Record<string, PageMeta> = {
  '/': {
    title: 'QRHub — Free QR Code Generator',
    description:
      'Create free QR codes for websites, WiFi, UPI payments, WhatsApp, business cards, maps and more.',
  },
  '/qr-types': {
    title: 'All QR Code Types — QRHub',
    description:
      'Choose from website, UPI, WiFi, WhatsApp, email, vCard, phone, SMS, text and maps QR code generators.',
  },
  '/templates': {
    title: 'QR Code Templates — QRHub',
    description:
      'Explore QR code templates for UPI payments, restaurants, business websites, WiFi and branded QR designs.',
  },
  '/website': {
    title: 'Website QR Code Generator — QRHub',
    description:
      'Create a free QR code for any website URL. Enter a valid URL and download your QR code as PNG or SVG.',
  },
  '/upi': {
    title: 'UPI QR Code Generator — QRHub',
    description:
      'Create a free UPI payment QR code for Indian payment apps with payee name, amount and note.',
  },
  '/wifi': {
    title: 'WiFi QR Code Generator — QRHub',
    description:
      'Create a free WiFi QR code so people can connect to your network without typing the password.',
  },
  '/whatsapp': {
    title: 'WhatsApp QR Code Generator — QRHub',
    description:
      'Create a free WhatsApp QR code that opens a chat with your phone number and optional message.',
  },
  '/email': {
    title: 'Email QR Code Generator — QRHub',
    description:
      'Create a free email QR code that opens a prefilled email draft with recipient, subject and message.',
  },
  '/vcard': {
    title: 'vCard QR Code Generator — QRHub',
    description:
      'Create a free vCard QR code to share contact details that can be saved directly on a phone.',
  },
  '/phone': {
    title: 'Phone QR Code Generator — QRHub',
    description: 'Create a free phone QR code that opens the dialer with your phone number.',
  },
  '/sms': {
    title: 'SMS QR Code Generator — QRHub',
    description: 'Create a free SMS QR code that opens a prefilled text message.',
  },
  '/text': {
    title: 'Text QR Code Generator — QRHub',
    description: 'Create a free text QR code for notes, instructions, codes or plain text.',
  },
  '/maps': {
    title: 'Maps QR Code Generator — QRHub',
    description:
      'Create a free maps QR code for locations, addresses, coordinates or Google Maps links.',
  },
}

export function getPageMeta(pathname: string): PageMeta {
  if (pathname.startsWith('/templates/')) {
    return {
      title: 'Template Builder — QRHub',
      description:
        'Customize a QR code template, connect QR data and download a branded QR design.',
    }
  }

  return (
    pageMetaByPath[pathname] ?? {
      title: 'Page Not Found — QRHub',
      description:
        'The page you are looking for does not exist. Browse QR types and create a free QR code on QRHub.',
    }
  )
}
