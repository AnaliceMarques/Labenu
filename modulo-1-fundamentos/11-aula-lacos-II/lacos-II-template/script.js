const filmes = [
  {
    titulo: "O Auto da Compadecida",
    ano: 2000,
    diretor: "Guel Arraes",
    elenco: [
      "Selton Mello",
      "Mateus Nachtergaele",
      "Marco Nanini",
      "Fernanda Montenegro",
    ],
  },
  {
    titulo: "Carandiru",
    ano: 2001,
    diretor: "Hector Babenco",
    elenco: [
      "Wagner Moura",
      "José Carlos Vasconcelos",
      "Ailton Graça",
      "Caio Blat",
    ],
  },
  {
    titulo: "Aquarius",
    ano: 2012,
    diretor: "Kléber Mendonça Filho",
    elenco: [
      "Sônia Braga",
      "Humberto Carrão",
      "Maeve Jinkings",
      "Bárbara Colen",
    ],
  },
];

// escreva seu código abaixo 👇🏻

for (let i = 0; i < filmes.length; i++) {
  console.log(
    `Filme ${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`
  );
  console.log(`Elenco:`);
  for (let j = 0; j < filmes[i].elenco.length; j++) {
    console.log(`Ator ${j + 1}: ${filmes[i].elenco[j]}`);
  }
  console.log(`\n`);
}

//Utilizando o for...in e for...of

for (let indice in filmes) {
  console.log(
    `Filme ${filmes[indice].titulo}, de ${filmes[indice].ano}, dirigido por ${filmes[indice].diretor}`
  );
  console.log(`Elenco:`);
  for (let j of filmes[indice].elenco) {
    console.log(`Ator ${+filmes[indice].elenco.indexOf(j) + 1}: ${j}`);
  }
  console.log(`\n`);
}
