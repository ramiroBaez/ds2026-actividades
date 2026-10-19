import { useState } from 'react'
import { Link } from 'react-router-dom'
import { formatearPrecio } from '../utils/formatearPrecio'
import type { Autor } from '../types/Libro'

interface LibroCardProps {
  id: number;
  titulo: string;
  autor: Autor;
  imagen: string;
  precio: number;
}

function LibroCard({ id, titulo, autor, imagen, precio }: LibroCardProps) {

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
        <p className="card-autor">{autor.nombre}</p>
        <p className="libro-precio">{formatearPrecio(precio)}</p>

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