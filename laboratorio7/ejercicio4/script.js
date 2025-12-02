/* ejercicio 4*/

// Leemos el valor guardado en localStorage
let guardado = localStorage.getItem("condiciones");

// Aplicamos fondo depiendo del  estado guardado
if (guardado === "si") {
    document.body.style.background = "blue";
} else if (guardado === "no") {
    document.body.style.background = "red";
}

// Pedimos al usuario si acepta o no
let respuesta = prompt("¿Aceptas las condiciones? (si/no)").toLowerCase();

// Guardamos en localStorage
localStorage.setItem("condiciones", respuesta);

// Cambiamos el fondo dependiendo de la respuesta
if (respuesta === "si") {
    alert("Has aceptado las condiciones.");
    document.body.style.background = "blue";
} else {
    alert("No has aceptado las condiciones.");
    document.body.style.background = "red";
}
