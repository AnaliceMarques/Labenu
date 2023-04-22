// Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

//Exercício 1

const arrayNumeros = [15, 72, 60, 33, 24, 12];

const arrayStrings = ["copa", "brasil", "hexa", "campeão"];

const arrayTiposDif = ["seleção", 6, true];

console.log(arrayNumeros);

console.log(arrayStrings);

console.log(arrayTiposDif);

// - Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);

console.log(arrayNumeros.length);

console.log(arrayStrings.length);

console.log(arrayTiposDif.length);

// - Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;

console.log(arrayNumeros[0]);

console.log(arrayStrings[1]);

console.log(arrayTiposDif[2]);

// - Verifique se um item está incluído no primeiro array e depois no terceiro array e imprima o resultado destas verificações no console.log(). A primeira impressão deve retornar um booleano true e a segunda deve retornar um booleano false.

console.log(arrayNumeros.includes(60));

console.log(arrayTiposDif.includes(60));
