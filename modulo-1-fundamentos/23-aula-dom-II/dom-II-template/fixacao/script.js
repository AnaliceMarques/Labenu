const lista = document.getElementById("lista");

const itemInput = document.getElementById("meu-input");

const insereItem = (event) => {
  const novoItem = document.createElement("li");
  novoItem.innerHTML = itemInput.value;
  lista.appendChild(novoItem);
  itemInput.value = "";
};
