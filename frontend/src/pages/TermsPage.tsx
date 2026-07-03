export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-sm font-medium text-muted-foreground">Terms of Service</p>

      <h1 className="mt-2 text-4xl font-bold tracking-tight">Simple usage terms</h1>

      <div className="mt-8 space-y-6 text-muted-foreground">
        <p>
          QRHub provides free QR generation tools for personal, business, and general use. This page
          is a basic MVP placeholder and should be reviewed before production launch.
        </p>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Use responsibly</h2>

          <p className="mt-2">
            Do not use QRHub to create QR codes for scams, phishing, harmful content, misleading
            links, or illegal activity.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">No guarantee</h2>

          <p className="mt-2">
            QRHub aims to generate reliable QR codes, but users should test QR codes before
            printing, publishing, or using them in business material.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Templates</h2>

          <p className="mt-2">
            Template exports are currently part of the MVP experience. Premium template terms can be
            added later when payment features are introduced.
          </p>
        </section>
      </div>
    </main>
  )
}
