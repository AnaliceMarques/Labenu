console.log(`[Array]`);

// Vamos criar alguns arrays, e refletir a respeito.
// Crie um array com 3 itens do tipo String
console.log(1);

const arrayDeStrings = ["Analice", "Maria", "Isabella"];
console.log(arrayDeStrings);
console.table(arrayDeStrings);

// Crie um array com 3 itens do tipo Number
console.log(2);

const arrayDeNumber = [28, 55, 4];
console.table(arrayDeNumber);

// Crie um array com uma String, um número e um booleano;
console.log(3);

const copa = "copa do mundo";
const hexa = 6;
const anoDaCopa = true;

console.log([copa, hexa, anoDaCopa]);
console.table([copa, hexa, anoDaCopa]);

console.log(["copa", 6, 6 > 7]);

const arrayVariado = [copa, hexa, anoDaCopa];

// Crie um array com apenas um valor. Um número.
console.log(4);

const arrayItemUnico = [6];
console.log(arrayItemUnico);

// Crie um array sem nenhum valor dentro.
console.log(5);

const arrayVazio = [];
console.log(arrayVazio);

// Vamos tentar acessar índices específicos dos arrays da última prática.

// Cheque o length do primeiro array. O que acontece se tentarmos acessar o índice 3 deste array?

console.log(arrayDeStrings.length);
console.log(arrayDeStrings[3]);

// Verifique se o terceiro array inclui cada um dos itens;

console.log(arrayVariado.includes(copa));
console.log(arrayVariado.includes("copa do mundo"));
console.log(arrayVariado.includes(hexa));
console.log(arrayVariado.includes(6));
console.log(arrayVariado.includes(anoDaCopa));
console.log(arrayVariado.includes(true));

const busca = "copa do mundo";
console.log(arrayVariado.includes(busca)); //Ele consegue pesquisar o item que está dentro de uma variável, mesmo que essa variável não esteja na lista

// No quarto array, imprima o valor do único item. Observe qual o seu índice, e imprima seu tamanho.

console.log(arrayItemUnico[0]);
console.log(arrayItemUnico.indexOf(6)); //Com o indexOf só podems buscar a posição de um item por vez

const buscaArray = 6; //Pode fazer usando variável
console.log(arrayItemUnico.indexOf(buscaArray));

console.log(arrayItemUnico.indexOf(10)); //Como o 10 não existe nessa lista ele vai imprimir -1

// Crie uma cópia do primeiro array, utilizando a atribuição com sinal de igual.

const novoArrayCopia = arrayDeStrings;
console.log("Array de strings", arrayDeStrings);
console.log("Array de copia", novoArrayCopia);

// Faça push() de uma nova string no array copiado

novoArrayCopia.push("Labenu");

// Imprima os dois arrays. Há diferença?

console.log("Array de copia");
console.table(novoArrayCopia);
console.log("Array de strings");
console.table(arrayDeStrings); //Ele relaciona os dois arrays, mesmo o original não estando recebendo o cópia.

// Como podemos ajustar?
/*Podemos usar o slice(). Se colocarmos um número dentro do parentes é a partir dessa posição que ele vai copiar os itens da lista, se colocar num,num2, ele copia até a posição num2, mas não copia o item que está na posição num2. Se usar negativo, ele vai copiar os itens de trás para frente. */

const arrayCopiaCorreta = arrayDeStrings.slice();
arrayCopiaCorreta.push("Sobrinhas");
console.table(arrayCopiaCorreta);

arrayDeStrings.push("Hexa");
console.table(arrayDeStrings);

// Com o array copiado corretamente, remova os itens dos índices 2 e 3 do array copiado.

arrayCopiaCorreta.splice(2, 2); //Remove a partir do indice 2, dois números, incluindo o da posição indicada.
console.table(arrayCopiaCorreta);
