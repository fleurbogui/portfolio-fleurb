"use client"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/20 py-8 px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="2.5" fill="oklch(0.70 0.15 80)" />
            <ellipse cx="12" cy="5" rx="3" ry="5" fill="oklch(0.72 0.17 350 / 0.6)" />
            <ellipse cx="12" cy="19" rx="3" ry="5" fill="oklch(0.72 0.17 350 / 0.6)" />
            <ellipse cx="5" cy="12" rx="5" ry="3" fill="oklch(0.72 0.17 350 / 0.4)" />
            <ellipse cx="19" cy="12" rx="5" ry="3" fill="oklch(0.72 0.17 350 / 0.4)" />
          </svg>
          <span className="font-serif text-sm font-semibold text-foreground">
            Fleur<span className="text-primary">.</span>BOGUI
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          {new Date().getFullYear()} Fleur BOGUI. Concu avec passion et creativite.
        </p>
      </div>
    </footer>
  )
}
