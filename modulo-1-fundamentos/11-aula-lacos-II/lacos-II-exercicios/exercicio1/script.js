const array = [
  [27, 4, 20, 13, 14],
  [11, 15, 12, 8, 9],
  [5, 5, 12, 16, 4],
  [20, 33, 11, 12, 19],
  [3, 3, 4, 5, 10],
];

//Considerando que cada lista dentro da lista "array" corresponde a um jogador.

for (let i = 0; i < array.length; i++) {
  console.log(`Jogador ${i + 1}:`);
  let soma = 0;
  for (let j = 0; j < array[i].length; j++) {
    console.log(`${array[i][j]} gols na temporada ${j + 1}`);
    soma += array[i][j];
  }
  console.log(`Total de gols:${soma}`);
  console.log(`\n`);
}
