"use client"

import { FlowerParticles } from "@/components/portfolio/flower-particles"
import { CircuitBackground } from "@/components/portfolio/circuit-background"
import { Navbar } from "@/components/portfolio/navbar"
import { HeroSection } from "@/components/portfolio/hero-section"
import { AboutSection } from "@/components/portfolio/about-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { TimelineSection } from "@/components/portfolio/timeline-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { Footer } from "@/components/portfolio/footer"

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <CircuitBackground />
      <FlowerParticles />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <TimelineSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
