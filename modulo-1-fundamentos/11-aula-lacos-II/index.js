//Aula Laços II

// Em uma escola são aplicadas 4 provas por bimestre, tendo como base o array de cada bimestre, crie um programa que mostre a média e soma das notas de cada bimestre.

// Para esse programa, considere o seguinte formato:
// bimestre1 = [ nota1, nota2, nota3, nota4 ]
// bimestre2 = [ nota1, nota2, nota3, nota4 ]
// bimestre3 = [ nota1, nota2, nota3, nota4 ]
// bimestre4 = [ nota1, nota2, nota3, nota4 ]

// notasDoAno = [bimestre1, bimestre2, bimestre3, bimestre4]

// Dica: Para percorrer array dentro de array, utilize dois laços
// Como saída o programa deve exibir uma mensagem parecida com essa:

// A soma das notas do bimestre 1 é: 40
// A média do bimestre 1 é: 10

// Exiba a mensagem para cada um dos bimestres

const bimestre1 = [10, 10, 10, 10];
const bimestre2 = [2, 3, 8, 2];
const bimestre3 = [10, 10, 7, 9];
const bimestre4 = [5, 5, 5, 5];

const notasDoAno = [bimestre1, bimestre2, bimestre3, bimestre4];

for (let i = 0; i < notasDoAno.length; i++) {
  let somaDasNotas = 0;
  let mediaDoBimestre = 0;

  for (let j = 0; j < notasDoAno[i].length; j++) {
    somaDasNotas += notasDoAno[i][j];
  }

  console.log(`A soma das notas do bimestre ${i + 1} é: ${somaDasNotas}`);

  mediaDoBimestre = somaDasNotas / notasDoAno[i].length;

  console.log(`A média das notas do bimestre ${i + 1} é: ${mediaDoBimestre}`);

  console.log(`\n`);
}

//Utilizando for...in e for...of

for (let indice in notasDoAno) {
  let somaDasNotas = 0;
  let mediaDoBimestre = 0;

  for (let valor of notasDoAno[indice]) {
    somaDasNotas += valor;
  }

  console.log(`A soma das notas do bimestre ${+indice + 1} é: ${somaDasNotas}`);

  mediaDoBimestre = somaDasNotas / notasDoAno[+indice].length;

  console.log(
    `A média das notas do bimestre ${+indice + 1} é: ${mediaDoBimestre}`
  );

  console.log(`\n`);
}
