import type { RefObject } from 'react'

import { Button } from '@/components/ui/button'
import { trackQrDownloadFromCurrentPath } from '@/lib/analytics'

type QRDownloadProps = {
  isValid: boolean
  qrRef: RefObject<HTMLDivElement | null>
  fileName?: string
  downloadSize?: number
  backgroundColor?: string
}

export function QRDownload({
  isValid,
  qrRef,
  fileName = 'qr-code',
  downloadSize = 1024,
  backgroundColor = '#ffffff',
}: QRDownloadProps) {
  function getSvgElement() {
    return qrRef.current?.querySelector('svg') ?? null
  }

  function getSvgString() {
    const svg = getSvgElement()

    if (!svg) return null

    const clonedSvg = svg.cloneNode(true) as SVGSVGElement

    clonedSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    clonedSvg.setAttribute('width', String(downloadSize))
    clonedSvg.setAttribute('height', String(downloadSize))
    clonedSvg.removeAttribute('style')

    return new XMLSerializer().serializeToString(clonedSvg)
  }

  function downloadBlob(blob: Blob, downloadFileName: string) {
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')

    link.href = url
    link.download = downloadFileName

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    URL.revokeObjectURL(url)
  }

  function downloadSVG() {
    const svgString = getSvgString()

    if (!svgString) return

    trackQrDownloadFromCurrentPath({
      format: 'svg',
      size: downloadSize,
    })

    const blob = new Blob([svgString], {
      type: 'image/svg+xml;charset=utf-8',
    })

    downloadBlob(blob, `${fileName}-${downloadSize}px.svg`)
  }

  function downloadPNG() {
    const svgString = getSvgString()

    if (!svgString) return

    const svgBlob = new Blob([svgString], {
      type: 'image/svg+xml;charset=utf-8',
    })

    const svgUrl = URL.createObjectURL(svgBlob)
    const image = new Image()

    image.onload = () => {
      const canvas = document.createElement('canvas')

      canvas.width = downloadSize
      canvas.height = downloadSize

      const context = canvas.getContext('2d')

      if (!context) {
        URL.revokeObjectURL(svgUrl)
        return
      }

      context.fillStyle = backgroundColor
      context.fillRect(0, 0, downloadSize, downloadSize)
      context.drawImage(image, 0, 0, downloadSize, downloadSize)

      canvas.toBlob((blob) => {
        URL.revokeObjectURL(svgUrl)

        if (!blob) return

        trackQrDownloadFromCurrentPath({
          format: 'png',
          size: downloadSize,
        })

        downloadBlob(blob, `${fileName}-${downloadSize}px.png`)
      }, 'image/png')
    }

    image.onerror = () => {
      URL.revokeObjectURL(svgUrl)
    }

    image.src = svgUrl
  }

  return (
    <section className="mt-7 rounded-2xl border bg-muted/30 p-4 sm:mt-8 sm:p-5">
      <div className="text-center">
        <h2 className="text-base font-semibold">Download QR code</h2>

        <p className="mt-1 text-xs leading-5 text-muted-foreground sm:text-sm">
          Download as PNG for quick use or SVG for scalable print/design work.
        </p>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <Button disabled={!isValid} onClick={downloadPNG} className="w-full">
          Download PNG
        </Button>

        <Button
          variant="outline"
          disabled={!isValid}
          onClick={downloadSVG}
          className="w-full bg-background"
        >
          Download SVG
        </Button>
      </div>

      {!isValid ? (
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Enter valid details to enable downloads.
        </p>
      ) : (
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Export size: {downloadSize}px
        </p>
      )}
    </section>
  )
}
