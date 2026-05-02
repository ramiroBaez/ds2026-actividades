"use strict";
const listaUsuarios = document.getElementById('lista-usuarios');
const cargando = document.getElementById('cargando');
const error = document.getElementById('error');
async function obtenerUsuarios() {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
    const datos = await respuesta.json();
    return datos;
}
function renderizarUsuarios(usuarios) {
    usuarios.forEach((usuario) => {
        const li = document.createElement('li');
        li.textContent = `${usuario.name} - ${usuario.email}`;
        listaUsuarios.appendChild(li);
    });
}
async function main() {
    try {
        const usuarios = await obtenerUsuarios();
        cargando.style.display = 'none';
        renderizarUsuarios(usuarios);
    }
    catch (error1) {
        cargando.style.display = 'none';
        error.textContent = 'Error al cargar los usuarios.';
    }
}
main();
