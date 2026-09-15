function Hero() {
  return (
    <section className="hero position-relative py-5">
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-lg-7">

            <span className="hero-tag">Bienvenido a</span>
            <h1 className="hero-titulo">
              La librería<br />
              Siglo XXI
            </h1>
            <p className="hero-subtitulo">
              Descubrí títulos que cambian perspectivas.
              Desde clásicos hasta lo más nuevo del mercado.
            </p>

            <a href="/catalogo" className="btn btn-principal mt-4">
              Ver catálogo completo
              <i className="bi bi-arrow-right ms-2"></i>
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero