const paragrafo = document.getElementById("paragrafo");
paragrafo.innerHTML;
// console.log(paragrafo);
// console.log(paragrafo.innerHTML);

const input = document.getElementById("texto");

const exibeValor = () => {
  console.log(input.value);
};

const novoParagrafo = () => {
  paragrafo.innerHTML = input.value;
};
