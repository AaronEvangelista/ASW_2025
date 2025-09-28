const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
const maxIntentos = 7;

while (intentos < maxIntentos) {
    const respuesta = prompt(`Intento ${intentos + 1} de ${maxIntentos}: Adivina el numero (entre 1 y 100)`);
    const adivinanza = Number(respuesta);
    if (isNaN(adivinanza) || adivinanza < 1 || adivinanza > 100) {
        alert("Ingresa un numero válido entre 1 y 100");
        continue;
    }
    intentos++;
    if (adivinanza === numeroSecreto) {
        alert(`Bien adivinaste el numero ${intentos} intento${intentos > 1 ? 's' : ''}.`);
        break;
    } else if (adivinanza < numeroSecreto) {
        alert("El número es mayor.");
    } else {
        alert("El número es menor.");
    }
}
if (intentos === maxIntentos && numeroSecreto !== Number(respuesta)) {
    alert(`Perdiste el numero era ${numeroSecreto}.`);
}