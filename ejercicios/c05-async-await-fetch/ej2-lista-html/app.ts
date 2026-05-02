interface Usuario {
    id: number;
    name: string;
    email: string;
    phone: string;
}

const listaUsuarios = document.getElementById('lista-usuarios') as HTMLUListElement;
const cargando = document.getElementById('cargando') as HTMLParagraphElement;
const error = document.getElementById('error') as HTMLParagraphElement;

async function obtenerUsuarios(): Promise<Usuario[]> {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
    const datos = await respuesta.json();

    return datos;
}

function renderizarUsuarios(usuarios: Usuario[]): void {
    usuarios.forEach((usuario: Usuario) => {
        const li = document.createElement('li');
        li.textContent = `${usuario.name} - ${usuario.email}`;
        listaUsuarios.appendChild(li);
    });
}

async function main(): Promise<void> {
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