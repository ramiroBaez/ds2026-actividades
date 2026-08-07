import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { libroSchema, type LibroValidado } from '../schemas/libroSchema'

function LibroNuevo() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LibroValidado>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(libroSchema) as any
  })

  function onSubmit(data: LibroValidado) {
    console.log("Libro a agregar:", data)
    navigate('/catalogo')
  }

  return (
    <div className="container py-5" style={{ maxWidth: 600 }}>
      <h1 className="mb-4">Agregar nuevo libro</h1>

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
          <label className="form-label">Autor</label>
          <input
            {...register('autor')}
            className={`form-control ${errors.autor ? 'is-invalid' : ''}`}
            placeholder="Autor del libro"
          />
          {errors.autor && (
            <div className="invalid-feedback">{errors.autor.message}</div>
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