document.getElementById("formFecha").addEventListener("submit", function(e) {
  e.preventDefault();

  let texto = document.getElementById("fecha").value;

  let exp = /^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
  if (!exp.test(texto)) {
    document.getElementById("resultado").innerText = "Formato incorrecto (usa DD/MM/AAAA)";
    return;
  }

  let partes = texto.split("/");

  let dia = parseInt(partes[0]);

  let mes = parseInt(partes[1]) - 1; 

  let anio = parseInt(partes[2]);

  let fechaNac = new Date(anio, mes, dia);

  let hoy = new Date();
  let edad = hoy.getFullYear() - fechaNac.getFullYear();
  if (hoy.getMonth() < mes || (hoy.getMonth() === mes && hoy.getDate() < dia)) {
    edad--;
  }

  let dias = ["domingo","lunes","martes","miércoles","jueves","viernes","sabado"];
  let diaSemana = dias[fechaNac.getDay()];

  document.getElementById("resultado").innerText =
    "Naciste el " + texto + ", tienes " + edad + " años y fue un " + diaSemana + ".";
});
