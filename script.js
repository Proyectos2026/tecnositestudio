// Esperar a que el DOM cargue
document.addEventListener('DOMContentLoaded', function () {

  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  if (!form) {
    console.error('Formulario contactForm no encontrado');
    return;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // 🔥 Evita recarga

    status.textContent = 'Enviando mensaje...';

    emailjs.send(
      'service_rqt12xw', 
      'template_lvpuztp',
      {
        from_name: form.name.value,
        reply_to: form.email.value,
        message: form.message.value
      }
    )
    .then(function () {
      status.textContent = 'Mensaje enviado correctamente ✅';
      form.reset();
    })
    .catch(function (error) {
      console.error('EmailJS Error:', error);
      status.textContent = 'Error al enviar el mensaje ❌';
    });
  });

});