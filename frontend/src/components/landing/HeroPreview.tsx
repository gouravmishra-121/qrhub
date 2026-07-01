export function HeroPreview() {
  return (
    <div className="mt-16 flex justify-center">
      <div className="rounded-2xl border bg-card p-6 shadow-lg sm:p-8">
        <div className="flex h-44 w-44 items-center justify-center rounded-lg border-2 border-dashed text-muted-foreground sm:h-56 sm:w-56">
          Live QR Preview
        </div>
      </div>
    </div>
  )
}
