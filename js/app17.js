// 17. Usar while, realizar la suma de todos los números pares entre N y M donde N y M los
// ingresa un usuario.

// solicitar los numeros n y m
let n = parseInt(prompt("ingrese n"));
let m = parseInt(prompt("ingrese m"));

let suma = 0;

// sumar los numeros pares entre n y m
while (n <= m) {
    if (n % 2 === 0) {
        suma += n;
    }
    n++;
}

console.log(suma);
