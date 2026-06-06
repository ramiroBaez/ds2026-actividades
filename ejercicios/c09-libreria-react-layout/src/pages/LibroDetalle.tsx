import { useParams, Link } from 'react-router-dom'
import { libros } from '../types/Libro.ts' 

function LibroDetalle() {
  const { id } = useParams<{ id: string }>()

  const libro = libros.find(l => l.id === Number(id))

  if (!libro) {
    return (
      <div className="container py-5 text-center">
        <h2 className="text-danger">Libro no encontrado</h2>
        <p className="text-muted">El título con ID #{id} no existe en el catálogo.</p>
        <Link to="/catalogo" className="btn btn-dark mt-3">Volver al catálogo</Link>
      </div>
    )
  }

  return (
    <div className="container py-5">
      <div className="mb-4">
        <Link to="/" className="btn btn-outline-secondary btn-sm">
          <i className="bi bi-arrow-left"></i> Volver al Inicio
        </Link>
      </div>

      <div className="row g-5 align-items-center">
        <div className="col-md-4 text-center">
          <img 
            src={libro.imagen} 
            alt={libro.titulo} 
            className="img-fluid rounded shadow-lg"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </div>

        <div className="col-md-8">
          <h1 className="display-4 fw-bold">{libro.titulo}</h1>
          <h3 className="text-muted mb-4">Autor: <span className="text-dark">{libro.autor}</span></h3>
          
          <hr />
          
          <p className="lead text-secondary mt-4">
            {libro.descripcion}
          </p>

          <div className="mt-5 d-flex gap-3">
            <button className="btn btn-primary btn-lg">
              <i className="bi bi-bookmark-plus"></i> Reservar
            </button>
            <button className="btn btn-outline-dark btn-lg">
              <i className="bi bi-share"></i> Compartir
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LibroDetalle