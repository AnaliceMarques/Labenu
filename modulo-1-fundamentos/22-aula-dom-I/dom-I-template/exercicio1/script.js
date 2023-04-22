const sapo = document.getElementById("sapo");

console.log(sapo);
console.log(sapo.innerHTML);

sapo.innerHTML = "O sapo não lava o pé";
console.log(sapo.innerHTML);

const poema = document.getElementById("poema");
poema.innerHTML += " evidências";

const sabedoria = document.getElementById("sabedoria");
sabedoria.innerHTML = "Mais vale um pássaro na mão do que dois voando";

const borboleta = (document.getElementById("borboleta").innerHTML +=
  " pica-pau");

const roberto = document.getElementById("roberto");
roberto.innerHTML += " vivi";
console.log(roberto.innerHTML);
