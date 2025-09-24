let nombre = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuál es tu edad?");

console.log("Hola " + nombre + ", tienes " + edad + " años.");

if (edad >= 18) {
  console.log("Puedes entrar");
} else {
  console.log("Acceso denegado");
}