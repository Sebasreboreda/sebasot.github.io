document.getElementById('formulario').addEventListener('submit', function (event) {
    var nombreInput = document.getElementById('nombre');
    var emailInput = document.getElementById('correo');
    var contraseñaInput = document.getElementById('contraseña');
    var nacimientoInput = document.getElementById('nacimiento');


    var nombre = nombreInput.value.trim();
    var email = emailInput.value.trim();
    var contraseña = contraseñaInput.value.trim();
    var nacimiento = nacimientoInput.value.trim();

    // Validación del nombre 
    if (nombre.length < 4) {
        nombreError.innerHTML = "El nombre debe tener al menos 4 caracteres.";
        event.preventDefault();
        return;
    }

    // Validación de la contraseña
    if (contraseña.length < 6) {
        contraseñaError.innerHTML ="La contraseña debe tener al menos 6 caracteres."
        event.preventDefault();
        return;
    }
    event.preventDefault();
    // Mostrar una alerta con todos los datos después de la validación
    alert("Te has registrado correctamente, aqui tienes tus daros: \nNombre. " + nombre + "\n Fecha Nacimiento: " + nacimiento+"\nCorreo Electrónico: " + email + "\nContraseña: " + contraseña);
});
