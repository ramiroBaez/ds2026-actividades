import Hero from '../components/Hero'
import Destacados from '../components/Destacados'
import type { Libro } from '../types/Libro'

interface HomeProps {
  libros: Libro[]
}

function Home({ libros }: HomeProps) {
  return (
    <>
      <Hero />
      {/* slice(0, 6) toma solo los primeros 6 elementos del array */}
      <Destacados libros={libros.slice(0, 6)} />
    </>
  )
}

export default Home