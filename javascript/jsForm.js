document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const asunto = document.getElementById('asunto').value;
    const message = document.getElementById('message').value;

    const email = "cristdc05@gmail.com";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(message + "\n\nAtentamente,\n" + name)}`;

    window.location.href = mailtoLink;

    alert(`Gracias ${name}, hemos recibido tu mensaje.`);
});
