import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const distDir = path.resolve(__dirname, '../dist')
const sourceIndexPath = path.join(distDir, 'index.html')
const siteUrl = 'https://qrprintly.com'
const ogImageUrl = `${siteUrl}/og-image.svg`

const routes = [
  {
    path: '/',
    title: 'Free QR Code Generator Online | QRPrintly',
    description:
      'Create free QR codes online for UPI, WhatsApp, WiFi, websites, vCards, email, SMS, phone, maps and text. No signup required. Download PNG or SVG instantly.',
    h1: 'Free QR Code Generator for UPI, WhatsApp, WiFi, Links and More',
    intro:
      'Create QR codes online for payments, websites, WhatsApp chats, WiFi access, business contacts, email, SMS, phone calls, maps, and plain text.',
    links: [
      { label: 'UPI QR Code Generator', href: '/upi' },
      { label: 'WhatsApp QR Code Generator', href: '/whatsapp' },
      { label: 'WiFi QR Code Generator', href: '/wifi' },
      { label: 'QR Code Templates', href: '/templates' },
    ],
    faqs: [
      {
        question: 'Is QRPrintly free to use?',
        answer: 'Yes. You can create and download QR codes for free without signing up.',
      },
      {
        question: 'What QR code types can I create?',
        answer:
          'You can create QR codes for websites, UPI, WiFi, WhatsApp, vCards, email, SMS, phone, maps and text.',
      },
    ],
  },
  {
    path: '/upi',
    title: 'Free UPI QR Code Generator | QRPrintly',
    description:
      'Create a free UPI QR code online for shops, stalls, freelancers and small businesses. No signup required. Download your UPI QR code as PNG or SVG.',
    h1: 'Free UPI QR Code Generator',
    intro:
      'Create a UPI payment QR code online for shops, stalls, freelancers, small businesses, and payment counters.',
    links: [
      { label: 'Create printable QR template', href: '/templates' },
      { label: 'WhatsApp QR Code Generator', href: '/whatsapp' },
      { label: 'Website QR Code Generator', href: '/website' },
    ],
    faqs: [
      {
        question: 'Is this UPI QR code generator free?',
        answer: 'Yes. You can create and download a UPI QR code for free without signing up.',
      },
      {
        question: 'Does QRPrintly store my UPI ID?',
        answer:
          'No. Your UPI QR code is generated in your browser. QRPrintly does not store your UPI ID or payment details.',
      },
    ],
  },
  {
    path: '/upi-qr-code-generator-for-shops',
    title: 'UPI QR Code Generator for Shops | QRPrintly',
    description:
      'Create a free UPI QR code for your shop, stall, counter, invoice or small business payment board. Generate online and download PNG or SVG.',
    h1: 'UPI QR Code Generator for Shops',
    intro:
      'Create a UPI payment QR code for your shop counter, stall, invoice, delivery payment, or small business payment board.',
    links: [
      { label: 'Create Free UPI QR Code', href: '/upi' },
      { label: 'UPI Payment Templates', href: '/templates/upi-payment' },
      { label: 'WhatsApp QR Code Generator', href: '/whatsapp' },
    ],
    faqs: [
      {
        question: 'Can I create a UPI QR code for my shop for free?',
        answer:
          'Yes. You can create and download a UPI QR code for your shop for free using QRPrintly.',
      },
      {
        question: 'Does QRPrintly store my UPI ID?',
        answer:
          'No. The UPI QR code is generated in your browser. QRPrintly does not store your UPI ID or payment details.',
      },
    ],
  },
  {
    path: '/whatsapp',
    title: 'WhatsApp QR Code Generator | QRPrintly',
    description:
      'Create a free WhatsApp QR code for direct chats. Add your WhatsApp number, optional message, and download the QR code as PNG or SVG. No signup required.',
    h1: 'WhatsApp QR Code Generator',
    intro:
      'Create a WhatsApp QR code that opens a chat directly when scanned. Useful for businesses, shops, customer support, bookings, and service providers.',
    links: [
      { label: 'vCard QR Code Generator', href: '/vcard' },
      { label: 'Website QR Code Generator', href: '/website' },
      { label: 'QR Code Templates', href: '/templates' },
    ],
    faqs: [
      {
        question: 'Can I add a pre-filled WhatsApp message?',
        answer:
          'Yes. You can add an optional message that opens automatically when someone scans the QR code.',
      },
      {
        question: 'Does QRPrintly store my WhatsApp number?',
        answer:
          'No. Your WhatsApp QR code is generated in your browser. QRPrintly does not store your phone number or message.',
      },
    ],
  },
  {
    path: '/whatsapp-qr-code-for-business',
    title: 'WhatsApp QR Code for Business | QRPrintly',
    description:
      'Create a free WhatsApp QR code for your business, shop, customer support, bookings or inquiries. Add a message and download PNG or SVG.',
    h1: 'WhatsApp QR Code for Business',
    intro:
      'Create a WhatsApp QR code that lets customers start a chat with your business instantly.',
    links: [
      { label: 'Create WhatsApp QR Code', href: '/whatsapp' },
      { label: 'WhatsApp Templates', href: '/templates/whatsapp' },
      { label: 'vCard QR Code Generator', href: '/vcard' },
    ],
    faqs: [
      {
        question: 'Can I use a WhatsApp QR code for my business?',
        answer:
          'Yes. You can use a WhatsApp QR code for customer inquiries, bookings, orders, support, product questions, and business communication.',
      },
      {
        question: 'Does QRPrintly store my WhatsApp number?',
        answer:
          'No. The WhatsApp QR code is generated in your browser. QRPrintly does not store your phone number or message.',
      },
    ],
  },
  {
    path: '/wifi',
    title: 'Free WiFi QR Code Generator | QRPrintly',
    description:
      'Create a free WiFi QR code so guests can connect without typing the password. Useful for homes, cafes, hotels, offices and guest networks.',
    h1: 'Free WiFi QR Code Generator',
    intro:
      'Create a WiFi QR code so guests can connect to your network without typing the password. Useful for homes, cafes, restaurants, offices, hotels, and guest rooms.',
    links: [
      { label: 'QR Code Templates', href: '/templates' },
      { label: 'Text QR Code Generator', href: '/text' },
      { label: 'Website QR Code Generator', href: '/website' },
    ],
    faqs: [
      {
        question: 'Does a WiFi QR code include my password?',
        answer:
          'Yes. The QR code contains the WiFi network details needed to connect. Share it only with people you want to give network access to.',
      },
      {
        question: 'Does QRPrintly store my WiFi password?',
        answer:
          'No. Your WiFi QR code is generated in your browser. QRPrintly does not store your network name or password.',
      },
    ],
  },
  {
    path: '/wifi-qr-code-for-cafe',
    title: 'WiFi QR Code for Cafe | QRPrintly',
    description:
      'Create a free WiFi QR code for your cafe, restaurant, hotel, office or guest network. Let guests connect without typing the password.',
    h1: 'WiFi QR Code for Cafe',
    intro:
      'Create a WiFi QR code for your cafe, restaurant, hotel, office, or guest area so visitors can connect without typing the password manually.',
    links: [
      { label: 'Create Free WiFi QR Code', href: '/wifi' },
      { label: 'WiFi QR Templates', href: '/templates/wifi' },
      { label: 'Restaurant Menu QR Code Generator', href: '/restaurant-menu-qr-code-generator' },
    ],
    faqs: [
      {
        question: 'Can I create a WiFi QR code for my cafe?',
        answer:
          'Yes. You can create a WiFi QR code for your cafe, restaurant, hotel, office, or guest network for free.',
      },
      {
        question: 'Does QRPrintly store my WiFi password?',
        answer:
          'No. The WiFi QR code is generated in your browser. QRPrintly does not store your network name or password.',
      },
    ],
  },
  {
    path: '/restaurant-menu-qr-code-generator',
    title: 'Restaurant Menu QR Code Generator | QRPrintly',
    description:
      'Create a free QR code for your restaurant menu, cafe menu, food stall menu or cloud kitchen menu. Download PNG or use printable QR templates.',
    h1: 'Restaurant Menu QR Code Generator',
    intro:
      'Create a QR code for your restaurant menu, cafe menu, food stall menu, or cloud kitchen menu.',
    links: [
      { label: 'Create Menu QR Code', href: '/website' },
      { label: 'Restaurant Menu Templates', href: '/templates/restaurant-menu' },
      { label: 'WiFi QR Code for Cafe', href: '/wifi-qr-code-for-cafe' },
    ],
    faqs: [
      {
        question: 'Can I create a QR code for my restaurant menu?',
        answer:
          'Yes. You can create a QR code for any public restaurant menu link, website menu, PDF menu, or ordering page.',
      },
      {
        question: 'Can I update my menu later?',
        answer:
          'The QR code opens the link you provide. If you use an editable website or online menu link, you can update the menu without changing the QR code.',
      },
    ],
  },
  {
    path: '/vcard',
    title: 'Free vCard QR Code Generator | QRPrintly',
    description:
      'Create a free vCard QR code to share contact details. Useful for business cards, freelancers, sales teams, events and networking.',
    h1: 'Free vCard QR Code Generator',
    intro:
      'Create a vCard QR code that lets people scan and save your contact details. Useful for business cards, freelancers, sales teams, events, and professional contact sharing.',
    links: [
      { label: 'QR Code Templates', href: '/templates' },
      { label: 'Website QR Code Generator', href: '/website' },
      { label: 'Phone QR Code Generator', href: '/phone' },
    ],
    faqs: [
      {
        question: 'Can I use a vCard QR code on a business card?',
        answer:
          'Yes. vCard QR codes are useful for printed business cards, event badges, networking cards and contact-sharing material.',
      },
      {
        question: 'Does QRPrintly store my contact details?',
        answer:
          'No. Your vCard QR code is generated in your browser. QRPrintly does not store the contact details you enter.',
      },
    ],
  },
  {
    path: '/website',
    title: 'Free Website QR Code Generator | QRPrintly',
    description:
      'Turn any website link into a QR code. Create free QR codes for landing pages, menus, portfolios, forms, products and business websites. Download PNG or SVG.',
    h1: 'Free Website QR Code Generator',
    intro:
      'Turn any website link into a QR code. Create QR codes for landing pages, portfolios, menus, product pages, forms, brochures, posters, and business websites.',
    links: [
      { label: 'QR Code Templates', href: '/templates' },
      { label: 'WhatsApp QR Code Generator', href: '/whatsapp' },
      { label: 'vCard QR Code Generator', href: '/vcard' },
    ],
    faqs: [
      {
        question: 'What type of links can I use?',
        answer:
          'You can use any valid website URL, landing page, portfolio link, menu link, product page, form, or public web page.',
      },
      {
        question: 'Should my link start with http or https?',
        answer:
          'Yes. Use a complete URL starting with http:// or https:// so the QR code opens correctly.',
      },
    ],
  },
  {
    path: '/email',
    title: 'Free Email QR Code Generator | QRPrintly',
    description:
      'Create a free email QR code that opens a ready-to-send email draft. Add recipient, subject and message. Download PNG or SVG. No signup required.',
    h1: 'Free Email QR Code Generator',
    intro:
      'Create an email QR code that opens a ready-to-send email draft when scanned. Add the recipient email address, subject, and message.',
    links: [
      { label: 'vCard QR Code Generator', href: '/vcard' },
      { label: 'Website QR Code Generator', href: '/website' },
      { label: 'QR Code Templates', href: '/templates' },
    ],
    faqs: [
      {
        question: 'What happens when someone scans an email QR code?',
        answer:
          'The scanner opens an email draft with the recipient, subject, and message you entered.',
      },
      {
        question: 'Does QRPrintly store my email content?',
        answer:
          'No. Your email QR code is generated in your browser. QRPrintly does not store the email address, subject, or message you enter.',
      },
    ],
  },
  {
    path: '/sms',
    title: 'Free SMS QR Code Generator | QRPrintly',
    description:
      'Create a free SMS QR code that opens a text message draft. Add phone number and message. Download PNG or SVG. No signup required.',
    h1: 'Free SMS QR Code Generator',
    intro:
      'Create an SMS QR code that opens a text message draft when scanned. Add the phone number and optional message.',
    links: [
      { label: 'Phone QR Code Generator', href: '/phone' },
      { label: 'WhatsApp QR Code Generator', href: '/whatsapp' },
      { label: 'QR Code Templates', href: '/templates' },
    ],
    faqs: [
      {
        question: 'Can I add a pre-filled message?',
        answer: 'Yes. You can add an optional message that appears in the SMS draft.',
      },
      {
        question: 'Does QRPrintly store my phone number or message?',
        answer:
          'No. Your SMS QR code is generated in your browser. QRPrintly does not store the phone number or message you enter.',
      },
    ],
  },
  {
    path: '/phone',
    title: 'Free Phone QR Code Generator | QRPrintly',
    description:
      'Create a free phone QR code that opens the dialer with your number. Useful for business cards, posters and customer support.',
    h1: 'Free Phone QR Code Generator',
    intro:
      'Create a phone QR code that opens the dialer with your number when scanned. Useful for business cards, service counters, posters, and customer support.',
    links: [
      { label: 'vCard QR Code Generator', href: '/vcard' },
      { label: 'SMS QR Code Generator', href: '/sms' },
      { label: 'QR Code Templates', href: '/templates' },
    ],
    faqs: [
      {
        question: 'What happens when someone scans a phone QR code?',
        answer: 'The phone dialer opens with the number you entered, so the user can call easily.',
      },
      {
        question: 'Does QRPrintly store my phone number?',
        answer:
          'No. Your phone QR code is generated in your browser. QRPrintly does not store the phone number you enter.',
      },
    ],
  },
  {
    path: '/maps',
    title: 'Free Google Maps QR Code Generator | QRPrintly',
    description:
      'Create a free Google Maps QR code for shops, offices, restaurants, events and venues. Add a map link and download PNG or SVG.',
    h1: 'Free Google Maps QR Code Generator',
    intro:
      'Create a Google Maps QR code for a location, shop, office, event venue, hotel, restaurant, or meeting point.',
    links: [
      { label: 'Website QR Code Generator', href: '/website' },
      { label: 'QR Code Templates', href: '/templates' },
      { label: 'Text QR Code Generator', href: '/text' },
    ],
    faqs: [
      {
        question: 'What type of map link can I use?',
        answer: 'You can use a Google Maps link or any valid public location URL.',
      },
      {
        question: 'Does QRPrintly store my location link?',
        answer:
          'No. Your maps QR code is generated in your browser. QRPrintly does not store the location link you enter.',
      },
    ],
  },
  {
    path: '/text',
    title: 'Free Text QR Code Generator | QRPrintly',
    description:
      'Create a free plain text QR code for notes, labels, instructions, IDs and offline information. Download PNG or SVG instantly.',
    h1: 'Free Text QR Code Generator',
    intro:
      'Create a plain text QR code for short notes, instructions, labels, IDs, event details, or offline information.',
    links: [
      { label: 'Website QR Code Generator', href: '/website' },
      { label: 'QR Code Templates', href: '/templates' },
      { label: 'QR Code Types', href: '/qr-types' },
    ],
    faqs: [
      {
        question: 'Can I use a text QR code offline?',
        answer:
          'Yes. The text is stored inside the QR code, so it can be scanned without opening a website.',
      },
      {
        question: 'Does QRPrintly store my text?',
        answer:
          'No. Your text QR code is generated in your browser. QRPrintly does not store the text you enter.',
      },
    ],
  },
  {
    path: '/templates',
    title: 'Printable QR Code Templates | QRPrintly',
    description:
      'Choose printable QR code templates for payments, menus, WiFi, business cards, websites and customer chats. Customize text and download a clean PNG design.',
    h1: 'Printable QR Code Templates',
    intro:
      'Choose ready-to-use QR templates for payments, menus, WiFi access, business cards, websites, customer chats, and shop counters.',
    links: [
      { label: 'UPI Payment Templates', href: '/templates/upi-payment' },
      { label: 'Restaurant Menu Templates', href: '/templates/restaurant-menu' },
      { label: 'WiFi Templates', href: '/templates/wifi' },
    ],
    faqs: [
      {
        question: 'What can I use QR templates for?',
        answer:
          'You can use QR templates for posters, payment boards, restaurant menus, counter cards, business cards, packaging, reception desks and event material.',
      },
    ],
  },
  {
    path: '/qr-types',
    title: 'QR Code Generator Types | QRPrintly',
    description:
      'Explore free QR code generators for UPI, WhatsApp, WiFi, websites, vCards, email, SMS, phone, maps and text. Download PNG or SVG instantly.',
    h1: 'Choose the Right QR Code Generator',
    intro:
      'Explore free QR code generators for UPI payments, WhatsApp chats, WiFi access, websites, vCards, email, SMS, phone calls, maps, and plain text.',
    links: [
      { label: 'UPI QR Code Generator', href: '/upi' },
      { label: 'WhatsApp QR Code Generator', href: '/whatsapp' },
      { label: 'WiFi QR Code Generator', href: '/wifi' },
    ],
    faqs: [
      {
        question: 'Which QR type should I choose?',
        answer:
          'Choose UPI for payments, WhatsApp for chats, WiFi for guest access, vCard for contact sharing, and Website for links or landing pages.',
      },
    ],
  },
  {
    path: '/privacy',
    title: 'Privacy Policy | QRPrintly',
    description:
      'Read the QRPrintly privacy policy. Learn how QRPrintly handles QR code generation, analytics and user privacy.',
    h1: 'Privacy Policy',
    intro:
      'QRPrintly is designed as a privacy-first QR code generator. QR data is generated in your browser and is not stored by QRPrintly.',
    links: [
      { label: 'Terms', href: '/terms' },
      { label: 'Contact', href: '/contact' },
      { label: 'Home', href: '/' },
    ],
    faqs: [],
  },
  {
    path: '/terms',
    title: 'Terms of Use | QRPrintly',
    description:
      'Read the QRPrintly terms of use for using the free QR code generator and QR template tools.',
    h1: 'Terms of Use',
    intro: 'These terms explain how QRPrintly can be used for creating QR codes and QR templates.',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Contact', href: '/contact' },
      { label: 'Home', href: '/' },
    ],
    faqs: [],
  },
  {
    path: '/contact',
    title: 'Contact QRPrintly',
    description:
      'Contact QRPrintly for questions, feedback or support related to the QR code generator and QR templates.',
    h1: 'Contact QRPrintly',
    intro:
      'Contact QRPrintly for feedback, questions, bug reports, or support related to QR code generation and templates.',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Home', href: '/' },
    ],
    faqs: [],
  },
  {
    path: '/templates/upi-payment',
    title: 'UPI Payment QR Templates | QRPrintly',
    description:
      'Create printable UPI payment QR templates for shops, stalls, counters, invoices and small business payment boards.',
    h1: 'UPI Payment QR Templates',
    intro:
      'Create printable UPI payment QR designs for shops, stalls, counters, invoices, and small business payment boards.',
    links: [
      { label: 'Create UPI QR Code', href: '/upi' },
      { label: 'All Templates', href: '/templates' },
    ],
    faqs: [],
  },
  {
    path: '/templates/restaurant-menu',
    title: 'Restaurant Menu QR Templates | QRPrintly',
    description:
      'Create printable restaurant menu QR templates for cafes, restaurants, food stalls, cloud kitchens and table cards.',
    h1: 'Restaurant Menu QR Templates',
    intro:
      'Create clean restaurant menu QR templates for cafes, restaurants, food stalls, cloud kitchens, and table cards.',
    links: [
      { label: 'Create Website QR Code', href: '/website' },
      { label: 'All Templates', href: '/templates' },
    ],
    faqs: [],
  },
  {
    path: '/templates/vcard-contact',
    title: 'vCard Contact QR Templates | QRPrintly',
    description:
      'Create professional vCard contact QR templates for business cards, events, freelancers, consultants and sales teams.',
    h1: 'vCard Contact QR Templates',
    intro:
      'Create professional contact QR layouts for business cards, events, freelancers, consultants, and sales teams.',
    links: [
      { label: 'Create vCard QR Code', href: '/vcard' },
      { label: 'All Templates', href: '/templates' },
    ],
    faqs: [],
  },
  {
    path: '/templates/wifi',
    title: 'WiFi QR Templates | QRPrintly',
    description:
      'Create guest WiFi QR templates for homes, cafes, hotels, offices, reception areas and meeting rooms.',
    h1: 'WiFi QR Templates',
    intro:
      'Create guest WiFi QR layouts for homes, cafes, hotels, offices, reception areas, and meeting rooms.',
    links: [
      { label: 'Create WiFi QR Code', href: '/wifi' },
      { label: 'All Templates', href: '/templates' },
    ],
    faqs: [],
  },
  {
    path: '/templates/whatsapp',
    title: 'WhatsApp QR Templates | QRPrintly',
    description:
      'Create WhatsApp QR templates for customer inquiries, bookings, support, orders and business communication.',
    h1: 'WhatsApp QR Templates',
    intro:
      'Create WhatsApp QR templates for customer inquiries, bookings, support, orders, and business communication.',
    links: [
      { label: 'Create WhatsApp QR Code', href: '/whatsapp' },
      { label: 'All Templates', href: '/templates' },
    ],
    faqs: [],
  },
  {
    path: '/templates/website',
    title: 'Website QR Templates | QRPrintly',
    description:
      'Create website QR templates for landing pages, portfolios, product pages, brochures, posters and offline campaigns.',
    h1: 'Website QR Templates',
    intro:
      'Create website QR layouts for landing pages, portfolios, product pages, brochures, posters, and offline campaigns.',
    links: [
      { label: 'Create Website QR Code', href: '/website' },
      { label: 'All Templates', href: '/templates' },
    ],
    faqs: [],
  },
]

