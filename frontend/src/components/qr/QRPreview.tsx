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
      <h2 className="mb-6 text-center text-lg font-semibold sm:mb-8 sm:text-xl">Live Preview</h2>

      <div className="flex min-h-[250px] items-center justify-center sm:min-h-[270px]">
        {isValid ? (
          <div
            ref={ref}
            className="flex w-full max-w-[240px] items-center justify-center rounded-xl p-3 sm:p-4"
            style={{ backgroundColor }}
          >
            <QRCode
              value={value}
              size={size}
              fgColor={foregroundColor}
              bgColor={backgroundColor}
              style={{
                height: 'auto',
                maxWidth: '100%',
                width: '100%',
              }}
            />
          </div>
        ) : (
          <div className="flex h-[220px] w-full max-w-[240px] flex-col items-center justify-center rounded-xl border-2 border-dashed border-muted px-4 text-center sm:h-[240px]">
            <div className="mb-4 text-5xl sm:text-6xl">🌐</div>

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
