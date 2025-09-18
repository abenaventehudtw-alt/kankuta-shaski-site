'use client'
import Link from 'next/link'

export default function MenuDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}>
      <div className={`absolute inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <aside className={`absolute left-0 top-0 h-full w-72 bg-neutral-100 shadow-xl p-6 transition-transform ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <button className="mb-6" onClick={onClose} aria-label="Cerrar">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <nav className="space-y-5 text-2xl">
          <Link href="/" onClick={onClose} className="block border-b pb-3">Inicio</Link>
          <Link href="/bienvenidos" onClick={onClose} className="block border-b pb-3">Bienvenid@s</Link>
          <Link href="/tienda" onClick={onClose} className="block border-b pb-3">Tienda</Link>
          <Link href="/medio-ambiente" onClick={onClose} className="block border-b pb-3">Medio Ambiente</Link>
          <Link href="/contacto" onClick={onClose} className="block border-b pb-3">Contacto</Link>
        </nav>
      </aside>
    </div>
  )
}
