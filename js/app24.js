// 24. Crear un array vacío, luego generar N números al azar y guardarlos en un array, N es
// introducido por el usuario a través de un prompt.

let numero = parseInt(prompt('Ingrese la cantidad de números aleatorios a generar:'));
let array = [];

for (let i = 0; i < numero; i++) {
    array.push(Math.floor(Math.random() * 100)); // Números aleatorios entre 0 y 99
}

console.log(array);
