import Image from 'next/image'

export default function Bienvenidos() {
  return (
    <section className="pt-10 md:pt-14">
      <h1 className="section-title mb-6">Bienvenid@s</h1>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4 text-lg leading-relaxed">
          <p>
            Soy Andrea Benavente, creadora de Kankuta Shaski. Siempre he sido una apasionada con todo lo relacionado al arte, naturaleza y animales. Los portavelas, que a su vez son portainciensos, son piezas únicas y originales hechas a mano. Cada pieza incluye un minilibrito con mensajes sabios y motivadores sobre la vida.
          </p>
          <p>
            El nombre Kankuta Shaski nace gracias a una niña con una mente muy creativa. Jugaba con su Kelly favorita a ser libre y a perderse en la naturaleza, trepando árboles, hablando con los animales, haciendo piruetas, e imaginando mundos enteros. Nombró a su Kelly: Kankuta Shaski. Fueron muy unidas por muchos años.
          </p>
          <p>
            Pero, esa niña creció y se perdió un tiempo en la sociedad. Mucho después, esa niña me susurró que aún puedo jugar y crear desde el corazón, y seguir creyendo en mi intuición. Resulta que nunca se perdió. Vive en mí.
          </p>
        </div>
        <div className="grid gap-4">
          <div className="relative w-full h-72 md:h-56 lg:h-72"><Image src="/Foto-Bienvenida-1.jpg" alt="Andrea" fill className="object-cover"/></div>
          <div className="relative w-full h-72 md:h-56 lg:h-72"><Image src="/Foto-Bienvenida-2.jpg" alt="Andrea al atardecer" fill className="object-cover"/></div>
          <div className="relative w-full h-72 md:h-56 lg:h-72"><Image src="/Foto-Bienvenida-3.jpg" alt="Andrea de niña" fill className="object-cover"/></div>
        </div>
      </div>
    </section>
  )
}
