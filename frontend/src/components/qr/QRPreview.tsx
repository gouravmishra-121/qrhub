import { forwardRef, useEffect, useRef } from 'react'
import QRCode from 'react-qr-code'

import { trackQrGenerateFromCurrentPath } from '@/lib/analytics'

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
  const hasTrackedGenerate = useRef(false)

  useEffect(() => {
    if (!isValid || !value.trim() || hasTrackedGenerate.current) {
      return
    }

    trackQrGenerateFromCurrentPath()
    hasTrackedGenerate.current = true
  }, [isValid, value])

  return (
    <section aria-label="QR code preview">
      <div className="mb-5 text-center sm:mb-6">
        <h2 className="text-lg font-semibold sm:text-xl">Live Preview</h2>

        <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
          Your QR code updates automatically when the details are valid.
        </p>
      </div>

      <div className="flex min-h-[220px] items-center justify-center sm:min-h-[270px]">
        {isValid ? (
          <div
            ref={ref}
            className="flex w-full max-w-[220px] items-center justify-center rounded-2xl p-3 shadow-sm sm:max-w-[240px] sm:p-4"
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
          <div className="flex h-[210px] w-full max-w-[240px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-muted px-4 text-center sm:h-[240px]">
            <div className="mb-4 text-5xl sm:text-6xl">🌐</div>

            <h3 className="font-semibold">QR Preview</h3>

            <p className="mt-2 max-w-[220px] text-sm leading-6 text-muted-foreground">
              {placeholderDescription}
            </p>
          </div>
        )}
      </div>
    </section>
  )
})
