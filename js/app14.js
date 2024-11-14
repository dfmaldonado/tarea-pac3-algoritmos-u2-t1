// 14. Usando while mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo
// ingresa el usuario en un prompt.

// Pedir al usuario un numero
let n = parseInt(prompt('Ingresa un numero:'));

// Ciclo para repetir N 
let i = 1;
while (i <= n) {
    console.log(i);
    i+=2;
}
