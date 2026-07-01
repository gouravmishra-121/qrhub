import { Link } from 'react-router-dom'

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary font-bold text-primary-foreground">
        Q
      </div>

      <div>
        <p className="text-lg font-bold">QRHub</p>

        <p className="text-xs text-muted-foreground">Free QR Generator</p>
      </div>
    </Link>
  )
}
