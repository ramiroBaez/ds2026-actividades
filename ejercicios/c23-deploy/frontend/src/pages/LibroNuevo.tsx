import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { libroSchema, type LibroValidado } from '../schemas/libroSchema'
import { apiFetch } from '../services/api'
import useFetch from '../hooks/useFetch'
import type { Autor } from '../types/Libro'
import { Alert, Spinner } from 'react-bootstrap'

function LibroNuevo() {
  const navigate = useNavigate()
  const [errorApi, setErrorApi] = useState<string | null>(null)

  const { data: autores, loading: cargandoAutores } = useFetch<Autor[]>('/autores')

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LibroValidado>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(libroSchema) as any,
    defaultValues: { disponible: true }
  })

  async function onSubmit(datos: LibroValidado) {
    setErrorApi(null)
    try {
      await apiFetch('/libros', {
        method: 'POST',
        body: JSON.stringify(datos),
      })
      navigate('/catalogo')
    } catch (err) {
      setErrorApi(err instanceof Error ? err.message : 'Error desconocido')
    }
  }

  return (
    <div className="container py-5" style={{ maxWidth: 600 }}>
      <h1 className="mb-4">Agregar nuevo libro</h1>

      {errorApi && <Alert variant="danger">{errorApi}</Alert>}

      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            {...register('titulo')}
            className={`form-control ${errors.titulo ? 'is-invalid' : ''}`}
            placeholder="Título del libro"
          />
          {errors.titulo && (
            <div className="invalid-feedback">{errors.titulo.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Imagen (URL)</label>
          <input
            {...register('imagen')}
            className={`form-control ${errors.imagen ? 'is-invalid' : ''}`}
            placeholder="https://..."
          />
          {errors.imagen && (
            <div className="invalid-feedback">{errors.imagen.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea
            {...register('descripcion')}
            className={`form-control ${errors.descripcion ? 'is-invalid' : ''}`}
            placeholder="Descripción del libro"
            rows={3}
          />
          {errors.descripcion && (
            <div className="invalid-feedback">{errors.descripcion.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Autor</label>
          {cargandoAutores ? (
            <div><Spinner animation="border" size="sm" /></div>
          ) : (
            <select
              {...register('autorId')}
              className={`form-select ${errors.autorId ? 'is-invalid' : ''}`}
              defaultValue=""
            >
              <option value="" disabled>Elegí un autor</option>
              {autores?.map(autor => (
                <option key={autor.id} value={autor.id}>{autor.nombre}</option>
              ))}
            </select>
          )}
          {errors.autorId && (
            <div className="invalid-feedback">{errors.autorId.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input
            {...register('precio')}
            type="number"
            className={`form-control ${errors.precio ? 'is-invalid' : ''}`}
            placeholder="Precio del libro"
          />
          {errors.precio && (
            <div className="invalid-feedback">{errors.precio.message}</div>
          )}
        </div>

        <div className="mb-4 form-check">
          <input
            {...register('disponible')}
            type="checkbox"
            className="form-check-input"
            id="disponible"
          />
          <label className="form-check-label" htmlFor="disponible">
            Disponible para la venta
          </label>
        </div>

        <div className="d-flex gap-3">
          <button
            type="button"
            className="btn btn-outline-dark w-100"
            onClick={() => navigate('/catalogo')}
          >
            Cancelar
          </button>
          <button type="submit" className="btn btn-dark w-100">
            Agregar libro
          </button>
        </div>

      </form>
    </div>
  )
}

export default LibroNuevo