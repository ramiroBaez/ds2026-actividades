import Destacados from '../components/Destacados'
import type { Libro } from '../types/Libro'

// Definimos las props que recibe el componente
interface CatalogoProps {
  libros: Libro[]
}

function Catalogo({ libros }: CatalogoProps) {
  return (
    <div className="container py-5">
      <h2 className="mb-4">Catálogo Completo</h2>
      {/* Pasamos los libros al componente Destacados */}
      <Destacados libros={libros} />
    </div>
  )
}

export default Catalogo