export const generatorSeoContent = {
  upi: {
    title: 'Free UPI QR Code Generator',
    description:
      'Create a UPI payment QR code online for shops, stalls, freelancers, small businesses, and payment counters. Enter your UPI ID, preview the QR code instantly, and download it as PNG or SVG without signing up.',
    useCases: [
      'Accept payments at shops, stalls and small businesses.',
      'Create a payment QR for freelancers and service providers.',
      'Print a UPI QR code for shop counters, stalls, invoices, delivery payments, packaging, events, or small business payment boards.',
      'Generate a QR with optional fixed amount and payment note.',
    ],
    faqs: [
      {
        question: 'Is this UPI QR code generator free?',
        answer: 'Yes. You can create and download a UPI QR code for free without signing up.',
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
      {
        question: 'Does QRPrintly store my UPI ID?',
        answer:
          'No. Your UPI QR code is generated in your browser. QRPrintly does not store your UPI ID or payment details.',
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
          'Yes. Enter a full website URL starting with http:// or https:// and QRPrintly will generate a QR code for it.',
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
  email: {
    title: 'Free Email QR Code Generator',
    description:
      'Create an email QR code that opens a prefilled email draft with recipient, subject and message. Useful for support, feedback, business inquiries and contact forms.',
    useCases: [
      'Let customers email support with one scan.',
      'Create feedback or inquiry QR codes for posters and packaging.',
      'Prefill recipient, subject and message for faster communication.',
      'Use email QR codes on business cards, flyers and service counters.',
    ],
    faqs: [
      {
        question: 'What does an email QR code do?',
        answer:
          'An email QR code opens the email app with recipient, subject and message fields filled based on what you enter.',
      },
      {
        question: 'Can I create an email QR without a message?',
        answer: 'Yes. You can use only the recipient email, or add subject and message if needed.',
      },
      {
        question: 'Will it work on every phone?',
        answer:
          'Most phones and QR scanners support email QR links, but the exact behavior depends on the user’s email app.',
      },
    ],
    relatedLinks: [
      { label: 'WhatsApp QR', href: '/whatsapp' },
      { label: 'vCard QR', href: '/vcard' },
      { label: 'Website QR', href: '/website' },
    ],
  },
  vcard: {
    title: 'Free vCard QR Code Generator',
    description:
      'Create a vCard QR code to share contact details like name, phone, email, company and website. People can scan and save your contact quickly.',
    useCases: [
      'Share contact details on business cards.',
      'Create scannable contact cards for sales and networking.',
      'Add phone, email, company and website details in one QR code.',
      'Help people save your contact without typing manually.',
    ],
    faqs: [
      {
        question: 'What happens when someone scans a vCard QR code?',
        answer:
          'Most phones show an option to preview and save the contact details from the vCard QR code.',
      },
      {
        question: 'Does vCard QR open a website?',
        answer:
          'No. A vCard QR stores contact details directly in the QR code. Some scanners may show raw vCard text if they do not support contact previews.',
      },
      {
        question: 'Can I use vCard QR on a printed business card?',
        answer:
          'Yes. vCard QR codes are useful for printed business cards, networking cards and contact-sharing material.',
      },
    ],
    relatedLinks: [
      { label: 'Email QR', href: '/email' },
      { label: 'Phone QR', href: '/phone' },
      { label: 'Website QR', href: '/website' },
    ],
  },
  phone: {
    title: 'Free Phone QR Code Generator',
    description:
      'Create a phone QR code that opens the dialer with your phone number. Useful for business cards, service counters, posters and customer support.',
    useCases: [
      'Let customers call your business with one scan.',
      'Add phone QR codes to business cards, flyers and posters.',
      'Create quick-call QR codes for support, sales or service teams.',
      'Share a phone number without asking users to type it manually.',
    ],
    faqs: [
      {
        question: 'What does a phone QR code do?',
        answer:
          'A phone QR code opens the phone dialer with the number you enter, so the user can call quickly.',
      },
      {
        question: 'Does it call automatically?',
        answer: 'No. Most phones open the dialer first. The user still needs to confirm the call.',
      },
      {
        question: 'Can I use this on printed material?',
        answer:
          'Yes. Phone QR codes are useful on business cards, posters, packaging and support material.',
      },
    ],
    relatedLinks: [
      { label: 'vCard QR', href: '/vcard' },
      { label: 'WhatsApp QR', href: '/whatsapp' },
      { label: 'SMS QR', href: '/sms' },
    ],
  },
  sms: {
    title: 'Free SMS QR Code Generator',
    description:
      'Create an SMS QR code that opens a prefilled text message. Add a phone number and optional message so users can send SMS faster.',
    useCases: [
      'Create support or inquiry SMS QR codes.',
      'Let users send a prefilled message with one scan.',
      'Use SMS QR codes on posters, flyers, counters and local campaigns.',
      'Share phone number and message together without manual typing.',
    ],
    faqs: [
      {
        question: 'What does an SMS QR code do?',
        answer:
          'An SMS QR code opens the messaging app with the phone number and optional message filled in.',
      },
      {
        question: 'Can I add a default message?',
        answer: 'Yes. You can add an optional message that appears inside the SMS draft.',
      },
      {
        question: 'Will the SMS send automatically?',
        answer: 'No. The user must review and send the SMS manually from their messaging app.',
      },
    ],
    relatedLinks: [
      { label: 'Phone QR', href: '/phone' },
      { label: 'WhatsApp QR', href: '/whatsapp' },
      { label: 'vCard QR', href: '/vcard' },
    ],
  },
  text: {
    title: 'Free Text QR Code Generator',
    description:
      'Create a plain text QR code for notes, instructions, codes, messages or any short text. The text is stored directly inside the QR code.',
    useCases: [
      'Share short notes or instructions without a link.',
      'Create QR codes for codes, labels, IDs or simple messages.',
      'Use text QR codes for classrooms, events, packaging or internal notes.',
      'Store plain text directly inside the QR code without needing a website.',
    ],
    faqs: [
      {
        question: 'What does a text QR code do?',
        answer:
          'A text QR code stores plain text directly inside the QR code. When scanned, the scanner shows the text.',
      },
      {
        question: 'Do I need a website for a text QR code?',
        answer:
          'No. Text QR codes do not need a website because the text is stored inside the QR code itself.',
      },
      {
        question: 'Can I add long text?',
        answer:
          'You can add text, but very long text makes the QR code more complex. Short and clear text scans better.',
      },
    ],
    relatedLinks: [
      { label: 'Website QR', href: '/website' },
      { label: 'SMS QR', href: '/sms' },
      { label: 'Email QR', href: '/email' },
    ],
  },
  maps: {
    title: 'Free Maps QR Code Generator',
    description:
      'Create a maps QR code for addresses, locations, coordinates or Google Maps links. Help people open directions quickly by scanning a QR code.',
    useCases: [
      'Share shop, office or event location with one scan.',
      'Add location QR codes to invitations, posters and business cards.',
      'Create QR codes for Google Maps links or address searches.',
      'Help customers open directions without typing the address manually.',
    ],
    faqs: [
      {
        question: 'What can I add to a maps QR code?',
        answer:
          'You can add an address, place name, coordinates or a Google Maps link depending on what you want people to open.',
      },
      {
        question: 'Will it open Google Maps?',
        answer:
          'The QR code opens a maps search or maps link. On most phones, it can open in Google Maps or the default maps app.',
      },
      {
        question: 'Should I test the location before sharing?',
        answer:
          'Yes. Always scan and test the maps QR code to make sure it opens the correct location.',
      },
    ],
    relatedLinks: [
      { label: 'Website QR', href: '/website' },
      { label: 'vCard QR', href: '/vcard' },
      { label: 'Text QR', href: '/text' },
    ],
  },
}
