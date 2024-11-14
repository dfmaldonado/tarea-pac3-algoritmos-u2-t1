//2. Escriba un programa que pida 3 números y escriba en la consola el mayor de los tres.

//Funcion flecha para obtener saber cual numero es mayor entre los 3
const obtenerMayor = (numero1, numero2, numero3) => {
    if (numero1 > numero2 && numero1 > numero3) {
        return numero1;
    } else if (numero2 > numero1 && numero2 > numero3) {
        return numero2;
    } else {
        return numero3;
    };
    };
    
    //Solicitar los 3 numeros al usuario
    const numero1 = parseInt(prompt("Ingrese el primer numero"));
    const numero2 = parseInt(prompt("Ingrese el segundo numero"));
    const numero3 = parseInt(prompt("Ingrese el tercer numero"));

    //Mostrar cual de los 3 es mayor
    console.log(`El número mayor es: ${obtenerMayor(numero1, numero2, numero3)}`);