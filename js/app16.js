// 16. Usando while, solicitar al usuario un número y utilizando console.log para mostrar la
// tabla del número hasta 12.


let numero = parseInt(prompt("ingrese un numero"));

// inicializar el multiplicador en 1
let i = 1;

// mostrar la tabla del numero hasta 12
while (i <= 12) {
    console.log(numero + " x " + i + " = " + (numero * i));
    i++; 
}
