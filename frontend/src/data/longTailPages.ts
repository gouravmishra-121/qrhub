export type LongTailPageId = 'upi-shops' | 'whatsapp-business'

export type LongTailPage = {
  id: LongTailPageId
  path: string
  eyebrow: string
  title: string
  metaTitle: string
  metaDescription: string
  intro: string
  primaryCta: {
    label: string
    href: string
  }
  secondaryCta: {
    label: string
    href: string
  }
  sections: {
    title: string
    content: string
  }[]
  steps: string[]
  tips: string[]
  relatedLinks: {
    label: string
    href: string
    description: string
  }[]
  faqs: {
    question: string
    answer: string
  }[]
}

export const longTailPages: LongTailPage[] = [
  {
    id: 'upi-shops',
    path: '/upi-qr-code-generator-for-shops',
    eyebrow: 'UPI QR for shops',
    title: 'UPI QR Code Generator for Shops',
    metaTitle: 'UPI QR Code Generator for Shops | QRPrintly',
    metaDescription:
      'Create a free UPI QR code for your shop, stall, counter, invoice or small business payment board. Generate online and download PNG or SVG.',
    intro:
      'Create a UPI payment QR code for your shop counter, stall, invoice, delivery payment, or small business payment board. QRPrintly helps you generate a scannable UPI QR code online and download it as PNG or SVG without signing up.',
    primaryCta: {
      label: 'Create Free UPI QR Code',
      href: '/upi',
    },
    secondaryCta: {
      label: 'View UPI payment templates',
      href: '/templates/upi-payment',
    },
    sections: [
      {
        title: 'Create a UPI QR code for your shop counter',
        content:
          'A UPI QR code makes it easier for customers to pay without typing your UPI ID manually. You can place the QR code near the billing counter, on a payment board, on an invoice, or inside packaging. This is useful for small shops, street stalls, freelancers, home businesses, service providers, and local stores that accept UPI payments.',
      },
      {
        title: 'Where shop owners can use a UPI QR code',
        content:
          'You can use your UPI QR code on shop counters, food stalls, delivery parcels, invoices, printed payment boards, table cards, brochures, and digital messages. If you run a small business, one clean QR code can reduce payment friction and make the checkout experience faster for customers.',
      },
      {
        title: 'Privacy-first UPI QR creation',
        content:
          'QRPrintly creates the UPI QR code in your browser. Your UPI ID, payee name, amount, and note are not stored by QRPrintly. You should still test the QR code once with a UPI app before printing it publicly.',
      },
    ],
    steps: [
      'Open the free UPI QR code generator.',
      'Enter your UPI ID and payee name.',
      'Add an optional amount or payment note if needed.',
      'Preview the QR code and check that it scans correctly.',
      'Download the QR code as PNG or SVG.',
      'Print it for your shop counter, invoice, stall, or payment board.',
    ],
    tips: [
      'Use a clear payee name so customers can confirm they are paying the right business.',
      'Do not add a fixed amount if customers usually pay different amounts.',
      'Print the QR code large enough to scan from a comfortable distance.',
      'Keep enough white space around the QR code when placing it on a board or poster.',
      'Test the printed QR code once before using it with customers.',
    ],
    relatedLinks: [
      {
        label: 'Free UPI QR Code Generator',
        href: '/upi',
        description: 'Create and download your UPI payment QR code.',
      },
      {
        label: 'UPI Payment Templates',
        href: '/templates/upi-payment',
        description: 'Create a printable payment board design for your shop.',
      },
      {
        label: 'WhatsApp QR Code Generator',
        href: '/whatsapp',
        description: 'Let customers scan and start a WhatsApp chat.',
      },
    ],
    faqs: [
      {
        question: 'Can I create a UPI QR code for my shop for free?',
        answer:
          'Yes. You can create and download a UPI QR code for your shop for free using QRPrintly.',
      },
      {
        question: 'Can I print this UPI QR code for my payment counter?',
        answer:
          'Yes. You can download the QR code as PNG or SVG and print it for your shop counter, stall, invoice, or payment board.',
      },
      {
        question: 'Should I add a fixed amount to my shop UPI QR code?',
        answer:
          'Only add a fixed amount if every customer needs to pay the same amount. For most shops, keeping the amount empty is better.',
      },
      {
        question: 'Does QRPrintly store my UPI ID?',
        answer:
          'No. The UPI QR code is generated in your browser. QRPrintly does not store your UPI ID or payment details.',
      },
    ],
  },
  {
    id: 'whatsapp-business',
    path: '/whatsapp-qr-code-for-business',
    eyebrow: 'WhatsApp QR for business',
    title: 'WhatsApp QR Code for Business',
    metaTitle: 'WhatsApp QR Code for Business | QRPrintly',
    metaDescription:
      'Create a free WhatsApp QR code for your business, shop, customer support, bookings or inquiries. Add a message and download PNG or SVG.',
    intro:
      'Create a WhatsApp QR code that lets customers start a chat with your business instantly. Add your WhatsApp number, include an optional pre-filled message, and download a QR code you can use on posters, packaging, business cards, shop counters, menus, or social media.',
    primaryCta: {
      label: 'Create WhatsApp QR Code',
      href: '/whatsapp',
    },
    secondaryCta: {
      label: 'View WhatsApp templates',
      href: '/templates/whatsapp',
    },
    sections: [
      {
        title: 'Make it easier for customers to contact your business',
        content:
          'A WhatsApp QR code removes the need for customers to manually save or type your phone number. When someone scans the QR code, WhatsApp opens with your business number. You can also add a pre-filled message such as “Hi, I want to know more” or “Hi, I want to place an order.”',
      },
      {
        title: 'Where businesses can use WhatsApp QR codes',
        content:
          'WhatsApp QR codes are useful for shops, Instagram sellers, freelancers, consultants, restaurants, salons, clinics, service providers, events, and customer support teams. You can place the QR code on posters, bills, product packaging, menus, visiting cards, reception desks, or online profiles.',
      },
      {
        title: 'Privacy-first WhatsApp QR creation',
        content:
          'QRPrintly creates the WhatsApp QR code in your browser. Your phone number and message are not stored by QRPrintly. Always test the QR code on mobile before printing or sharing it publicly.',
      },
    ],
    steps: [
      'Open the WhatsApp QR code generator.',
      'Enter your WhatsApp number with country code.',
      'Add an optional pre-filled message.',
      'Preview the QR code.',
      'Download the QR code as PNG or SVG.',
      'Place it on your shop counter, poster, packaging, business card, or social profile.',
    ],
    tips: [
      'Always include your country code so the WhatsApp link works correctly.',
      'Keep the pre-filled message short and useful.',
      'Use a clear call-to-action such as “Scan to chat with us”.',
      'Test the QR code on mobile before printing.',
      'Use a template if you want a cleaner poster or business card design.',
    ],
    relatedLinks: [
      {
        label: 'WhatsApp QR Code Generator',
        href: '/whatsapp',
        description: 'Create a QR code that opens a WhatsApp chat.',
      },
      {
        label: 'vCard QR Code Generator',
        href: '/vcard',
        description: 'Share business contact details that users can save.',
      },
      {
        label: 'Website QR Code Generator',
        href: '/website',
        description: 'Link customers to your website, portfolio, menu, or page.',
      },
    ],
    faqs: [
      {
        question: 'Can I use a WhatsApp QR code for my business?',
        answer:
          'Yes. You can use a WhatsApp QR code for customer inquiries, bookings, orders, support, product questions, and business communication.',
      },
      {
        question: 'Can I add a pre-filled WhatsApp message?',
        answer:
          'Yes. You can add an optional message that opens automatically when someone scans the QR code.',
      },
      {
        question: 'Should I enter my country code?',
        answer:
          'Yes. Enter your WhatsApp number with the country code so the QR code works correctly for users in different locations.',
      },
      {
        question: 'Does QRPrintly store my WhatsApp number?',
        answer:
          'No. The WhatsApp QR code is generated in your browser. QRPrintly does not store your phone number or message.',
      },
    ],
  },
]

export const longTailPagesById = longTailPages.reduce(
  (accumulator, page) => {
    accumulator[page.id] = page
    return accumulator
  },
  {} as Record<LongTailPageId, LongTailPage>
)

export const longTailPagesByPath = longTailPages.reduce(
  (accumulator, page) => {
    accumulator[page.path] = page
    return accumulator
  },
  {} as Record<string, LongTailPage>
)
