// 31. Crear una función que tome como parámetro un arreglo de números, retornar un nuevo
// arreglo invirtiendo los elementos ejemplo. [1,2,3] => [3,2,1].

function invertirArreglo(arreglo) {
    return arreglo.reverse();  
}

let numeros = [1, 2, 3];
let numerosInvertidos = invertirArreglo(numeros);

console.log(numerosInvertidos);
