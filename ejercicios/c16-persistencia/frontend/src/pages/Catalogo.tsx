import useFetch from '../hooks/useFetch'
import Destacados from '../components/Destacados'
import type { Libro } from '../types/Libro'
import { Spinner, Alert } from 'react-bootstrap'

function Catalogo() {
  const { data: libros, loading, error } = useFetch<Libro[]>('/libros.json')

  return (
    <div className="container py-5">
      <h2 className="mb-4">Catálogo Completo</h2>

      {loading && (
        <div className="text-center py-5">
          <Spinner animation="border" variant="dark" />
          <p className="mt-3 text-muted">Cargando libros...</p>
        </div>
      )}

      {error && (
        <Alert variant="danger">
          Error al cargar los libros: {error}
        </Alert>
      )}

      {libros && <Destacados libros={libros} />}

    </div>
  )
}

export default Catalogo