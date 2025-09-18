'use client'
import Link from 'next/link'
import { useState } from 'react'
import MenuDrawer from './MenuDrawer'
import { useCart } from './CartProvider'

function CartIcon() {
  const { items } = useCart()
  const count = items.reduce((s, i) => s + i.qty, 0)
  return (
    <Link href="/carrito" className="relative">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 12.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L21 6H6"/>
      </svg>
      {count > 0 && (
        <span className="absolute -right-2 -top-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full grid place-items-center">{count}</span>
      )}
    </Link>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="w-full bg-ks-brown text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <button aria-label="Abrir menú" onClick={() => setOpen(true)} className="p-1">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <Link href="/" className="text-center">
          <span className="text-2xl tracking-wide font-semibold">Kankuta Shaski</span>
        </Link>
        <CartIcon />
      </div>
      <MenuDrawer open={open} onClose={() => setOpen(false)} />
    </header>
  )
}
