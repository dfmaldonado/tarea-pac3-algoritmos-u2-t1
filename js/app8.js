//8. Crear un programa que determine si un número introducido en un Prompt es divisible por 5 o no, mostrar el resultado con console.log.

//Solicitar al usuario

const numero = parseInt(prompt('Ingrese un numero: '));

//Condicion para saber si es divisible entre 5 o no

if(numero % 5 === 0){
    console.log(`El numero ${numero} es divisible entre 5`);    
} else {
    console.log(`El ${numero} no es divisible entre 5`);
    
}