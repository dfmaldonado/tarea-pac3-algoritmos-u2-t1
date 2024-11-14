// 9. Crear un programa que determine si un string introducido por un usuario inicia con un número o con una letra.

//Solicitar un string al usuario

const palabra = prompt ('Ingrese una palabra');

//Evaluar si inicia con un string o no
if(/[a-zA-Z]/.test(palabra[0])){
    console.log(`La palabra ${palabra} inicia con una letra`);
} else {
    console.log(`La palabra ${palabra} no inicia con una letra`);
}