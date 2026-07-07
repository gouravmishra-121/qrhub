import { Link } from 'react-router-dom'

import { longTailPagesById, type LongTailPageId } from '@/data/longTailPages'

type LongTailSeoPageProps = {
  pageId: LongTailPageId
}

export default function LongTailSeoPage({ pageId }: LongTailSeoPageProps) {
  const page = longTailPagesById[pageId]

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      <section className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium text-muted-foreground">{page.eyebrow}</p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{page.title}</h1>

        <p className="mt-5 text-lg leading-8 text-muted-foreground">{page.intro}</p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to={page.primaryCta.href}
            className="inline-flex justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            {page.primaryCta.label}
          </Link>

          <Link
            to={page.secondaryCta.href}
            className="inline-flex justify-center rounded-full border px-6 py-3 text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            {page.secondaryCta.label}
          </Link>
        </div>
      </section>

      <section className="mt-14 grid gap-6 lg:grid-cols-3">
        {page.sections.map((section) => (
          <article key={section.title} className="rounded-2xl border bg-background p-6 shadow-sm">
            <h2 className="text-xl font-semibold">{section.title}</h2>

            <p className="mt-3 text-sm leading-7 text-muted-foreground">{section.content}</p>
          </article>
        ))}
      </section>

      <section className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-2xl border bg-background p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">How to create this QR code</h2>

          <ol className="mt-6 space-y-4">
            {page.steps.map((step, index) => (
              <li key={step} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {index + 1}
                </span>

                <span className="pt-1 text-sm leading-7 text-muted-foreground">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-2xl border bg-muted/30 p-6">
          <h2 className="text-2xl font-semibold">Tips before using it</h2>

          <ul className="mt-6 space-y-3">
            {page.tips.map((tip) => (
              <li
                key={tip}
                className="rounded-xl bg-background px-4 py-3 text-sm leading-6 text-muted-foreground"
              >
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-14 rounded-2xl border bg-background p-6 shadow-sm">
        <h2 className="text-2xl font-semibold">Related QR tools</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {page.relatedLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="rounded-2xl border p-5 transition hover:border-primary/50 hover:bg-muted/30"
            >
              <h3 className="font-semibold">{link.label}</h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">{link.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-2xl border bg-muted/30 p-6">
        <h2 className="text-2xl font-semibold">Frequently asked questions</h2>

        <div className="mt-6 grid gap-4">
          {page.faqs.map((faq) => (
            <article key={faq.question} className="rounded-2xl bg-background p-5">
              <h3 className="font-semibold">{faq.question}</h3>

              <p className="mt-2 text-sm leading-7 text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-3xl bg-foreground p-8 text-center text-background">
        <h2 className="text-3xl font-bold tracking-tight">Ready to create your QR code?</h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-background/70">
          Use QRPrintly to create, preview, and download your QR code instantly. No signup required.
        </p>

        <Link
          to={page.primaryCta.href}
          className="mt-6 inline-flex rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:opacity-90"
        >
          {page.primaryCta.label}
        </Link>
      </section>
    </main>
  )
}
