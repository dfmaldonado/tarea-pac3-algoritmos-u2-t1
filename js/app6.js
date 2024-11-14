//6. Escribir un programa que escriba en pantalla los divisores de un número dado.

// Funcion para saber los divisiores de un nuero dado
let divisores = (numero) => {
    let divisores = [];

    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) { 
            divisores.push(i); 
        }
    }
    return divisores;
};

// Solicitar al usuario que ingrese un número
const numero = parseInt(prompt("Ingrese un número:"));

// Llamar a la función y mostrar el resultado
const resultado = divisores(numero);
console.log(`Los divisores de ${numero} son: ${resultado.join (", ")}`);
