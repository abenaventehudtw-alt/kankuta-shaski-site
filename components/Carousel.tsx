'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const slides = [
  { src: '/Elefante.png', alt: 'Elefante' },
  { src: '/Jirafa.png', alt: 'Jirafa' },
  { src: '/Sol y Luna.png', alt: 'Sol y Luna' }
]

export default function Carousel() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI(v => (v + 1) % slides.length), 4000)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-neutral-200">
      {slides.map((s, idx) => (
        <div key={s.src} className={`absolute inset-0 transition-opacity duration-700 ${idx === i ? 'opacity-100' : 'opacity-0'}`}>
          <Image src={s.src} alt={s.alt} fill priority className="object-cover object-center" />
        </div>
      ))}
      <div className="absolute top-16 left-0 right-0">
        <div className="h-5 bg-ks-brown/90" />
        <div className="-mt-8 w-28 h-28 mx-auto rounded-full bg-ks-brown grid place-items-center text-white text-center text-sm">
          Kankuta<br/>Shaski
        </div>
      </div>
    </div>
  )
}
