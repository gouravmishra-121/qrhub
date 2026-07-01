export function HeroPreview() {
  return (
    <div className="mt-16 flex justify-center">
      <div className="rounded-2xl border bg-card p-8 shadow-lg">
        <div className="flex h-56 w-56 items-center justify-center rounded-lg bg-muted">
          <span className="text-muted-foreground">QR Preview</span>
        </div>
      </div>
    </div>
  )
}
