import { HeroActions } from './HeroActions'
import { HeroPreview } from './HeroPreview'

export function Hero() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h1 className="text-6xl font-bold tracking-tight">
          Generate Beautiful
          <br />
          QR Codes in Seconds
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Create custom QR codes for websites, WiFi, business cards, events, payments and more —
          completely free, with no account required.
        </p>

        <div className="mt-10">
          <HeroActions />
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <span>✓ Free Forever</span>
          <span>✓ No Signup Required</span>
          <span>✓ Instant Download</span>
        </div>
        <HeroPreview />
      </div>
    </section>
  )
}
