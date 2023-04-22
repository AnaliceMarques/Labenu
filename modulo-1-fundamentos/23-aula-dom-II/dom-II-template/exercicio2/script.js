const botaoEscondeSenha = document.getElementById("password");

const escondeSenha = (event) => {
  event.preventDefault();
  botaoEscondeSenha.setAttribute("type", "password");
};

const form = document.querySelector(".light");
form.classList.remove("lignt");
form.classList.add("dark");
