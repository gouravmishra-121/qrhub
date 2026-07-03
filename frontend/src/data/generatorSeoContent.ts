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
}
