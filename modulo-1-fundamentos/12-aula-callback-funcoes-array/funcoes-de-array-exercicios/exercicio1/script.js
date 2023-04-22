const objetoExemplo = {
  nome: "astrodev",
  profissao: "Dev das estrelas",
  username: "astrodev_labenu",
  senha: "melhorDeTodos",
};

function deixarValorEmCaixaAlta(objeto) {
  const novoObjeto = { ...objeto };

  for (let chave in objeto) {
    let valor = objeto[chave];
    console.log(`${chave}: ${valor.toUpperCase()}`);
  }
}

function colocarTextoCorrido(objeto) {}

deixarValorEmCaixaAlta(objetoExemplo);
