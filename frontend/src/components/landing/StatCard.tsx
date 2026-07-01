interface StatCardProps {
  value: string
  label: string
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="rounded-2xl border bg-card p-8 text-center transition-all duration-300 hover:shadow-lg">
      <div className="text-4xl font-bold text-primary">{value}</div>

      <p className="mt-3 text-muted-foreground">{label}</p>
    </div>
  )
}
