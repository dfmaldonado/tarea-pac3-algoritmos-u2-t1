// 15. Usando while mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo
// ingresa el usuario en un prompt.

//Solicitar un numero
let numero = parseInt(prompt('Ingrese un numero: '))

while (numero >= 1) {
    console.log(numero);
    numero--;
}