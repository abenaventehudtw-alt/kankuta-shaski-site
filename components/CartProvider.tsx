'use client'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type CartItem = { id: string; name: string; price: number; qty: number }

type CartCtx = {
  items: CartItem[]
  add: (item: CartItem) => void
  remove: (id: string) => void
  clear: () => void
  total: number
}

const Ctx = createContext<CartCtx | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    const raw = localStorage.getItem('ks_cart')
    if (raw) setItems(JSON.parse(raw))
  }, [])

  useEffect(() => {
    localStorage.setItem('ks_cart', JSON.stringify(items))
  }, [items])

  const add = (item: CartItem) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id)
      if (existing) {
        return prev.map(i => (i.id === item.id ? { ...i, qty: i.qty + item.qty } : i))
      }
      return [...prev, item]
    })
  }
  const remove = (id: string) => setItems(prev => prev.filter(i => i.id !== id))
  const clear = () => setItems([])
  const total = useMemo(() => items.reduce((s, i) => s + i.price * i.qty, 0), [items])

  return <Ctx.Provider value={{ items, add, remove, clear, total }}>{children}</Ctx.Provider>
}

export const useCart = () => {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('CartProvider missing')
  return ctx
}
