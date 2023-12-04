document.getElementById('formulario').addEventListener('submit', function (event) {
    var nombreInput = document.getElementById('nombre');
    var emailInput = document.getElementById('correo');
    var contraseñaInput = document.getElementById('contraseña');
    var nacimientoInput = document.getElementById('nacimiento');

    var nombre = nombreInput.value.trim();
    var email = emailInput.value.trim();
    var contraseña = contraseñaInput.value.trim();
    var nacimiento = nacimientoInput.value.trim(); // Obtener el valor del campo de fecha de nacimiento

    // Validación del nombre
    var nombreError = document.getElementById('nombreError');
    if (nombre.length < 4) {
        nombreError.innerHTML = "El nombre debe tener al menos 4 caracteres.";
        event.preventDefault();
        return;
    } else {
        nombreError.innerHTML = "";
    }

    // Validación del correo electrónico
    var emailError = document.getElementById('emailError');
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.innerHTML = "Ingresa un correo electrónico válido.";
        event.preventDefault();
        return;
    } else {
        emailError.innerHTML = "";
    }

    // Validación del campo de fecha de nacimiento
    var nacimientoError = document.getElementById('nacimientoError');
    if (nacimiento === "") {
        nacimientoError.innerHTML = "Por favor, selecciona tu fecha de nacimiento.";
        event.preventDefault();
        return;
    } else {
        nacimientoError.innerHTML = "";
    }

    // Validación de la contraseña
    var contraseñaError = document.getElementById('contraseñaError');
    if (contraseña.length < 6) {
        contraseñaError.innerHTML = "La contraseña debe tener al menos 6 caracteres.";
        event.preventDefault();
        return;
    } else {
        contraseñaError.innerHTML = "";
    }

    // Mostrar una alerta con todos los datos después de la validación
    alert("Te has registrado correctamente, aquí tienes tus datos:\nNombre: " + nombre + "\nFecha Nacimiento: " + nacimiento + "\nCorreo Electrónico: " + email + "\nContraseña: " + contraseña);
});


