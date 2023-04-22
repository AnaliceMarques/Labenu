const jogadoresBrasileiros = [
  "Pelé",
  "Ronaldo",
  "Ronaldinho",
  "Romário",
  "Neymar",
];

for (let nome of jogadoresBrasileiros) {
  console.log(`${+jogadoresBrasileiros.indexOf(nome) + 1} - ${nome}`);
}
