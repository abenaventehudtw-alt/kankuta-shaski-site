import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const secret = process.env.STRIPE_SECRET_KEY
const stripe = secret ? new Stripe(secret, { apiVersion: '2023-10-16' }) : null

export async function POST(req: Request) {
  try {
    if (!stripe) throw new Error('Stripe no configurado')
    const { items } = await req.json()
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      currency: 'eur',
      line_items: items.map((i: any) => ({
        quantity: i.qty,
        price_data: {
          currency: 'eur',
          product_data: { name: i.name },
          unit_amount: i.price
        }
      })),
      shipping_address_collection: { allowed_countries: ['ES', 'PT', 'FR', 'DE', 'IT'] },
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/gracias`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/carrito`
    })
    return NextResponse.json({ url: session.url })
  } catch (e: any) {
    return NextResponse.json({ error: e.message || 'Error creando sesión' }, { status: 500 })
  }
}
