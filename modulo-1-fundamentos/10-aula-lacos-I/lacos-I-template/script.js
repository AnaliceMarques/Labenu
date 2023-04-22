//While

// Vamos criar um sistema em que a pessoa será solicitada a inserir vários números, um após o outro.

// Quando digitar o número '0', devemos parar de solicitar novos inputs e imprimir no console a soma de todos os números indicados.

// Ex.: Vamos supor que ele coloque:  10, 3, 50, 7, 0.
// O resultado deve ser: 70

/*
let numero = Number(prompt("Digite um número")); //Não pode ser const, pois o valor vai estar variando.

let resultadoSoma = 0;

while (numero !== 0) {
  resultadoSoma = resultadoSoma + numero;
  numero = +prompt("Digite um número"); //O + antes do prompt já transforma para Number
}
console.log(resultadoSoma);
*/

//For

// Vamos escrever um programa que recebe um número por input de usuário.
// Esse programa deve escrever os números de 0 até o valor que foi digitado pela pessoa.
// Para isso, vamos utilizar um laço for que roda por X vezes, onde X é o número digitado.

/*
let num = +prompt("Digite um número");
//i++ é a mesma coisa que i+1
for (let i = 0; i <= num; i++) {
  console.log(i);
}
*/

//For com arrays

// Vamos criar um array com 7 números, e utilizar um for para percorrer os índices deste array, imprimindo no console a cada linha:
// “O número do índice ${indice} é ${numero[indice]}”

/*
const listaNumeros = [5, 3, 8, 5, 1, 6, 9];

for (let i = 0; i < listaNumeros.length; i++) {
  console.log(`O número do índice ${i} é ${listaNumeros[i]}`);
}
*/

//Exercício de Fixação

//1
let usuario = prompt(
  "Qual o seu tipo de usúario? \nDigite A para administrador; \nDigite B para usuário comum; e \nDigite C para usuário assinante"
).toUpperCase();

while (usuario !== "A") {
  console.log("Acesso negado.");
  usuario = prompt(
    "Qual o seu tipo de usúario? \nDigite A para administrador; \nDigite B para usuário comum; e \nDigite C para usuário assinante"
  ).toUpperCase();
}

console.log("Boas-vindas, admin!");

//2
const tabuada = 2;
console.log(`Tabuada de ${tabuada}:`);
for (let i = 0; i <= 10; i++) {
  console.log(`${tabuada} x ${i} = ${tabuada * i}`);
}
console.log("Fim!");

//3
const arrayString = ["Hoje", "tem", "jogo", "do", "Brasil!"];

for (i = 0; i < arrayString.length; i++) {
  console.log(arrayString[i].toUpperCase());
}
