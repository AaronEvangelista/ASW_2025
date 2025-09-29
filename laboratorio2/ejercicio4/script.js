console.log("Ancho: " + window.innerWidth + "px");
console.log("Alto: " + window.innerHeight + "px");

document.body.innerHTML = `
  <h2>Ejercicio 4 - Objeto window</h2>
  <button id="abrir">Abrir ventana</button>
  <p id="saludo"></p>
`;

let nuevaVentana;

alert("Bienvenido");

let nombre = prompt("como te llamas");
if (nombre) {
  document.getElementById("saludo").innerText = "Hola, " + nombre;
}

document.getElementById("abrir").addEventListener("click", function() {
  nuevaVentana = window.open("https://github.com/AaronEvangelista", "nueva", "width=1000,height=1000");

  let cerrar = confirm("Quieres cerrar la ventana");
  if (cerrar && nuevaVentana) {
    nuevaVentana.close();
    alert("La ventana ha sido cerrada.");
  }
});
