import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO = process.env.CONTACT_TO_EMAIL || 'abenaventehudtw@gmail.com'

export async function POST(req: Request) {
  try {
    const { nombre, apellidos, email, mensaje } = await req.json()
    if (!resend) throw new Error('Resend no configurado')
    await resend.emails.send({
      from: 'Kankuta Shaski <no-reply@kankutashaski.com>',
      to: [TO],
      reply_to: email,
      subject: `Nuevo mensaje de ${nombre} ${apellidos}`,
      text: `Nombre: ${nombre} ${apellidos}\nEmail: ${email}\n\nMensaje:\n${mensaje}`
    })
    return NextResponse.json({ ok: true })
  } catch (e: any) {
    return NextResponse.json({ error: e.message || 'Error enviando correo' }, { status: 500 })
  }
}
