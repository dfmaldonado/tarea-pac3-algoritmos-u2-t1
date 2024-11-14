// 21. Crear una función que reciba un número entero y muestre un error si el tipo de dato
// pasado es de otro tipo.

function verificarEntero(num) {
    if (typeof num !== 'number' || !Number.isInteger(num)) {
        console.log('error: el valor no es un numero entero');
    }
}

verificarEntero (5);
verificarEntero (2.2);