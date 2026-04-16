const formulario = document.getElementById('formularioInscripcion');
const textarea = document.getElementById('motivacion');
const contador = document.getElementById('contador');

const maxLength = textarea.getAttribute('maxlength');

textarea.addEventListener('input', () => {
    const longitudActual = textarea.value.length;
    const caracteresRestantes = maxLength - longitudActual;
    
    contador.textContent = `${longitudActual} / ${maxLength}`;
    
    if (caracteresRestantes < 20) {
        contador.style.color = 'red';
        contador.style.fontWeight = 'bold';
    } else {
        contador.style.color = '#666'; 
        contador.style.fontWeight = 'normal';
    }
});

formulario.addEventListener('submit', function(event) {
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const pwd = document.getElementById('password').value;

    const regexNombre = /^[A-ZÁÉÍÓÚÑ][a-zA-ZáéíóúñÁÉÍÓÚÑ\s]*$/;
    if (!regexNombre.test(nombre)) {
        alert("El nombre debe empezar por mayuscula y contener solo letras y espacios");
        event.preventDefault();
        return; 
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert("Introduce una direccion de correo electrónico valida");
        event.preventDefault();
        return;
    }

    if (pwd.length < 8) {
        alert('La contraseña debe tener minimo 8 caracteres');
        event.preventDefault();
        return;
    } else if (!/[A-Z]/.test(pwd)) {
        alert('La contraseña debe incluir al menos una letra mayúscula');
        event.preventDefault();
        return;
    } else if (!/[a-z]/.test(pwd)) {
        alert('La contraseña debe incluir al menos una letra minúscula');
        event.preventDefault();
        return;
    } else if (!/[0-9]/.test(pwd)) {
        alert('La contraseña debe incluir al menos un numero.');
        event.preventDefault();
        return;
    }

    console.log("Validación frontal superada con exito");
});