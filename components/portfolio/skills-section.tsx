"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Langages",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M8 3L4 11h5l-1 10 8-12h-5l2-6H8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    skills: ["JavaScript", "TypeScript", "Python", "PHP", "C"],
  },
  {
    title: "Frameworks",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 3v18M3 9h18" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    skills: ["React", "NextJS", "Angular", "Laravel", "Flask", "React Native", "Flutter", "VueJS", "TailwindCSS", "Bootstrap"],
  },
  {
    title: "Bases de donnees",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="6" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    skills: ["MySQL", "MongoDB", "Firebase", "SQLite", "Supabase", "PostgreSQL", "SQLite3"],
  },
  {
    title: "Outils & Methodes",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    skills: ["Git", "GitHub", "Bitbucket", "Figma", "Framer", "API REST", "Tests Unitaires", "Merise", "Fast API"],
  },
  {
    title: "Reseaux",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
        <line x1="8" y1="6" x2="16" y2="6" stroke="currentColor" strokeWidth="1.5" />
        <line x1="6" y1="8" x2="6" y2="16" stroke="currentColor" strokeWidth="1.5" />
        <line x1="18" y1="8" x2="18" y2="16" stroke="currentColor" strokeWidth="1.5" />
        <line x1="8" y1="18" x2="16" y2="18" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    skills: ["Adressage IP", "Subnetting", "Modele OSI", "TCP/IP", "DNS"],
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="competences" className="relative py-32 px-6" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-mono text-sm tracking-widest text-primary uppercase">Competences</p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            Un jardin de <span className="text-primary">technologies</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * catIndex }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/30 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card/50"
            >
              {/* Decorative flower in corner */}
              <div className="absolute -top-3 -right-3 opacity-10 transition-opacity group-hover:opacity-20">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="6" fill="oklch(0.70 0.15 80)" />
                  <ellipse cx="30" cy="15" rx="6" ry="12" fill="oklch(0.72 0.17 350)" />
                  <ellipse cx="30" cy="45" rx="6" ry="12" fill="oklch(0.72 0.17 350)" />
                  <ellipse cx="15" cy="30" rx="12" ry="6" fill="oklch(0.72 0.17 350)" />
                  <ellipse cx="45" cy="30" rx="12" ry="6" fill="oklch(0.72 0.17 350)" />
                </svg>
              </div>

              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {cat.icon}
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
