
const cadastro = (nome,anoNascimento,anoAtual) => {
    const maiorIdade = (anoAtual - anoNascimento) >= 18

    console.log(`${nome} é maior de idade? ${maiorIdade}`)

}

cadastro("Analice",1994,2022)
cadastro("Maria Alice",2022,2022)