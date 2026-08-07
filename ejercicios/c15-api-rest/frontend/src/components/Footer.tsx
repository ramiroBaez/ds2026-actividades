function Footer() {
  return (
    <footer className="footer py-4">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-6">
            <span className="footer-marca">
              <i className="bi bi-book me-2"></i>
              Librería Siglo XXI
            </span>
            <p className="footer-sub">Descubrí tu próximo libro favorito</p>
          </div>

          <div className="col-md-6 text-md-end">
            <p className="footer-copy">
              © 2026 Librería Siglo XXI. Todos los derechos reservados.
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer