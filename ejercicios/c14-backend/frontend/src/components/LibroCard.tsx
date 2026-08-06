import { useState } from 'react'
import { Link } from 'react-router-dom'

interface LibroCardProps {
  id: number;
  titulo: string;
  autor: string;
  imagen: string;
}

function LibroCard({ id, titulo, autor, imagen }: LibroCardProps) {

  const [meGusta, setMeGusta] = useState(false)

  function toggleMeGusta() {
    setMeGusta(prev => !prev)
  }

  return (
    <div className="card libro-card h-100">
      <img
        src={imagen}
        className="card-img-top"
        alt={titulo}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-autor">{autor}</p>

        <div className="d-flex gap-2 mt-auto">
          <Link to={`/libros/${id}`} className="btn btn-ver flex-grow-1">
            Ver más
          </Link>

          <button
            className={`btn btn-like ${meGusta ? 'activo' : ''}`}
            onClick={toggleMeGusta}
          >
            <i className={`bi ${meGusta ? 'bi-heart-fill' : 'bi-heart'}`}></i>
          </button>
        </div>

      </div>
    </div>
  )
}

export default LibroCard