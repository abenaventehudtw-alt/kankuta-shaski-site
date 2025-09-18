import Image from 'next/image'

export default function MedioAmbiente() {
  return (
    <section className="pt-10 md:pt-14">
      <h1 className="section-title mb-10">Medio Ambiente</h1>

      <div className="grid md:grid-cols-2 gap-10 items-start mb-12">
        <div className="text-lg leading-relaxed">
          <p className="italic font-semibold mb-3">Una luz que también cuida</p>
          <p>
            Te invito a usar velas hechas con ceras vegetales como la soja, la colza o el coco. Son biodegradables, renovables y mucho más amables con el medioambiente. Arden de forma limpia, sin liberar tóxicos, y su luz acompaña sin contaminar.
          </p>
          <p className="mt-3">
            En cambio, muchas velas comerciales están hechas de parafina (derivado del petróleo), que al quemarse puede liberar sustancias nocivas como benceno y tolueno, contaminando el aire de tu hogar y del planeta. Gracias por elegir con respeto, calma y cuidado.
          </p>
        </div>
        <div className="relative w-full h-96 card overflow-hidden">
          <Image src="/Portavela.png" alt="Portavela con bosquecito" fill className="object-cover"/>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="relative w-full h-96 card overflow-hidden order-2 md:order-1">
          <Image src="/Portaincienso.png" alt="Portaincienso con humo" fill className="object-cover"/>
        </div>
        <div className="text-lg leading-relaxed order-1 md:order-2">
          <p className="italic font-semibold mb-3">Incienso respetuoso</p>
          <p>
            El incienso ha sido, desde tiempos remotos, un puente entre lo terrenal y lo espiritual. Invita a la calma, pero no todos los inciensos son iguales. Los que honran la naturaleza están hechos con ingredientes puros, como resinas naturales puras (lavanda, rosa, romero, salvia), especias (canela, clavo, anís), aceites esenciales, y aglutinantes vegetales como polvo de makko o goma arábica.
          </p>
          <p className="mt-3">
            Evita aquellos con fragancias sintéticas, colorantes o químicos que dañen el aire y el equilibrio del planeta. ¡Gracias por cuidar el aire que compartimos!
          </p>
        </div>
      </div>
    </section>
  )
}
