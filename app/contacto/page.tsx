'use client'
import { useState } from 'react'

export default function Contacto() {
  const [status, setStatus] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    setStatus('Enviando...')
    const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
    const json = await res.json()
    if (res.ok) setStatus('¡Gracias! Tu mensaje fue enviado.')
    else setStatus(json.error || 'No se pudo enviar. Revisa la configuración de correo.')
    form.reset()
  }

  return (
    <section className="pt-6 md:pt-10 max-w-2xl">
      <h1 className="section-title mb-6">Contacto</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Nombre*</label>
          <input name="nombre" required className="w-full border p-2 rounded bg-white" />
        </div>
        <div>
          <label className="block mb-1">Apellidos*</label>
          <input name="apellidos" required className="w-full border p-2 rounded bg-white" />
        </div>
        <div>
          <label className="block mb-1">Correo electrónico*</label>
          <input type="email" name="email" required className="w-full border p-2 rounded bg-white" />
        </div>
        <div>
          <label className="block mb-1">Mensaje*</label>
          <textarea name="mensaje" required rows={6} className="w-full border p-2 rounded bg-white" />
        </div>
        <button className="px-5 py-2 bg-ks-brown text-white rounded">Enviar</button>
        {status && <p className="mt-3 italic">{status}</p>}
      </form>
    </section>
  )
}
