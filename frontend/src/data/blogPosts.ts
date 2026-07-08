export type BlogPostId =
  | 'how-to-create-upi-qr-code-for-shop'
  | 'how-to-make-whatsapp-qr-code-for-business'
  | 'how-to-create-wifi-qr-code-for-cafe'
  | 'best-qr-code-size-for-printing'

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
  {
    id: 'how-to-create-wifi-qr-code-for-cafe',
    slug: 'how-to-create-wifi-qr-code-for-cafe',
    path: '/blog/how-to-create-wifi-qr-code-for-cafe',
    title: 'How to Create a WiFi QR Code for Your Cafe',
    metaTitle: 'How to Create a WiFi QR Code for Cafe | QRPrintly',
    metaDescription:
      'Learn how to create a WiFi QR code for your cafe, restaurant, hotel or guest network. Let customers connect without typing the password.',
    excerpt:
      'A practical guide for cafes, restaurants and small businesses that want guests to connect to WiFi by scanning a QR code.',
    publishedDate: '2026-07-08',
    updatedDate: '2026-07-08',
    readingTime: '4 min read',
    primaryCta: {
      label: 'Create Free WiFi QR Code',
      href: '/wifi',
    },
    secondaryLinks: [
      {
        label: 'WiFi QR Code for Cafe',
        href: '/wifi-qr-code-for-cafe',
      },
      {
        label: 'WiFi QR Template',
        href: '/templates/wifi',
      },
      {
        label: 'Restaurant Menu QR Code Generator',
        href: '/restaurant-menu-qr-code-generator',
      },
    ],
    sections: [
      {
        title: 'Why cafes use WiFi QR codes',
        content: [
          'A WiFi QR code lets customers connect to your guest network without asking staff for the password or typing it manually. This is useful for cafes, restaurants, hotels, reception areas, coworking spaces and guest rooms.',
          'You can place the QR code on table cards, wall posters, menu cards, billing counters, room cards or reception desks so guests can scan and connect quickly.',
        ],
      },
      {
        title: 'What you need before creating it',
        content: [
          'Keep your WiFi network name, password and security type ready. Most modern networks use WPA or WPA2, so choose the correct security option while creating the QR code.',
          'Use a guest WiFi network whenever possible. Avoid sharing your main private network with customers or visitors.',
        ],
      },
      {
        title: 'How to create the WiFi QR code',
        content: [
          'Open the WiFi QR code generator, enter your network name, choose the security type, add the password and preview the QR code.',
          'After the preview appears, download the QR code as PNG or SVG. PNG works well for quick printing. SVG is better when you want to use the QR code in a larger design or printable template.',
        ],
      },
      {
        title: 'Printing and placement tips',
        content: [
          'Test the QR code on both Android and iPhone before printing it. Confirm that the phone detects the WiFi network correctly and asks to join the network.',
          'Keep the QR code large enough, use strong contrast and place it where customers can scan easily. A table card or small counter stand usually works better than a tiny sticker hidden near the billing area.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I create a WiFi QR code for my cafe for free?',
        answer:
          'Yes. You can create and download a WiFi QR code for your cafe for free using QRPrintly.',
      },
      {
        question: 'Does a WiFi QR code include the password?',
        answer:
          'Yes. The QR code contains the WiFi details needed to connect. Share it only with people who should have access to your network.',
      },
      {
        question: 'Should I use a guest WiFi network?',
        answer:
          'Yes. For cafes, restaurants, hotels and offices, a separate guest network is safer than sharing your main private network.',
      },
      {
        question: 'Does QRPrintly store my WiFi password?',
        answer:
          'No. QRPrintly generates the WiFi QR code in your browser and does not store your network name or password.',
      },
    ],
  },
  {
    id: 'best-qr-code-size-for-printing',
    slug: 'best-qr-code-size-for-printing',
    path: '/blog/best-qr-code-size-for-printing',
    title: 'Best QR Code Size for Printing',
    metaTitle: 'Best QR Code Size for Printing | QRPrintly',
    metaDescription:
      'Learn the best QR code size for printing on business cards, posters, menus, table cards, stickers and shop boards. Get practical QR printing tips.',
    excerpt:
      'A simple guide to choosing QR code size for printing on business cards, menus, posters, stickers, table cards and shop boards.',
    publishedDate: '2026-07-08',
    updatedDate: '2026-07-08',
    readingTime: '5 min read',
    primaryCta: {
      label: 'Create Free QR Code',
      href: '/qr-types',
    },
    secondaryLinks: [
      {
        label: 'Browse QR Templates',
        href: '/templates',
      },
      {
        label: 'UPI QR Code Generator',
        href: '/upi',
      },
      {
        label: 'Website QR Code Generator',
        href: '/website',
      },
    ],
    sections: [
      {
        title: 'Why QR code size matters',
        content: [
          'A QR code may look correct on screen but still fail when printed too small, blurred, stretched or placed without enough white space around it.',
          'The best QR code size depends on how far people will scan it from. A QR code on a business card can be smaller, while a QR code on a shop board, wall poster or standee should be much larger.',
        ],
      },
      {
        title: 'Simple size guide for common print use',
        content: [
          'For business cards, keep the QR code around 2 to 2.5 cm wide if the design has enough contrast. For table cards, invoices and small flyers, 3 to 4 cm is safer.',
          'For posters, menu boards, shop counters and payment boards, use a larger QR code so customers can scan comfortably without moving too close.',
        ],
      },
      {
        title: 'PNG vs SVG for printing',
        content: [
          'PNG is easy to download and use quickly, but it can lose quality if stretched too much. For small prints and quick use, a high-resolution PNG usually works well.',
          'SVG is scalable, which means it can be used in larger designs without becoming blurry. Use SVG when working with design tools, print shops, large posters or brand templates.',
        ],
      },
      {
        title: 'Printing checklist before final use',
        content: [
          'Always test the QR code before printing in bulk. Scan it from the expected distance and test it on more than one phone.',
          'Keep strong contrast, avoid busy backgrounds, do not crop the QR code and leave enough quiet space around it. A clean QR code is better than an over-designed QR code that fails to scan.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the best QR code size for a business card?',
        answer:
          'For most business cards, around 2 to 2.5 cm wide is a practical minimum if the QR code has strong contrast and enough white space.',
      },
      {
        question: 'What is the best QR code size for a shop payment board?',
        answer:
          'Use a larger QR code for payment boards so customers can scan easily from a comfortable distance. Avoid tiny QR codes on counters or walls.',
      },
      {
        question: 'Should I download PNG or SVG for printing?',
        answer:
          'Use PNG for quick printing and sharing. Use SVG when you need scalable quality for large print designs, posters, boards or professional layouts.',
      },
      {
        question: 'Can QRPrintly create print-ready QR codes?',
        answer:
          'Yes. QRPrintly lets you create QR codes and download them as PNG or SVG. You can also use printable templates for common business use cases.',
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
