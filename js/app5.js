//5. Escriba un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales.

//Funcion para contar las vocales

let sonVocales = (frase) => {

let vocales = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0
};

//Pasarlas a minusculas
frase = frase.toLowerCase ();

//Contador de vocales
for (let i = 0; i < frase.length; i++) {
    if (vocales[frase[i]] !== undefined)
        {
        vocales[frase[i]]++
    }
}
return vocales;

};

const frase = prompt ('Ingrese una frase');

//Llamar la funcion y mostrar el resultado

const resultado = sonVocales (frase);
console.log(`la frase ${frase} tiene: a ${resultado.a} veces, e ${resultado.e} veces, i ${resultado.i} veces, o ${resultado.o} veces, u ${resultado.u} veces`);

