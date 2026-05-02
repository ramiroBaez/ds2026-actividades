"use strict";
/* Le digo a TypeScript exactamente que forma tienen los datos que va a devolver la API. Si intento acceder a una propiedad que no existe aca, TypeScript me avisa antes de compilar */
/* "async" significa que adentro voy a usar "await". "Promise<Usuario[]>" significa: esta funcion va a devolver eventualmente un array de Usuarios (no lo va a devolver ya mismo, sino cuando la peticion a internte finalice) */
async function obtenerUsuarios() {
    /* "await" pausa la funcion hasta que fetch termine de ir a internet y traer la respuesta. Sin await, seguiria ejecutando antes de tener los datos */
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
    /* la respuesta llega en formato de texto crudo, entonces el .json() lo convierte en un objeto JavaScript utilizable. Tambien es async, por eso lleva await */
    const datos = await respuesta.json();
    return datos;
}
async function mostrarUsuarios() {
    const listaUsuarios = document.getElementById('lista-usuarios');
    /* "try" intenta ejecutar esto, "catch: si algo falla (sin internet, API caida, etc) en lugar de romper el programa, ejecuta el bloque catch" */
    try {
        const usuarios = await obtenerUsuarios();
        /* recorro cada usuario y creo un <li> por cada uno */
        usuarios.forEach(usuario => {
            const li = document.createElement('li');
            li.textContent = `${usuario.name} - ${usuario.email}`;
            listaUsuarios.appendChild(li);
        });
        /* si entra en este bloque de catch es porque algo salio mal */
    }
    catch (error) {
        listaUsuarios.innerHTML = '<li>Error al cargar los usuarios</li>';
    }
}
mostrarUsuarios();
