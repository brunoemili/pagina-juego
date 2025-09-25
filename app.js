// Año dinámico
document.getElementById("year").textContent = new Date().getFullYear();

// Validación del formulario
const form = document.getElementById("contact-form");
const err = {
  name: document.getElementById("err-name"),
  email: document.getElementById("err-email"),
  message: document.getElementById("err-message")
};
const okMsg = document.getElementById("ok-msg");

function validateEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
}

form.addEventListener("submit", e => {
  e.preventDefault();
  okMsg.style.display = "none";

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  let valid = true;

  if (name.length < 2) { err.name.style.display = "block"; valid = false; }
  else { err.name.style.display = "none"; }

  if (!validateEmail(email)) { err.email.style.display = "block"; valid = false; }
  else { err.email.style.display = "none"; }

  if (message.length < 10) { err.message.style.display = "block"; valid = false; }
  else { err.message.style.display = "none"; }

  if (valid) {
    form.reset();
    okMsg.style.display = "block";
  }
});
