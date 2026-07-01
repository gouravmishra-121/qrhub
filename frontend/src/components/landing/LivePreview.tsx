import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'

import { PreviewCard } from './PreviewCard'

export function LivePreview() {
  const [url, setUrl] = useState('https://qrhub.in')
  const [preview, setPreview] = useState('https://qrhub.in')

  return (
    <Section id="live-preview">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight">Try QRHub Instantly</h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Experience QR generation before exploring all features.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <div className="flex flex-col gap-4 sm:flex-row">
            <input
              className="flex-1 rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />

            <Button onClick={() => setPreview(url)}>Generate</Button>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <PreviewCard value={preview} />
        </div>
      </Container>
    </Section>
  )
}
