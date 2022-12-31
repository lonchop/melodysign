const $form = document.getElementById("form");
const $name = document.getElementById("name");
const $email = document.getElementById("email");
const $alert = document.getElementById("alert");

$form.addEventListener("submit", sendEmail);

async function sendEmail(event) {
  event.preventDefault();

  if (event.target[0].value.length > 0 && event.target[1].value.length > 0) {
    const form = new FormData(this);
    const response = await fetch(this.action, {
      method: this.method,
      body: form,
      headers: {
        Accept: "application/json",
      },
    });
    if (response.ok) {
      this.reset();
      alert("Thank you for contacting MelodySign, I will write to you soon.");
      $name.style.border = "none";
      $email.style.border = "none";
      $alert.style.display = "none";
    }
  } else {
    if (event.target[0].value.length === 0) {
      $alert.style.display = "block";
      $name.style.border = "2px solid #e51a4c";
    } else {
      $name.style.border = "2px solid transparent";
    }
    if (event.target[1].value.length === 0) {
      $alert.style.display = "block";
      $email.style.border = "2px solid #e51a4c";
    } else {
      $email.style.border = "2px solid transparent";
    }
  }
}
