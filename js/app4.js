//4. Escriba un programa que pida una frase y escriba cuantas veces aparece la letra a.

// Función flecha para contar las veces que aparece la letra "a" en una frase
const contarLetraA = (frase) => {
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i].toLowerCase() === 'a') {
            contador++;
        }
    }
    return contador;
};

// Solicitar frase al usuario
const frase = prompt("Ingrese una frase");

// Llamar a la función y mostrar el resultado
console.log(`La letra "a" aparece ${contarLetraA(frase)} veces en la frase.`);
