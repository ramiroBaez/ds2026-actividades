import { Link } from 'react-router-dom'

function Navbar() {
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalogo">
                Catálogo
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar