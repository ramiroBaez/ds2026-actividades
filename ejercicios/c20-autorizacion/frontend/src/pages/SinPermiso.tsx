import { Link } from 'react-router-dom'
import { Alert } from 'react-bootstrap'

function SinPermiso() {
  return (
    <div className="container py-5" style={{ maxWidth: 500 }}>
      <Alert variant="warning">
        <Alert.Heading>No tenés permiso para ver esta página</Alert.Heading>
        <p>Tu cuenta no tiene el rol necesario para acceder a esta sección.</p>
      </Alert>
      <Link to="/catalogo" className="btn btn-dark">Volver al catálogo</Link>
    </div>
  )
}

export default SinPermiso