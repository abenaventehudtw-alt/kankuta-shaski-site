import Carousel from '@/components/Carousel'

export default function Home() {
  return (
    <section>
      <div className="text-center max-w-3xl mx-auto mt-6 mb-6">
        <p className="text-lg md:text-xl">
          Este portavelas y portaincienso es más que un objeto decorativo.
          Es un altar pequeño, creado para que recuerdes la luz que vive en ti.
          Gracias por elegir con consciencia, belleza y alma.
        </p>
      </div>
      <Carousel />
    </section>
  )
}
