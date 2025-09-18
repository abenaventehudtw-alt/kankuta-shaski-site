# Kankuta Shaski — Next.js listo para Vercel

## Pasos rápidos
1. Sube esta carpeta completa a tu repositorio en GitHub (puedes arrastrarla desde tu PC).
2. En Vercel, crea/usa el proyecto conectado a ese repo. Vercel detecta Next.js solo.
3. Añade variables de entorno (Settings → Environment Variables):
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL` (opcional, por defecto: abenaventehudtw@gmail.com)
   - `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `NEXT_PUBLIC_BASE_URL` (opcional para pagos)
4. Cuando tengas tus fotos, reemplázalas en `/public` con los nombres:
   `Elefante.png`, `Jirafa.png`, `Sol y Luna.png`, `Portaincienso.png`, `Portavela.png` y las de bienvenida:
   `Foto-Bienvenida-1.jpg`, `Foto-Bienvenida-2.jpg`, `Foto-Bienvenida-3.jpg`
