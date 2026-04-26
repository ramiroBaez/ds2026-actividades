"use strict";
const catalogo = [
    {
        isbn: "978-8445077412",
        titulo: "El señor de los anillos: La comunidad del anillo",
        autor: "J.R.R. Tolkien",
        precio: 8500,
        disponible: true,
        genero: "Fantasía"
    },
    {
        isbn: "978-8466751735",
        titulo: "Un mago de Terramar",
        autor: "Ursula K. Le Guin",
        precio: 5200,
        disponible: true,
        genero: "Fantasía"
    },
    {
        isbn: "978-8497592208",
        titulo: "Dune",
        autor: "Frank Herbert",
        precio: 9800,
        disponible: false,
        genero: "Ciencia Ficción"
    },
    {
        isbn: "978-8401352348",
        titulo: "Fundación",
        autor: "Isaac Asimov",
        precio: 6300,
        disponible: true,
        genero: "Ciencia Ficción"
    },
    {
        isbn: "978-8498387070",
        titulo: "Crónicas Marcianas",
        autor: "Ray Bradbury",
        precio: 4700,
        disponible: true,
        genero: "Ciencia Ficción"
    }
];
function buscarPorAutor(autor) {
    return catalogo.filter(libro => libro.autor.toLowerCase().includes(autor.toLowerCase()));
}
function librosDisponibles() {
    return catalogo.filter(libro => libro.disponible);
}
function precioPromedio(libros) {
    if (libros.length === 0)
        return 0;
    const precioTotal = libros.reduce((total, libros) => total + libros.precio, 0);
    return precioTotal / libros.length;
}
const listado = document.getElementById("listado");
const stats = document.getElementById("stats");
function renderizar(libros) {
    listado.innerHTML = "";
    libros.forEach(libro => {
        const li = document.createElement("li");
        li.textContent = `${libro.titulo} - ${libro.autor} - ($${libro.precio}) - ${libro.disponible ? "Disponible" : "No disponible"}`;
        listado.appendChild(li);
    });
    const promedio = precioPromedio(libros);
    stats.textContent = `Total de libros: ${libros.length} | Precio promedio: $${promedio.toFixed(2)}`;
}
const filtroAutor = document.getElementById("filtroAutor");
const botonFiltrar = document.getElementById("filtrar");
const botonDisponibles = document.getElementById("mostrarDisponibles");
const botonTodos = document.getElementById("mostrarTodos");
botonFiltrar.addEventListener("click", () => {
    const autor = filtroAutor.value;
    renderizar(buscarPorAutor(autor));
});
botonDisponibles.addEventListener("click", () => {
    renderizar(librosDisponibles());
});
botonTodos.addEventListener("click", () => {
    renderizar(catalogo);
});
renderizar(catalogo);
