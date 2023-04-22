// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

const sacolao = [];

// a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades:

// ```jsx
// nome: string;
// preco: number;
// disponibilidade: boolean;
// ```

const objeto1 = {
  nome: "banana",
  preco: 2.0,
  disponibilidade: true,
};

const objeto2 = {
  nome: "melancia",
  preco: 10.0,
  disponibilidade: false,
};

const objeto3 = {
  nome: "abacate",
  preco: 7.0,
  disponibilidade: true,
};

// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**

sacolao.push(objeto1, objeto2, objeto3);

// c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**

console.log(sacolao);
