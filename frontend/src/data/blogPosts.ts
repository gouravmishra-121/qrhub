export type BlogPostId =
  'how-to-create-upi-qr-code-for-shop' | 'how-to-make-whatsapp-qr-code-for-business'

export type BlogPost = {
  id: BlogPostId
  slug: string
  path: string
  title: string
  metaTitle: string
  metaDescription: string
  excerpt: string
  publishedDate: string
  updatedDate: string
  readingTime: string
  primaryCta: {
    label: string
    href: string
  }
  secondaryLinks: {
    label: string
    href: string
  }[]
  sections: {
    title: string
    content: string[]
  }[]
  faqs: {
    question: string
    answer: string
  }[]
}

export const blogPosts: BlogPost[] = [
  {
    id: 'how-to-create-upi-qr-code-for-shop',
    slug: 'how-to-create-upi-qr-code-for-shop',
    path: '/blog/how-to-create-upi-qr-code-for-shop',
    title: 'How to Create a UPI QR Code for Your Shop',
    metaTitle: 'How to Create a UPI QR Code for Your Shop | QRPrintly',
    metaDescription:
      'Learn how to create a UPI QR code for your shop, stall, counter or small business. Generate, test, download and print your payment QR code.',
    excerpt:
      'A practical guide for shop owners, stalls, freelancers and small businesses who want to create and print a UPI payment QR code.',
    publishedDate: '2026-07-07',
    updatedDate: '2026-07-07',
    readingTime: '4 min read',
    primaryCta: {
      label: 'Create Free UPI QR Code',
      href: '/upi',
    },
    secondaryLinks: [
      {
        label: 'UPI QR Code Generator for Shops',
        href: '/upi-qr-code-generator-for-shops',
      },
      {
        label: 'UPI Payment Templates',
        href: '/templates/upi-payment',
      },
      {
        label: 'WhatsApp QR Code Generator',
        href: '/whatsapp',
      },
    ],
    sections: [
      {
        title: 'Why shops use UPI QR codes',
        content: [
          'UPI QR codes make payments easier for customers because they do not need to type a UPI ID manually. They can scan the code, confirm the payee name, enter the amount if needed and complete the payment from their UPI app.',
          'For shops, stalls, freelancers and local businesses, a printed UPI QR code can be placed near the billing counter, on a payment board, inside packaging, on invoices or on a table card.',
        ],
      },
      {
        title: 'What you need before creating the QR code',
        content: [
          'Before creating your UPI QR code, keep your UPI ID and payee name ready. If every customer pays a different amount, keep the amount field empty. If you are collecting a fixed payment, you can add an amount.',
          'Use a clear payee name so customers can confirm they are paying the right person or business before completing the payment.',
        ],
      },
      {
        title: 'How to create your shop UPI QR code',
        content: [
          'Open the UPI QR code generator, enter your UPI ID, add the payee name and preview the QR code. You can optionally add an amount or note.',
          'After generating the QR code, download it as PNG or SVG. PNG is easy to use for quick printing and sharing. SVG is useful when you need a scalable design for larger print material.',
        ],
      },
      {
        title: 'Tips before printing',
        content: [
          'Always scan the QR code once using a UPI app before printing it publicly. Confirm that the payee name, UPI ID and amount behavior are correct.',
          'When printing, keep enough white space around the QR code and avoid placing it too close to other design elements. A clean payment board or template makes the QR code easier to scan.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I create a UPI QR code for my shop for free?',
        answer:
          'Yes. You can create and download a UPI QR code for your shop for free using QRPrintly.',
      },
      {
        question: 'Should I add a fixed amount to my UPI QR code?',
        answer:
          'Only add a fixed amount if every customer needs to pay the same value. For most shops, keeping the amount empty is better.',
      },
      {
        question: 'Can I print the UPI QR code?',
        answer:
          'Yes. You can download the QR code and print it for counters, stalls, invoices, payment boards or packaging.',
      },
      {
        question: 'Does QRPrintly store my UPI ID?',
        answer:
          'No. QRPrintly generates the UPI QR code in your browser and does not store your UPI ID or payment details.',
      },
    ],
  },
  {
    id: 'how-to-make-whatsapp-qr-code-for-business',
    slug: 'how-to-make-whatsapp-qr-code-for-business',
    path: '/blog/how-to-make-whatsapp-qr-code-for-business',
    title: 'How to Make a WhatsApp QR Code for Business',
    metaTitle: 'How to Make a WhatsApp QR Code for Business | QRPrintly',
    metaDescription:
      'Learn how to create a WhatsApp QR code for your business, shop, customer inquiries, bookings, orders and support. Add a message and download PNG or SVG.',
    excerpt:
      'A simple guide for businesses that want customers to scan a QR code and start a WhatsApp chat instantly.',
    publishedDate: '2026-07-07',
    updatedDate: '2026-07-07',
    readingTime: '4 min read',
    primaryCta: {
      label: 'Create WhatsApp QR Code',
      href: '/whatsapp',
    },
    secondaryLinks: [
      {
        label: 'WhatsApp QR Code for Business',
        href: '/whatsapp-qr-code-for-business',
      },
      {
        label: 'WhatsApp QR Templates',
        href: '/templates/whatsapp',
      },
      {
        label: 'vCard QR Code Generator',
        href: '/vcard',
      },
    ],
    sections: [
      {
        title: 'Why businesses use WhatsApp QR codes',
        content: [
          'A WhatsApp QR code lets customers start a chat without typing or saving your phone number. This is useful for customer inquiries, bookings, product questions, service requests, support and order conversations.',
          'Businesses can place the QR code on posters, packaging, business cards, menus, bills, reception desks, social media profiles or shop counters.',
        ],
      },
      {
        title: 'What to include in your WhatsApp QR code',
        content: [
          'Use your WhatsApp number with the country code. This helps the link work correctly for people scanning from different locations.',
          'You can also add a short pre-filled message such as “Hi, I want to know more” or “Hi, I want to place an order.” Keep the message simple so customers can send or edit it easily.',
        ],
      },
      {
        title: 'How to create the QR code',
        content: [
          'Open the WhatsApp QR code generator, enter your WhatsApp number with country code, add an optional message and preview the QR code.',
          'Download the QR code as PNG or SVG. Use PNG for quick sharing and printing. Use SVG when you need a scalable QR code for larger designs.',
        ],
      },
      {
        title: 'Where to place it',
        content: [
          'For shops and service businesses, place the QR code where customers naturally look: counter displays, posters, packaging, receipts or business cards.',
          'If you want a cleaner design, connect the QR code to a WhatsApp template and add a clear call-to-action such as “Scan to chat with us.”',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I use a WhatsApp QR code for business?',
        answer:
          'Yes. You can use it for inquiries, bookings, support, orders, product questions and general business communication.',
      },
      {
        question: 'Do I need to include the country code?',
        answer:
          'Yes. Enter your WhatsApp number with the country code so the QR code works correctly.',
      },
      {
        question: 'Can I add a pre-filled message?',
        answer:
          'Yes. You can add an optional message that opens automatically when someone scans the QR code.',
      },
      {
        question: 'Does QRPrintly store my WhatsApp number?',
        answer:
          'No. QRPrintly generates the WhatsApp QR code in your browser and does not store your phone number or message.',
      },
    ],
  },
]

export const blogPostsBySlug = blogPosts.reduce(
  (accumulator, post) => {
    accumulator[post.slug] = post
    return accumulator
  },
  {} as Record<string, BlogPost>
)

export const blogPostsByPath = blogPosts.reduce(
  (accumulator, post) => {
    accumulator[post.path] = post
    return accumulator
  },
  {} as Record<string, BlogPost>
)
