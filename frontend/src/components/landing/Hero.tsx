import { HeroActions } from './HeroActions'
import { HeroPreview } from './HeroPreview'

export function Hero() {
  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Generate Beautiful
          <br />
          QR Codes for Everything
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Create beautiful QR codes for websites, WiFi, UPI payments, WhatsApp, business cards,
          events and more. Fast, privacy-first and completely free.
        </p>

        <div className="mt-10">
          <HeroActions />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
          <span>✓ Free Forever</span>
          <span>✓ No Signup</span>
          <span>✓ Privacy First</span>
          <span>✓ Instant Download</span>
        </div>

        <HeroPreview />
      </div>
    </section>
  )
}
