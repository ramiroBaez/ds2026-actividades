import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navbar() {
  const navigate = useNavigate()
  const { usuario, logout, tieneRol } = useAuth()

  function manejarSesion() {
    if (usuario) {
      logout()
      navigate('/')
    } else {
      navigate('/login')
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link className="navbar-brand" to="/">
          <i className="bi bi-book"></i> Librería
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menuNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalogo">Catálogo</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>

            {usuario && (
              <li className="nav-item">
                <span className="nav-link">Hola, {usuario.nombre}</span>
              </li>
            )}

            {tieneRol('ADMIN') && (
              <li className="nav-item">
                <Link className="nav-link btn btn-outline-light btn-sm ms-2 px-3" to="/libros/nuevo">
                  + Agregar libro
                </Link>
              </li>
            )}

            <li className="nav-item">
              <button
                className="nav-link btn btn-outline-light btn-sm ms-2 px-3"
                onClick={manejarSesion}
              >
                {usuario ? 'Salir' : 'Ingresar'}
              </button>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar