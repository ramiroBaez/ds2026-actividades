import LibroCard from './LibroCard.tsx'
import type { Libro } from '../types/Libro.ts'

// Recibe el array de libros como prop
interface DestacadosProps {
  libros: Libro[]
}

function Destacados({ libros }: DestacadosProps) {
  return (
    <section className="destacados py-5">
      <div className="container">
        <div className="section-header mb-5">
          <h2 className="section-titulo">Destacados</h2>
          <p className="section-sub">Una selección de títulos que no podés perderte</p>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {libros.map(libro => (
            <div className="col" key={libro.id}>
              <LibroCard
                id={libro.id}
                titulo={libro.titulo}
                autor={libro.autor}
                imagen={libro.imagen}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Destacados