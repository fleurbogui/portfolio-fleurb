"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

function RobotFlowerIcon() {
  return (
    <svg width="280" height="280" viewBox="0 0 280 280" fill="none" className="mx-auto">
      {/* Robot head outline */}
      <rect x="70" y="40" width="140" height="120" rx="24" stroke="oklch(0.72 0.17 350 / 0.3)" strokeWidth="1.5" fill="oklch(0.12 0.015 280 / 0.5)" />
      {/* Antenna */}
      <line x1="140" y1="40" x2="140" y2="15" stroke="oklch(0.65 0.18 160 / 0.6)" strokeWidth="1.5" />
      <circle cx="140" cy="12" r="5" fill="oklch(0.72 0.17 350 / 0.8)" />
      {/* Eyes - flowers */}
      <g>
        <circle cx="110" cy="90" r="4" fill="oklch(0.70 0.15 80 / 0.9)" />
        <ellipse cx="110" cy="80" rx="3" ry="6" fill="oklch(0.72 0.17 350 / 0.6)" />
        <ellipse cx="110" cy="100" rx="3" ry="6" fill="oklch(0.72 0.17 350 / 0.6)" />
        <ellipse cx="100" cy="90" rx="6" ry="3" fill="oklch(0.72 0.17 350 / 0.5)" />
        <ellipse cx="120" cy="90" rx="6" ry="3" fill="oklch(0.72 0.17 350 / 0.5)" />
      </g>
      <g>
        <circle cx="170" cy="90" r="4" fill="oklch(0.70 0.15 80 / 0.9)" />
        <ellipse cx="170" cy="80" rx="3" ry="6" fill="oklch(0.72 0.17 350 / 0.6)" />
        <ellipse cx="170" cy="100" rx="3" ry="6" fill="oklch(0.72 0.17 350 / 0.6)" />
        <ellipse cx="160" cy="90" rx="6" ry="3" fill="oklch(0.72 0.17 350 / 0.5)" />
        <ellipse cx="180" cy="90" rx="6" ry="3" fill="oklch(0.72 0.17 350 / 0.5)" />
      </g>
      {/* Smile */}
      <path d="M120 125 Q140 140 160 125" stroke="oklch(0.65 0.18 160 / 0.6)" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Body */}
      <rect x="90" y="165" width="100" height="70" rx="16" stroke="oklch(0.72 0.17 350 / 0.2)" strokeWidth="1.5" fill="oklch(0.12 0.015 280 / 0.3)" />
      {/* Heart flower in chest */}
      <circle cx="140" cy="200" r="8" fill="oklch(0.72 0.17 350 / 0.3)" />
      <circle cx="140" cy="200" r="3" fill="oklch(0.72 0.17 350 / 0.8)" />
      <ellipse cx="140" cy="190" rx="3" ry="6" fill="oklch(0.80 0.12 350 / 0.5)" />
      <ellipse cx="150" cy="200" rx="6" ry="3" fill="oklch(0.80 0.12 350 / 0.5)" />
      <ellipse cx="140" cy="210" rx="3" ry="6" fill="oklch(0.80 0.12 350 / 0.5)" />
      <ellipse cx="130" cy="200" rx="6" ry="3" fill="oklch(0.80 0.12 350 / 0.5)" />
      {/* Arms */}
      <line x1="90" y1="185" x2="55" y2="200" stroke="oklch(0.65 0.18 160 / 0.3)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="190" y1="185" x2="225" y2="200" stroke="oklch(0.65 0.18 160 / 0.3)" strokeWidth="1.5" strokeLinecap="round" />
      {/* Hands as small flowers */}
      <circle cx="50" cy="203" r="6" fill="oklch(0.65 0.18 160 / 0.4)" />
      <circle cx="230" cy="203" r="6" fill="oklch(0.65 0.18 160 / 0.4)" />
      {/* Circuit lines on body */}
      <line x1="110" y1="175" x2="110" y2="225" stroke="oklch(0.72 0.17 350 / 0.15)" strokeWidth="0.5" strokeDasharray="3 3" />
      <line x1="170" y1="175" x2="170" y2="225" stroke="oklch(0.72 0.17 350 / 0.15)" strokeWidth="0.5" strokeDasharray="3 3" />
      {/* Neck */}
      <rect x="125" y="158" width="30" height="10" rx="4" fill="oklch(0.18 0.02 280 / 0.8)" stroke="oklch(0.72 0.17 350 / 0.2)" strokeWidth="0.5" />
    </svg>
  )
}

export function HeroSection() {
  return (
    <section id="accueil" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="mb-4 font-mono text-sm tracking-widest text-primary uppercase">
                {"<"} Developpeuse Fullstack {"/>"}
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mb-6 font-serif text-5xl leading-tight font-bold tracking-tight text-foreground md:text-7xl text-balance"
            >
              Fleur{" "}
              <span className="text-primary">BOGUI</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mx-auto mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground lg:mx-0"
            >
              Je transforme vos idées en des projets concrets. 
              Passionnée par le <span className="text-primary">design UI/UX</span> et le 
              <span className="text-accent"> developpement web</span>, je crée des 
              expériences numeriques qui fleurissent.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex items-center justify-center gap-4 lg:justify-start"
            >
              <a
                href="#projets"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                Voir mes projets
                <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:text-primary"
              >
                Me contacter
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 flex items-center justify-center gap-5 lg:justify-start"
            >
              <a href="https://www.linkedin.com/in/fleur-bogui-0814812a9" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/fleurbogui" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="mailto:fleur.bogui@epitech.eu" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </div>

          {/* Robot Flower Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="animate-float flex-shrink-0"
          >
            <RobotFlowerIcon />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground">Défiler</span>
          <ArrowDown className="h-4 w-4 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
