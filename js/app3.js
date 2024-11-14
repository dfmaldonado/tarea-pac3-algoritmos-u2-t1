//3. Escriba un programa que pida un número y diga si es divisible por 2.


//Funcion para saber si es divisible entre 2
const numeroDivisible = (numero1) => {
    if (numero1 % 2 === 0) {
        return numero1
    } else {
    return 0;
    }
} 

//Ingresar un numero
const numero1 = parseInt(prompt('Ingrese un numero'));

// Llamar a la función y mostrar el resultado
if (numeroDivisible(numero1)) {
    console.log(`El número ${numero1} es divisible entre 2.`);
} else {
    console.log(`El número ${numero1} no es divisible entre 2.`);
}