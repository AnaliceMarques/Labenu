const nomeDoUsuario = prompt(`Qual é o seu nome?`);
const emailDoUsuario = prompt(`Qual é o seu e-mail?`);

const frase = `O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Boas vindas, ${nomeDoUsuario}!
Seu nome tem ${nomeDoUsuario.length} caracteres`;

console.log(frase);

const novaFrase = frase.replaceAll(`r`, "x"); //Faz diferença se a letra está maiúscula ou minúscula, e se tem ou não acento.

console.log(novaFrase);

console.log(
  `O e-mail ${emailDoUsuario} tem @? ${emailDoUsuario.includes(`@`)}`
);
