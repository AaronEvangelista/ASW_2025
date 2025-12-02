// Pedimos los datos al usuario
let nombre = prompt("Escribe tu nombre:");
let nacimiento = prompt("Escribe tu fecha de nacimiento :");
let pais = prompt("Escribe tu pais:");

//  alerta con los datos 
alert("Nombre: " + nombre + "\nFecha de nacimiento: " + nacimiento + "\nPais: " + pais);

// Mostramos en la pantalla
document.getElementById("resultado2").innerHTML =
    "<strong>Nombre:</strong> " + nombre + "<br>" +
    "<strong>Fecha de nacimiento:</strong> " + nacimiento + "<br>" +
    "<strong>País:</strong> " + pais;
