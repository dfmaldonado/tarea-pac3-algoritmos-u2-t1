// 25. Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si
// un color introducido por el usuario a través de un prompt se encuentra dentro del array o
// no.

let colores = ["azul", "amarillo", "rojo", "verde", "cafe", "rosa"];
let colorUsuario = prompt('Introduce un color:').toLowerCase();

if (colores.includes(colorUsuario)) {
    console.log('El color esta en el array.');
} else {
    console.log('El color no esta en el array.');
}
