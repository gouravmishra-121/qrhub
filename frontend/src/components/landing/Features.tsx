import { Globe, Wifi, User, Mail, MessageCircle, IndianRupee } from 'lucide-react'

import { FeatureCard } from './FeatureCard'

export function Features() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Everything you need</h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Create every type of QR code from one modern platform.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<Globe className="h-6 w-6" />}
            title="Website QR"
            description="Generate QR codes for any website or landing page."
          />
          <FeatureCard
            icon={<Wifi className="h-6 w-6" />}
            title="WiFi QR"
            description="Let guests connect to your WiFi without typing passwords."
          />

          <FeatureCard
            icon={<User className="h-6 w-6" />}
            title="vCard QR"
            description="Share your contact details instantly with a single scan."
          />

          <FeatureCard
            icon={<Mail className="h-6 w-6" />}
            title="Email QR"
            description="Open a pre-filled email directly from a QR code."
          />

          <FeatureCard
            icon={<MessageCircle className="h-6 w-6" />}
            title="SMS QR"
            description="Generate QR codes that launch a pre-written SMS."
          />

          <FeatureCard
            icon={<IndianRupee className="h-6 w-6" />}
            title="UPI Payment QR"
            description="Accept instant UPI payments with a custom QR code."
          />
        </div>
      </div>
    </section>
  )
}
