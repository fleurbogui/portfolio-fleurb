"use client"

import { useEffect, useState } from "react"

interface Petal {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  opacity: number
  type: "rose" | "cherry" | "leaf"
}

function PetalSVG({ type, size }: { type: Petal["type"]; size: number }) {
  if (type === "rose") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C12 2 8 6 8 10C8 12.5 9.5 14.5 12 15C14.5 14.5 16 12.5 16 10C16 6 12 2 12 2Z"
          fill="oklch(0.72 0.17 350 / 0.6)"
        />
        <path
          d="M12 5C12 5 6 8 6 12C6 15 8.5 17 12 17C15.5 17 18 15 18 12C18 8 12 5 12 5Z"
          fill="oklch(0.72 0.17 350 / 0.4)"
        />
        <circle cx="12" cy="14" r="2" fill="oklch(0.70 0.15 80 / 0.8)" />
      </svg>
    )
  }
  if (type === "cherry") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <ellipse
          cx="12"
          cy="12"
          rx="8"
          ry="5"
          transform="rotate(45 12 12)"
          fill="oklch(0.80 0.12 350 / 0.5)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="8"
          ry="5"
          transform="rotate(-45 12 12)"
          fill="oklch(0.80 0.12 350 / 0.3)"
        />
      </svg>
    )
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C12 2 4 8 4 14C4 18 7.5 22 12 22C16.5 22 20 18 20 14C20 8 12 2 12 2Z"
        fill="oklch(0.65 0.18 160 / 0.4)"
      />
      <line x1="12" y1="6" x2="12" y2="20" stroke="oklch(0.65 0.18 160 / 0.6)" strokeWidth="0.5" />
    </svg>
  )
}

export function FlowerParticles() {
  const [petals, setPetals] = useState<Petal[]>([])

  useEffect(() => {
    const types: Petal["type"][] = ["rose", "cherry", "leaf"]
    const generated: Petal[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 14 + Math.random() * 18,
      duration: 12 + Math.random() * 18,
      delay: Math.random() * 20,
      opacity: 0.3 + Math.random() * 0.5,
      type: types[Math.floor(Math.random() * types.length)],
    }))
    setPetals(generated)
  }, [])

  if (petals.length === 0) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-petal-fall"
          style={{
            left: `${petal.left}%`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
            opacity: petal.opacity,
          }}
        >
          <PetalSVG type={petal.type} size={petal.size} />
        </div>
      ))}
    </div>
  )
}
