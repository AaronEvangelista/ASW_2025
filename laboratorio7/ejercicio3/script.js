/*ejercicio 3*/
// Pedimos el texto del nuevo mensaje al usuario
let mensaje = prompt("Escribe el texto para una nueva lista:");

// Creamos el  <li>
let nuevoLi = document.createElement("li");
nuevoLi.textContent = mensaje;

// Insertamos el <li>
document.getElementById("mensaje").innerHTML = nuevoLi.outerHTML;

// Mostrar la alerta
alert("Se ha creado un nuevo elemento <li> con el texto: " + mensaje);
