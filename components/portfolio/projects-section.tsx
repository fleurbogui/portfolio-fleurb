"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import useSWR from "swr"
import { ExternalLink, Flower2 } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  role: string
  url: string | null
  featured: boolean
  display_order: number
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function ProjectsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const { data: projects } = useSWR<Project[]>("/api/projects", fetcher)

  const featured = projects?.filter((p) => p.featured) || []
  const others = projects?.filter((p) => !p.featured) || []

  return (
    <section id="projets" className="relative py-32 px-6" ref={ref}>
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/3 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-mono text-sm tracking-widest text-primary uppercase">Projets</p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            Des creations qui <span className="text-primary">eclosent</span>
          </h2>
        </motion.div>

        {/* Featured projects */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/30 backdrop-blur-sm transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Project card header with flower pattern */}
              <div className="relative h-40 overflow-hidden bg-gradient-to-br from-primary/10 via-card to-accent/10">
                {/* Decorative flowers */}
                <div className="absolute top-4 right-4 opacity-20 transition-opacity group-hover:opacity-40">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="40" r="8" fill="oklch(0.70 0.15 80)" />
                    <ellipse cx="40" cy="22" rx="7" ry="14" fill="oklch(0.72 0.17 350 / 0.6)" />
                    <ellipse cx="40" cy="58" rx="7" ry="14" fill="oklch(0.72 0.17 350 / 0.6)" />
                    <ellipse cx="22" cy="40" rx="14" ry="7" fill="oklch(0.72 0.17 350 / 0.4)" />
                    <ellipse cx="58" cy="40" rx="14" ry="7" fill="oklch(0.72 0.17 350 / 0.4)" />
                  </svg>
                </div>
                <div className="absolute bottom-4 left-4 opacity-10">
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <circle cx="25" cy="25" r="5" fill="oklch(0.65 0.18 160)" />
                    <ellipse cx="25" cy="13" rx="5" ry="9" fill="oklch(0.65 0.18 160 / 0.5)" />
                    <ellipse cx="25" cy="37" rx="5" ry="9" fill="oklch(0.65 0.18 160 / 0.5)" />
                    <ellipse cx="13" cy="25" rx="9" ry="5" fill="oklch(0.65 0.18 160 / 0.3)" />
                    <ellipse cx="37" cy="25" rx="9" ry="5" fill="oklch(0.65 0.18 160 / 0.3)" />
                  </svg>
                </div>
                {/* Circuit pattern */}
                <svg className="absolute inset-0 h-full w-full opacity-5" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="40" x2="100%" y2="40" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
                  <line x1="0" y1="80" x2="100%" y2="80" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
                  <line x1="0" y1="120" x2="100%" y2="120" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="font-serif text-2xl font-bold text-foreground">{project.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <p className="mb-4 text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">Role:</span> {project.role}
                </p>
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    Voir le projet <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects */}
        {others.length > 0 && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="group rounded-xl border border-border bg-card/20 p-5 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card/40"
              >
                <div className="mb-3 flex items-center gap-2">
                  <Flower2 className="h-4 w-4 text-primary/60" />
                  <h4 className="text-sm font-semibold text-foreground">{project.title}</h4>
                </div>
                <p className="mb-3 text-xs leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded bg-secondary/50 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