if (!fs.existsSync(sourceIndexPath)) {
  console.error('dist/index.html not found. Run vite build first.')
  process.exit(1)
}

const sourceHtml = fs.readFileSync(sourceIndexPath, 'utf8')

for (const route of routes) {
  const html = createRouteHtml(sourceHtml, route)
  const outputPath = getOutputPath(route.path)

  fs.mkdirSync(path.dirname(outputPath), { recursive: true })
  fs.writeFileSync(outputPath, html)
}

console.info(`Generated static HTML for ${routes.length} routes.`)

function createRouteHtml(html, route) {
  const canonicalUrl = getCanonicalUrl(route.path)
  const headTags = buildHeadTags(route, canonicalUrl)
  const staticContent = buildStaticContent(route)

  let output = html

  output = output.replace(/<html\b[^>]*>/i, '<html lang="en-IN">')

  output = output
    .replace(/<title>[\s\S]*?<\/title>/gi, '')
    .replace(/<meta\s+name=["']description["'][^>]*>/gi, '')
    .replace(/<link\s+rel=["']canonical["'][^>]*>/gi, '')
    .replace(/<meta\s+(property|name)=["']og:[^"']+["'][^>]*>/gi, '')
    .replace(/<meta\s+(property|name)=["']twitter:[^"']+["'][^>]*>/gi, '')
    .replace(/<script\s+type=["']application\/ld\+json["'][\s\S]*?<\/script>/gi, '')

  output = output.replace(/<head>/i, `<head>\n${headTags}`)
  output = output.replace(
    /<div\s+id=["']root["']\s*><\/div>/i,
    `<div id="root">${staticContent}</div>`
  )

  output = output
    .replace(/(src|href)=["']\.\/assets\//g, '$1="/assets/')
    .replace(/(src|href)=["']assets\//g, '$1="/assets/')

  return output
}

function buildHeadTags(route, canonicalUrl) {
  const schema = buildSchema(route, canonicalUrl)

  return [
    `    <!-- QRPrintly static prerender: ${route.path} -->`,
    `    <title>${escapeHtml(route.title)}</title>`,
    `    <meta name="description" content="${escapeHtml(route.description)}" />`,
    `    <link rel="canonical" href="${canonicalUrl}" />`,
    `    <meta property="og:type" content="website" />`,
    `    <meta property="og:site_name" content="QRPrintly" />`,
    `    <meta property="og:title" content="${escapeHtml(route.title)}" />`,
    `    <meta property="og:description" content="${escapeHtml(route.description)}" />`,
    `    <meta property="og:url" content="${canonicalUrl}" />`,
    `    <meta property="og:image" content="${ogImageUrl}" />`,
    `    <meta name="twitter:card" content="summary_large_image" />`,
    `    <meta name="twitter:title" content="${escapeHtml(route.title)}" />`,
    `    <meta name="twitter:description" content="${escapeHtml(route.description)}" />`,
    `    <meta name="twitter:image" content="${ogImageUrl}" />`,
    `    <script type="application/ld+json">${escapeJson(schema)}</script>`,
  ].join('\n')
}

function buildStaticContent(route) {
  const linksHtml = route.links
    .map((link) => `<li><a href="${link.href}">${escapeHtml(link.label)}</a></li>`)
    .join('')

  const faqHtml =
    route.faqs.length > 0
      ? `<section><h2>Frequently Asked Questions</h2>${route.faqs
          .map(
            (faq) =>
              `<article><h3>${escapeHtml(faq.question)}</h3><p>${escapeHtml(
                faq.answer
              )}</p></article>`
          )
          .join('')}</section>`
      : ''

  return `
    <main data-static-prerender="true" style="max-width: 960px; margin: 0 auto; padding: 48px 20px; font-family: Arial, Helvetica, sans-serif; line-height: 1.6;">
      <p style="font-size: 14px; color: #64748b; margin: 0 0 8px;">QRPrintly</p>
      <h1 style="font-size: 42px; line-height: 1.15; margin: 0 0 16px; color: #0f172a;">${escapeHtml(
        route.h1
      )}</h1>
      <p style="font-size: 18px; color: #334155; margin: 0 0 28px;">${escapeHtml(route.intro)}</p>
      <p style="font-size: 16px; color: #475569; margin: 0 0 28px;">
        Create, preview, and download QR codes instantly. QRPrintly works without signup and generates QR codes in your browser.
      </p>
      <nav aria-label="Related QRPrintly pages">
        <h2 style="font-size: 22px; margin: 0 0 12px; color: #0f172a;">Related tools</h2>
        <ul style="padding-left: 20px; margin: 0 0 32px;">
          ${linksHtml}
        </ul>
      </nav>
      ${faqHtml}
    </main>
  `
}

function buildSchema(route, canonicalUrl) {
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: route.title,
    description: route.description,
    url: canonicalUrl,
    isPartOf: {
      '@type': 'WebSite',
      name: 'QRPrintly',
      url: siteUrl,
    },
  }

  if (route.faqs.length === 0) {
    return webPageSchema
  }

  return [
    webPageSchema,
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: route.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ]
}

function getOutputPath(routePath) {
  if (routePath === '/') {
    return path.join(distDir, 'index.html')
  }

  return path.join(distDir, routePath.replace(/^\//, ''), 'index.html')
}

function getCanonicalUrl(routePath) {
  if (routePath === '/') {
    return siteUrl
  }

  return `${siteUrl}${routePath}`
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function escapeJson(value) {
  return JSON.stringify(value).replaceAll('<', '\\u003c')
}
