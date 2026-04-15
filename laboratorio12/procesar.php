<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    
    echo "<h1>Registro Recibido</h1>";
    echo "Gracias $nombre, hemos recibido tu inscripcion con el correo $email.";
} else {
    echo "Error al procesar el formulario";
}
?>