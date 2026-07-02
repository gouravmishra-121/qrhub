import { Input } from '@/components/ui/input'

type QRColorPickerProps = {
  foregroundColor: string
  backgroundColor: string
  onForegroundChange: (value: string) => void
  onBackgroundChange: (value: string) => void
}

export function QRColorPicker({
  foregroundColor,
  backgroundColor,
  onForegroundChange,
  onBackgroundChange,
}: QRColorPickerProps) {
  return (
    <div className="mt-8 space-y-4">
      <div>
        <h3 className="text-sm font-medium">QR Colors</h3>
        <p className="mt-1 text-xs text-muted-foreground">
          Customize the QR pattern and background color.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-xs font-medium text-muted-foreground">Foreground</label>

          <div className="flex items-center gap-3">
            <Input
              type="color"
              value={foregroundColor}
              onChange={(event) => onForegroundChange(event.target.value)}
              className="h-10 w-14 cursor-pointer p-1"
            />

            <Input
              value={foregroundColor}
              onChange={(event) => onForegroundChange(event.target.value)}
              className="h-10"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-medium text-muted-foreground">Background</label>

          <div className="flex items-center gap-3">
            <Input
              type="color"
              value={backgroundColor}
              onChange={(event) => onBackgroundChange(event.target.value)}
              className="h-10 w-14 cursor-pointer p-1"
            />

            <Input
              value={backgroundColor}
              onChange={(event) => onBackgroundChange(event.target.value)}
              className="h-10"
            />
          </div>
        </div>
      </div>

      <p className="text-xs text-muted-foreground">
        Tip: Keep strong contrast between foreground and background for better scanning.
      </p>
    </div>
  )
}
