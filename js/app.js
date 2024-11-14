//1. Escriba un programa que pida dos números y escriba en la consola cuál es el mayor.

//Solicitar primer numero al usuario
const numero1 = parseInt(prompt ("Ingrese un numero"));
//Solicitar segundo numero al usuario
const numero2 = parseInt(prompt ("Ingrese otro numero"));

//verificar cual numero numero es mayor y mostrar en consola cual es mayor

if ( numero1 > numero2) {
    console.log(`El ${numero1} es mayor que ${numero2}`);
} else {
    console.log(`El ${numero2} es mayor que ${numero1}`);    
}