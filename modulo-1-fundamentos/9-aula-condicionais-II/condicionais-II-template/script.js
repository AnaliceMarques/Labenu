//if aninhados

let idadeDependente = 15;

//idadeDependente >= 13
//idadeDependente <= 17

if (idadeDependente >= 13) {
  if (idadeDependente <= 17) {
    console.log("Pode ter o cartão de dependente");
  } else {
    console.log("O limite de idade é 17 anos");
  }
} else {
  console.log(
    "Para ter o cartão o dependente precisa ter entre 13 e 17 anos. Consulte outras possibilidades do Labank"
  );
}

//usando operadores lógicos

if (idadeDependente >= 13 && idadeDependente <= 17) {
  console.log("Pode ter o cartão de dependente");
} else {
  console.log(
    "Para ter o cartão o dependente precisa ter entre 13 e 17 anos. Consulte outras possibilidades do Labank"
  );
}

//ternário

let chuva = true; //usando booleano

chuva ? console.log("leva sombrinha") : console.log("Pode deixar a sombrinha");

let chovendo = "chovendo"; //usando string

chovendo === "chovendo"
  ? console.log("leva sombrinha")
  : console.log("Pode deixar a sombrinha");

idadeDependente === 13
  ? console.log("pode ter cartão")
  : console.log("consulte outras opções");

//Switch-case

let escolhaUsuario = Number(
  prompt(`Digite um número de 1 a 4 para escolher o cartão
  1-Cartão Fácil
  2-Cartão Black
  3-Cartão Platinum
  4-Cartão Master Gold`)
);

let cartao;

switch (escolhaUsuario) {
  case 1:
    cartao = "Fácil";
    break;
  case 2:
    cartao = "Black";
    break;
  case 3:
    cartao = "Platinum";
    break;
  case 4:
    cartao = "Master Gold";
    break;
  default:
    cartao = "Escolha umas das quatro opções disponíveis";
    break;
}

console.log("Cartão", cartao);

//Exercício de Fixação

const numero = Number(prompt("Digite um número."));

if (numero % 2 === 0) {
  if (numero % 3 === 0) {
    console.log("O número é divisível por 3");
  } else {
    console.log("O numero não é divisível por 3, mas é divisível por 2");
  }
} else {
  console.log("O número não é divisível por 2");
}

if (numero % 2 === 0 && numero % 3 === 0) {
  //   numero === 30 ? console.log("UFA ACERTEI!") : console.log("não foi dessa vez");
  switch (numero) {
    case 6:
      console.log("O número 6 é divisível por 2 e 3");
      break;
    case 12:
      console.log("O número 12 é divisível por 2 e 3");
      break;
    case 18:
      console.log("O número 18 é divisível por 2 e 3");
      break;
    case 24:
      console.log("O número 24 é divisível por 2 e 3");
      break;
    case 30:
      console.log("O número 30 é divisível por 2 e 3");
      break;
    default:
      console.log("O número é maior que 30 ou é menor que 6");
      break;
  }
  console.log("O número é divisível por 2 e por 3");
} else {
  console.log("O número não é divisível por 2 e por 3");
}
