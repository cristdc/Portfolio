// Script básico para manejar el envío del formulario
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validar los campos o enviar los datos a un servidor
    alert(`Gracias ${name}, hemos recibido tu mensaje.`);

});
