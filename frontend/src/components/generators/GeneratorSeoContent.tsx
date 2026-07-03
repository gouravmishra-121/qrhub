import { Link } from 'react-router-dom'

type GeneratorSeoContentProps = {
  title: string
  description: string
  useCases: string[]
  faqs: {
    question: string
    answer: string
  }[]
  relatedLinks: {
    label: string
    href: string
  }[]
}

export function GeneratorSeoContent({
  title,
  description,
  useCases,
  faqs,
  relatedLinks,
}: GeneratorSeoContentProps) {
  return (
    <section className="mt-16 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>

        <p className="mt-3 text-muted-foreground">{description}</p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold">Common use cases</h3>

          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {useCases.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-primary">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Related QR tools</h3>

          <div className="mt-4 flex flex-wrap gap-3">
            {relatedLinks.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="rounded-full border px-4 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-lg font-semibold">FAQs</h3>

        <div className="mt-4 divide-y rounded-2xl border">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-4">
              <summary className="cursor-pointer list-none font-medium">{faq.question}</summary>

              <p className="mt-3 text-sm text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
