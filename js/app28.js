// 28. Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que
// contenga sólo las palabras que empiezan con una vocal.

function filtrarPorVocal(arreglo) {
    return arreglo.filter(function(palabra) {
        return /^[aeiouAEIOU]/.test(palabra);  // Verifica si la palabra empieza con una vocal
    });
}

let palabras = ["apple", "banana", "orange", "umbrella", "grape"];
let palabrasConVocal = filtrarPorVocal(palabras);

console.log(palabrasConVocal);  
