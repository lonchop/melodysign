const $form = document.getElementById("form");
const $buttonMailto = document.getElementById("mailto");

$form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      Accept: "application/json",
    },
  });
  if (response.ok) {
    $form.reset();
    alert("Gracias por contatarme te escribire pronto");
  } else {
    $buttonMailto.setAttribute(
      "href",
      `mailto:pewer18@gmail.com?subject=${form.get("name")}&body=${form.get(
        "email"
      )}`);
    $buttonMailto.click();
  }
}
