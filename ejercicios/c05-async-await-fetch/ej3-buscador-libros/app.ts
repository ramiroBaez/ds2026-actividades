interface Libro {
    title: string;
    author_name?: string[];
    first_publish_year?: number;
}

interface ResultadoBusqueda {
    docs: Libro[];
}

const input = document.getElementById('inputBusqueda') as HTMLInputElement;
const boton = document.getElementById('botonBuscar') as HTMLButtonElement;
const error = document.getElementById('error') as HTMLParagraphElement;
const cargando = document.getElementById('cargando') as HTMLParagraphElement;
const resultados = document.getElementById('resultados') as HTMLDivElement;

cargando.style.display = 'none';

async function buscarLibros(query: string): Promise<Libro[]> {
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=10`;
    
    const respuesta = await fetch(url);

    const datos: ResultadoBusqueda = await respuesta.json();

    return datos.docs;  
}

function renderizarLibros(libros: Libro[]): void {
    resultados.innerHTML = '';

    libros.forEach((libro: Libro) => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');

        const autor = libro.author_name ? libro.author_name[0] : 'Desconocido';
        const anio = libro.first_publish_year ?? 'Desconocido';

        tarjeta.innerHTML = `
        <h3>${libro.title}</h3>
        <p>Autor: ${autor}</p>
        <p>Año: ${anio}</p>
        `;

        resultados.appendChild(tarjeta);
    });
}

async function manejarBusqueda(): Promise<void> {
    const query = input.value.trim();

    if (!query) {
        error.textContent = 'Por favor, ingresa un término de búsqueda.';
        
        return;
    }

    error.textContent = '';

    cargando.style.display = 'block';
    resultados.innerHTML = '';

    try {
        const libros = await buscarLibros(query);

        cargando.style.display = 'none';
        renderizarLibros(libros);
    }
    catch (error1) {
        cargando.style.display = 'none';
        error.textContent = 'Ocurrió un error al buscar los libros. Por favor, intenta nuevamente.';
    }
}

boton.addEventListener('click', manejarBusqueda);

input.addEventListener(`keydown`, (evento: KeyboardEvent) => {
    if (evento.key === 'Enter') {
        manejarBusqueda();
    }
});