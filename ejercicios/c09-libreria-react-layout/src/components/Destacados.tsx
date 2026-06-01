import type { Libro } from '../types/Libro.ts'
import LibroCard from './LibroCard.tsx'

const libros: Libro[] = [
  {
    id: 1,
    titulo: "El Gran Gatsby",
    autor: "F. Scott Fitzgerald",
    imagen: "https://covers.openlibrary.org/b/isbn/9780743273565-M.jpg"
  },
  {
    id: 2,
    titulo: "Matar un ruiseñor",
    autor: "Harper Lee",
    imagen: "https://covers.openlibrary.org/b/isbn/9780061120084-M.jpg"
  },
  {
    id: 3,
    titulo: "1984",
    autor: "George Orwell",
    imagen: "https://covers.openlibrary.org/b/isbn/9780451524935-M.jpg"
  },
  {
    id: 4,
    titulo: "El cazador oculto",
    autor: "J.D. Salinger",
    imagen: "https://covers.openlibrary.org/b/isbn/9780316769174-M.jpg"
  },
  {
    id: 5,
    titulo: "Dune",
    autor: "Frank Herbert",
    imagen: "https://covers.openlibrary.org/b/isbn/9780441013593-M.jpg"
  },
  {
    id: 6,
    titulo: "El Alquimista",
    autor: "Paulo Coelho",
    imagen: "https://covers.openlibrary.org/b/isbn/9780062315007-M.jpg"
  }
]

function Destacados() {
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