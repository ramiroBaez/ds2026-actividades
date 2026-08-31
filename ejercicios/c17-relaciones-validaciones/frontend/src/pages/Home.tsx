import Hero from '../components/Hero'
import Destacados from '../components/Destacados'
import useFetch from '../hooks/useFetch'
import type { Libro } from '../types/Libro'
import { Spinner, Alert } from 'react-bootstrap'

function Home() {
  const { data: libros, loading, error } = useFetch<Libro[]>('/libros.json')

  return (
    <>
      <Hero />

      <div className="container py-3">

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

        {libros && <Destacados libros={libros.slice(0, 6)} />}

      </div>
    </>
  )
}

export default Home