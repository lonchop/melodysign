// Elementos del DOM que se han seleccionado.
const $form = document.getElementById("form");
const $name = document.getElementById("name");
const $email = document.getElementById("email");
const $error = document.getElementById("error");
const $modal = document.getElementById("modal");
const $close = document.getElementById("close");

// Este evento se activa cuando se envía el formulario.
$form.addEventListener("submit", sendEmail);

// Este evento se activa cuando se hace click en el botón "Close" del modal.
$close.addEventListener("click", () => {
  $modal.classList.add("opacity-0");
  $modal.classList.remove("opacity-100");
  $modal.classList.add("invisible");
  $modal.classList.remove("visible");
});

// Esta función se encarga de enviar el correo electrónico.
async function sendEmail(event) {
  // Evita que el formulario se envíe de manera predeterminada y recargue la pagina.
  event.preventDefault();

  // Verifica si los campos "Name" y "Email" tienen algún valor.
  if (event.target[0].value.length > 0 && event.target[1].value.length > 0) {
    // Crea una nueva instancia de FormData y asigna el formulario y su método.
    const form = new FormData(this);
    const response = await fetch(this.action, {
      method: this.method,
      body: form,
      headers: {
        Accept: "application/json",
      },
    });
    // Si la respuesta es correcta.
    if (response.ok) {
      // Resetea el formulario, oculta el mensaje de error y muestra el modal.
      this.reset();
      $name.style.border = "none";
      $email.style.border = "none";
      $error.style.display = "none";
      $modal.classList.add("opacity-100");
      $modal.classList.remove("opacity-0");
      $modal.classList.add("visible");
      $modal.classList.remove("invisible");

    }

    // Si los campos "Name" y "Email" no tienen algún valor, entra aqui.
  } else {
    // Si el campo "Name" está vacío, muestra el mensaje de error y añade un borde rojo al campo "Name".
    if (event.target[0].value.length === 0) {
      $error.style.display = "block";
      $name.style.border = "2px solid #e51a4c";
    } else {
      $name.style.border = "2px solid transparent";
    }

    // Si el campo "Email" está vacío, muestra el mensaje de error y añade un borde rojo al campo "Email".
    if (event.target[1].value.length === 0) {
      $error.style.display = "block";
      $email.style.border = "2px solid #e51a4c";
    } else {
      $email.style.border = "2px solid transparent";
    }
  }
}
