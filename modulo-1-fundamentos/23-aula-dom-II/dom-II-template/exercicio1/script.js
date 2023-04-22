const lista = document.getElementById("lista");

//criar um elemento li
//adicionar texto
//acrescentar ele na lista, um no começo e um no fim

const novoItem = document.createElement("li");
novoItem.innerHTML = "Item 0";
lista.insertAdjacentElement("afterbegin", novoItem);

const ultimoItem = document.createElement("li");
const texto = document.createTextNode("Item 5");
ultimoItem.appendChild(texto);
lista.appendChild(ultimoItem);
