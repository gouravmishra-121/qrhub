import { forwardRef } from 'react'
import QRCode from 'react-qr-code'

type QRPreviewProps = {
  value: string
  isValid: boolean
  size?: number
  foregroundColor?: string
  backgroundColor?: string
  placeholderDescription?: string
}

export const QRPreview = forwardRef<HTMLDivElement, QRPreviewProps>(function QRPreview(
  {
    value,
    isValid,
    size = 240,
    foregroundColor = '#000000',
    backgroundColor = '#ffffff',
    placeholderDescription = 'Enter a valid value to preview your QR code.',
  },
  ref
) {
  return (
    <>
      <h2 className="mb-8 text-center text-xl font-semibold">Live Preview</h2>

      <div className="flex min-h-[270px] items-center justify-center">
        {isValid ? (
          <div ref={ref} className="rounded-xl p-4" style={{ backgroundColor }}>
            <QRCode value={value} size={size} fgColor={foregroundColor} bgColor={backgroundColor} />
          </div>
        ) : (
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-6xl">🌐</div>

            <h3 className="font-semibold">QR Preview</h3>

            <p className="mt-2 max-w-[220px] text-sm text-muted-foreground">
              {placeholderDescription}
            </p>
          </div>
        )}
      </div>
    </>
  )
})
