import { Link } from 'react-router-dom'

import { blogPosts } from '@/data/blogPosts'

export default function BlogIndexPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <section className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium text-muted-foreground">QRPrintly Blog</p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          QR code guides for small businesses
        </h1>

        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          Practical guides for creating QR codes for payments, WhatsApp chats, WiFi access, menus,
          business cards and more.
        </p>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        {blogPosts.map((post) => (
          <article key={post.id} className="rounded-2xl border bg-background p-6 shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {post.readingTime}
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              <Link to={post.path} className="transition hover:text-primary">
                {post.title}
              </Link>
            </h2>

            <p className="mt-3 text-sm leading-7 text-muted-foreground">{post.excerpt}</p>

            <Link
              to={post.path}
              className="mt-5 inline-flex rounded-full border px-5 py-2 text-sm font-medium transition hover:border-primary/50 hover:bg-muted/30"
            >
              Read guide
            </Link>
          </article>
        ))}
      </section>
    </main>
  )
}
