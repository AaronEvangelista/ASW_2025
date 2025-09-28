function calcularEdad() {
    const fechaInput = document.getElementById('fecha').value;

    const resultado = document.getElementById('resultado');

    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\\d{2}$/;
    if (!regex.test(fechaInput)) {
        resultado.textContent = 'Ingresa correctamente .';
        return;
    }
