import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CartProvider } from '@/components/CartProvider'

export const metadata: Metadata = {
  title: 'Kankuta Shaski',
  description: 'Piezas de cerámica | Portavelas y portaincienso',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <CartProvider>
          <Header />
          <main className="container-page pt-8 md:pt-10">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
