// 29. Crear una función que devuelva el promedio de un arreglo, en caso de que el arreglo este
// vacío debe devolver cero.

function calcularPromedio(arreglo) {
    if (arreglo.length === 0) {
        return 0;
    }
    let suma = arreglo.reduce(function(acumulador, numero) {
        return acumulador + numero;
    }, 0);
    return suma / arreglo.length;
}

let numeros = [1, 2, 3, 4, 5];
let promedio = calcularPromedio(numeros);

console.log(promedio);  

let arregloVacio = [];
let promedioVacio = calcularPromedio(arregloVacio);

console.log(promedioVacio); 
