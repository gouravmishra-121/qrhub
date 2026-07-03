export const generatorSeoContent = {
  upi: {
    title: 'Free UPI QR Code Generator',
    description:
      'Create a UPI payment QR code for Indian payment apps. Add your UPI ID, payee name, optional amount and note, then download the QR as PNG or SVG.',
    useCases: [
      'Accept payments at shops, stalls and small businesses.',
      'Create a payment QR for freelancers and service providers.',
      'Print a UPI QR code for counters, invoices or packaging.',
      'Generate a QR with optional fixed amount and payment note.',
    ],
    faqs: [
      {
        question: 'Is this UPI QR code free?',
        answer: 'Yes. You can create and download a basic UPI QR code for free without signup.',
      },
      {
        question: 'Can I add a fixed amount?',
        answer:
          'Yes. Amount is optional. If you add it, supported UPI apps can open the payment flow with that amount.',
      },
      {
        question: 'Should I test the QR before printing?',
        answer:
          'Yes. Always scan and test your UPI QR code with a payment app before printing or sharing it publicly.',
      },
    ],
    relatedLinks: [
      { label: 'Website QR', href: '/website' },
      { label: 'WhatsApp QR', href: '/whatsapp' },
      { label: 'Business Templates', href: '/templates' },
    ],
  },
  whatsapp: {
    title: 'Free WhatsApp QR Code Generator',
    description:
      'Create a WhatsApp QR code that opens a chat with your phone number and optional prefilled message. Useful for shops, support, sales and personal contact sharing.',
    useCases: [
      'Let customers start a WhatsApp chat with one scan.',
      'Create sales, support or inquiry QR codes.',
      'Add a prefilled message for faster customer communication.',
      'Use WhatsApp QR codes on posters, packaging, cards and websites.',
    ],
    faqs: [
      {
        question: 'Does WhatsApp QR open a chat directly?',
        answer: 'Yes. The QR code opens a WhatsApp chat link for the phone number you enter.',
      },
      {
        question: 'Can I add a default message?',
        answer: 'Yes. You can add an optional message that appears prefilled when the chat opens.',
      },
      {
        question: 'Do users need WhatsApp installed?',
        answer:
          'For the best experience, users should have WhatsApp installed or use WhatsApp Web on desktop.',
      },
    ],
    relatedLinks: [
      { label: 'UPI QR', href: '/upi' },
      { label: 'vCard QR', href: '/vcard' },
      { label: 'Website QR', href: '/website' },
    ],
  },
  website: {
    title: 'Free Website QR Code Generator',
    description:
      'Create a website QR code for any valid URL. Add your website link, generate the QR code instantly, and download it as PNG or SVG.',
    useCases: [
      'Share business websites, landing pages and portfolios.',
      'Add website QR codes to posters, flyers and product packaging.',
      'Create QR codes for menus, forms, payment pages or event pages.',
      'Help users open your website quickly without typing the URL.',
    ],
    faqs: [
      {
        question: 'Can I create a QR code for any website?',
        answer:
          'Yes. Enter a full website URL starting with http:// or https:// and QRHub will generate a QR code for it.',
      },
      {
        question: 'Why do I need to enter https://?',
        answer:
          'Using a complete URL avoids mistakes and makes sure the QR code opens the exact website you entered.',
      },
      {
        question: 'Can I download the website QR code?',
        answer: 'Yes. You can download your website QR code as PNG or SVG after generating it.',
      },
    ],
    relatedLinks: [
      { label: 'WhatsApp QR', href: '/whatsapp' },
      { label: 'UPI QR', href: '/upi' },
      { label: 'Maps QR', href: '/maps' },
    ],
  },
  wifi: {
    title: 'Free WiFi QR Code Generator',
    description:
      'Create a WiFi QR code so guests can connect to your network without typing the password. Useful for homes, cafes, hotels, offices and guest areas.',
    useCases: [
      'Share guest WiFi at home without repeating the password.',
      'Create WiFi QR codes for cafes, hotels and restaurants.',
      'Add WiFi QR cards in offices, reception areas and meeting rooms.',
      'Help customers connect quickly by scanning a QR code.',
    ],
    faqs: [
      {
        question: 'Does a WiFi QR code share my password?',
        answer:
          'The QR code contains the WiFi network details needed to connect. Share it only with people you want to give access to.',
      },
      {
        question: 'Can phones connect automatically after scanning?',
        answer:
          'Most modern phones can detect WiFi QR codes and show an option to connect to the network.',
      },
      {
        question: 'Should I print my WiFi QR code?',
        answer:
          'Yes. You can print it for guests, cafes, hotels or offices, but test it once before sharing publicly.',
      },
    ],
    relatedLinks: [
      { label: 'Website QR', href: '/website' },
      { label: 'WhatsApp QR', href: '/whatsapp' },
      { label: 'Text QR', href: '/text' },
    ],
  },
}
