console.log(`Strings`);

//Prática Guiada 1

// console.log('A cor favorita de',nome,'é',cor)

const nome = prompt("Qual é o seu nome?");
const cor = prompt("Qual é a sua cor favorita?");

const fraseConcatenada = "A cor favorita de " + nome + " é " + cor;

//Lembrar de acrescentar os espaços dentro das aspas.

console.log(fraseConcatenada);

const fraseTemplateString = `A cor favorita de ${nome} é ${cor}`;

console.log(fraseTemplateString);

const citacao = prompt("Qual é a sua citação favotita?");

//Formas de colocar uma frase entre aspas

console.log('"' + citacao + '"');
console.log(`"${citacao}"`);
// console.log("\"",citacao,"\""); utilizando \"

// const fraseConcatenadaAlterada = "A cor favorita de " + nome + " é " + cor + ", minha citação favorita é \"" + citacao + "\""

//Formas de quebrar linha (com enter ou \n)
console.log(`Nome: ${nome}
Cor favorita: ${cor}`);
console.log(`Nome: ${nome} \nCor favorita: ${cor}`);
console.log("Nome: ", nome, "\nCor favorita: ", cor);
// console.log('Nome: ', nome, '\nCor favorita: ', cor);

//Manipulando a String

const nomeMaiusculo = nome.toUpperCase();

console.log(`O nome ${nomeMaiusculo} tem ${nome.length} caracteres`);

console.log(
  `${nomeMaiusculo} possui a letra A? ${nomeMaiusculo.includes(`A`)}`
); //não reconhece se tiver acento e faz diferença ser maiúscula ou minúscula.
