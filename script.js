// script.js
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_rqt12xw",
    "template_kxyigl9",
    this,
    "PUBLIC_KEY"
  ).then(() => {
    document.getElementById("formStatus").innerText =
      "Mensaje enviado correctamente ✅";
    this.reset();
  }).catch(() => {
    document.getElementById("formStatus").innerText =
      "Error al enviar el mensaje ❌";
  });
});