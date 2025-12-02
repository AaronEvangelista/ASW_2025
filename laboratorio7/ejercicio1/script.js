/*ejercicio 1*/

// pido los datos al usuario
let usuario = prompt("Escribe tu nombre :");
let idioma = prompt("Escribe el idioma :");
let tema = prompt("Escribe el tema :");

// Creo las cookies
document.cookie = "usuario=" + usuario;
document.cookie = "idioma=" + idioma;
document.cookie = "tema=" + tema;

// Muestro las cookies guardadas
alert("Cookies guardadas:\n" + document.cookie);

// Paso las cookies a un array
let arrayCookies = document.cookie.split("; ");

// Muestro las cookies 
document.getElementById("resultado1").innerHTML = "<strong>Todas las cookies:</strong> " + document.cookie + "<br>" ;

