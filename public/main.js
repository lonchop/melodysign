const $form = document.getElementById("form");
const $name = document.getElementById("name");
const $email = document.getElementById("email");
const $error = document.getElementById("error");
const $modal = document.getElementById("modal");
const $close = document.getElementById("close");

$form.addEventListener("submit", sendEmail);

$close.addEventListener("click", () => {
  $modal.classList.add("hidden");
  $modal.classList.remove("flex");
});

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
      $name.style.border = "none";
      $email.style.border = "none";
      $error.style.display = "none";
      $modal.classList.add("flex");
      $modal.classList.remove("hidden");
      // setTimeout(function () {
      //   $modal.classList.add("hidden");
      //   $modal.classList.remove("flex");
      // }, 3000);
    }
  } else {
    if (event.target[0].value.length === 0) {
      $error.style.display = "block";
      $name.style.border = "2px solid #e51a4c";
    } else {
      $name.style.border = "2px solid transparent";
    }
    if (event.target[1].value.length === 0) {
      $error.style.display = "block";
      $email.style.border = "2px solid #e51a4c";
    } else {
      $email.style.border = "2px solid transparent";
    }
  }
}
