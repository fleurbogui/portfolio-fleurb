"use client"

import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Briefcase, GraduationCap, FolderOpen, LogOut, Home } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { href: "/admin", icon: Home, label: "Tableau de bord" },
  { href: "/admin/experiences", icon: Briefcase, label: "Experiences" },
  { href: "/admin/education", icon: GraduationCap, label: "Formation" },
  { href: "/admin/projects", icon: FolderOpen, label: "Projets" },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const supabase = createClient()

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push("/auth/login")
    router.refresh()
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="hidden w-64 shrink-0 border-r border-border bg-card/30 lg:block">
        <div className="flex h-full flex-col">
          <div className="flex items-center gap-3 border-b border-border px-6 py-5">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="3.5" fill="oklch(0.70 0.15 80)" />
              <ellipse cx="16" cy="7" rx="4" ry="7" fill="oklch(0.72 0.17 350 / 0.8)" />
              <ellipse cx="16" cy="25" rx="4" ry="7" fill="oklch(0.72 0.17 350 / 0.8)" />
              <ellipse cx="7" cy="16" rx="7" ry="4" fill="oklch(0.72 0.17 350 / 0.6)" />
              <ellipse cx="25" cy="16" rx="7" ry="4" fill="oklch(0.72 0.17 350 / 0.6)" />
            </svg>
            <span className="font-serif text-lg font-bold text-foreground">
              Admin<span className="text-primary">.</span>
            </span>
          </div>

          <nav className="flex-1 space-y-1 p-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="border-t border-border p-4">
            <a
              href="/"
              className="mb-2 flex items-center gap-3 rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-foreground"
            >
              Voir le portfolio
            </a>
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive-foreground"
            >
              <LogOut className="h-4 w-4" />
              Deconnexion
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile header */}
      <div className="flex flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-border bg-card/30 px-4 py-3 lg:hidden">
          <span className="font-serif text-lg font-bold text-foreground">
            Admin<span className="text-primary">.</span>
          </span>
          <div className="flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-center rounded-lg p-2 ${
                    isActive ? "bg-primary/10 text-primary" : "text-muted-foreground"
                  }`}
                  aria-label={item.label}
                >
                  <item.icon className="h-4 w-4" />
                </Link>
              )
            })}
            <button onClick={handleLogout} className="rounded-lg p-2 text-muted-foreground hover:text-destructive-foreground" aria-label="Deconnexion">
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </header>

        <main className="flex-1 p-6 lg:p-8">{children}</main>
      </div>
    </div>
  )
}
