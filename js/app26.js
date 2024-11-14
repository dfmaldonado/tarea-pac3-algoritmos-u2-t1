// 26. El usuario ingresa un string con varias palabras separadas por coma en un popup y se
// deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5]).

let input = prompt('Ingresa varios numeros separados por coma:');
let array = input.split(',').map(Number);

console.log(array);
