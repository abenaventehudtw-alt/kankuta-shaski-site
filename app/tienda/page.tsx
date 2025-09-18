'use client'
import { useCart } from '@/components/CartProvider'
import { formatEUR } from '@/lib/currency'

const placeholders = [
  { id: 'p1', price: 11000 },
  { id: 'p2', price: 9500 },
  { id: 'p3', price: 11000 },
  { id: 'p4', price: 10000 },
  { id: 'p5', price: 9500 },
  { id: 'p6', price: 10000 },
]

export default function Tienda() {
  const { add } = useCart()
  return (
    <section className="pt-6 md:pt-10">
      <h1 className="section-title mb-8">Tienda</h1>
      <p className="mb-6 opacity-80">Vista de cuadrícula con precios como en tu diseño. Cuando tengas fotos, las reemplazamos. Puedes añadir al carrito con los placeholders si deseas probar el flujo.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {placeholders.map(p => (
          <div key={p.id} className="card p-4">
            <div className="aspect-square bg-neutral-200 grid place-items-center text-neutral-500">Imagen</div>
            <div className="flex items-center justify-between mt-3">
              <span className="text-lg">{formatEUR(p.price)}</span>
              <button className="px-3 py-1 bg-ks-brown text-white rounded" onClick={() => add({ id: p.id, name: 'Pieza artesanal', price: p.price, qty: 1 })}>Añadir</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
