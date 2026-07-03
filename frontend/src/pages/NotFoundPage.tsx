import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
      <p className="text-sm font-medium text-muted-foreground">404</p>

      <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Page not found</h1>

      <p className="mt-4 max-w-xl text-muted-foreground">
        The page you are looking for does not exist or may have been moved. Choose a QR type and
        create a free QR code instead.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          to="/qr-types"
          className="inline-flex justify-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          Browse QR Types
        </Link>

        <Link
          to="/"
          className="inline-flex justify-center rounded-full border px-5 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
        >
          Go to homepage
        </Link>
      </div>
    </main>
  )
}
