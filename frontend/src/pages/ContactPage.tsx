import { Link } from 'react-router-dom'

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <section className="mx-auto max-w-3xl">
        <p className="text-sm font-medium text-muted-foreground">Contact</p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Contact QRPrintly</h1>

        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          Have feedback, found an issue, or want to suggest a QR code type or template? We would
          love to hear from you.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border bg-background p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Feedback and suggestions</h2>

            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Share ideas for new QR generators, printable templates, design improvements, or
              anything that can make QRPrintly more useful.
            </p>
          </article>

          <article className="rounded-2xl border bg-background p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Bug reports</h2>

            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              If a QR code is not generating correctly, a download is not working, or a page looks
              broken, please share the page URL and what happened.
            </p>
          </article>
        </div>

        <section className="mt-8 rounded-2xl border bg-muted/30 p-6">
          <h2 className="text-xl font-semibold">Email</h2>

          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            You can contact QRPrintly at:
          </p>

          <a
            href="mailto:hello@qrprintly.com"
            className="mt-4 inline-flex rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            hello@qrprintly.com
          </a>

          <p className="mt-4 text-xs leading-6 text-muted-foreground">
            If you are reporting an issue, include the page link, QR type, and the device or browser
            where you noticed the problem.
          </p>
        </section>

        <section className="mt-8 rounded-2xl border bg-background p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Helpful links</h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Link
              to="/qr-types"
              className="rounded-xl border px-4 py-3 text-sm font-medium transition hover:border-primary/50 hover:bg-muted/30"
            >
              Browse QR code types
            </Link>

            <Link
              to="/templates"
              className="rounded-xl border px-4 py-3 text-sm font-medium transition hover:border-primary/50 hover:bg-muted/30"
            >
              Explore QR templates
            </Link>

            <Link
              to="/privacy"
              className="rounded-xl border px-4 py-3 text-sm font-medium transition hover:border-primary/50 hover:bg-muted/30"
            >
              Read privacy policy
            </Link>

            <Link
              to="/"
              className="rounded-xl border px-4 py-3 text-sm font-medium transition hover:border-primary/50 hover:bg-muted/30"
            >
              Go to homepage
            </Link>
          </div>
        </section>
      </section>
    </main>
  )
}
