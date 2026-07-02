import { Link } from 'react-router-dom'

const popularQrTypes = [
  {
    title: 'Website QR',
    description: 'Generate QR codes for website URLs.',
    href: '/website',
    icon: '🌐',
  },
  {
    title: 'UPI QR',
    description: 'Accept digital payments instantly.',
    href: '/upi',
    icon: '💳',
  },
  {
    title: 'WiFi QR',
    description: 'Share WiFi credentials without typing passwords.',
    href: '/wifi',
    icon: '📶',
  },
  {
    title: 'WhatsApp QR',
    description: 'Open WhatsApp chats with one scan.',
    href: '/whatsapp',
    icon: '💬',
  },
]

const communicationQrTypes = [
  {
    title: 'Email QR',
    description: 'Open an email draft instantly.',
    href: '/email',
    icon: '✉️',
  },
  {
    title: 'Phone QR',
    description: 'Open the phone dialer instantly.',
    href: '/phone',
    icon: '📞',
  },
  {
    title: 'SMS QR',
    description: 'Open a prefilled SMS message.',
    href: '/sms',
    icon: '💬',
  },
  {
    title: 'vCard QR',
    description: 'Share contact details as a scannable QR code.',
    href: '/vcard',
    icon: '👤',
  },
]

const utilityQrTypes = [
  {
    title: 'Text QR',
    description: 'Share plain text, notes, codes, or instructions.',
    href: '/text',
    icon: '📝',
  },
  {
    title: 'Maps QR',
    description: 'Open a location or maps link instantly.',
    href: '/maps',
    icon: '📍',
  },
]

const comingSoonQrTypes = [
  {
    title: 'PDF QR',
    description: 'Share PDF documents with a QR code.',
    icon: '📄',
  },
  {
    title: 'Event QR',
    description: 'Share event details and calendar information.',
    icon: '📅',
  },
  {
    title: 'Social Media QR',
    description: 'Link to your social profiles from one QR code.',
    icon: '🔗',
  },
]

type QRType = {
  title: string
  description: string
  href: string
  icon: string
}

type ComingSoonQRType = {
  title: string
  description: string
  icon: string
}

function QRTypeSection({
  title,
  description,
  items,
}: {
  title: string
  description: string
  items: QRType[]
}) {
  return (
    <section className="mt-14">
      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>

        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.title}
            to={item.href}
            className="group rounded-2xl border bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <div className="text-4xl">{item.icon}</div>

            <h3 className="mt-4 text-xl font-semibold group-hover:text-primary">{item.title}</h3>

            <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>

            <p className="mt-5 text-sm font-medium text-primary">Create QR →</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

function ComingSoonSection({ items }: { items: ComingSoonQRType[] }) {
  return (
    <section className="mt-14">
      <div>
        <h2 className="text-2xl font-semibold">Coming Soon</h2>

        <p className="mt-2 text-sm text-muted-foreground">
          These QR types are planned for upcoming releases.
        </p>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="rounded-2xl border bg-muted/30 p-6 opacity-80">
            <div className="text-4xl">{item.icon}</div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <h3 className="text-xl font-semibold">{item.title}</h3>

              <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                Soon
              </span>
            </div>

            <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function QRTypesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium text-muted-foreground">QR Types</p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          Choose what you want to create
        </h1>

        <p className="mt-4 text-muted-foreground">
          Create QR codes for websites, payments, WiFi, WhatsApp, email, contacts, maps, plain text,
          and more.
        </p>
      </div>

      <QRTypeSection
        title="Popular QR Codes"
        description="Most commonly used QR codes for everyday and business use."
        items={popularQrTypes}
      />

      <QRTypeSection
        title="Communication QR Codes"
        description="Help people contact you faster through phone, SMS, email, WhatsApp, or saved contacts."
        items={communicationQrTypes}
      />

      <QRTypeSection
        title="Utility QR Codes"
        description="Useful QR codes for plain text, notes, locations, and practical sharing."
        items={utilityQrTypes}
      />

      <ComingSoonSection items={comingSoonQrTypes} />
    </main>
  )
}
