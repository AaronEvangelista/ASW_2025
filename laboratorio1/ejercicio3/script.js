let edad = prompt("¿Cual es tu edad?");

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
let password;
while (password !== "1234") {
  password = prompt("Introduce la contraseña:");
}
console.log("Acceso concedido");