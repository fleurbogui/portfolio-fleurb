"use client"

export function CircuitBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-20" aria-hidden="true">
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            {/* Horizontal lines */}
            <line x1="0" y1="50" x2="80" y2="50" stroke="oklch(0.72 0.17 350 / 0.3)" strokeWidth="0.5" />
            <line x1="120" y1="50" x2="200" y2="50" stroke="oklch(0.65 0.18 160 / 0.3)" strokeWidth="0.5" />
            {/* Vertical lines */}
            <line x1="50" y1="0" x2="50" y2="80" stroke="oklch(0.72 0.17 350 / 0.2)" strokeWidth="0.5" />
            <line x1="150" y1="120" x2="150" y2="200" stroke="oklch(0.65 0.18 160 / 0.2)" strokeWidth="0.5" />
            {/* Nodes */}
            <circle cx="80" cy="50" r="3" fill="oklch(0.72 0.17 350 / 0.4)" />
            <circle cx="120" cy="50" r="2" fill="oklch(0.65 0.18 160 / 0.4)" />
            <circle cx="50" cy="80" r="2.5" fill="oklch(0.72 0.17 350 / 0.3)" />
            <circle cx="150" cy="120" r="2" fill="oklch(0.65 0.18 160 / 0.3)" />
            {/* Diagonal connector */}
            <line x1="80" y1="50" x2="120" y2="50" stroke="oklch(0.72 0.17 350 / 0.15)" strokeWidth="0.5" strokeDasharray="4 4" />
            {/* Flower node */}
            <circle cx="100" cy="100" r="5" fill="none" stroke="oklch(0.72 0.17 350 / 0.2)" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="1.5" fill="oklch(0.70 0.15 80 / 0.4)" />
            {/* Petal shapes around center node */}
            <ellipse cx="100" cy="92" rx="3" ry="5" fill="oklch(0.72 0.17 350 / 0.1)" />
            <ellipse cx="108" cy="100" rx="5" ry="3" fill="oklch(0.72 0.17 350 / 0.1)" />
            <ellipse cx="100" cy="108" rx="3" ry="5" fill="oklch(0.72 0.17 350 / 0.1)" />
            <ellipse cx="92" cy="100" rx="5" ry="3" fill="oklch(0.72 0.17 350 / 0.1)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    </div>
  )
}
