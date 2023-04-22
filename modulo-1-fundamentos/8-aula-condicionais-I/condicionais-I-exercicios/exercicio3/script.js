const nacionalidadeUsuario = prompt(
  "Escreva aqui sua nacionalidade?"
).toLowerCase();

const verificaNacionalidade = (nacionalidade) => {
  if (nacionalidade === "brasileira") {
    console.log(nacionalidade);
  } else if (nacionalidade === "argentina") {
    console.log(nacionalidade);
  } else if (nacionalidade === "uruguaia") {
    console.log(nacionalidade);
  } else if (nacionalidade === "chilena") {
    console.log(nacionalidade);
  } else if (nacionalidade === "colombiana") {
    console.log(nacionalidade);
  } else {
    console.log("Nacionalidade não encontrada.");
  }
};

verificaNacionalidade(nacionalidadeUsuario);

//Poderia fazer utilizando "ou", mas está retornando todas as nacionalidades, não tá lendo Nacionalidade não encontrada.

if (
  nacionalidadeUsuario == "brasileira" ||
  "argentina" ||
  "uruguaia" ||
  "chilena" ||
  "colombiana"
) {
  console.log("Sua nacionalidade é", nacionalidadeUsuario);
} else {
  console.log("Nacionalidade não encontrada");
}
