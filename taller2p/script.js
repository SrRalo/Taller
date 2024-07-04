const formulario = document.getElementById('clienteForm');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const edad = parseInt(document.getElementById('edad').value);
    const correo = document.getElementById('correo').value.trim();
    const telefono = document.getElementById('telefono').value.trim();

    // Validaciones
    if (nombre === '') {
        alert('El campo "Nombre" es obligatorio.');
        return;
    }

    if (apellido === '') {
        alert('El campo "Apellido" es obligatorio.');
        return;
    }

    if (isNaN(edad) || edad < 18) {
        alert('La edad debe ser un número mayor o igual a 18.');
        return;
    }

    if (!/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correo)) {
        alert('El correo electrónico no es válido.');
        return;
    }

    if (!/^[\d-+() ]+$/.test(telefono)) {
        alert('El número de teléfono no es válido.');
        return;
    }

    // Almacenar datos en local storage
    const datosCliente = {
        nombre,
        apellido,
        edad,
        correo,
        telefono
    };

    localStorage.setItem('datosCliente', JSON.stringify(datosCliente));

    // Enviar formulario (opcional)
    // Puedes comentar esta línea si no deseas enviar el formulario
    // formulario.submit();

    alert('¡Formulario enviado correctamente!');
});
