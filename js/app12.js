// 12. Escribir un programa JavaScript en el que el programa escoge al azar un entero entre 1 y
// 10, el usuario , luego a el usuario se le pedirá que introduzca un número en un popup
// para intentar adivinarlo. Si la entrada del usuario coincide con el número de conjetura, el
// programa mostrará un mensaje de "buen trabajo" de lo contrario mostrará un mensaje de
// "Vuelva a intentarlo"


let numero = Math.floor(Math.random() * 11);
// console.log(numero);
 
let numero2 = parseInt(prompt('Ingrese un numero para ganar el juego.'));

if(numero2 === numero) {
    console.log(`Felicidades adivino el numero es ${numero}`);
}else {
    console.log(`Recarga la pagina, fallaste, el numero es ${numero}`);
}
