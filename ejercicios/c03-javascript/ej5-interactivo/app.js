const inputAltura = document.getElementById('inputAltura');
const generarBtn = document.getElementById('generarBtn');
const arbolResultado = document.getElementById('arbolResultado');

function generarArbol(altura) {
    let arbol = "";

    for (let i = 1; i <= altura; i++) {
        let fila = "";

        for (let j = 0; j <= i; j++) {
            fila += "*";
        }
        arbol += fila + "\n";

        if (i < altura) {
            arbol += "\n";
        }
    }

    return arbol;

}

generarBtn.addEventListener("click", () => {

    const altura = parseInt(inputAltura.value);
    
    if (isNaN(altura) || altura < 1) {
        arbolResultado.textContent = "Por favor, ingresa un número válido para la altura.";
        return;
    }

    arbolResultado.textContent = generarArbol(altura);

})