// Referencias al DOM
const input = document.getElementById('inputBusqueda');
const boton = document.getElementById('botonBuscar');
const error = document.getElementById('error');
const cargando = document.getElementById('cargando');
const resultados = document.getElementById('resultados');

// Función para traer los libros de la API
async function buscarLibros(query) {
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=10`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos.docs;
}

// Función para renderizar — ahora usa cards de Bootstrap
// en lugar de tarjetas con CSS propio
function renderizarLibros(libros) {
    resultados.innerHTML = '';

    libros.forEach(libro => {
        const autor = libro.author_name ? libro.author_name[0] : 'Autor desconocido';
        const anio = libro.first_publish_year ?? 'Año desconocido';

        // Si la API devuelve un cover_i (id de imagen), armamos la URL
        // Si no hay imagen usamos un placeholder
        const imagen = libro.cover_i
            ? `https://covers.openlibrary.org/b/id/${libro.cover_i}-M.jpg`
            : 'https://placehold.co/200x280?text=Sin+portada';

        // Creamos una columna con una card de Bootstrap
        // La misma estructura que las cards del index.html
        const col = document.createElement('div');
        col.classList.add('col');
        col.innerHTML = `
            <div class="card libro-card h-100">
                <img src="${imagen}" class="card-img-top" alt="${libro.title}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${libro.title}</h5>
                    <p class="card-autor">${autor}</p>
                    <p class="card-anio">${anio}</p>
                    <a href="libro.html" class="btn btn-ver mt-auto">Ver más</a>
                </div>
            </div>
        `;

        resultados.appendChild(col);
    });
}

// Función principal
async function manejarBusqueda() {
    const query = input.value.trim();

    // Validación: input vacío no hace fetch
    if (!query) {
        error.textContent = 'Por favor, ingresá un término de búsqueda.';
        return;
    }

    error.textContent = '';
    cargando.style.display = 'block';
    resultados.innerHTML = '';

    try {
        const libros = await buscarLibros(query);
        cargando.style.display = 'none';
        renderizarLibros(libros);
    } catch (err) {
        cargando.style.display = 'none';
        error.textContent = 'Ocurrió un error al buscar. Intentá de nuevo.';
    }
}

// Eventos
boton.addEventListener('click', manejarBusqueda);
input.addEventListener('keydown', evento => {
    if (evento.key === 'Enter') {
        manejarBusqueda();
    }
});