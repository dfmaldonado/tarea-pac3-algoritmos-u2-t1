//7. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en la consola.


//Solicitar un numero al usuario 
const numero = parseInt(prompt('Ingrese un numero'));

//Condicion de verificacion para saber si se par o no
if (numero % 2 === 0) {
    console.log(`El número ${numero} es par`);
} else {
    console.log(`El numero ${numero} no es par`);
}
