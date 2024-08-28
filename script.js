// Selecciona el formulario y el mensaje de éxito del DOM
const form = document.getElementById("contact-form");
const successMessage = document.getElementById('success-message');

// Añade un evento al formulario para cuando se envíe
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario (enviar y recargar la página)

    // Obtiene los valores de los campos del formulario y los recorta de espacios innecesarios
    let firstName = document.getElementById("first-name").value.trim();
    let lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const queryType = document.querySelector("input[name='query-type']:checked"); // Obtiene el tipo de consulta seleccionada
    const message = document.getElementById("message").value.trim();
    const consent = document.getElementById("consent").checked; // Obtiene el estado del consentimiento (checkbox)

    // Selecciona todos los elementos de alerta del formulario
    const formAlert = document.querySelectorAll(".form-alert");

    // Variable para verificar si el formulario es válido
    let isValid = true;

    // Verifica el primer nombre
    if(firstName === "") {
        isValid = false;
        document.querySelector("#first-name + .form-alert").style.display = "block"; // Muestra la alerta
        document.querySelector("#first-name").style.border = "1px solid var(--red)"; // Cambia el borde a rojo
    } else if (containsSpecialCharacters(firstName)) {
        isValid = false;
        document.querySelector("#first-name + .form-alert").textContent = "Enter a valid name"; // Mensaje de error
        document.querySelector("#first-name + .form-alert").style.display = "block"; // Muestra la alerta
        document.querySelector("#first-name").style.border = "1px solid var(--red)"; // Cambia el borde a rojo
    } else {
        document.querySelector("#first-name + .form-alert").style.display = "none"; // Oculta la alerta
        document.querySelector("#first-name").style.border = "1px solid var(--medium-grey)"; // Cambia el borde a gris
    }

    // Verifica el apellido
    if(lastName === "") {
        isValid = false;
        document.querySelector("#last-name + .form-alert").style.display = "block"; // Muestra la alerta
        document.querySelector("#last-name").style.border = "1px solid var(--red)"; // Cambia el borde a rojo
    } else if (containsSpecialCharacters(lastName)) {
        isValid = false;
        document.querySelector("#last-name + .form-alert").textContent = "Enter a valid name"; // Mensaje de error
        document.querySelector("#last-name + .form-alert").style.display = "block"; // Muestra la alerta
        document.querySelector("#last-name").style.border = "1px solid var(--red)"; // Cambia el borde a rojo
    } else {
        document.querySelector("#last-name + .form-alert").style.display = "none"; // Oculta la alerta
        document.querySelector("#last-name").style.border = "1px solid var(--medium-grey)"; // Cambia el borde a gris
    }

    // Verifica si el email es válido
    if(!isValidEmail(email)) {
        isValid = false;
        document.querySelector("#email + .form-alert").style.display = "block"; // Muestra la alerta
        document.querySelector("#email").style.border = "1px solid var(--red)"; // Cambia el borde a rojo
    } else {
        document.querySelector("#email + .form-alert").style.display = "none"; // Oculta la alerta
        document.querySelector("#email").style.border = "1px solid var(--medium-grey)"; // Cambia el borde a gris
    }

    // Verifica si se seleccionó un tipo de consulta
    if(!queryType) {
        isValid = false;
        document.querySelector(".radio-inputs + .form-alert").style.display = "block"; // Muestra la alerta
    } else {
        document.querySelector(".radio-inputs + .form-alert").style.display = "none"; // Oculta la alerta
    }

  // Verifica si el mensaje está vacío
  if(message === "") {
    isValid = false;
    document.querySelector("#message + .form-alert").style.display = "block"; // Muestra la alerta
    document.querySelector("#message").style.border = "1px solid var(--red)"; // Cambia el borde a rojo
} else {
    document.querySelector("#message + .form-alert").style.display = "none"; // Oculta la alerta
    document.querySelector("#message").style.border = "1px solid var(--medium-grey)"; // Cambia el borde a gris
}

// Verifica si se ha dado el consentimiento
if(!consent) {
    isValid = false;
    formAlert[5].classList.add("form-error"); // Añade la clase de error
} else {
    formAlert[5].classList.remove("form-error"); // Elimina la clase de error
}

// Si el formulario es válido, muestra el mensaje de éxito y reinicia el formulario
if(isValid) {
    successMessage.classList.add("active"); // Muestra el mensaje de éxito
    form.reset(); // Reinicia el formulario
    setTimeout(function() {
        location.reload(); // Recarga la página después de 4 segundos
    }, 4000);
}
});

// Función para verificar si una cadena contiene caracteres especiales
function containsSpecialCharacters(str) {
const specialCharRegex = /[^\w\s]/gi;
return specialCharRegex.test(str);
}

// Función para verificar si un email es válido
function isValidEmail(email) {
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
