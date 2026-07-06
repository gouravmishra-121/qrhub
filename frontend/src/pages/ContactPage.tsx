import { Link } from 'react-router-dom'

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-sm font-medium text-muted-foreground">Contact</p>

      <h1 className="mt-2 text-4xl font-bold tracking-tight">Contact QRPrintly</h1>

      <p className="mt-4 text-muted-foreground">
        Have feedback, a template idea, or a QR type request? This page is a simple MVP contact
        placeholder.
      </p>

      <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm">
        <h2 className="text-xl font-semibold">For now</h2>

        <p className="mt-2 text-muted-foreground">
          Add your preferred contact method here before public launch, such as email, Google Form,
          Tally form, or support link.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/qr-types"
            className="inline-flex justify-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Create QR Code
          </Link>

          <Link
            to="/templates"
            className="inline-flex justify-center rounded-full border px-5 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            Explore Templates
          </Link>
        </div>
      </div>
    </main>
  )
}
