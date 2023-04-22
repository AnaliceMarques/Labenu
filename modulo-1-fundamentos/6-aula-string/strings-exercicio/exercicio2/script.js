const minhaString =
  "Eu não sou supersticioso, mas sou um pouco ________.      ";

// A partir dela, execute os passos abaixo:

// a) Remova o excesso de espaços no final da string;
// b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;

console.log(minhaString);
console.log(minhaString.length);

minhaString.trimEnd();
console.log(minhaString);
console.log(minhaString.length); //Não funciona se eu não atribuir uma nova variavel, a quantidade de caracteres permanece a mesma.

const minhaNovaString = minhaString.trimEnd();
console.log(minhaNovaString);
console.log(minhaNovaString.length);

console.log(minhaString);
console.log(minhaString.length); //Para String eu não preciso fazer a cópia com slice().

// c) Substitua os traços `________` por “sticioso”.

console.log(minhaNovaString.replace("________", `"sticioso"`));

const minhaNovaStringSub = minhaNovaString.replace("________", `"sticioso"`);

console.log(minhaNovaStringSub);
