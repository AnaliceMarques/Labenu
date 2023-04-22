let comerCoxinha = prompt(
  'Deseja comer mais coxinhas? \nResponda "S" para SIM e "N" para NÃO.'
).toUpperCase();

let conta = 2.5; //Considerando que a pessoa já comeu uma e por isso vai perguntar se vai comer mais.

while (comerCoxinha === "S") {
  conta += 2.5;
  comerCoxinha = prompt(
    'Deseja comer mais coxinhas? \nResponda "S" para SIM e "N" para NÃO.'
  ).toUpperCase();
}

console.log(`O valor total da sua conta é R$${conta.toFixed(2)}.`);
