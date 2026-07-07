import { Link } from 'react-router-dom'

import { TemplateDesignPreview } from '@/components/templates/TemplateDesignPreview'
import { templateDesignPreviews } from '@/data/templateDesignPreviews'
import { templateGroups } from '@/data/templateGroups'

export default function TemplatesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16">
      <section className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium text-muted-foreground">Printable QR Templates</p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          QR Code Templates for Shops, Menus, WiFi and Business Cards
        </h1>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Choose a QR template, connect it with a real QR code, customize the text, and download a
          clean PNG design for printing or digital sharing. Useful for UPI payments, restaurant
          menus, WiFi access, WhatsApp chats, websites and business cards.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="#templates"
            className="inline-flex justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Browse templates
          </Link>

          <Link
            to="/qr-types"
            className="inline-flex justify-center rounded-full border px-6 py-3 text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            Create QR first
          </Link>
        </div>
      </section>

      <section className="mt-14 grid gap-4 rounded-3xl border bg-muted/30 p-6 sm:grid-cols-3 sm:p-8">
        <div>
          <p className="text-2xl font-bold">1</p>
          <h2 className="mt-2 font-semibold">Choose a template</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Pick a layout for payments, menu QR, WiFi, WhatsApp, website or contact sharing.
          </p>
        </div>

        <div>
          <p className="text-2xl font-bold">2</p>
          <h2 className="mt-2 font-semibold">Connect QR data</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Create the QR code and connect it to the selected template design.
          </p>
        </div>

        <div>
          <p className="text-2xl font-bold">3</p>
          <h2 className="mt-2 font-semibold">Download PNG</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Customize the text and download a ready-to-use PNG for printing or sharing.
          </p>
        </div>
      </section>

      <section id="templates" className="mt-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-muted-foreground">Template Gallery</p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Ready-to-use QR template designs
          </h2>

          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Select a template below, connect a QR code, edit the text, and download the final design
            as PNG.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {templateDesignPreviews.map((template) => (
            <article key={template.id}>
              <TemplateDesignPreview
                variant={template.variant}
                label={template.label}
                title={template.title}
                subtitle={template.subtitle}
                ctaText={template.ctaText}
                footerText={template.footerText}
              />

              <Link
                to={`/templates/${template.id}`}
                className="mt-4 inline-flex w-full justify-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                Use this template →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-muted-foreground">Template Use Cases</p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight">Popular QR template categories</h2>

          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Start from a QR type, then apply a template design when you want a cleaner printable
            layout.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {templateGroups.map((template) => (
            <article
              key={template.title}
              className="rounded-2xl border bg-background p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                {template.icon}
              </div>

              <div className="mt-5 flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold">{template.title}</h3>

                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Use case
                </span>
              </div>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">{template.description}</p>

              <div className="mt-5">
                <p className="text-sm font-medium">Good for</p>

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
                Create QR for this use case →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl border bg-background p-6 shadow-sm sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Why use templates?</p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Make QR codes easier to understand and print
            </h2>

            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              A plain QR code works, but a template makes the purpose clear. Customers can quickly
              understand whether the QR is for payment, menu, WiFi, WhatsApp chat, website visit or
              contact saving.
            </p>
          </div>

          <div className="rounded-2xl bg-muted/40 p-5">
            <h3 className="font-semibold">Common places to use templates</h3>

            <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
              <li>• Shop counters and payment boards</li>
              <li>• Restaurant tables and menu cards</li>
              <li>• Cafe WiFi cards and hotel rooms</li>
              <li>• Business cards and flyers</li>
              <li>• Posters, packaging and social media</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-16 rounded-3xl bg-foreground p-8 text-center text-background">
        <h2 className="text-3xl font-bold tracking-tight">
          Create a QR code before choosing a template
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-background/70">
          Start with the QR type you need, then connect it to a template design for a cleaner
          printable layout.
        </p>

        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/qr-types"
            className="inline-flex justify-center rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:opacity-90"
          >
            Browse QR types
          </Link>

          <Link
            to="/blog"
            className="inline-flex justify-center rounded-full border border-background/30 px-6 py-3 text-sm font-medium text-background transition hover:bg-background/10"
          >
            Read QR code guides
          </Link>
        </div>
      </section>
    </main>
  )
}
