// 30. Crear una función que tome como parámetro un arreglo de números, retornar el número
// menor, si es un número negativo mostrar su valor absoluto.

function obtenerMenor(arreglo) {
    let menor = Math.min(...arreglo); 
    return Math.abs(menor);        
}

let numeros = [3, -2, 8, 1, -5];
let menorValor = obtenerMenor(numeros);

console.log(menorValor);  
