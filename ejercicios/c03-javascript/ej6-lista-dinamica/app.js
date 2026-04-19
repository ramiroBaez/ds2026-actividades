const inputProducto = document.getElementById('productoInput');
const botonAgregar = document.getElementById('agregarBtn');
const listaProductos = document.getElementById('listaproductos');
const contadorProductos = document.getElementById('contador');

let cantidadProductos = 0;

function actualizarContador() {
    contadorProductos.textContent = `${cantidadProductos} productos en la lista`;
}

function agregarProducto() {
    const nombreProducto = inputProducto.value.trim();

    if (nombreProducto === ""){
        alert("Por favor, ingrese un nombre de producto.");
        return;
    }

    const li = document.createElement('li');

    const eliminarBtn = document.createElement('button');
    eliminarBtn.textContent = 'Eliminar';

    eliminarBtn.addEventListener('click', () => {
        li.remove();
        cantidadProductos--;
        actualizarContador();
    });

    li.textContent = nombreProducto;
    li.appendChild(eliminarBtn);
    listaProductos.appendChild(li);

    cantidadProductos++;
    actualizarContador();

    inputProducto.value = "";
    inputProducto.focus();
}

botonAgregar.addEventListener('click', () => {
    agregarProducto();
});

inputProducto.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        agregarProducto();
    }
});