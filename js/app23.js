// 23. Crear un array vacío, luego generar 20 números al azar y guardarlos en un array.

let array = [];

for (let i = 0; i < 20; i++) {
    array.push(Math.floor(Math.random() * 100)); // Números aleatorios entre 0 y 99
}

console.log(array);
