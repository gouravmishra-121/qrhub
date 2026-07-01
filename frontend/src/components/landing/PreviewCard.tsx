import QRCode from 'react-qr-code'

interface PreviewCardProps {
  value: string
}

export function PreviewCard({ value }: PreviewCardProps) {
  return (
    <div className="rounded-2xl border bg-card p-8 shadow-sm">
      <div className="flex justify-center rounded-xl bg-white p-6">
        <QRCode value={value} size={180} />
      </div>
    </div>
  )
}
