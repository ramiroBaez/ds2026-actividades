const inputAltura = document.getElementById('inputAltura') as HTMLInputElement;
const generarBtn = document.getElementById('generarBtn') as HTMLButtonElement;
const arbolResultado = document.getElementById('arbolResultado') as HTMLElement;

function generarArbol(altura: number): string {
    let arbol: string = "";

    for (let i = 1; i <= altura; i++) {
        let fila: string = "";

        for (let j = 0; j < i; j++) {
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