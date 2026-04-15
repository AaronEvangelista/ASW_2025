const boton = document.getElementById("test-click");

const eventos = ["mousedown", "mouseup", "click", "dblclick"];

eventos.forEach((tipoEvento) => {
  boton.addEventListener(tipoEvento, (evento) => {
    console.log(`Evento: ${evento.type}`);
  });
});
