"use client"

import { useState } from "react"
import useSWR from "swr"
import { Plus, Pencil, Trash2, X, Save, Loader2 } from "lucide-react"

interface Education {
  id: string
  degree: string
  school: string
  location: string
  start_date: string
  end_date: string | null
  description: string | null
  display_order: number
}

const fetcher = (url: string) => fetch(url).then((r) => r.json())

const emptyForm = {
  degree: "",
  school: "",
  location: "",
  start_date: "",
  end_date: "",
  description: "",
  display_order: 0,
}

export default function EducationAdmin() {
  const { data: education, mutate } = useSWR<Education[]>("/api/education", fetcher)
  const [editing, setEditing] = useState<string | null>(null)
  const [creating, setCreating] = useState(false)
  const [form, setForm] = useState(emptyForm)
  const [loading, setLoading] = useState(false)

  function startEdit(edu: Education) {
    setEditing(edu.id)
    setCreating(false)
    setForm({
      degree: edu.degree,
      school: edu.school,
      location: edu.location || "",
      start_date: edu.start_date,
      end_date: edu.end_date || "",
      description: edu.description || "",
      display_order: edu.display_order,
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
      end_date: form.end_date || null,
      description: form.description || null,
      display_order: Number(form.display_order),
    }

    if (editing) {
      await fetch("/api/education", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: editing, ...payload }),
      })
    } else {
      await fetch("/api/education", {
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
    if (!confirm("Supprimer cette formation ?")) return
    await fetch(`/api/education?id=${id}`, { method: "DELETE" })
    await mutate()
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl font-bold text-foreground">Formations</h1>
          <p className="mt-1 text-sm text-muted-foreground">Gerez votre parcours educatif</p>
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
            {creating ? "Nouvelle formation" : "Modifier la formation"}
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="mb-1 block text-xs font-medium text-muted-foreground">Diplome / Formation</label>
              <input value={form.degree} onChange={(e) => setForm({ ...form, degree: e.target.value })} className="w-full rounded-lg border border-border bg-input px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none" />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-muted-foreground">Etablissement</label>
              <input value={form.school} onChange={(e) => setForm({ ...form, school: e.target.value })} className="w-full rounded-lg border border-border bg-input px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none" />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-muted-foreground">Localisation</label>
              <input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="w-full rounded-lg border border-border bg-input px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none" />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-muted-foreground">Date de debut</label>
              <input value={form.start_date} onChange={(e) => setForm({ ...form, start_date: e.target.value })} placeholder="Octobre 2024" className="w-full rounded-lg border border-border bg-input px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none" />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-muted-foreground">Date de fin</label>
              <input value={form.end_date} onChange={(e) => setForm({ ...form, end_date: e.target.value })} placeholder="Laisser vide si en cours" className="w-full rounded-lg border border-border bg-input px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none" />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-muted-foreground">Ordre d{"'"}affichage</label>
              <input type="number" value={form.display_order} onChange={(e) => setForm({ ...form, display_order: Number(e.target.value) })} className="w-full rounded-lg border border-border bg-input px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-xs font-medium text-muted-foreground">Description (optionnel)</label>
              <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={2} className="w-full rounded-lg border border-border bg-input px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none" />
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
        {education?.map((edu) => (
          <div key={edu.id} className="group flex items-start justify-between rounded-xl border border-border bg-card/30 p-5 backdrop-blur-sm transition-all hover:border-accent/20">
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <h3 className="text-base font-semibold text-foreground">{edu.degree}</h3>
                <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">#{edu.display_order}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{edu.school} - {edu.location}</p>
              <p className="mt-0.5 font-mono text-xs text-accent">{edu.start_date} - {edu.end_date || "En cours"}</p>
            </div>
            <div className="flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
              <button onClick={() => startEdit(edu)} className="rounded-lg p-2 text-muted-foreground hover:bg-primary/10 hover:text-primary" aria-label="Modifier">
                <Pencil className="h-4 w-4" />
              </button>
              <button onClick={() => handleDelete(edu.id)} className="rounded-lg p-2 text-muted-foreground hover:bg-destructive/10 hover:text-destructive-foreground" aria-label="Supprimer">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
