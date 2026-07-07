import { Link, useParams } from 'react-router-dom'

import { blogPostsBySlug } from '@/data/blogPosts'
import NotFoundPage from '@/pages/NotFoundPage'

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = slug ? blogPostsBySlug[slug] : null

  if (!post) {
    return <NotFoundPage />
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <article>
        <Link
          to="/blog"
          className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
        >
          ← Back to blog
        </Link>

        <header className="mt-6">
          <p className="text-sm font-medium text-muted-foreground">
            {post.readingTime} · Updated {formatDate(post.updatedDate)}
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{post.title}</h1>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">{post.excerpt}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to={post.primaryCta.href}
              className="inline-flex justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              {post.primaryCta.label}
            </Link>

            <Link
              to={post.secondaryLinks[0]?.href ?? '/qr-types'}
              className="inline-flex justify-center rounded-full border px-6 py-3 text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              Related landing page
            </Link>
          </div>
        </header>

        <div className="mt-12 space-y-10">
          {post.sections.map((section, sectionIndex) => (
            <section key={section.title}>
              <h2 className="text-2xl font-semibold">{section.title}</h2>

              <div className="mt-4 space-y-4">
                {section.content.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>

              {sectionIndex === 1 ? (
                <div className="mt-6 rounded-2xl border bg-muted/30 p-5">
                  <p className="text-sm font-medium">Create it now</p>

                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    Use QRPrintly to generate and download your QR code without signing up.
                  </p>

                  <Link
                    to={post.primaryCta.href}
                    className="mt-4 inline-flex rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                  >
                    {post.primaryCta.label}
                  </Link>
                </div>
              ) : null}
            </section>
          ))}
        </div>

        <section className="mt-12 rounded-2xl border bg-background p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Related tools and guides</h2>

          <div className="mt-5 grid gap-3">
            {post.secondaryLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="rounded-xl border px-4 py-3 text-sm font-medium transition hover:border-primary/50 hover:bg-muted/30"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl border bg-muted/30 p-6">
          <h2 className="text-2xl font-semibold">Frequently asked questions</h2>

          <div className="mt-6 grid gap-4">
            {post.faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl bg-background p-5">
                <h3 className="font-semibold">{faq.question}</h3>

                <p className="mt-2 text-sm leading-7 text-muted-foreground">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-foreground p-8 text-center text-background">
          <h2 className="text-3xl font-bold tracking-tight">Ready to create your QR code?</h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-background/70">
            Generate your QR code online and download it as PNG or SVG.
          </p>

          <Link
            to={post.primaryCta.href}
            className="mt-6 inline-flex rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:opacity-90"
          >
            {post.primaryCta.label}
          </Link>
        </section>
      </article>
    </main>
  )
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(date))
}
