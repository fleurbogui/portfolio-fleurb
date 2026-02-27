"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "A propos" },
  { href: "#competences", label: "Competences" },
  { href: "#parcours", label: "Parcours" },
  { href: "#projets", label: "Projets" },
  { href: "#contact", label: "Contact" },
]

function FlowerLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="shrink-0">
      <circle cx="16" cy="16" r="3.5" fill="oklch(0.70 0.15 80)" />
      <ellipse cx="16" cy="7" rx="4" ry="7" fill="oklch(0.72 0.17 350 / 0.8)" />
      <ellipse cx="16" cy="25" rx="4" ry="7" fill="oklch(0.72 0.17 350 / 0.8)" />
      <ellipse cx="7" cy="16" rx="7" ry="4" fill="oklch(0.72 0.17 350 / 0.6)" />
      <ellipse cx="25" cy="16" rx="7" ry="4" fill="oklch(0.72 0.17 350 / 0.6)" />
      <ellipse cx="9.5" cy="9.5" rx="4" ry="6.5" transform="rotate(-45 9.5 9.5)" fill="oklch(0.72 0.17 350 / 0.5)" />
      <ellipse cx="22.5" cy="22.5" rx="4" ry="6.5" transform="rotate(-45 22.5 22.5)" fill="oklch(0.72 0.17 350 / 0.5)" />
      <ellipse cx="22.5" cy="9.5" rx="4" ry="6.5" transform="rotate(45 22.5 9.5)" fill="oklch(0.72 0.17 350 / 0.7)" />
      <ellipse cx="9.5" cy="22.5" rx="4" ry="6.5" transform="rotate(45 9.5 22.5)" fill="oklch(0.72 0.17 350 / 0.7)" />
    </svg>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 right-0 left-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 shadow-lg shadow-primary/5 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#accueil" className="flex items-center gap-3">
          <FlowerLogo />
          <span className="font-serif text-xl font-bold tracking-tight text-foreground">
            Fleur<span className="text-primary">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
