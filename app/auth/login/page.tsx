"use client"

import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError("")

    const { error: authError } = await supabase.auth.signInWithPassword({ email, password })

    if (authError) {
      setError(authError.message)
      setLoading(false)
      return
    }

    router.push("/admin")
    router.refresh()
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-10" aria-hidden="true">
        <div className="absolute top-1/4 left-1/3 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="mb-8 text-center">
          {/* Flower logo */}
          <svg width="48" height="48" viewBox="0 0 32 32" fill="none" className="mx-auto mb-4">
            <circle cx="16" cy="16" r="3.5" fill="oklch(0.70 0.15 80)" />
            <ellipse cx="16" cy="7" rx="4" ry="7" fill="oklch(0.72 0.17 350 / 0.8)" />
            <ellipse cx="16" cy="25" rx="4" ry="7" fill="oklch(0.72 0.17 350 / 0.8)" />
            <ellipse cx="7" cy="16" rx="7" ry="4" fill="oklch(0.72 0.17 350 / 0.6)" />
            <ellipse cx="25" cy="16" rx="7" ry="4" fill="oklch(0.72 0.17 350 / 0.6)" />
          </svg>
          <h1 className="font-serif text-2xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="mt-1 text-sm text-muted-foreground">Connectez-vous pour gerer votre portfolio</p>
        </div>

        <form onSubmit={handleLogin} className="rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm">
          {error && (
            <div className="mb-4 rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive-foreground">
              {error}
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:outline-none"
              placeholder="fleur.bogui@epitech.eu"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-foreground">Mot de passe</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:outline-none"
              placeholder="Votre mot de passe"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50"
          >
            {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Connexion...</> : "Se connecter"}
          </button>

          <a href="/" className="mt-4 block text-center text-sm text-muted-foreground hover:text-primary transition-colors">
            Retour au portfolio
          </a>
        </form>
      </div>
    </div>
  )
}
