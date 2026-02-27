"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"

const contactInfo = [
  { icon: Mail, label: "Email", value: "fleur.bogui@epitech.eu", href: "mailto:fleur.bogui@epitech.eu" },
  { icon: Phone, label: "Telephone", value: "+225 07 68 88 8980", href: "tel:+2250768888980" },
  { icon: MapPin, label: "Localisation", value: "Abidjan, Cote d'Ivoire", href: null },
]

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/fleur-bogui-0814812a9" },
  { icon: Github, label: "GitHub", href: "https://github.com/fleurbogui" },
]

export function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="relative py-32 px-6" ref={ref}>
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-mono text-sm tracking-widest text-primary uppercase">Contact</p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            Cultivons ensemble votre <span className="text-primary">prochain projet</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
            Vous avez un projet en tête ou souhaitez collaborer ? N{"'"}hesitez pas a me contacter.
            Je serai ravie d{"'"}echanger avec vous.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Contact info cards */}
          <div className="space-y-4">
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="flex items-center gap-4 rounded-xl border border-border bg-card/30 p-5 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card/50"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">{item.label}</p>
                      <p className="text-sm font-semibold text-foreground">{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 rounded-xl border border-border bg-card/30 p-5 backdrop-blur-sm">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">{item.label}</p>
                      <p className="text-sm font-semibold text-foreground">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Social & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card/30 p-8 backdrop-blur-sm"
          >
            {/* Decorative flower */}
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="mb-6">
              <circle cx="40" cy="40" r="8" fill="oklch(0.70 0.15 80 / 0.8)" />
              <ellipse cx="40" cy="20" rx="7" ry="14" fill="oklch(0.72 0.17 350 / 0.5)" />
              <ellipse cx="40" cy="60" rx="7" ry="14" fill="oklch(0.72 0.17 350 / 0.5)" />
              <ellipse cx="20" cy="40" rx="14" ry="7" fill="oklch(0.72 0.17 350 / 0.4)" />
              <ellipse cx="60" cy="40" rx="14" ry="7" fill="oklch(0.72 0.17 350 / 0.4)" />
              <ellipse cx="26" cy="26" rx="6" ry="10" transform="rotate(-45 26 26)" fill="oklch(0.72 0.17 350 / 0.3)" />
              <ellipse cx="54" cy="54" rx="6" ry="10" transform="rotate(-45 54 54)" fill="oklch(0.72 0.17 350 / 0.3)" />
              <ellipse cx="54" cy="26" rx="6" ry="10" transform="rotate(45 54 26)" fill="oklch(0.72 0.17 350 / 0.35)" />
              <ellipse cx="26" cy="54" rx="6" ry="10" transform="rotate(45 26 54)" fill="oklch(0.72 0.17 350 / 0.35)" />
            </svg>

            <h3 className="mb-2 font-serif text-xl font-bold text-foreground">Retrouvez-moi</h3>
            <p className="mb-6 text-center text-sm text-muted-foreground">
              Suivez mon travail et connectons-nous sur les reseaux
            </p>

            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary/30 text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
