export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-sm font-medium text-muted-foreground">Privacy Policy</p>

      <h1 className="mt-2 text-4xl font-bold tracking-tight">Privacy-first QR generation</h1>

      <div className="mt-8 space-y-6 text-muted-foreground">
        <p>
          QRPrintly is designed to create QR codes directly in your browser. For the current MVP, QR
          data is not stored on our servers.
        </p>

        <section>
          <h2 className="text-xl font-semibold text-foreground">What we collect</h2>

          <p className="mt-2">
            We do not require signup to generate QR codes. The information you enter into QR forms
            is used only to generate the QR code in your browser.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Generated QR data</h2>

          <p className="mt-2">
            QR codes are generated client-side. Avoid entering sensitive secrets, private passwords,
            or confidential information into QR codes that you plan to share publicly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Future updates</h2>

          <p className="mt-2">
            If QRPrintly adds accounts, payments, analytics, or premium features in the future, this
            policy should be updated before launch.
          </p>
        </section>
      </div>
    </main>
  )
}
