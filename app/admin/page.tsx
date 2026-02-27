"use client"

import useSWR from "swr"
import { Briefcase, GraduationCap, FolderOpen, TrendingUp } from "lucide-react"
import Link from "next/link"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export default function AdminDashboard() {
  const { data: experiences } = useSWR("/api/experiences", fetcher)
  const { data: education } = useSWR("/api/education", fetcher)
  const { data: projects } = useSWR("/api/projects", fetcher)

  const stats = [
    { label: "Experiences", count: experiences?.length ?? 0, icon: Briefcase, href: "/admin/experiences", color: "text-primary bg-primary/10" },
    { label: "Formations", count: education?.length ?? 0, icon: GraduationCap, href: "/admin/education", color: "text-accent bg-accent/10" },
    { label: "Projets", count: projects?.length ?? 0, icon: FolderOpen, href: "/admin/projects", color: "text-chart-3 bg-chart-3/10" },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-foreground">Tableau de bord</h1>
        <p className="mt-1 text-sm text-muted-foreground">Gerez le contenu de votre portfolio</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="group rounded-2xl border border-border bg-card/30 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="flex items-center justify-between">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <TrendingUp className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <div className="mt-4">
              <p className="text-3xl font-bold text-foreground">{stat.count}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick actions */}
      <div className="mt-10">
        <h2 className="mb-4 font-serif text-xl font-bold text-foreground">Actions rapides</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/admin/experiences"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/30 px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary/30 hover:text-primary"
          >
            <Briefcase className="h-4 w-4" /> Gerer les experiences
          </Link>
          <Link
            href="/admin/education"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/30 px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:border-accent/30 hover:text-accent"
          >
            <GraduationCap className="h-4 w-4" /> Gerer les formations
          </Link>
          <Link
            href="/admin/projects"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/30 px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:border-chart-3/30 hover:text-chart-3"
          >
            <FolderOpen className="h-4 w-4" /> Gerer les projets
          </Link>
        </div>
      </div>
    </div>
  )
}
