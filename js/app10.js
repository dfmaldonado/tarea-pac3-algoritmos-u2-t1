// 10. Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se determine si el triángulo es válido o no.

//Solicitar los 3 angulos al usuario

const angulo1 = parseInt(prompt('Ingrese el primer angulo'));
const angulo2 = parseInt(prompt('Ingrese el segundo angulo'));
const angulo3 = parseInt(prompt('Ingrese el tercer angulo'));

let suma = angulo1 + angulo2 + angulo3;

// console.log(`La suma es ${suma}`);

//Evaluar si el triangulo rectangulo es valido o no

const esTriangulo = suma => {
    if(suma === 180) {
        console.log('El triangulo es valido');
        
    } else {
        console.log('El triangulo es invalido');
    }
}

esTriangulo (suma);