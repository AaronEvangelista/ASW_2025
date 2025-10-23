console.log("Ejercicio1 :");

let datosUsuario = ["Ilernita", 25, true];
console.log("Los datos del usuario:", datosUsuario);

console.log("Numero de elementos:", datosUsuario.length);


console.log("Ejercicio 2 :");

datosUsuario.push("Youtuber");
console.log("Su profecion es :", datosUsuario[3]);

datosUsuario.pop();
console.log("Eliminada  su profecion:", datosUsuario);

datosUsuario.unshift("ID123");
console.log("Su id", datosUsuario);

datosUsuario.shift();
console.log("Eliminada su id:", datosUsuario);


console.log("Ejercicio 3 :");

arrayExtra = ["Ilerna", 42, false];
let arrayTotal = datosUsuario.concat(arrayExtra);
console.log("concatenado:", arrayTotal);

numeros = [1, 2, 5, 7, 99];
console.log("numeros antes del sort", numeros);
numeros.sort();
console.log("numeros despues del sort", numeros);

console.log("numeoros con la funcion"); 
numeros.sort(function (a, b) { return b - a; });
console.log(numeros);

arrayTotal.splice(2, 1, "pepe", 29);
console.log("despues de la modificacion:", arrayTotal);


console.log("Ejercicio 4 :");
var cadena = "12.45.4";

console.log("12.45.4 esto es un numero:", isNaN(cadena));

let entero = parseInt(cadena);
let decimal = parseFloat(cadena);
console.log("Conversión a entero:", entero);
console.log("Conversión a decimal:", decimal);

let numero = 456;
let numeroAString = String(numero);
console.log("numero convertido a string:", numeroAString, "Tipo:", typeof numeroAString);

let stringANumero = Number("123");
console.log("String convertido a numero:", stringANumero, "Tipo:", typeof stringANumero);