const numero = +prompt("Digite um número para verificarmos a sua tabuda");

const tabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(`Tabuada do número ${numero}:`);

for (let valor in tabuada) {
  let multiplicacao = numero * tabuada[valor];
  console.log(`${numero} x ${tabuada[valor]} = ${multiplicacao}`);
}
