const numeros = [15, 42, 8, 73, 29, 56, 4, 91];

let suma = 0;   

for (const numero of numeros) {
    suma += numero;
}

console.log(`La suma de los números es: ${suma}`);

const promedio = suma / numeros.length;

console.log(`El promedio de los números es: ${promedio}`);

let mayor = numeros[0];

for (const numero of numeros) {
    if (numero > mayor) {
        mayor = numero;
    }
}

console.log(`El número mayor es: ${mayor}`);

let menor = numeros[0];

for (const numero of numeros) {
    if (numero < menor) {
        menor = numero;
    }   
}

console.log(`El número menor es: ${menor}`);

function generarAsteriscos(cantidad) {
    let resultado = "";

    for (let i = 0; i < cantidad; i++) {
        resultado += "*";
    }

    return resultado;
}

console.log(`---Generar asteriscos---`);
console.log(`Cantidad: 5 - Resultado: ${generarAsteriscos(5)}`);
console.log(`Cantidad: 10 - Resultado: ${generarAsteriscos(10)}`);
console.log(`Cantidad: 3 - Resultado: ${generarAsteriscos(3)}`);