'use client'
import { useCart } from '@/components/CartProvider'
import { formatEUR } from '@/lib/currency'
import { useState } from 'react'

export default function Carrito() {
  const { items, remove, total, clear } = useCart()
  const [loading, setLoading] = useState(false)
  const hasStripe = !!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

  async function pagar() {
    try {
      setLoading(true)
      const res = await fetch('/api/checkout_sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items })
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Error creando sesión')
      window.location.href = json.url
    } catch (e: any) {
      alert(e.message + '\\n\\nConfigura STRIPE_SECRET_KEY y NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY en Vercel para habilitar pagos.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="pt-6 md:pt-10">
      <h1 className="section-title mb-6">Tu carrito</h1>
      {items.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div className="space-y-4">
          {items.map(i => (
            <div key={i.id} className="flex items-center justify-between border-b pb-3">
              <div>
                <p className="font-medium">{i.name}</p>
                <p className="text-sm opacity-70">Cantidad: {i.qty}</p>
              </div>
              <div className="flex items-center gap-6">
                <span>{formatEUR(i.price * i.qty)}</span>
                <button className="text-red-600" onClick={() => remove(i.id)}>Quitar</button>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between text-lg font-semibold">
            <span>Total</span><span>{formatEUR(total)}</span>
          </div>
          <div className="flex gap-3">
            <button onClick={clear} className="px-4 py-2 border rounded">Vaciar</button>
            <button onClick={pagar} disabled={loading} className="px-5 py-2 bg-ks-brown text-white rounded disabled:opacity-60">
              {loading ? 'Creando pago…' : 'Pagar'}
            </button>
          </div>
          {!hasStripe && (
            <p className="text-sm opacity-70">(Pagos desactivados hasta configurar Stripe)</p>
          )}
        </div>
      )}
    </section>
  )
}
