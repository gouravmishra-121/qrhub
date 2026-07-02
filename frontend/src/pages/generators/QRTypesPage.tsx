import { Link } from 'react-router-dom'

const qrTypes = [
  {
    title: 'Website QR',
    description: 'Generate QR codes for website URLs.',
    href: '/website',
    icon: '🌐',
  },
  {
    title: 'WiFi QR',
    description: 'Share your WiFi without typing passwords.',
    href: '/wifi',
    icon: '📶',
  },
  {
    title: 'WhatsApp QR',
    description: 'Start chats instantly.',
    href: '/whatsapp',
    icon: '💬',
  },
  {
    title: 'UPI QR',
    description: 'Accept payments instantly.',
    href: '/upi',
    icon: '💳',
  },
  {
    title: 'vCard QR',
    description: 'Share your contact information.',
    href: '/vcard',
    icon: '👤',
  },
  {
    title: 'Email QR',
    description: 'Open an email draft instantly.',
    href: '/email',
    icon: '✉️',
  },
  {
    title: 'SMS QR',
    description: 'Send an SMS instantly.',
    href: '/sms',
    icon: '✉️',
  },
  {
    title: 'Phone QR',
    description: 'Dial a phone number instantly.',
    href: '/phone',
    icon: '📞',
  },
  {
    title: 'Text QR',
    description: 'Share plain text, notes, or instructions.',
    href: '/text',
    icon: '📝',
  },
  {
    title: 'Maps QR',
    description: 'Share location information.',
    href: '/maps',
    icon: '📍',
  },
]

export default function GeneratorsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Choose QR Code Type</h1>

        <p className="mt-4 text-muted-foreground">Select what you'd like to create.</p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {qrTypes.map((generator) => (
          <Link
            key={generator.title}
            to={generator.href}
            className="rounded-xl border p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-4xl">{generator.icon}</div>

            <h2 className="mt-4 text-xl font-semibold">{generator.title}</h2>

            <p className="mt-2 text-sm text-muted-foreground">{generator.description}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}
