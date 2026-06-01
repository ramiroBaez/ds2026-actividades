import { useParams } from 'react-router-dom'

function LibroDetalle() {
  // Capturo el id definido en la ruta de App.tsx
  const { id } = useParams<{ id: string }>()

  return (
    <div className="container py-5" style={{ minHeight: '60vh' }}>
      <h2 className="mb-4">Detalle del Libro</h2>
      <div className="alert alert-info">
        Estás viendo la información detallada del libro con el **ID: {id}**.
      </div>
    </div>
  )
}

export default LibroDetalle