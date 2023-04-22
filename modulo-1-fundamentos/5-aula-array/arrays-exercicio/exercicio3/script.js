//Exercício 1
const arrayNumeros = [15, 72, 60, 33, 24, 12];

const arrayStrings = ["copa", "brasil", "hexa", "campeão"];

const arrayTiposDif = ["seleção", 6, true];

// Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

const arrayNumerosCopia = arrayNumeros.slice();
const arrayStringsCopia = arrayStrings.slice();
const arrayTiposDifCopia = arrayTiposDif.slice();

// - Adicione um item `number` ao início do primeiro array. Utilize `console.log()` para exibir o original e a cópia;

arrayNumerosCopia.unshift(6);

console.log("Original", arrayNumeros);

console.log("Cópia", arrayNumerosCopia);

// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;

arrayStringsCopia.pop();

console.log("Original", arrayStrings);

console.log("Cópia", arrayStringsCopia);

// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;

arrayTiposDifCopia.splice(1, 1);

console.log("Original", arrayTiposDif);

console.log("Cópia", arrayTiposDifCopia);
