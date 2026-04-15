const btn = document.getElementById("btn-multi");

btn.addEventListener("click", () => {
  console.log("accion 1 ejecutada");
});

btn.addEventListener("click", () => {
  alert("accion 2: Hola desde el segundo listener");
});

document.body.addEventListener("keydown", (e) => {
  console.log(`Tipo: ${e.type}, Tecla: ${e.key}`);
});

const textarea = document.getElementById("campo-texto");

textarea.addEventListener("keydown", (e) => {
  if (e.key >= "0" && e.key <= "9") {
    e.preventDefault();
    alert("Error: No se permiten numeros en este campo.");
  }
});
