function verificaEscolaridade(valorIdade, booleanEnsMed, booleanFaculdade) {
  if (valorIdade >= 18) {
    console.log("A pessoa é maior de idade.");
  } else {
    console.log("A pessoa é menor de idade.");
  }

  if (booleanEnsMed) {
    console.log("A pessoa terminou o ensino médio.");
  } else {
    console.log("A pessoa não terminou o ensino médio.");
  }

  if (!booleanFaculdade) {
    console.log("A pessoa não está cursando faculdade.");
  } else {
    console.log("A pessoa está cursando faculdade.");
  }
}

let idade = Number(prompt("Qual a sua idade?"));
let terminouEnsinoMedio = confirm(
  'Você já terminou o ensino médio? \nAperte "Ok" para sim e "Cancelar" para não.'
);
let cursandoFaculdade = confirm(
  `Você está cursando alguma faculdade? \nAperte "Ok" para sim e "Cancelar" para não.`
);

verificaEscolaridade(idade, terminouEnsinoMedio, cursandoFaculdade);
