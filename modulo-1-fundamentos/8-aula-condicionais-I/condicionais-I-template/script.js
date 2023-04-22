//Prática guiada 1
const booleano1 = false;
const booleano2 = true;

// if (booleano1) {
//   alert("booleano1 é verdadeiro");
// } else {
//   alert("booleano1 é falso");
// }

//Prática guiada 2
const booleano3 = true;

if (booleano1 === booleano2) {
  alert("1 e 2 são iguais");
} else if (booleano2 === booleano3) {
  alert("2 e 3 são iguais");
} else if (booleano1 === booleano3) {
  alert("1 e 3 são iguais");
} else {
  alert("valores diferentes");
}

//Prática guiada 3

const idade = 18; //Na condicional é bom começar pelas condições facultativos

if (idade >= 16 && idade < 18) {
  alert("facultativo");
} else if (idade >= 60) {
  alert("facultativo idoso");
} else if (idade >= 18) {
  alert("voto obrigatório");
} else if (idade < 16) {
  alert("não pode votar");
} else {
  alert("valor inválido");
}

//Exercício de Fixação

const media = 0;

if (media >= 5) {
  console.log("Você foi aprovado.");
} else if (media >= 3) {
  console.log("Você está de recuperação");
} else if (media < 3) {
  console.log("Você foi reprovado.");
} else {
  console.log("Dado inválido.");
}
