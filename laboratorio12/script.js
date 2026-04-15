const formulario = document.getElementById('registroForm');

formulario.addEventListener('submit', function(event) {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const lenguaje = document.getElementById('lenguaje').value;

    if (password.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        event.preventDefault(); 
    } else {
        console.log("Formulario validado con exito");
        console.log("Bienvenido: " + nombre);
        console.log("Correo: " + email);
        console.log("Lenguaje preferido: " + lenguaje);
    }
});