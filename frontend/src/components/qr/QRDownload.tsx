import type { RefObject } from 'react'

import { Button } from '@/components/ui/button'

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

        downloadBlob(blob, `${fileName}-${downloadSize}px.png`)
      }, 'image/png')
    }

    image.onerror = () => {
      URL.revokeObjectURL(svgUrl)
    }

    image.src = svgUrl
  }

  return (
    <div className="mt-8 grid gap-3 sm:flex sm:justify-center">
      <Button
        variant="outline"
        disabled={!isValid}
        onClick={downloadPNG}
        className="w-full sm:w-auto"
      >
        Download PNG
      </Button>

      <Button
        variant="outline"
        disabled={!isValid}
        onClick={downloadSVG}
        className="w-full sm:w-auto"
      >
        Download SVG
      </Button>
    </div>
  )
}
