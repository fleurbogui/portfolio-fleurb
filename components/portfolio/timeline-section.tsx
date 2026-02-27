"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import useSWR from "swr"
import { Briefcase, GraduationCap } from "lucide-react"

interface Experience {
  id: string
  title: string
  company: string
  location: string
  start_date: string
  end_date: string | null
  description: string
  technologies: string[]
  display_order: number
}

interface Education {
  id: string
  degree: string
  school: string
  location: string
  start_date: string
  end_date: string | null
  display_order: number
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function TimelineSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const { data: experiences } = useSWR<Experience[]>("/api/experiences", fetcher)
  const { data: education } = useSWR<Education[]>("/api/education", fetcher)

  return (
    <section id="parcours" className="relative py-32 px-6" ref={ref}>
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-mono text-sm tracking-widest text-primary uppercase">Parcours</p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            Chaque etape, une <span className="text-primary">floraison</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Experiences */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground">Experience</h3>
            </motion.div>

            <div className="relative space-y-6">
              {/* Timeline line */}
              <div className="absolute top-0 bottom-0 left-5 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

              {experiences?.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                  className="relative pl-14"
                >
                  {/* Timeline dot - flower */}
                  <div className="absolute left-2.5 top-1">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="3" fill="oklch(0.70 0.15 80)" />
                      <ellipse cx="10" cy="4" rx="2.5" ry="4" fill="oklch(0.72 0.17 350 / 0.7)" />
                      <ellipse cx="10" cy="16" rx="2.5" ry="4" fill="oklch(0.72 0.17 350 / 0.7)" />
                      <ellipse cx="4" cy="10" rx="4" ry="2.5" fill="oklch(0.72 0.17 350 / 0.5)" />
                      <ellipse cx="16" cy="10" rx="4" ry="2.5" fill="oklch(0.72 0.17 350 / 0.5)" />
                    </svg>
                  </div>

                  <div className="rounded-xl border border-border bg-card/30 p-5 backdrop-blur-sm transition-all hover:border-primary/30">
                    <p className="mb-1 font-mono text-xs text-primary">
                      {exp.start_date} - {exp.end_date || "Present"}
                    </p>
                    <h4 className="mb-1 text-base font-semibold text-foreground">{exp.title}</h4>
                    <p className="mb-3 text-sm text-muted-foreground">
                      {exp.company} &middot; {exp.location}
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground">Formation</h3>
            </motion.div>

            <div className="relative space-y-6">
              <div className="absolute top-0 bottom-0 left-5 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent" />

              {education?.map((edu, i) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="relative pl-14"
                >
                  <div className="absolute left-2.5 top-1">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="3" fill="oklch(0.70 0.15 80)" />
                      <ellipse cx="10" cy="4" rx="2.5" ry="4" fill="oklch(0.65 0.18 160 / 0.7)" />
                      <ellipse cx="10" cy="16" rx="2.5" ry="4" fill="oklch(0.65 0.18 160 / 0.7)" />
                      <ellipse cx="4" cy="10" rx="4" ry="2.5" fill="oklch(0.65 0.18 160 / 0.5)" />
                      <ellipse cx="16" cy="10" rx="4" ry="2.5" fill="oklch(0.65 0.18 160 / 0.5)" />
                    </svg>
                  </div>

                  <div className="rounded-xl border border-border bg-card/30 p-5 backdrop-blur-sm transition-all hover:border-accent/30">
                    <p className="mb-1 font-mono text-xs text-accent">
                      {edu.start_date} - {edu.end_date || "Present"}
                    </p>
                    <h4 className="mb-1 text-base font-semibold text-foreground">{edu.degree}</h4>
                    <p className="text-sm text-muted-foreground">
                      {edu.school} &middot; {edu.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
