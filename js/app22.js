// 22. Dado el array = [1,2,3,4,5,6]
// a. Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en
// pantalla.
// b. Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en
// pantalla.
// c. Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos
// en pantalla.
// d. Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
// e. Generar una copia de un array pero con todos los elementos incrementados en 1.
// f. Calcular el promedio

//Inciso a
let array = [1, 2, 3, 4, 5, 6];
let i = 0;

while (i < array.length) {
    console.log(array[i]);
    i++;
}

//Inciso b
let array2 = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < array2.length; i++) {
    console.log(array2[i]);
}

//Inciso c
let array3 = [1, 2, 3, 4, 5, 6];

array3.forEach(function(element) {
    console.log(element);
});

//Inciso D
let array4 = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < array4.length; i++) {
    console.log(array4[i] + 1);
}

//Inciso E
let array5 = [1, 2, 3, 4, 5, 6];
let copia = array5.map(function(element) {
    return element + 1;
});

console.log(copia);

//Inciso F

let array6 = [1, 2, 3, 4, 5, 6];
let suma = 0;

for (let i = 0; i < array6.length; i++) {
    suma += array6[i];
}

let promedio = suma / array6.length;
console.log(promedio);
