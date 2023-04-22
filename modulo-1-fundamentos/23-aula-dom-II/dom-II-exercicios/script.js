//Exercício 1
/*
const container = document.getElementById("container");

const adicionaItem = (event) => {
  const novoItem = document.createElement("article");
  novoItem.innerHTML = "Funcionou";
  container.appendChild(novoItem);
};
*/

//Exercício 2

const container = document.getElementById("container");

const adicionaItem = (event) => {
  const novoItem = document.createElement("article");
  novoItem.setAttribute("class", "item");
  novoItem.setAttribute("onclick", "removeItem(event)");
  container.appendChild(novoItem);
};

//Exercício 3

const removeItem = (event) => {
  console.log(event.target);
  event.target.remove();
};

//Pode usar o lista.removechild(event.target)
