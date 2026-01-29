const btn = document.getElementById("btn-multi");

function primeraFuncion() {
  console.log("--> Función 1: Click registrado.");
  alert("¡Función 1 ejecutada!");
}

function segundaFuncion() {
  console.log("--> Función 2: Analytics enviado.");
}

btn.addEventListener("click", primeraFuncion);
btn.addEventListener("click", segundaFuncion);

const body = document.getElementById("main-body");
const textArea = document.getElementById("campo-texto");
const infoDiv = document.getElementById("info-pantalla");

body.addEventListener("keydown", (e) => {
  console.log(`[Inspector Body] Evento: ${e.type} | Tecla: ${e.key}`);
  infoDiv.textContent = `Tecla detectada: ${e.key} (Código: ${e.code})`;
});

textArea.addEventListener("keydown", (e) => {
  if (/[0-9]/.test(e.key)) {
    e.preventDefault();

    alert("Error: No se permiten números en este campo.");
    console.warn("Escritura de número bloqueada.");
  }
});
