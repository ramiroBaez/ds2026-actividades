function calcularPrecioFinal(monto, medioDePago) {
    
    if (monto < 200) {
        return monto;
    }

    if (monto >= 200 && monto < 400) {
        if (medioDePago === "E") {
            return monto * 0.7; 
        } else if (medioDePago === "D") {
            return monto * 0.8;
        } else {
            return monto * 0.9;
        }
    }

    if (monto >= 400) {
        return monto * 0.6;
    }

}

console.log("---Calcular precio final---");

const resul1 = calcularPrecioFinal(150, "E");
console.log(`monto: $150 | Medio de pago: E | Precio final: $${resul1}`);

const resul2 = calcularPrecioFinal(250, "D");
console.log(`monto: $250 | Medio de pago: D | Precio final: $${resul2}`);

const resul3 = calcularPrecioFinal(350, "C");
console.log(`monto: $350 | Medio de pago: C | Precio final: $${resul3}`);

const resul4 = calcularPrecioFinal(450, "E");
console.log(`monto: $450 | Medio de pago: E | Precio final: $${resul4}`);

const resul5 = calcularPrecioFinal(300, "E");
console.log(`monto: $300 | Medio de pago: E | Precio final: $${resul5}`);