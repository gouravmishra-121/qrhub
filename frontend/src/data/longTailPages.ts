export type LongTailPageId = 'upi-shops' | 'whatsapp-business' | 'wifi-cafe' | 'restaurant-menu'

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
        label: 'Best QR Code Size for Printing',
        href: '/blog/best-qr-code-size-for-printing',
        description:
          'Learn how large your QR code should be for counters, posters, boards and printed material.',
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
        label: 'Best QR Code Size for Printing',
        href: '/blog/best-qr-code-size-for-printing',
        description:
          'Choose the right QR size before printing on cards, posters, packaging or counters.',
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
  {
    id: 'wifi-cafe',
    path: '/wifi-qr-code-for-cafe',
    eyebrow: 'WiFi QR for cafes',
    title: 'WiFi QR Code for Cafe',
    metaTitle: 'WiFi QR Code for Cafe | QRPrintly',
    metaDescription:
      'Create a free WiFi QR code for your cafe, restaurant, hotel, office or guest network. Let guests connect without typing the password.',
    intro:
      'Create a WiFi QR code for your cafe, restaurant, hotel, office, or guest area so visitors can connect without typing the password manually. QRPrintly helps you generate a scannable WiFi QR code and download it as PNG or SVG.',
    primaryCta: {
      label: 'Create Free WiFi QR Code',
      href: '/wifi',
    },
    secondaryCta: {
      label: 'View WiFi QR templates',
      href: '/templates/wifi',
    },
    sections: [
      {
        title: 'Share cafe WiFi without repeating the password',
        content:
          'A WiFi QR code makes it easier for customers to connect to your guest network. Instead of writing the password on a board or telling every visitor manually, you can place a QR code on tables, counters, menus, receipts, or reception desks.',
      },
      {
        title: 'Where to use a WiFi QR code',
        content:
          'WiFi QR codes are useful for cafes, restaurants, hotels, offices, coworking spaces, guest rooms, meeting rooms, salons, clinics, and reception areas. A printed WiFi QR card can improve the guest experience and reduce repeated password questions.',
      },
      {
        title: 'Use a separate guest WiFi network',
        content:
          'For cafes and public places, it is better to use a separate guest WiFi network instead of your private internal network. Share the QR code only with people you want to give network access to.',
      },
    ],
    steps: [
      'Open the free WiFi QR code generator.',
      'Enter your WiFi network name.',
      'Choose the security type.',
      'Enter the WiFi password if required.',
      'Preview the QR code.',
      'Download it as PNG or SVG and print it for your cafe or guest area.',
    ],
    tips: [
      'Use a separate guest WiFi network for customers.',
      'Place the QR code where visitors can easily scan it.',
      'Avoid printing the QR too small on table cards.',
      'Test the QR code with both Android and iPhone before printing many copies.',
      'Update the QR code if you change your WiFi password.',
    ],
    relatedLinks: [
      {
        label: 'Free WiFi QR Code Generator',
        href: '/wifi',
        description: 'Create a WiFi QR code for guests and visitors.',
      },
      {
        label: 'WiFi QR Templates',
        href: '/templates/wifi',
        description: 'Create a printable WiFi QR card for tables or counters.',
      },
      {
        label: 'How to Create a WiFi QR Code for Your Cafe',
        href: '/blog/how-to-create-wifi-qr-code-for-cafe',
        description:
          'A practical step-by-step guide for creating and printing a WiFi QR code for cafes.',
      },
      {
        label: 'Best QR Code Size for Printing',
        href: '/blog/best-qr-code-size-for-printing',
        description: 'Learn QR code size tips for table cards, posters, menus and WiFi signs.',
      },
      {
        label: 'Restaurant Menu QR Code Generator',
        href: '/restaurant-menu-qr-code-generator',
        description: 'Create a QR code for your digital restaurant menu.',
      },
    ],
    faqs: [
      {
        question: 'Can I create a WiFi QR code for my cafe?',
        answer:
          'Yes. You can create a WiFi QR code for your cafe, restaurant, hotel, office, or guest network for free.',
      },
      {
        question: 'Does the WiFi QR code include my password?',
        answer:
          'Yes. The QR code contains the WiFi details needed to connect. Share it only with people you want to give access to.',
      },
      {
        question: 'Should I use a guest WiFi network?',
        answer:
          'Yes. For cafes, restaurants, hotels, and offices, a separate guest WiFi network is safer than sharing your private internal network.',
      },
      {
        question: 'Does QRPrintly store my WiFi password?',
        answer:
          'No. The WiFi QR code is generated in your browser. QRPrintly does not store your network name or password.',
      },
    ],
  },
  {
    id: 'restaurant-menu',
    path: '/restaurant-menu-qr-code-generator',
    eyebrow: 'Restaurant menu QR',
    title: 'Restaurant Menu QR Code Generator',
    metaTitle: 'Restaurant Menu QR Code Generator | QRPrintly',
    metaDescription:
      'Create a free QR code for your restaurant menu, cafe menu, food stall menu or cloud kitchen menu. Download PNG or use printable QR templates.',
    intro:
      'Create a QR code for your restaurant menu, cafe menu, food stall menu, or cloud kitchen menu. Add your online menu link, generate a QR code, and use it on table cards, posters, counters, receipts, or packaging.',
    primaryCta: {
      label: 'Create Menu QR Code',
      href: '/website',
    },
    secondaryCta: {
      label: 'View restaurant menu templates',
      href: '/templates/restaurant-menu',
    },
    sections: [
      {
        title: 'Create a QR code for your restaurant menu',
        content:
          'A menu QR code lets customers scan and open your digital menu on their phone. You can link to a website menu, PDF menu, Google Drive menu, ordering page, or any public menu URL. This is useful for restaurants, cafes, food stalls, cloud kitchens, bakeries, bars, and hotels.',
      },
      {
        title: 'Where restaurants can use menu QR codes',
        content:
          'You can place menu QR codes on table cards, counter displays, takeaway packaging, posters, receipts, hotel rooms, food trucks, and social media profiles. A clean printed QR template can make the menu easier to access and reduce the need for printed menu copies.',
      },
      {
        title: 'Keep your menu link updated',
        content:
          'The QR code opens the menu link you provide. If prices or dishes change often, use a menu URL that you can update without changing the QR code, such as a website page or editable online menu link.',
      },
    ],
    steps: [
      'Create or upload your digital menu online.',
      'Copy the public menu link.',
      'Open the website QR code generator.',
      'Paste the menu URL and preview the QR code.',
      'Download the QR code as PNG or SVG.',
      'Use a restaurant menu template for table cards, posters, or counters.',
    ],
    tips: [
      'Use a public menu link that opens without login.',
      'Test the QR code on mobile before printing.',
      'Keep the QR code large enough for table scanning.',
      'Use a short call-to-action like “Scan to view menu”.',
      'Use templates for table cards and counter displays.',
    ],
    relatedLinks: [
      {
        label: 'Website QR Code Generator',
        href: '/website',
        description: 'Turn your restaurant menu link into a QR code.',
      },
      {
        label: 'Restaurant Menu Templates',
        href: '/templates/restaurant-menu',
        description: 'Create printable menu QR layouts for tables and counters.',
      },
      {
        label: 'WiFi QR Code for Cafe',
        href: '/wifi-qr-code-for-cafe',
        description: 'Create a guest WiFi QR code for your cafe or restaurant.',
      },
      {
        label: 'Best QR Code Size for Printing',
        href: '/blog/best-qr-code-size-for-printing',
        description:
          'Learn how large your menu QR code should be for table cards, posters and counter displays.',
      },
    ],
    faqs: [
      {
        question: 'Can I create a QR code for my restaurant menu?',
        answer:
          'Yes. You can create a QR code for any public restaurant menu link, website menu, PDF menu, or ordering page.',
      },
      {
        question: 'Can I use this for a cafe or food stall menu?',
        answer:
          'Yes. Menu QR codes are useful for cafes, food stalls, cloud kitchens, bakeries, restaurants, bars, and hotels.',
      },
      {
        question: 'Can I update my menu later?',
        answer:
          'The QR code opens the link you provide. If you use an editable website or online menu link, you can update the menu without changing the QR code.',
      },
      {
        question: 'Does QRPrintly store my menu link?',
        answer:
          'No. The QR code is generated in your browser. QRPrintly does not store the menu link you enter.',
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
