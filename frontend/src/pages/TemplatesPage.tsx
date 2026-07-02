import { Link } from 'react-router-dom'
import { templateGroups } from '@/data/templateGroups'

export default function TemplatesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium text-muted-foreground">Template Gallery</p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          QR Templates for Better Branding
        </h1>

        <p className="mt-4 text-muted-foreground">
          Basic QR generation will stay free. Templates will help businesses create branded,
          print-ready QR designs for payments, menus, contact cards, WiFi access and more.
        </p>
      </div>

      <div className="mt-14 rounded-2xl border bg-muted/40 p-5 text-center sm:p-6">
        <p className="font-medium">Templates are coming soon</p>

        <p className="mt-2 text-sm text-muted-foreground">
          For now, create your QR code for free. In the next version, these templates will let users
          apply ready-made designs and download print-ready layouts.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {templateGroups.map((template) => (
          <div key={template.title} className="rounded-2xl border bg-background p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
              {template.icon}
            </div>

            <div className="mt-5 flex items-center justify-between gap-3">
              <h2 className="text-xl font-semibold">{template.title}</h2>

              <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                Soon
              </span>
            </div>

            <p className="mt-3 text-sm text-muted-foreground">{template.description}</p>

            <div className="mt-5">
              <p className="text-sm font-medium">Example templates</p>

              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                {template.examples.map((example) => (
                  <li key={example}>• {example}</li>
                ))}
              </ul>
            </div>

            <Link
              to={template.primaryAction}
              className="mt-6 inline-flex text-sm font-medium text-primary hover:underline"
            >
              Create base QR first →
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-2xl border bg-background p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-semibold">Why templates matter for QRHub</h2>

            <p className="mt-2 text-sm text-muted-foreground">
              Free QR tools bring traffic. Templates become the future monetization layer through
              branded layouts, print-ready designs and premium visual packs.
            </p>
          </div>

          <Link
            to="/qr-types"
            className="inline-flex rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Create free QR code
          </Link>
        </div>
      </div>
    </main>
  )
}
