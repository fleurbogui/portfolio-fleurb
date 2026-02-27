"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, GraduationCap, Heart, Sparkles } from "lucide-react"

const qualities = [
  { icon: Sparkles, title: "Adaptabilite", text: "Facilite a apprendre de nouvelles technologies et a integrer des solutions innovantes." },
  { icon: Heart, title: "Passion UI/UX", text: "Concevoir des interfaces belles, intuitives et accessibles est au coeur de ma demarche." },
  { icon: GraduationCap, title: "Rigueur", text: "Application de methodes de modelisation, tests unitaires et respect des bonnes pratiques." },
  { icon: MapPin, title: "Polyvalence", text: "Capacite a m'adapter a differents langages, frameworks et outils selon les besoins." },
]

export function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="apropos" className="relative py-32 px-6" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-mono text-sm tracking-widest text-primary uppercase">A propos</p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            Où la technologie rencontre la <span className="text-primary">créativite</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1"
          >
            <div className="rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="3" fill="oklch(0.70 0.15 80)" />
                    <ellipse cx="12" cy="5" rx="3" ry="5" fill="oklch(0.72 0.17 350 / 0.7)" />
                    <ellipse cx="12" cy="19" rx="3" ry="5" fill="oklch(0.72 0.17 350 / 0.7)" />
                    <ellipse cx="5" cy="12" rx="5" ry="3" fill="oklch(0.72 0.17 350 / 0.5)" />
                    <ellipse cx="19" cy="12" rx="5" ry="3" fill="oklch(0.72 0.17 350 / 0.5)" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">Mon parcours</h3>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Développeuse Fullstack passionnée basee a <span className="font-medium text-foreground">Abidjan, Cote d{"'"}Ivoire</span>, 
                  Je transforme vos idées en de vrais projets.
                </p>
                <p>
                  Forte d{"'"}expériences variées en front et back-end, je maitrise l{"'"}ensemble du cycle de 
                  developpement. Du design d{"'"}interface à l{"'"}architecture backend, je crée des solutions 
                  complètes et élegantes.
                </p>
                <p>
                  Actuellement en <span className="font-medium text-primary">Licence 3 professionnelle en réseau et génie logiciel</span> a 
                  PIGIER, je continue d{"'"}approfondir mes compétences tout en contribuant a des projets concrets.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  <MapPin className="h-3 w-3" /> Abidjan, CI
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  Fullstack Developer
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  UI/UX Enthusiast
                </span>
              </div>
            </div>
          </motion.div>

          {/* Qualities grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {qualities.map((quality, i) => (
                <motion.div
                  key={quality.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="group rounded-xl border border-border bg-card/30 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card/60"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <quality.icon className="h-5 w-5" />
                  </div>
                  <h4 className="mb-1.5 text-sm font-semibold text-foreground">{quality.title}</h4>
                  <p className="text-xs leading-relaxed text-muted-foreground">{quality.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
