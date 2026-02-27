"use client"

import { useState } from "react"
import useSWR from "swr"
import { Plus, Pencil, Trash2, X, Save, Loader2, Star } from "lucide-react"

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

const fetcher = (url: string) => fetch(url).then((r) => r.json())

const emptyForm = {
  title: "",
  description: "",
  technologies: "",
  role: "",
  url: "",
  featured: false,
  display_order: 0,
}

export default function ProjectsAdmin() {
  const { data: projects, mutate } = useSWR<Project[]>("/api/projects", fetcher)
  const [editing, setEditing] = useState<string | null>(null)
  const [creating, setCreating] = useState(false)
  const [form, setForm] = useState(emptyForm)
  const [loading, setLoading] = useState(false)

  function startEdit(project: Project) {
    setEditing(project.id)
    setCreating(false)
    setForm({
      title: project.title,
      description: project.description || "",
      technologies: project.technologies.join(", "),
      role: project.role || "",
      url: project.url || "",
      featured: project.featured,
      display_order: project.display_order,
    })
  }

  function startCreate() {
    setCreating(true)
    setEditing(null)
    setForm(emptyForm)
  }

  function cancel() {
    setEditing(null)
    setCreating(false)
    setForm(emptyForm)
  }

  async function handleSave() {
    setLoading(true)
    const payload = {
      ...form,
      technologies: form.technologies.split(",").map((t) => t.trim()).filter(Boolean),
      url: form.url || null,
      display_order: Number(form.display_order),
    }

    if (editing) {
      await fetch("/api/projects", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: editing, ...payload }),
      })
    } else {
      await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
    }

    await mutate()
    cancel()
    setLoading(false)
  }

  async function handleDelete(id: string) {
    if (!confirm("Supprimer ce projet ?")) return
    await fetch(`/api/projects?id=${id}`, { method: "DELETE" })
    await mutate()
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl font-bold text-foreground">Projets</h1>
          <p className="mt-1 text-sm text-muted-foreground">Gerez vos projets realises</p>
        </div>
        <button
          onClick={startCreate}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25"
        >
          <Plus className="h-4 w-4" /> Ajouter
        </button>
      </div>

      {(creating || editing) && (
        <div className="mb-8 rounded-2xl border border-primary/30 bg-card/50 p-6 backdrop-blur-sm">
          <h3 className="mb-4 font-serif text-lg font-bold text-foreground">
            {creating ? "Nouveau projet" : "Modifier le projet"}
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-medium text-muted-foreground">Titre</label>
              <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full rounded-lg border border-border bg-input px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none" />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-muted-foreground">URL</label>
              <input value={form.url} onChange={(e) => setForm({ ...form, url: e.target.value })} placeholder="https://..." className="w-full rounded-lg border border-border bg-input px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-xs font-medium text-muted-foreground">Description</label>
              <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} className="w-full rounded-lg border border-border bg-input px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-xs font-medium text-muted-foreground">Role</label>
              <input value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className="w-full rounded-lg border border-border bg-input px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none" />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-muted-foreground">Technologies (separees par des virgules)</label>
              <input value={form.technologies} onChange={(e) => setForm({ ...form, technologies: e.target.value })} placeholder="React, NextJS, TailwindCSS" className="w-full rounded-lg border border-border bg-input px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none" />
            </div>
            <div className="flex items-end gap-6">
              <div>
                <label className="mb-1 block text-xs font-medium text-muted-foreground">Ordre</label>
                <input type="number" value={form.display_order} onChange={(e) => setForm({ ...form, display_order: Number(e.target.value) })} className="w-24 rounded-lg border border-border bg-input px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none" />
              </div>
              <label className="flex cursor-pointer items-center gap-2 pb-2">
                <input type="checkbox" checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} className="h-4 w-4 rounded border-border accent-primary" />
                <span className="text-sm text-foreground">Mis en avant</span>
              </label>
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            <button onClick={handleSave} disabled={loading} className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground disabled:opacity-50">
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
              Enregistrer
            </button>
            <button onClick={cancel} className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground hover:text-foreground">
              <X className="h-4 w-4" /> Annuler
            </button>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {projects?.map((project) => (
          <div key={project.id} className="group flex items-start justify-between rounded-xl border border-border bg-card/30 p-5 backdrop-blur-sm transition-all hover:border-primary/20">
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <h3 className="text-base font-semibold text-foreground">{project.title}</h3>
                {project.featured && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-chart-3/10 px-2 py-0.5 text-xs font-medium text-chart-3">
                    <Star className="h-3 w-3" /> En avant
                  </span>
                )}
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">#{project.display_order}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{project.description}</p>
              {project.technologies.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {project.technologies.map((t) => (
                    <span key={t} className="rounded bg-secondary/50 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">{t}</span>
                  ))}
                </div>
              )}
            </div>
            <div className="flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
              <button onClick={() => startEdit(project)} className="rounded-lg p-2 text-muted-foreground hover:bg-primary/10 hover:text-primary" aria-label="Modifier">
                <Pencil className="h-4 w-4" />
              </button>
              <button onClick={() => handleDelete(project.id)} className="rounded-lg p-2 text-muted-foreground hover:bg-destructive/10 hover:text-destructive-foreground" aria-label="Supprimer">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
